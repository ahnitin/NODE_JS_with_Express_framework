const products = [];

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{
    pageTitle: "Add product",
    path: "/add-product",
    productCSS: true,
    activeAddProduct: true,
    })
}
exports.postAddProduct =(req,res,next)=>{
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect("/");
}

exports.getProducts =(req,res,next)=>{
    console.log(products);
    res.render('shop',{ 
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length>0,
        formCSS: true,
        productCSS: true,
        activeShop: true,
        })
}