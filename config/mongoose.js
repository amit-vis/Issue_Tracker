const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/Issue_tracker`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;