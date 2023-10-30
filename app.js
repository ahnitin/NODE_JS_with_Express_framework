const express = require("express");
const app = express();
const BodyParser = require("body-parser");


const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
app.use(BodyParser.urlencoded({extended:false}))

app.set('view engine','pug');
app.set('views','views');

app.use(express.static(path.join(__dirname,"public")))

app.use("/admin",adminData.routes);

app.use(shopRoutes);

app.use("/",(req,res,next)=>{
    res.status(404);
    res.render('404',{
        errortitle:"Error Page"
    })
})

app.listen(4000);
