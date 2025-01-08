import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface UserAttributes {
  id?: number,
  name: string,
  phone: string,
  email: string,
  laptime: string
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

export default (sequelize: Sequelize) => {
  const User = sequelize.define<Model<UserAttributes, UserCreationAttributes>>("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    laptime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
