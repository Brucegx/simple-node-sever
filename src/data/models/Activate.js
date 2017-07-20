var connection = require('./connection');
var Sequelize = require('sequelize');

const Activate = connection.define('activate', {
  user: {
    type: Sequelize.STRING,
    primaryKey: true,
  },

  snippet: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
});

module.exports = Activate;
