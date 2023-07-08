// require all required module and variable
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const customMware = require('./config/middleware');
const session = require('express-session');

// setup the express and assets file
app.use(express.urlencoded());
app.use(express.static('./assets'));

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(expressLayouts);

// extract the style and script
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use the session for flash function
app.use(session({
    secret: "IssueCreater",
    resave: false,
    saveUninitialized: false
}));

// use the falsh function and custom mware
app.use(flash());
app.use(customMware.setFlash);

// use the routes here
app.use('/', require('./routes'));

// here setup the port
app.listen(port, function(err){
    if(err){
        console.log('error in connecting to port', err);
    }
    console.log('app is listen successfully on port: ', port)
})