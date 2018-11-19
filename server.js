const express = require('express');
const path = require('path');
const mergeTocTree = require('./scripts/mergeTocTreeGTS');
const mapNameTree = require('./scripts/mapNameTree');
const mapIndexGLID = require('./scripts/mapIndexGLID');
const toolsTextExtractor = require('./scripts/toolsTextExtractor');

const app = express();
const port = 9999;
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
app.get('/mapIndexGLID', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
    mapIndexGLID Script is currently being executed
        <h2>
            Response from script : ${mapIndexGLID.execute()}
        </h2>
    </h1>`);
});

app.get('/toolsTextExtractor', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
    toolsTextExtractor Script is currently being executed
        <h2>
            Response from script : ${toolsTextExtractor.execute()}
        </h2>
    </h1>`);
});