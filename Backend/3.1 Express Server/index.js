import express from "express"; 
const app = express(); // creating app using express object 

const port = 3000;


// HTTP request 
app.get("/",(req,res) => {
    res.send("Hello, world!");    // server responding  
})  
app.listen(port,() => {
    console.log(`server running on port ${port}.`);
})

