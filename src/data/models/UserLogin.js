var connection = require('./connection');
var Sequelize = require('sequelize');

const UserLogin = connection.define('user_login', {
  user: {
    type: Sequelize.STRING,
    primaryKey: true,
  },

  loginType: {
    type: Sequelize.STRING,
    primaryKey: true,
  },

  key: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});

module.exports = UserLogin;
