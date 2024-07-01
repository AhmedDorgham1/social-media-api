import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("facebook_2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const db_connection = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default db_connection;
