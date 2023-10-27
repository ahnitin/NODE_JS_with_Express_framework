const express = require("express");
const app = express();
const BodyParser = require("body-parser");


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(BodyParser.urlencoded({extended:false}))

app.use("/admin",adminRoutes);

app.use(shopRoutes);

app.use("/",(req,res,next)=>{
    res.status(404);
    res.send("<h1>PAGE NOT FOUND</h1>")
})

app.listen(4000);
