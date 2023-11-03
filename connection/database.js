const Sequelize= require("sequelize").Sequelize;

// database, username, pass, options

const sequelize =  new Sequelize('express-app','root','good@123',{
    dialect: "mysql",
    host: "localhost",

})

module.exports = sequelize;