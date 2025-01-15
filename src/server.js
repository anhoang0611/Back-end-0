require('dotenv').config()

const express = require('express')//commonjs
const fileUpload = require('express-fileupload');// cấu hình upload file
const configViewEngine = require('./config/viewEngine');
const { MongoClient } = require('mongodb');

//routes
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const apiRoutes = require('./routes/api');


// import express from 'express';
const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;


//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //for form data

//config file upload
app.use(fileUpload());

//config template engine 
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);

// connection();
//self-running function
(async () => {
    //test connection
    try {
        //using mongoose
        // await connection();

        //using mongodb driver
        //Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);



        //Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected to MongoDB successfully');

        const db = client.db(dbName);
        const collection = db.collection('customers');

        // collection.insertOne({ name: 'John', age: 30 });
        // collection.insertOne({ address: 'HN' });
        // console.log(">>> find : ", await collection.find({ address: 'HN' }).toArray())
        let a = await collection.findOne({ address: 'HN' })
        console.log(">>> find= ", a)

        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> error: ", error)
    }
})()

