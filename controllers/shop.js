const Product = require("../models/product");
//const products = [];



exports.getProducts =(req,res,next)=>{
    //console.log(products);
   Product.fetchAll((products)=>{
        res.render('shop/product-list',{ 
            prods: products,
            pageTitle: "All Shop PRoduct List",
            path: "/products",
            })
    });
    
}
exports.getMyProductDetails =(req,res,next)=>{
    const productId = req.params.productId;
    console.log(productId);
    //filter the data using the product id
    res.render('shop/product-details',{
        pageTitle:"My product Details",
        path: "/product-details",
    })
    
}
exports.DeleteProduct =(req,res,next)=>{
    const productId = req.params.productId;
    console.log(productId);
    res.redirect("/")
    
}
exports.getShopIndex = (req,res,next)=>{
    Product.fetchAll((products)=>{
        res.render('shop/index',{ 
            prods: products,
            pageTitle: "My Shop",
            path: "/",
        })
    });
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