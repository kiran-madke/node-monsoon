const routes = require('express').Router();
const path = require('path');
const express = require('express');
const app = express();
var formidable = require('formidable');
var fs = require('fs');
const uuidv4 = require('uuid/v4');

// requiring child_process native module for downloading
const child_process = require('child_process');

const mergeTocTree = require('./scripts/mergeTocTreeGTS');
const mapNameTree = require('./scripts/mapNameTree');
const mapIndexGLID = require('./scripts/mapIndexGLID');
const toolsTextExtractor = require('./scripts/toolsTextExtractor');
const hyphenation = require('./scripts/hyphenation');

routes.get('/', (req, res) => {
    req.session.destroy();
    // req.session.ipaddress = req.connection.remoteAddress;
    console.log(req.session);
    // res.status(200).json({ message: 'Connected!' });
    const data = { jumbo_header: 'Node Monsoon', jumbo_header_description: 'Various scripts for production leanification', page_title: 'Node Monsoon' }
    res.render(__dirname + '/public/index', data);
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

    req.session.userFolderName = uuidv4();
    console.log(req.session);
    const data = { jumbo_header: 'Hyphenation', jumbo_header_description: 'This script is used for hyphenating html pages', page_title: 'Hyphenation', userToken: req.session.userFolderName };
    res.render(__dirname + '/public/view/hyphenation/index', data);
    /* res.send(`
    <h1>
    Hyphenation Script is currently being executed
        <h2>
            Response from script : ${hyphenation.execute()}
        </h2>
    </h1>`); */
});

routes.get('/hyphenation/execute', function(req, res) {
    hyphenation.execute(req.session.userFolderName);

    const SCRIPT_ANALYTICS = hyphenation.getScriptAnalytics();
    // console.log(SCRIPT_ANALYTICS);

    const data = { jumbo_header: 'Hyphenation', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Hyphenation', SCRIPT_ANALYTICS: SCRIPT_ANALYTICS };
    res.render(__dirname + '/public/view/hyphenation/execution_done', data);
});

routes.get('/hyphenation/download', function(req, res) {
    hyphenation.deleteUserIOFolders();
    hyphenation.download(res);
});

routes.get('/hyphenation/download_ready', function(req, res) {
    const data = { jumbo_header: 'Hyphenation', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Hyphenation' };
    res.render(__dirname + '/public/view/hyphenation/download_ready.ejs', data);
});


routes.post('/hyphenation/upload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.fileUploaded.path;
        // var newpath = path.join(__dirname, `./scripts/hyphenation/data/uploaded_zip_data/${files.fileUploaded.name}`);
        var newpath = path.join(__dirname, `./scripts/hyphenation/data/uploaded_zip_data/${req.session.userFolderName}.zip`);

        // Upload the zip
        const uploadStatus = hyphenation.uploadZip(files.fileUploaded, oldpath, newpath);
        console.log(uploadStatus);

        // Proceed if file was successfully uploaded
        if (uploadStatus) {
            // Unzip the uploaded zip
            hyphenation.unzip_data(files.fileUploaded, req.session.userFolderName, function() {
                console.log('unzip callback function executed');
                // Get the list of files unzipped
                const listOfFiles = hyphenation.getListOfUnzippedFiles(req.session.userFolderName);
                console.log(listOfFiles);

                const data = { jumbo_header: 'Hyphenation', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Hyphenation', uploadedList: listOfFiles };
                res.render(__dirname + '/public/view/hyphenation/upload_done', data);
            });
        } else {
            // Redirect user to failed operation page with passing appropriate message
            const data = { jumbo_header: 'Hyphenation Error Encountered', jumbo_header_description: 'We have encountered an issue with an operation', page_title: 'Hyphenation Error', message: `Your zip could not be uploaded. Please ensure you are uploaded the zip in proper format as instructed.` };
            res.render(__dirname + '/public/view/hyphenation/upload_failed', data);
        }





    });

});

module.exports = routes;