import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import userModel from "./user.model";
import User from "./user.model";
import db from ".";

export interface GameAttributes {
  id?: number,
  laptime: string,
  // userId: number
}

export interface GameCreationAttributes extends Optional<GameAttributes, "id"> { }

export default (sequelize: Sequelize) => {
  const Game = sequelize.define<Model<GameAttributes, GameCreationAttributes>>("Game",
    {
      laptime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // userId: {
      //   type: DataTypes.NUMBER,
      //   allowNull: false,
      //   references: {
      //     model: "Users",
      //     key: "id"
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // }
    });

  return Game;
};