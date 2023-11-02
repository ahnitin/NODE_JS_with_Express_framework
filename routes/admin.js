const express = require("express");

const viewPath = require("../utils/path");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/products");



router.get("/add-product",productController.getAddProduct);

router.post("/add-product",productController.postAddProduct);

// module.exports={
//     routes : router,
//     products: products
// }
module.exports = router;
