import dbConfig from "../config/db.config";
import { Sequelize, DataTypes, Dialect } from "sequelize";
import initUserModel from "./user.model";
import initGameModel from "./game.model";

if (!dbConfig.DB || !dbConfig.USER) {
  throw new Error("Specify DB Credentials")
}

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

export const db: {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  user: ReturnType<typeof initUserModel>
  game: ReturnType<typeof initGameModel>
} = {
  Sequelize, sequelize, user: initUserModel(sequelize),
  game: initGameModel(sequelize)
};

// db.game.belongsTo(db.user)

db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("re-sync database!");
});

export default db;
