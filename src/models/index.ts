import { Sequelize } from 'sequelize';
import  config  from '../config/config';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];
const db = {};

export default new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
  },
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
