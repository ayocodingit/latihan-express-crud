const mysql = require('mysql')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

conn.connect()

conn.on('error', function (err) {
    console.log("[mysql error]", err)
})

module.exports = conn