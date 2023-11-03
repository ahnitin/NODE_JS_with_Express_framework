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
    Product.findAll()
    .then((products)=>{
        res.render('admin/products',{ 
            prods: products,
            pageTitle: "All Admin PRoduct List",
            path: "/admin-product",
            })
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.postAddProduct =(req,res,next)=>{
    // console.log(req.body);
    // products.push({title: req.body.title});
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price  = req.body.price;
    Product.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
    })
    .then(result =>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    })
    
    res.redirect("/");
}

exports.getEditMyproduct = (req,res,next)=>{
    const id = req.params.id;
    Product.findByPk(id)
    .then((product)=>{
        res.render('admin/edit-product',{
            pageTitle: "Editing Product",
            path: "",
            product: product,

        })
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.saveModifiedProduct =(req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price  = req.body.price;
    const id = req.body.id;

    Product.update({
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
    },{where:{id:id}})
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err)
    })
    res.redirect("/admin/admin-product");
}

exports.removeProduct = (req,res,next)=>{
    id = req.body.id;
    console.log(id);
    Product.destroy({where:{id:id}})
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    res.redirect("/admin/admin-product");
    
}