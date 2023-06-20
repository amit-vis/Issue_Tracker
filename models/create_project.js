const { timeStamp } = require('console');
const mongoose = require('mongoose');

const createProjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
},{
    timestamps: true

});

const createProject = mongoose.model('createProject', createProjectSchema);
module.exports = createProject;