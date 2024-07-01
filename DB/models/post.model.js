import { Sequelize } from "sequelize";
import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";
import userModel from "./user.model.js";
const postModel = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
userModel.hasMany(postModel);
postModel.belongsTo(userModel);
export default postModel;
