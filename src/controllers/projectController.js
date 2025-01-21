const { createProject } = require('../services/productService');

module.exports = {
    postCreateProject: async (req, res) => {
        let data = req.body;
        let result = await createProject(data);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}
