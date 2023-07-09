// connected to database
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://amit917480:AbYQ1fPSDes3IYf9@cluster0.r0y0yem.mongodb.net/Issue-Tracker`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;