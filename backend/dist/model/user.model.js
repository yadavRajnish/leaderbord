"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        score: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    });
    return User;
};
