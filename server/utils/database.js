import { Sequelize } from "sequelize";

const sequelize = new Sequelize("baitap_reactnative", "root", "rootadmin", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
