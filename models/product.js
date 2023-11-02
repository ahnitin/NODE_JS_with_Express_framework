const fs = require("fs");
const path = require("path");


module.exports = class Product{
    constructor(IncommingTitle)
    {
        this.title = IncommingTitle;
    }
    save()
    {
        const pathBuild = path.join(path.dirname(require.main.filename),
        "data",
        "products.json");
        fs.readFile(pathBuild,(err,data)=>{
            let products = [];
            if(!err)
            {
                products = JSON.parse(data);
            }
            products.push(this)//this is pointing to class instance
            fs.writeFile(pathBuild, JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
        
    }
    static fetchAll(cb)
    {
        const pathBuild = path.join(path.dirname(require.main.filename),
        "data",
        "products.json");

        fs.readFile(pathBuild,(err,data)=>{
            if(err)
            {
                cb([]);
            }
            cb(JSON.parse(data));
        })
    }
}