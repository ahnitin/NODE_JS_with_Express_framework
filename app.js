const express = require("express");
const app = express();
const BodyParser = require("body-parser");


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const path = require("path");

const sequelize = require("./connection/database");
//const { FORCE } = require("sequelize/types/index-hints");

app.use(BodyParser.urlencoded({extended:false}))

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,"public")))

app.use("/admin",adminRoutes);

app.use(shopRoutes);

app.use("/",errorController.errorpage);

sequelize
//.sync({force:true})
.sync()
.then(res =>{
    console.log("Table Created")
    app.listen(4000);
})
.catch(err=>{
    console.log(err);
})


