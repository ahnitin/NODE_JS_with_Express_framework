const express = require("express");

const viewPath = require("../utils/path");
const router = express.Router();
const path = require("path");

router.get("/add-product",(req,res,next)=>{
    res.sendFile(viewPath("add-product.html"));
})

router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;