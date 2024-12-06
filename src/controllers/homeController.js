const connection = require('../config/database');
const { getAllUser, getUserById } = require('../services/CRUDService');

const getHomepage = async (req, res) => {

    let results = await getAllUser();
    return res.render('home.ejs', { listUsers: results })

}

const getABC = (req, res) => {
    res.send('check ABC')
}
const getHoi = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email,name,city: ", email, name, city);

    // let {email, name, city} = req.body;

    // connection.query(
    //     `INSERT INTO Users (email , name , city) VALUES(?, ?, ?)`, [email, name, city],
    //     function (err, results) {
    //         console.log(results);

    //         res.send('create successs')
    //     }
    // )

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email , name , city) VALUES(?, ?, ?)`, [email, name, city]

    )

    console.log("check results: ", results)

    res.send('created ')



}

const getCreatePage = (req, res) => {
    res.render('create.ejs')

}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId);

    res.render('edit.ejs', { userEdit: user }); //x < - y

}

module.exports = {
    getHomepage,
    getABC,
    getHoi,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}