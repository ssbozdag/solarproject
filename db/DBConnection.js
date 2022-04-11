import mysql from "mysql";

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'root',
    password: '',
    database: 'solardb',
    dateStrings: true
  })
  
  connection.connect()

  export default connection;