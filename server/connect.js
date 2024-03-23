import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost", //process.env.DB_HOST,
  user: "root", //process.env.DB_USER,
  password: "root", //process.env.DB_PASSWORD,
  database: "new_db", //process.env.DB,
});
