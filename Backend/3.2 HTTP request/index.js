import express from "express"; 
const app = express();  
const port = 3000; 


// HTTP req handling (for root)
app.get("/", (req,res) => {
    // console.log(req); 
    res.send("<h1>hello World!</h1>")
})

// About 
app.get("/about", (req,res) => {
    res.send("<h2>About me</h2><p>My name is Abhishek </p>"); 
})

// contact 
app.get("/contact", (req,res) => {
    res.send("<h2>Contact info</h2><p>Email: rao.abhishek@gmail.com</p>"); 
})



app.listen(port, () => {
    console.log(`server running on port ${port}`); 
})

