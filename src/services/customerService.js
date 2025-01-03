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

module.exports = {
    createCustomerService
}
