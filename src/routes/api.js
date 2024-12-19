const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI } = require('../controllers/apiController');

//router.Method('/route', handler)
routerAPI.get('/', (req, res) => {
    res.send('Hello World');
});

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'Hello World abc'
    })
});

routerAPI.get('/users', getUsersAPI);
module.exports = routerAPI; //export default