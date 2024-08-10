const express = require('express');
const {getHomePage,getABC,getKhoa,postCreateUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/khoa', getKhoa);

router.post('/create-user',postCreateUser)
  
module.exports = router; 