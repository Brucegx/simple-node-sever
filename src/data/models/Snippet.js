var connection = require('./connection');
var Sequelize = require('sequelize');

const Snippet = connection.define('snippet', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    unique: 'authorScopeName',
    allowNull: false,
  },

  scope: {
    type: Sequelize.STRING,
    unique: 'authorScopeName',
    allowNull: false,
  },

  type: {
    type: Sequelize.ENUM,
    values: [
      'wholeline',
      'inline',
    ],
    defaultValue: 'wholeline',
  },

  author: {
    type: Sequelize.STRING,
    unique: 'authorScopeName',
    allowNull: false,
  },

  keyword: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  substitution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  indexes: [
    {
      fields: [
        'author',
        'scope',
        'name',
      ],
    },
  ],

  getterMethods: {
    qualifiedName() {
      return `${this.author}/${this.scope}/${this.name}`;
    }
  },
});

module.exports = Snippet;
