const connection = require('../config/database');
const { getAllUser, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');

const User = require('../models/user');
const getHomepage = async (req, res) => {

    let results = [];
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

    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email , name , city) VALUES(?, ?, ?)`, [email, name, city]

    // )
    await User.create({
        email: email,
        name: name,
        city: city
    })

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

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userid = req.body.userId;

    await updateUserById(email, city, name, userid)

    // res.send('updated!')
    res.redirect('/');
}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;

    await deleteUserById(id)
    res.redirect('/');
}
module.exports = {
    getHomepage,
    getABC,
    getHoi,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}