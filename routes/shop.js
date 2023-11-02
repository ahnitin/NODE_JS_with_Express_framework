const express = require("express");
const router = express.Router();
const productController = require("../controllers/shop");

const viewPath = require("../utils/path");
const path = require("path");
const admin = require("./admin");
router.get("/",productController.getShopIndex)

router.get("/products",productController.getProducts)
router.get("/product/:productId",productController.getMyProductDetails);
router.get("/delete/:productId",productController.DeleteProduct);
router.get("/cart",productController.getMyCart)
router.get("/checkout",productController.getCheckout)
router.get("/orders",productController.getMyOrders)
module.exports= router;