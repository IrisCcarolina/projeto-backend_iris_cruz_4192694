const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

const storage = process.env.DATABASE_STORAGE || 'database.sqlite';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '..', storage),
  logging: false, // Desativa logs SQL no console; mude para true para debugar
});

module.exports = sequelize;