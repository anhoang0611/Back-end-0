const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs')

}

const getABC = (req, res) => {
    res.send('check ABC')
}
const getHoi = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body);
    res.send('create')
}
module.exports = {
    getHomepage,
    getABC,
    getHoi,
    postCreateUser
}