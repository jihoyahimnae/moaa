const express = require("express");
const fs = require("fs");
const path = require("path");

require("dotenv").config();
const router = express.Router();
const dbconnection = require("mysql2").createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
});


router.get("/", (req, res) => {
    let sql = "select * from test";
    const result = dbconnection.query(sql, (err, rows) => {
        if (err) { console.error(err) }
        console.log("User info is", rows);
        res.send(rows);
    });
});

module.exports = router;