const mongoose = require('mongoose');

//shape data
const kittySchema = new mongoose.Schema({
    name: String
});


//create model
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
