var Sequelize = require('sequelize');
var { DATABASE_URL }= require('../../../config/config');

const connection = new Sequelize(DATABASE_URL);

module.exports = connection;
