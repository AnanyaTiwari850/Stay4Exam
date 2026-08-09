const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");


app.use(session({secret: "mysupersecretstring"}));

app.get("/test", (req,res) => {
    res.send("test successful");
})


app.listen(3000,() =>{
    console.log("server is listening to 3000")
})