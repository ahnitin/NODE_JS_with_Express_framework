const products =[];

module.exports = class Product{
    constructor(IncommingTitle)
    {
        this.title = IncommingTitle;
    }
    save()
    {
        products.push(this);
    }
    static fetchAll()
    {
        return products;
    }
}