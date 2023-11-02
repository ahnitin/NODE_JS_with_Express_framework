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

    const product = new Product(title,description,price,imageUrl);
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