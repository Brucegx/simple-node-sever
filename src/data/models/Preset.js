var connection = require('./connection');
var Sequelize = require('sequelize');

const Preset = connection.define('preset', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    unique: 'nameAuthor',
    allowNull: false,
  },

  author: {
    type: Sequelize.STRING,
    unique: 'nameAuthor',
    allowNull: false,
  },
});

module.exports = Preset;
