require("dotenv").config();
module.exports = {
  url: process.env.DATABASE_URL,
  config: {
    dialect: "mysql",
    define: {
      timestamp: true,
      underscored: true,
    },
  },

  // host: "localhost",
  //   username: "root",
  //   password: "bcd127",
  //   database: process.env.NODE_ENV === "test" ? "test_db_fitware" : "fitware",
  //   dialect: "mysql",
  //   define: {
  //     timestamp: true,
  //     underscored: true,
};
