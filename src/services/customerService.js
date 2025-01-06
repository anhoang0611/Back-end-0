const Customer = require('../models/customer');

const createCustomerService = async (customerData) => {
    console.log(">>> check customerData: ", customerData)
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image

        });
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
}
const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
}
const getAllCustomersService = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
}

const putUpdateCustomerService = async (id, name, address, email) => {
    try {
        const result = await Customer.updateOne(
            { _id: id },
            { name, address, email }
        );
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
};
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    putUpdateCustomerService
}
