const express = require("express");
const app = express();
const BodyParser = require("body-parser");


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
app.use(BodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"public")))

app.use("/admin",adminRoutes);

app.use(shopRoutes);

app.use("/",(req,res,next)=>{
    res.status(404);
    res.sendFile(path.join(__dirname,"views","404.html"))
})

app.listen(4000);
