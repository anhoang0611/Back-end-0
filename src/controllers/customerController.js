const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    putUpdateCustomerService,
    deleteACustomerService,
    deleteManyCustomerService
} = require('../services/customerService');
const aqp = require('api-query-params');
//{key: value, key1: value1}
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let image = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        }
        else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;

        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);


        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);

        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        }
        else {
            return res.status(500).json({
                EC: -1,
                data: customers
            })
        }

    },
    getAllCustomers: async (req, res) => {


        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let result = null;

        if (limit && page) {

            result = await getAllCustomersService(limit, page, name, req.query);
        }
        else {
            result = await getAllCustomersService();
        }


        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    putUpdateCustomer: async (req, res) => {
        let { id, name, address, email } = req.body;
        let result = await putUpdateCustomerService(id, name, address, email);

        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteACustomer: async (req, res) => {
        let { id } = req.body

        let result = await deleteACustomerService(id);

        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteManyCustomer: async (req, res) => {

        let ids = req.body.customersId;

        let result = await deleteManyCustomerService(ids);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}

