var connection = require('./connection');
var Sequelize = require('sequelize');

const Scope = connection.define('scope', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});

module.exports = Scope;
