const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

const port = 9999;
const publicPath = path.join(__dirname, 'public/');

// middleware to set public path
// app.use(express.static(publicPath));

//  Connect all our routes to our application
app.use('/', routes);


app.listen(port, () => {
    console.log('We are live on ' + port);
});