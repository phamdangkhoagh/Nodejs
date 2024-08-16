const express = require('express');

const routerAPI = express.Router();

const {getUserAPI, postCreateUserAPI,putUpdateUserAPI} = require('../controllers/apiController');


routerAPI.get('/users', getUserAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);


module.exports = routerAPI;