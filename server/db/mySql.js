const mariadb = require('mariadb');

const connection = mariadb.createPool({
  host: '144.24.168.48',
  user: 'tomek',
  password: 'Tomekomek1@',
  connectionLimit: 5
})

connection.getConnection()
  .then( conn => {
    console.log("entered mariaDB database")
  })