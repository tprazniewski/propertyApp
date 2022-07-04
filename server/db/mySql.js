const mariadb = require('mariadb');
require('dotenv').config();

const connection = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.getConnection()
  .then( () => {
    console.log("connected to mariaDB database")
  })
    
module.exports = connection;
