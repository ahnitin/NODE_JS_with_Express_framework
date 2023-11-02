const express = require("express");
const app = express();
const BodyParser = require("body-parser");


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const path = require("path");

app.use(BodyParser.urlencoded({extended:false}))

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,"public")))

app.use("/admin",adminRoutes);

app.use(shopRoutes);

app.use("/",errorController.errorpage);

app.listen(4000);
