const Sequelize = require("sequelize");
const sequelize = require("../connection/database");

const Product = sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    price:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    imageUrl:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Product;