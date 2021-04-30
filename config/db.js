const mysql = require("mysql");

const db = mysql.createConnection({
    host: "foodch.kaseamsanth.tk",
    user: "plan",
    password: "Koo112234#",
    database: "fooddb",
});

module.exports = db;