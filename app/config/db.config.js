import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const dbConntion = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DB_NAME
});

dbConntion.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConntion;