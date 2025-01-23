const Project = require('../models/project');
const aqp = require('api-query-params');

module.exports = {
    createProject: async (data) => {
        if (data.type === 'EMPTY-PROJECT') {
            let result = await Project.create(data);
            return result;
        }
        if (data.type === 'ADD-USER') {

            let myProject = await Project.findById(data.projectId).exec();


            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.userInfor.push(data.usersArr[i]);
            }

            let newResult = await myProject.save();

            return newResult;
        }
        if (data.type === 'REMOVE-USER') {
            let myProject = await Project.findById(data.projectId).exec();

            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.userInfor.pull(data.usersArr[i]);
            }

            let newResult = await myProject.save();
            return newResult;
        }
        if (data.type === 'ADD-TASK') {
            let myProject = await Project.findById(data.projectId).exec();

            for (let i = 0; i < data.taskArr.length; i++) {
                myProject.task.push(data.taskArr[i]);
            }

            let newResult = await myProject.save();
            return newResult;
        }

    },

    getProject: async (queryString) => {
        const page = queryString.page;
        const { filter, limit, population } = aqp(queryString);

        delete filter.page;
        let offset = (page - 1) * limit;

        let result = await Project.find(filter).populate(population).skip(offset).limit(limit).exec();
        return result;
    },
    uProject: async (data) => {
        try {
            let result = await Project.updateOne(
                { _id: data.id }, { ...data }
            );
            return result;
        } catch (error) {
            console.log(">>> check error: ", error);
            return null;
        }

    },
    dProject: async (id) => {
        try {
            let result = await Project.deleteById(id);
            return result;
        } catch (error) {
            console.log(">>> check error: ", error);
            return null;
        }

    }
}
