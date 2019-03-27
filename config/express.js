// Load the module dependencies
const config = require('./config');
const path = require('path');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// Define the Express configuration method
module.exports = function () {
    // Create a new Express application instance
    const app = express();

    // Sets cors.
    app.use(cors());

    // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    // Use the 'body-parser' and 'method-override' middleware functions
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Configure the 'session' middleware
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // Configure the flash messages middleware
    app.use(flash());

    // Configure the Passport middleware
    app.use(passport.initialize());
    app.use(passport.session());

    // Load the routing files	
    require('../app/routes/user.server.routes')(app);
    //require('../app/routes/courses.server.routes')(app);
    //require('../app/routes/index.server.routes')(app);

    // Return the Express application instance
    return app;
};