const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

const viewPath = require("../utils/path");
const path = require("path");
const admin = require("./admin");
router.get("/",productController.getProducts)
module.exports= router;