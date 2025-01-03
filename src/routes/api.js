const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI,
    deleteUserAPI, postUploadSingleFile, postUploadMultipleFile } = require('../controllers/apiController');
const { postCreateCustomer } = require('../controllers/customerController');
//router.Method('/route', handler)

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFile);//upload file
routerAPI.post('/files', postUploadMultipleFile);

routerAPI.post('/customers', postCreateCustomer);

module.exports = routerAPI; //export default

