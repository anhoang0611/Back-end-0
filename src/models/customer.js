const mongoose = require('mongoose');
const mongoose_Delete = require('mongoose-delete');

//shape data
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,

    email: String,
    image: String,

    description: String
}, { timestamps: true });

//add plugin
customerSchema.plugin(mongoose_Delete, { deletedAt: true, overrideMethods: 'all' });


//create model
const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;
