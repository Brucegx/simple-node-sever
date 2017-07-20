var Sequelize = ('sequelize');
var { DATABASE_URL }= ('../../../config/config');

const connection = new Sequelize(DATABASE_URL);

module.exports = connection;
