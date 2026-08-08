const express = require("express");
const app = express();


app.get("/",(req,res) => {
    res.send("Hi i'm root!");
})


app.listen(3000,() =>{
    console.log("server is listening to 3000")
})