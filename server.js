const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const session = require('client-sessions');
const json2xls = require('json2xls');

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

// Use middleware for excel
app.use(json2xls.middleware);

app.use(session({
    cookieName: 'session',
    secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
    duration: 300 * 60 * 1000,
    activeDuration: 500 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true
}));

//  Connect all our routes to our application
app.use('/', routes);


app.listen(port, () => {
    console.log('We are live on ' + port);
});