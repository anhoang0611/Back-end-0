const Customer = require('../models/customer');
const aqp = require('api-query-params');


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

const getAllCustomersService = async (limit, page, name, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;

            const { filter, skip, sort, projection, population } = aqp(queryString);
            delete filter.page;


            console.log(">>> check filter: ", filter);

            result = await Customer.find(filter)
                .skip(offset)
                .limit(limit)
                .exec();

        } else {
            result = await Customer.find({});
        }

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
const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
}
const deleteManyCustomerService = async (ids) => {
    try {
        let result = await Customer.delete({ _id: { $in: ids } });
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
}
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    putUpdateCustomerService,
    deleteACustomerService,
    deleteManyCustomerService
}
