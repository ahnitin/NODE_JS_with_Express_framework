const Product = require("../models/product");
//const products = [];



exports.getProducts =(req,res,next)=>{
    //console.log(products);
   Product.findAll()
   .then((products)=>{
        res.render('shop/product-list',{ 
            prods: products,
            pageTitle: "All Shop PRoduct List",
            path: "/products",
            })
    })
    .catch(err=>{
        console.log(err);
    })
    
}
exports.getMyProductDetails =(req,res,next)=>{
    const id = req.params.id;
    console.log(id);
    //filter the data using the product id
    Product.findByPk(id)
    .then((product)=>{
        res.render('shop/product-details',{

            pageTitle:"My product Details",
            path: "/product-details",
            productDetails: product,
        })
    })
    .catch(err=>{
        console.log(err);
    })

    
}
exports.DeleteProduct =(req,res,next)=>{
    const id = req.params.id;
    console.log(id);
    res.redirect("/")
    
}
exports.getShopIndex = (req,res,next)=>{
    Product.findAll()
    .then((products)=>{
        res.render('shop/index',{ 
            prods: products,
            pageTitle: "My Shop",
            path: "/",
        })
    })
    .catch(err=>{
        console.log(err)
    })

}
exports.getMyCart = (req,res,next)=>{
 
        res.render('shop/cart',{ 
            pageTitle: "My cart",
            path: "/cart",
        })
}
exports.getCheckout = (req,res,next)=>{
 
    res.render('shop/checkout',{ 
        pageTitle: "Checkout",
        path: "/checkout",
    })
}
exports.getMyOrders = (req,res,next)=>{
 
    res.render('shop/orders',{ 
        pageTitle: "My Orders",
        path: "/orders",
    })
}