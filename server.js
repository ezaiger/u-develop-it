const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username - default is root
        user: 'root',
        // Your MySQL password
        password: '65f1OQr&dlVY',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

// Query the database to test the connection
/*NOTE: 
Query method runs the SQL query and executes the callback with all the resulting rows that match the query. Once this method executes the SQL command, 
the callback function captures the responses from the query in two variables: the err, which is the error response, and rows, which is the database 
query response. If there are no errors in the SQL query, the err value is null. This method is the key component that allows SQL commands to be written 
in a Node.js application.*/
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE ID = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
            VALUES (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
    

// Function to create a GET test route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found - 404) 
/*NOTE: 
If this route is placed first, this route will override all others!*/
app.use((req, res) => {
    res.status(404).end();
});

// Function to start Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});