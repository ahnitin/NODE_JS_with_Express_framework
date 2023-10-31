const express = require("express");
const router = express.Router();
const adminData = require("./admin");
const viewPath = require("../utils/path");
const path = require("path");
const admin = require("./admin");
router.get("/",(req,res,next)=>{
    console.log(adminData.products);
    res.render('shop',{ 
        prods: adminData.products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: adminData.products.length>0,
        formCSS: true,
        productCSS: true,
        activeShop: true,
        })
})
module.exports= router;