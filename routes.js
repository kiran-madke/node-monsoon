const routes = require('express').Router();
const path = require('path');
const express = require('express');
const app = express();
var formidable = require('formidable');
var fs = require('fs');

const mergeTocTree = require('./scripts/mergeTocTreeGTS');
const mapNameTree = require('./scripts/mapNameTree');
const mapIndexGLID = require('./scripts/mapIndexGLID');
const toolsTextExtractor = require('./scripts/toolsTextExtractor');
const hyphenation = require('./scripts/hyphenation');

routes.get('/', (req, res) => {
    // res.status(200).json({ message: 'Connected!' });
    res.sendFile(__dirname + '/public/index.html');
});

routes.get('/mergeTocTree-GTS', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
        Script is currently being executed
        <h2>
            Response from script : ${mergeTocTree.execute()}
        </h2>
    </h1>`);
});
routes.get('/mapNameTree', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
        Script is currently being executed
        <h2>
            Response from script : ${mapNameTree.execute()}
        </h2>
    </h1>`);
});
routes.get('/mapIndexGLID', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
    mapIndexGLID Script is currently being executed
        <h2>
            Response from script : ${mapIndexGLID.execute()}
        </h2>
    </h1>`);
});

routes.get('/toolsTextExtractor', function(req, res) {
    // console.log('Response from script', mergeTocTree.execute());
    res.send(`
    <h1>
    toolsTextExtractor Script is currently being executed
        <h2>
            Response from script : ${toolsTextExtractor.execute()}
        </h2>
    </h1>`);
});

routes.get('/hyphenation', function(req, res) {
    res.sendFile(__dirname + '/public/view/hyphenation/index.html');
    /* res.send(`
    <h1>
    Hyphenation Script is currently being executed
        <h2>
            Response from script : ${hyphenation.execute()}
        </h2>
    </h1>`); */
});

routes.get('/hyphenation/execute_hyphenation', function(req, res) {
    res.send(`
    <h1>
    Hyphenation Script is currently being executed
        <h2>
            Response from script : ${hyphenation.execute()}
        </h2>
    </h1>`);
});


routes.post('/hyphenation/upload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.fileUploaded.path;
        var newpath = path.join(__dirname, `./scripts/hyphenation/data/uploaded_zip_data/${files.fileUploaded.name}`);

        // Upload the zip
        hyphenation.uploadZip(files.fileUploaded, oldpath, newpath);

        // Unzip the uploaded zip
        hyphenation.unzip(files.fileUploaded);

    });

});

module.exports = routes;