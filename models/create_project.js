const { timeStamp } = require('console');
const mongoose = require('mongoose');

// create a schema for project
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
    },
    issues:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue"
        }
    ],
    labels:[
        {
            type: String
        }
    ]
},{
    timestamps: true

});

const createProject = mongoose.model('createProject', createProjectSchema);
module.exports = createProject;