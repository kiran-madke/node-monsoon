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
const cutting = require('./scripts/cutting');
const abbreviation = require('./scripts/abbreviation');

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

// HYPHENATION

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
    hyphenation.execute(req.session.userFolderName, req.session.language);

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
    // console.log('Uploading for : ', req.session.userFolderName);
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.fileUploaded.path;

        // Set the language in session
        req.session.language = fields.language === "null" ? "en" : fields.language;
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

// CUTTING SCRIPT

routes.get('/cutting', function(req, res) {

    req.session.userFolderName = uuidv4();
    console.log(req.session);
    const data = { jumbo_header: 'Cutting Big HTML', jumbo_header_description: 'This script is used for cutting Big HTML file into separate HTML pages by inserting xxxxx values', page_title: 'Cutting Script', userToken: req.session.userFolderName };
    res.render(__dirname + '/public/view/cutting/index', data);
});

routes.post('/cutting/upload', function(req, res) {
    // console.log('Uploading for : ', req.session.userFolderName);
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.fileUploaded.path;

        var newpath = path.join(__dirname, `./scripts/cutting/data/input/${req.session.userFolderName}.html`);

        // Upload the zip
        const uploadStatus = cutting.uploadFile(files.fileUploaded, oldpath, newpath);
        console.log(uploadStatus);

        // Proceed if file was successfully uploaded
        if (uploadStatus) {
            console.log('upload successfull');

            const data = { jumbo_header: 'Cutting Big HTML', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Cutting Big HTML' };
            res.render(__dirname + '/public/view/cutting/upload_done', data);
        } else {
            // Redirect user to failed operation page with passing appropriate message
            const data = { jumbo_header: 'Cutting Script Error Encountered', jumbo_header_description: 'We have encountered an issue with an operation', page_title: 'Cutting Error', message: `Your big html file could not be uploaded. Please ensure you are uploading in proper format as instructed.` };
            res.render(__dirname + '/public/view/cutting/upload_failed', data);
        }
    });

});

routes.get('/cutting/executeCutting', function(req, res) {
    cutting.executeCutting(req.session.userFolderName);

    const SCRIPT_ANALYTICS = cutting.getScriptAnalytics();

    const data = { jumbo_header: 'Cutting Big HTML', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Cutting Script', SCRIPT_ANALYTICS: SCRIPT_ANALYTICS, PREVIEW_LINK: "www.google.com" };
    res.render(__dirname + '/public/view/cutting/cuttingExecution_done', data);

});

routes.get('/cutting/download', function(req, res) {
    cutting.download(res);
});
routes.get('/cutting/showPreview', function(req, res) {
    const data = { jumbo_header: 'Cutting Big HTML', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Cutting Script' };
    res.render(__dirname + `/scripts/cutting/data/output/${req.session.userFolderName}.html`, data);
});

// ABBREVIATION 

routes.get('/abbreviation', function(req, res) {

    req.session.userFolderName = uuidv4();
    console.log(req.session);
    const data = { jumbo_header: 'Abbreviation Script', jumbo_header_description: 'This script is used for extracting abbreviation words from your HTML file', page_title: 'Abbreviation Script', userToken: req.session.userFolderName };
    res.render(__dirname + '/public/view/abbreviation/index', data);
});


routes.post('/abbreviation/upload', function(req, res) {
    // console.log('Uploading for : ', req.session.userFolderName);
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.fileUploaded.path;

        var newpath = path.join(__dirname, `./scripts/abbreviation/data/input/${req.session.userFolderName}.html`);

        // Upload the zip
        const uploadStatus = abbreviation.uploadFile(files.fileUploaded, oldpath, newpath);
        console.log(uploadStatus);

        // Proceed if file was successfully uploaded
        if (uploadStatus) {
            console.log('upload successfull');

            const data = { jumbo_header: 'Abbreviations of Big HTML', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Abbreviations of Big HTML' };
            res.render(__dirname + '/public/view/abbreviation/upload_done', data);
        } else {
            // Redirect user to failed operation page with passing appropriate message
            const data = { jumbo_header: 'Abbreviation Script Error Encountered', jumbo_header_description: 'We have encountered an issue with an operation', page_title: 'Abbreviation Error', message: `Your big html file could not be uploaded. Please ensure you are uploading in proper format as instructed.` };
            res.render(__dirname + '/public/view/abbreviation/upload_failed', data);
        }
    });
});

routes.get('/abbreviation/execute', function(req, res) {
    abbreviation.execute(req.session.userFolderName);

    let ABBR_LIST = abbreviation.getAbbrList();

    const SCRIPT_ANALYTICS = abbreviation.getScriptAnalytics();

    const data = { jumbo_header: 'Abbreviation of Big HTML', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Abbreviation Script', SCRIPT_ANALYTICS: SCRIPT_ANALYTICS, ABBR_LIST: ABBR_LIST };
    res.render(__dirname + '/public/view/abbreviation/abbr_retreived', data);

});

routes.get('/abbreviation/download', function(req, res) {
    let ABBR_LIST = abbreviation.getAbbrJsonFormat();
    res.xls('abbreviations_list.xlsx', ABBR_LIST);
});

routes.get('/abbreviation/uploadExcelForm', function(req, res) {
    const data = { jumbo_header: 'Abbreviation of Big HTML', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Abbreviation Script' };
    res.render(__dirname + '/public/view/abbreviation/uploadExcelForm', data);
});

routes.post('/abbreviation/uploadExcel', function(req, res) {
    // console.log('Uploading for : ', req.session.userFolderName);
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.fileUploaded.path;

        var newpath = path.join(__dirname, `./scripts/abbreviation/data/excel_uploads/${req.session.userFolderName}.xlsx`);

        // Upload the file
        const uploadStatus = abbreviation.uploadFile(files.fileUploaded, oldpath, newpath);
        console.log(uploadStatus);

        // Proceed if file was successfully uploaded
        if (uploadStatus) {
            console.log('upload successful');

            // Read the uploaded excel
            const EXCEL_DATA = abbreviation.readExcel(req.session.userFolderName);

            const data = { jumbo_header: 'Abbreviations of Big HTML', jumbo_header_description: `Current Session Token : ${req.session.userFolderName}`, page_title: 'Abbreviations of Big HTML', EXCEL_DATA: EXCEL_DATA };
            res.render(__dirname + '/public/view/abbreviation/uploadExcelDone', data);
        } else {
            // Redirect user to failed operation page with passing appropriate message
            const data = { jumbo_header: 'Abbreviation Script Error Encountered', jumbo_header_description: 'We have encountered an issue with an operation', page_title: 'Abbreviation Error', message: `Your excel file could not be uploaded. Please ensure you are uploading in proper format as instructed.` };
            res.render(__dirname + '/public/view/abbreviation/upload_failed', data);
        }
    });
});


module.exports = routes;