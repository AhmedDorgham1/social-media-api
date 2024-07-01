import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "bhrp9ockiwdl2ltc1ouv",
  "uodxwcdvbns9qxf2",
  "Z7YyuGroZwdYTdzvXxqF",
  {
    host: "bhrp9ockiwdl2ltc1ouv-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);
const db_connection = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default db_connection;
