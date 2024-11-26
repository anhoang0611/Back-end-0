const express = require('express')//commonjs
// import express from 'express';
const path = require('path');

const app = express(); //app express
const port = 8081; //port

//config template engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!\n hi')
})
// app.get('/abc', (req, res) => {
//     res.send('check abc')
// })

app.get('/abc', (req, res) => {
    res.render('sample.ejs')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})