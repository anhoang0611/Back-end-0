const express = require('express');
const { getHomepage, getABC, getHoi } = require('../controllers/homeController');

const router = express.Router();

//router.Method('/route', handler)
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoi', getHoi);

module.exports = router; //export default