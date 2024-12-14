require('dotenv').config()

const express = require('express')//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const Kitten = require('./models/Kitten');


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

//create data
const cat = new Kitten({ name: 'Kitty model' });
cat.save();



// connection();
//self-running function
(async () => {
    //test connection
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> error: ", error)
    }
})()

