import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface UserAttributes {
  id?: number,
  username: string,
  score: number,
  email: string
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

export default (sequelize: Sequelize) => {
  const User = sequelize.define<Model<UserAttributes, UserCreationAttributes>>("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
