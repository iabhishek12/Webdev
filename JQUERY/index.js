// first check if the jquery is ready or not 
$(document).ready(function(){
    $("h1").css("color","blue"); 
}); 

//adding classes / multiple classes 
$("h1").addClass("big-title margin-50"); 

$("button"); 



// manipulate attribute 

// $("img").attr("src")
$("img").attr("href", "https://yahoo.com"); 





// Adding EVENT listener using jquery

// normal method 
for(var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        document.querySelector("h1").style.color = "purple"; 

    }); 
}

// using jquery
$("button").click(function() {
    $("h1").css("color", "purple"); 
}); 


// keypress 
// we can also use whole document or body inplace of input
$("input").keypress(function(event) {
    console.log(event.key); 

    $("h1").text(event.key); 
    
});