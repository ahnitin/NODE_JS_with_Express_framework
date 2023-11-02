const fs = require("fs");
const path = require("path");
const pathBuild = path.join(path.dirname(require.main.filename),
        "data",
        "products.json");
const getProductsFromFiles =(cb)=>{
    fs.readFile(pathBuild,(err,data)=>{
        if(err)
        {
            cb([]);
        }
        else
        {
            cb(JSON.parse(data));
        }
        
    })
}

module.exports = class Product{
    constructor(IncommingTitle,description,price,imageUrl)
    {
        this.title = IncommingTitle;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    save()
    {
        this.productId =Math.round(Math.random() *1000 ).toString();
        getProductsFromFiles((products)=>{
            products.push(this)//this is pointing to class instance
            fs.writeFile(pathBuild, JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
        
    }
    static fetchAll(cb)
    {
        getProductsFromFiles(cb);

    }
    static findProductById(id,callback)
    {
        getProductsFromFiles((products)=>{
            const product = products.find(product=>{
                return product.productId == id;
            })
            callback(product);
        })
    }
}