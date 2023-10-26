const http  = require("http");

const express = require("express");

const app = express();

app.use("/",(req,res,next)=>{
    res.send("<h1>PAPPA ki Pari</h1>")
})

const server = http.createServer(app);
server.listen(4000);
