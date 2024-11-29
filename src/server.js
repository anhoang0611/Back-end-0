require('dotenv').config()

const express = require('express')//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const mysql = require('mysql2');
// import express from 'express';



const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config template engine 
configViewEngine(app);



//khai bao route
app.use('/', webRoutes);

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // default: 3306
    user: 'root',// defaut: empty
    password: '123456',
    database: 'hoidanit'

});
//simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>results= ", results);
        console.log(">>>field= ", fields);
    }
)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})