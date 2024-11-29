require('dotenv').config()

const express = require('express')//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

// import express from 'express';



const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config template engine 
configViewEngine(app);



//khai bao route
app.use('/', webRoutes);

//test connection

//simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>results= ", results);

    }
)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})