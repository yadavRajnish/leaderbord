import dbConfig from "../config/db.config";
import { Sequelize, DataTypes, Dialect } from "sequelize";
import initUserModel from "./user.model";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect as Dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Authenticate the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const db: {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  user: ReturnType<typeof initUserModel>
} = { Sequelize, sequelize, user: initUserModel(sequelize) };

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.user = initUserModel(sequelize, DataTypes);

db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("re-sync database!");
});

export default db;
