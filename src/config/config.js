import dotenv from "dotenv";
dotenv.config();
export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  // test: {
  //   username: "root",
  //   password: process.env.RDS_PASSWORD,
  //   database: "database_test",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // },
  // production: {
  //   username: process.env.RDS_USER,
  //   password: process.env.RDS_PASSWORD,
  //   database: process.env.RDS_DB_NAME,
  //   host: process.env.RDS_END_POINT,
  //   dialect: "mysql",
  // },
  // rds: {
  //   username: process.env.RDS_USER,
  //   password: process.env.RDS_PASSWORD,
  //   database: process.env.RDS_DB_NAME,
  //   host: process.env.RDS_END_POINT,
  //   dialect: "mysql",
  // },
};
