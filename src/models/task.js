const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const projectSchema = new mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    description: String,

})

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        city: String,
    }
)
const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        status: String,
        startDate: String,
        endDate: String,
        userInfor: userSchema,
        projectInfor: projectSchema,
    },
    {
        timestamps: true
    }
)

//Override all method

taskSchema.plugin(mongoose_delete, { deletedAt: true });

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
