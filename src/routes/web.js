const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World!\n hi and nodemon')
})

router.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router; //export default