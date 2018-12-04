const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const session = require('client-sessions');

var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';

const port = 9999;
const publicPath = path.join(__dirname, 'public/');

app.set("view options", { layout: false });
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + "/www");

// middleware to set public path
app.use(express.static(publicPath));

app.use(session({
    cookieName: 'session',
    secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true
}));

//  Connect all our routes to our application
app.use('/', routes);


app.listen(port, () => {
    console.log('We are live on ' + port);
});