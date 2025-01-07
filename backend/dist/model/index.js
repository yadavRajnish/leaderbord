"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_js_1 = __importDefault(require("../config/db.config.js"));
const sequelize_1 = require("sequelize");
const user_model_js_1 = __importDefault(require("./user.model.js"));
const sequelize = new sequelize_1.Sequelize(db_config_js_1.default.DB, db_config_js_1.default.USER, db_config_js_1.default.PASSWORD, {
    host: db_config_js_1.default.HOST,
    dialect: db_config_js_1.default.dialect,
    pool: {
        max: db_config_js_1.default.pool.max,
        min: db_config_js_1.default.pool.min,
        acquire: db_config_js_1.default.pool.acquire,
        idle: db_config_js_1.default.pool.idle,
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
const db = { Sequelize: sequelize_1.Sequelize, sequelize, user: (0, user_model_js_1.default)(sequelize) };
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.user = initUserModel(sequelize, DataTypes);
db.sequelize.sync({ force: false, alter: true }).then(() => {
    console.log("re-sync database!");
});
exports.default = db;
