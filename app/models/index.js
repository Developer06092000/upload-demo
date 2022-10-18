const config = require("../config/config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.images = require("./image")(sequelize, Sequelize);

module.exports = db;
