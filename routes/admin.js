const express = require("express");

const viewPath = require("../utils/path");
const router = express.Router();
const path = require("path");
const adminController = require("../controllers/admin");



router.get("/add-product",adminController.getAddProduct);



router.get("/admin-product",adminController.getAdminProducts);

router.post("/add-product",adminController.postAddProduct);



// module.exports={
//     routes : router,
//     products: products
// }
module.exports = router;
