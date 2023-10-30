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
        docTitle: "Shop"
        })
})
module.exports= router;