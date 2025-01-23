const { createProject, getProject, uProject, dProject } = require('../services/productService');

module.exports = {
    postCreateProject: async (req, res) => {

        let result = await createProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getAllProject: async (req, res) => {
        let result = await getProject(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    uProject: async (req, res) => {
        let result = await uProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    dProject: async (req, res) => {
        let result = await dProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}
