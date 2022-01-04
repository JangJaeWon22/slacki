import { Sequelize } from "sequelize";
import dbConfig from "./config/config.js";

const { database, username, password, host, dialect } = dbConfig.development;
console.log(dbConfig);

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port: 3306,
  connectionLimit: 10,
});

try {
  await sequelize.authenticate();
} catch (error) {
  console.log("ERROR!!!", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;

/* 
export const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
    pool: config.database.pool,
    operatorsAliases: false
  }
); */

// try {
//   await sequelize.authenticate();
// } catch (error) {
//   console.log(error);
//   console.log("여기로 오나?");
// }
