import mysql from "mysql";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'solardb',
    dateStrings: true
  })
  
  connection.connect()

  export default connection;