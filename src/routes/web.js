const express = require('express');
const { getHomepage, getABC, getHoi, postCreateUser, getCreatePage } = require('../controllers/homeController');

const router = express.Router();

//router.Method('/route', handler)
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoi', getHoi);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);



module.exports = router; //export default