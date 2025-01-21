const Project = require('../models/project');

module.exports = {
    createProject: async (data) => {
        if (data.type === 'EMPTY-PROJECT') {
            let result = await Project.create(data);
            return result;
        }
        if (data.type === 'ADD-USER') {
            console.log(">>> check data: ", data);
            let myProject = await Project.findById(data.projectId).exec();

            console.log(">>> check myProject: ", myProject);
            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.userInfor.push(data.usersArr[i]);
            }

            let newResult = await myProject.save();

            return newResult;
        }
        return null;
    }
}
