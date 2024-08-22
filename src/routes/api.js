const express = require('express');

const routerAPI = express.Router();

const {getUserAPI,postUploadSingleFileAPI,postUploadMultiFileAPI,
    putUpdateUserAPI,deleteUserAPI,postCreateUserAPI} = require('../controllers/apiController');


routerAPI.get('/users', getUserAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUploadMultiFileAPI);


module.exports = routerAPI;