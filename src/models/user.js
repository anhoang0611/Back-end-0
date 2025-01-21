const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
//shape data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,


});

//add plugin
userSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
//create model
const User = mongoose.model('user', userSchema);

module.exports = User;
