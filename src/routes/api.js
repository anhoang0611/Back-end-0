const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI,
    deleteUserAPI, postUploadSingleFile, postUploadMultipleFile } = require('../controllers/apiController');

const { postCreateCustomer,
    postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteACustomer, deleteManyCustomer } = require('../controllers/customerController');
//router.Method('/route', handler)
const { postCreateProject, getAllProject, uProject, dProject } = require('../controllers/projectController');
const { postCreateTask, getAllTask, uTask, dTask } = require('../controllers/taskController');
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFile);//upload file
routerAPI.post('/files', postUploadMultipleFile);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomer);
routerAPI.delete('/customers', deleteACustomer);
routerAPI.delete('/customers-many', deleteManyCustomer);

routerAPI.post('/projects', postCreateProject);
routerAPI.get('/projects', getAllProject);
routerAPI.put('/projects', uProject);
routerAPI.delete('/projects', dProject);

routerAPI.post('/tasks', postCreateTask);
routerAPI.get('/tasks', getAllTask);
routerAPI.put('/tasks', uTask);
routerAPI.delete('/tasks', dTask);

routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>> check query: ", req.params);
    return res.status(200).json({
        data: req.params
    })
});

module.exports = routerAPI; //export default

