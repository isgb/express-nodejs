// Get the client
const mysql = require('mysql2');

// Create the connection to database

async function connectDB() {
    const connection =await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'test',
        ssl: {
            rejectUnauthorized: false
        }
      });
      
      // A simple SELECT query
      const result1 = await connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function (err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
      
      // Using placeholders
      const result = await connection.query(
        'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
        ['Page', 45],
        function (err, results) {
          console.log(results);
        }
      );

    console.log(result)
      
}

module.exports = {
    connectDB
}