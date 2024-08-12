const express = require('express');
const {getHomePage,getABC,getKhoa,postCreateUser,postHandleRemoveUser,
    getUpdatePage,getCreatePage,postUpdateUser,postDeleteUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/khoa', getKhoa);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/create-user',postCreateUser);

router.post('/update-user',postUpdateUser);
router.post('/delete-user/:id',postDeleteUser);
router.post('/delete-user',postHandleRemoveUser);

  
module.exports = router; 