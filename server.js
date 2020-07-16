// Importing Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

//Middlewares
app.use(cors());
app.use(bodyParser.json());

// get the route of shopping centres
const shoppingCentresRoute = require('./server/routes/shoppingCentres');
app.use('/api/shopping-centres', shoppingCentresRoute);

// get the route of authentication
const authenticationRoute = require('./server/routes/auth');
app.use('/api/auth', authenticationRoute);

//Connect to DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongoose.uri,
    { useNewUrlParser: true },
    () => {
        console.log('MongoDB connected!!');
    }
);

// set static files in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//listening to the server
app.listen(PORT, () => {
    console.log(PORT);
});