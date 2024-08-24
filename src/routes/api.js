const express = require('express');

const routerAPI = express.Router();

const {getUserAPI,postUploadSingleFileAPI,postUploadMultiFileAPI,
    putUpdateUserAPI,deleteUserAPI,postCreateUserAPI} = require('../controllers/apiController');

const {postCreateCustomer,postCreateArrayCustomer,getAllCustomersAPI, putUpdateCustomerAPI,deleteACustomer} = require('../controllers/customerController');

routerAPI.get('/users', getUserAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUploadMultiFileAPI);

routerAPI.post('/customers', postCreateCustomer);

routerAPI.post('/customers-many', postCreateArrayCustomer);

routerAPI.get('/customers', getAllCustomersAPI);
routerAPI.put('/customers', putUpdateCustomerAPI);
routerAPI.delete('/customers', deleteACustomer);







module.exports = routerAPI;