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
    constructor(IncommingTitle)
    {
        this.title = IncommingTitle;
    }
    save()
    {
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
}