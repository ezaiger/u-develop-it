const mysql = require('mysql2');

// Connect to MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username - default is root
        user: 'root',
        // Your MySQL password
        password: '65f1OQr&dlVY',
        database: 'election'
    });

module.exports = db;