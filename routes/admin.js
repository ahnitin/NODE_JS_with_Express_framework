const express = require("express");

const viewPath = require("../utils/path");
const router = express.Router();
const path = require("path");

const products = [];

router.get("/add-product",(req,res,next)=>{
    res.sendFile(viewPath("add-product.html"));
})

router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect("/");
})

module.exports={
    routes : router,
    products: products
}
//module.exports = router;
