import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";
import postModel from "./post.model.js";

const commentModel = sequelize.define(
  "comment",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
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

userModel.hasMany(commentModel);
commentModel.belongsTo(userModel);

postModel.hasMany(commentModel);
commentModel.belongsTo(postModel);

console.log(sequelize.models.commentModel);
export default commentModel;
