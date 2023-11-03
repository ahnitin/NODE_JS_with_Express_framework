const Product = require("../models/product");

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',{
    pageTitle: "Add product",
    path: "/add-product",
    productCSS: true,
    activeAddProduct: true,
    })
}
exports.getAdminProducts = (req,res,next)=>{
    Product.fetchAll((products)=>{
        res.render('admin/products',{ 
            prods: products,
            pageTitle: "All Admin PRoduct List",
            path: "/admin-product",
            })
    });
}
exports.postAddProduct =(req,res,next)=>{
    // console.log(req.body);
    // products.push({title: req.body.title});
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price  = req.body.price;

    const product = new Product(null,title,description,price,imageUrl);
    product.save();
    res.redirect("/");
}

exports.getEditMyproduct = (req,res,next)=>{
    const productId = req.params.productId;
    Product.findProductById(productId,(product)=>{
    res.render('admin/edit-product',{
        pageTitle: "Editing Product",
        path: "",
        product: product,

    })
})
}
exports.saveModifiedProduct =(req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price  = req.body.price;
    const productId = req.body.productId;

    const product = new Product(productId,title,description,price,imageUrl);
    product.saveModifiedFile();
    res.redirect("/admin/admin-product");
}

exports.removeProduct = (req,res,next)=>{
    productId = req.body.productId;
    //console.log(productId)
    Product.remove(productId);
    res.redirect("/admin/admin-product");
}