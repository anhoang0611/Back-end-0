const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFile } = require('../services/fileService');

const getUsersAPI = async (req, res) => {

    let results = await User.find({});

    return res.status(200).json({
        EC: 0,
        data: results
    })

}

const postCreateUserAPI = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })

    return res.status(200).json({
        EC: 0,

        data: user
    })

}

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userid = req.body.userId;


    let user = await User.updateOne(
        { _id: userid },
        {
            email: email,
            name: name,
            city: city
        }
    )

    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;

    let result = await User.deleteOne({
        _id: id
    })

    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const postUploadSingleFile = async (req, res) => {
    console.log('req.files', req.files);

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            EC: -1,
            message: "No file uploaded"
        });
    }

    let result = await uploadSingleFile(req.files.image);
    console.log(">>> result", result);


    return res.send('upload file');
}


module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFile
}
