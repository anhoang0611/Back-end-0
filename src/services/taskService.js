const Task = require('../models/task');

module.exports = {
    createTask: async (data) => {
        let result = await Task.create(data);
        return result;
    },
    getAllTask: async (queryString) => {
        const page = queryString.page;
        const { filter, limit, population } = aqp(queryString);

        delete filter.page;
        let offset = (page - 1) * limit;

        let result = await Task.find(filter).populate(population).skip(offset).limit(limit).exec();

        return result;
    },
    uTask: async (data) => {
        let result = await Task.updateOne({ _id: data.id }, { ...data });
        return result;
    },
    dTask: async (id) => {
        let result = await Task.deleteById(id);
        return result;
    }
}
