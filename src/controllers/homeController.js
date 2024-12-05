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

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email,name,city: ", email, name, city);

    // let {email, name, city} = req.body;


    // INSERT INTO Users(email, name, city)
    // VALUES("test", "hoidanit", "hcm");

    connection.query(
        `INSERT INTO 
        Users (email , name , city) 
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);

            res.send('create successs')
        }
    )


}
module.exports = {
    getHomepage,
    getABC,
    getHoi,
    postCreateUser
}