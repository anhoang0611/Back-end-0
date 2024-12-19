const User = require('../models/user');
const getUsersAPI = async (req, res) => {

    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        // errMessage: 'OK',
        data: results
    })

}

module.exports = {
    getUsersAPI
}
