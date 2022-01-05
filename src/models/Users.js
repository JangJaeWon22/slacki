import Sequelize from "sequelize";
// import db from "../db.js";
import db from "./index.js";

const sequelize = db.sequelize;
const User = sequelize.define("User", {
  userId: {
    defaultValue: Sequelize.UUIDV4,
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    // autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default User;
