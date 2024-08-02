const express = require('express');
const {getHomePage,getABC,getKhoa} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/khoa', getKhoa);
  
module.exports = router; 