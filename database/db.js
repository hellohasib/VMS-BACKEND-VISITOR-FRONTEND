const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('VmsLoginRegister','root', 'root9876', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  timezone: '+06:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db