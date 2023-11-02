const Product = require("../models/product");
//const products = [];

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{
    pageTitle: "Add product",
    path: "/add-product",
    productCSS: true,
    activeAddProduct: true,
    })
}
exports.postAddProduct =(req,res,next)=>{
    // console.log(req.body);
    // products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

exports.getProducts =(req,res,next)=>{
    //console.log(products);
   Product.fetchAll((products)=>{
        res.render('shop',{ 
            prods: products,
            pageTitle: "Shop",
            path: "/",
            hasProducts: products.length>0,
            formCSS: true,
            productCSS: true,
            activeShop: true,
            })
    });
    
}