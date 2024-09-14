import { Sequelize } from 'sequelize';

const db = new Sequelize('database_app', 'root', '', {
  host: 'localHost',
  dialect: 'mysql'
})

export default db;