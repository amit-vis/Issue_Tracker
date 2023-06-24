const mongoose = require('mongoose');

const createIssueSchema = new mongoose.Schema({
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
    labels:[
        {
            type: String
        }
    ]
},{
    timestamps: true,
});

const Issue = mongoose.model('Issue', createIssueSchema);
module.exports = Issue