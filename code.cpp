#include <iostream>
#include <chrono>
#include <deque>
#include <pcap.h>
#include <arpa/inet.h>
#include <netinet/if_ether.h>
#include <netinet/ip.h>
#include <netinet/udp.h>

#define MAX_PACKETS_PER_SECOND 10
#define TIME_INTERVAL_IN_SECONDS 5

using namespace std;

int main() {
    char errbuf[PCAP_ERRBUF_SIZE];
    pcap_t *handle;
    struct bpf_program fp;
    bpf_u_int32 mask;
    bpf_u_int32 net;

    // Find the first network interface
    char* dev = pcap_lookupdev(errbuf);
    if (dev == NULL) {
        cerr << "pcap_lookupdev() failed: " << errbuf << endl;
        return 1;
    }

    // Open the network interface for packet capture
    handle = pcap_open_live(dev, BUFSIZ, 1, 1000, errbuf);
    if (handle == NULL) {
        cerr << "pcap_open_live() failed: " << errbuf << endl;
        return 1;
    }

    // Compile the BPF filter for UDP traffic
    if (pcap_compile(handle, &fp, "udp", 0, net) == -1) {
        cerr << "pcap_compile() failed: " << pcap_geterr(handle) << endl;
        return 1;
    }

    // Set the BPF filter on the network interface
    if (pcap_setfilter(handle, &fp) == -1) {
        cerr << "pcap_setfilter() failed: " << pcap_geterr(handle) << endl;
        return 1;
    }

    // Initialize the packet queue and the time interval
    deque<chrono::system_clock::time_point> packet_queue;
    chrono::seconds time_interval(TIME_INTERVAL_IN_SECONDS);

    // Start capturing packets
    while (true) {
        // Capture a packet
        struct pcap_pkthdr header;
        const u_char *packet;
        packet = pcap_next(handle, &header);
        if (packet == NULL) {
            continue;
        }

        // Parse the packet header and payload
        struct ether_header *eth_header;
        eth_header = (struct ether_header *) packet;
        if (ntohs(eth_header->ether_type) != ETHERTYPE_IP) {
            continue;
        }
        struct ip *ip_header;
        ip_header = (struct ip *) (packet + sizeof(struct ether_header));
        if (ip_header->ip_p != IPPROTO_UDP) {
            continue;
        }
        struct udphdr *udp_header;
        udp_header = (struct udphdr *) (packet + sizeof(struct ether_header) + sizeof(struct ip));

        // Add the current time to the packet queue
        packet_queue.push_back(chrono::system_clock::now());

        // Remove packets from the packet queue that are older than the time interval
        while (!packet_queue.empty() && packet_queue.front() < chrono::system_clock::now() - time_interval) {
            packet_queue.pop_front();
        }

        // Drop the packet if the number of packets in the time interval exceeds the limit
        if (packet_queue.size() > MAX_PACKETS_PER_SECOND * TIME_INTERVAL_IN_SECONDS) {
            continue;
        }

        // Process the packet
        cout << "Received UDP packet from " << inet_ntoa(ip_header->ip_src) << " to " << inet_ntoa(ip_header->ip_dst) << endl;
    }

    pcap_close(handle);
    return 0;
}
