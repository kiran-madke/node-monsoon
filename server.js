const express = require('express');
const path = require('path');
const mergeTocTree = require('./scripts/mergeTocTreeGTS');
const mapNameTree = require('./scripts/mapNameTree');

const app = express();
const port = 3333;
const publicPath = path.join(__dirname, 'public/');

// middleware to set public path
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('We are live on ' + port);
});


app.get('/mergeTocTree-GTS', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
        Script is currently being executed
        <h2>
            Response from script : ${mergeTocTree.execute()}
        </h2>
    </h1>`);
});
app.get('/mapNameTree', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
        Script is currently being executed
        <h2>
            Response from script : ${mapNameTree.execute()}
        </h2>
    </h1>`);
});