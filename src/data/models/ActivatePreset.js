
var connection = require('./connection');
var Sequelize = require('sequelize');

const ActivatePreset = connection.define('activate_preset', {
  user: {
    type: Sequelize.STRING,
    primaryKey: true,
  },

  preset: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
});

module.exports = ActivatePreset;
