require('dotenv').config()

const express = require('express')//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

// import express from 'express';
const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;


//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //for form data


//config template engine 
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

//test connection
connection();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})