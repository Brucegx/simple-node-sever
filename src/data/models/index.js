var connection = require('./connection');
var User = require('./User');
var UserLogin = require('./UserLogin');
var Scope = require('./Scope');
var Snippet = require('./Snippet');
var Preset = require('./Preset');

// Accounts
User.hasMany(UserLogin, {
  as: 'logins',
});

// Snippet ownership
User.hasMany(Snippet, {
  as: 'snippets',
  foreignKey: 'author',
});

User.hasMany(Preset, {
  as: 'presets',
  foreignKey: 'author',
});

Snippet.belongsToMany(Preset, {
  as: 'presets',
  foreignKey: 'collected',
  through: 'collect',
});
Preset.belongsToMany(Snippet, {
  as: 'snippets',
  foreignKey: 'collector',
  through: 'collect',
});

// Scopes
Scope.hasMany(Snippet, {
  as: 'snippets',
  foreignKey: 'scope',
});

// Forking
Snippet.belongsTo(Snippet, {
  foreignKey: 'upstream',
});

// Using snippets
Snippet.belongsToMany(User, {
  as: 'usingUsers',
  foreignKey: 'snippet',
  through: 'activate',
});
User.belongsToMany(Snippet, {
  as: 'usingSnippets',
  foreignKey: 'user',
  through: 'activate',
});

Preset.belongsToMany(User, {
  as: 'usingUsers',
  foreignKey: 'user',
  through: 'activatePreset',
});
User.belongsToMany(Preset, {
  as: 'usingPresets',
  foreignKey: 'preset',
  through: 'activatePreset',
});

function sync(...args) {
  return connection.sync(...args);
}

module.exports = {
  defualt: {
  sync,
  close: () => connection.close(),
},
  User,
  UserLogin,
  Scope,
  Snippet,
  Preset,
}
