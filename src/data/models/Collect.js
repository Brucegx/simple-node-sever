var connection = require('./connection');
var Sequelize = require('sequelize');

const Collect = connection.define('collect', {
  collector: {
    type: Sequelize.UUID,
    primaryKey: true,
  },

  collected: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
});

module.exports = Collect;
