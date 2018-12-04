const path = require('path');
const fs = require('fs');
const hyphenate = require('./hyphenate');
var unzipper = require('unzipper');
const isDirectory = require('is-directory');

const inputFolderPath = path.join(__dirname, './data/input/');
const outputFolderPath = path.join(__dirname, './data/output/');
const zipFilePath = path.join(__dirname, './data/uploaded_zip_data/data.zip');

let scriptLogData = [];

let SET_LANGUAGE = "en";
let SCRIPT_ANALYTICS = [];

function initializeScriptAnalytics() {
    SCRIPT_ANALYTICS.TOTAL_EXECUTION_TIME = 0;
    SCRIPT_ANALYTICS.TOTAL_GL_FOLDERS_COUNT = 0;
    SCRIPT_ANALYTICS.TOTAL_HYPHENATED_WORDS_COUNT = 0;
    SCRIPT_ANALYTICS.TOTAL_IGNORED_FILES_COUNT = 0;
    SCRIPT_ANALYTICS.TOTAL_TOOL_HTML_FILES_COUNT = 0;
    SCRIPT_ANALYTICS.TOTAL_HYPHENATED_FILES_COUNT = 0;
}

function scriptLog(msg) {
    scriptLogData.push(msg);
}

function displayScriptAnalytics(start) {
    scriptLog('');
    scriptLog('');
    scriptLog('***************SCRIPT ANALYTICS************************');
    scriptLog(`TOTAL GL FOLDERS = ${SCRIPT_ANALYTICS.TOTAL_GL_FOLDERS_COUNT}`);
    scriptLog(`TOTAL FILES HYPHENATED = ${SCRIPT_ANALYTICS.TOTAL_HYPHENATED_FILES_COUNT}`);
    scriptLog(`TOTAL FILES IGNORED (HTML+JS+PNG+CSS) =  ${SCRIPT_ANALYTICS.TOTAL_IGNORED_FILES_COUNT}`);
    scriptLog(`TOTAL TOOL HTML FILES IGNORED =  ${SCRIPT_ANALYTICS.TOTAL_TOOL_HTML_FILES_COUNT}`);
    scriptLog(`TOTAL WORDS HYPHENATED =  ${SCRIPT_ANALYTICS.TOTAL_HYPHENATED_WORDS_COUNT}`);

    var duration = clock(start);
    SCRIPT_ANALYTICS.TOTAL_EXECUTION_TIME = (duration / 1000).toFixed(6);
    scriptLog("TOTAL EXECUTION TIME = " + (duration / 1000).toFixed(6) + " second(s)");
    scriptLog('***************************************');
}

function clock(start) {
    if (!start) return process.hrtime();
    var end = process.hrtime(start);
    return Math.round((end[0] * 1000) + (end[1] / 1000000));
}


class Hyphenation {

    execute() {
        initializeScriptAnalytics();
        var start = clock();
        // Initialise the script log array
        scriptLogData = [];
        scriptLog('SCRIPT EXECUTION STARTED..');
        scriptLog(`_________________________________________`);

        // Read the input directory folder
        this.readInputFolderSync();

        scriptLog(`_________________________________________`);
        scriptLog(`SCRIPT EXECUTION COMPLETE!`);
        displayScriptAnalytics(start);

        console.log(JSON.stringify(scriptLogData, null, 2));
        return JSON.stringify(scriptLogData, null, 2);
    }

    getHyphenatedWord(word) {
        return hyphenate.conv(word, SET_LANGUAGE);
    }

    readInputFolderSync() {
        const THIS = this;

        if (fs.existsSync(inputFolderPath)) {
            scriptLog(`INPUT DIRECTORY FOUND : ${inputFolderPath}`);
            scriptLog(`Now started reading input folder`);

            if (isDirectory.sync(inputFolderPath)) {
                const inputFolder = fs.readdirSync(inputFolderPath);
                inputFolder.forEach(function(fileName) {

                    scriptLog(`_________________________________________`);

                    // THIS.readInputFileSync(fileName);
                    THIS.readGlFolderSync(fileName);

                    // Increment GL folder Count
                    SCRIPT_ANALYTICS.TOTAL_GL_FOLDERS_COUNT++;

                });
            } else {
                console.log('Non-directory encountered');
            }
        } else {
            scriptLog(`DID NOT FIND : ${inputFolderPath}`);
        }
    }

    readGlFolderSync(GL_Folder_name) {
        const THIS = this;
        const GL_Folder_Path = path.join(inputFolderPath, GL_Folder_name);
        console.log(GL_Folder_Path);
        if (fs.existsSync(GL_Folder_Path)) {
            scriptLog(`GL FOLDER DIRECTORY FOUND : ${GL_Folder_Path}`);
            scriptLog(`Now started reading GL folder`);

            if (isDirectory.sync(GL_Folder_Path)) {
                const GL_Folder = fs.readdirSync(GL_Folder_Path);
                GL_Folder.forEach(function(fileName) {

                    THIS.readInputFileSync(GL_Folder_name, GL_Folder_Path, fileName);
                    // scriptLog(fileName);

                });
            } else {
                console.log('Non-directory encountered');
            }


        } else {
            scriptLog(`DID NOT FIND : ${GL_Folder_Path}`);
        }
    }

    shouldIgnoreFile(fileName) {
        // Make sure we ignore following categories
        // 1. All files which are non-html extension
        // 2. All files which are old.html
        // 3. All files which are flip.html
        if ((path.extname(fileName) != '.html') || (fileName.includes('old')) || (fileName.includes('flip'))) {
            return true;
        }
        return false;
    }

    readInputFileSync(GL_Folder, GL_Folder_Path, fileName) {
        // Make sure we are reading only HTML file
        if (!this.shouldIgnoreFile(fileName)) {
            // scriptLog(`_________________________________________`);
            // Increment total files count
            SCRIPT_ANALYTICS.TOTAL_HYPHENATED_FILES_COUNT++;

            //Read this html file
            const filePath = path.join(GL_Folder_Path, fileName);
            // Check if this path even exists or not
            if (fs.existsSync(filePath)) {
                // scriptLog(`Reading the html file : ${fileName}`);
                // Read the contents of this data file
                let content = fs.readFileSync(filePath, 'utf8');

                let hyphenatedContent = this.getHyphenatedContent(content);

                // Write the hyphenated content to output folder file
                // fs.writeFileSync(outputFolderPath + fileName, hyphenatedContent);

                // Write the hyphenated content to the appropriate GL folder inside the output folder.
                // Create a GL folder in output directory
                const output_GL_folder_path = path.join(outputFolderPath, GL_Folder);
                // Create a GL folder in output if it doesn't exist
                if (!fs.existsSync(output_GL_folder_path)) {
                    fs.mkdirSync(output_GL_folder_path);
                }
                // Create/write in file inside this GL folder
                const outputFilePath = path.join(output_GL_folder_path, fileName);
                fs.writeFileSync(outputFilePath, hyphenatedContent);

            } else {
                scriptLog(`File not found on location : ${fileName}`);
            }

        } else {
            // Increment the ignored files count
            SCRIPT_ANALYTICS.TOTAL_IGNORED_FILES_COUNT++;
            // scriptLog(`Ignoring the file : ${fileName}`);
        }
    }

    getHyphenatedContent(content) {
        const THIS = this;
        SCRIPT_ANALYTICS.SINGLE_FILE_HYPHENATED_WORDS_COUNT = 0;
        // scriptLog(`Started hyphenating...`);

        let hyphenatedContent = '';

        // Following regex is used to extract the text inside the body tag; including the body tags
        var extractBodyContentPattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
        var array_matches = extractBodyContentPattern.exec(content);
        if (array_matches != null) {

            let bodyContent = array_matches[1];

            // Following regex is used to extract 6+ character words from the text; which are not inside any <> html tags
            var extractWordsPattern = /(([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])+)(?![^<]*>|[^<>]<\/)/g;
            var word_matches_array = bodyContent.match(extractWordsPattern);
            if (word_matches_array != null) {
                // Find and replace
                word_matches_array.forEach(element => {

                    // Following Regex is used to avoid replacing text inside <> html tags.
                    var re = new RegExp('((' + element + ')+)(?![^<]*>|[^<>]<\/)', 'g');
                    let hyphenatedWord = THIS.getHyphenatedWord(element);
                    bodyContent = bodyContent.replace(re, hyphenatedWord);

                    // Increment our word counter
                    SCRIPT_ANALYTICS.SINGLE_FILE_HYPHENATED_WORDS_COUNT++;
                    // Increment total word counter
                    SCRIPT_ANALYTICS.TOTAL_HYPHENATED_WORDS_COUNT++;
                });

                // Hyphenate the body content 
                hyphenatedContent = bodyContent;

                // Replace demo
                hyphenatedContent = content.replace(extractBodyContentPattern, `<body onload="_geturl1();">${hyphenatedContent}</body>`);
            } else {
                // This was a tool html file
                // so we copy content as it is without changing anything
                hyphenatedContent = content;

                // Increment TOOL HTML file counter
                SCRIPT_ANALYTICS.TOTAL_TOOL_HTML_FILES_COUNT++;
            }
            // scriptLog(`${SCRIPT_ANALYTICS.SINGLE_FILE_HYPHENATED_WORDS_COUNT} words were hyphenated..`)
        } else {

            // There's no body tag content in this html file
            // So return the content as it is.
            console.log(content);
            hyphenatedContent = content;
            scriptLog(content);
        }

        return hyphenatedContent;
    }

    uploadZip(fileUploaded, oldpath, newpath) {
        try {
            let data = fs.readFileSync(oldpath);
            // Write the file
            var test = fs.writeFileSync(newpath, data);

            // Delete the file
            fs.unlinkSync(oldpath);

            console.log('File uploaded');
        } catch (error) {

        }

    }

    getListOfUnzippedFiles() {
        const list = [];

        if (fs.existsSync(inputFolderPath)) {

            const inputFolder = fs.readdirSync(inputFolderPath);
            inputFolder.forEach(function(fileName) {
                const filePath = path.join(inputFolderPath, fileName);
                obj = [];
                obj.fileName = fileName;
                obj.isFolder = isDirectory.sync(filePath);
                list.push(obj);
            });
        } else {
            scriptLog(`DID NOT FIND : ${inputFolderPath}`);
        }


        console.log(JSON.stringify(scriptLogData, null, 2));
        return list;
    }

    getScriptAnalytics() {
        return SCRIPT_ANALYTICS;
    }

    unzip_data(fileDetails, callback_fn) {
        // console.log(fileDetails);
        console.log('Unzipping');

        fs.createReadStream(zipFilePath)
            .pipe(unzipper.Extract({ path: inputFolderPath })).on('close', function() {
                console.log('UNZIP SUCCESSFUL');

                // Redirect to upload done page
                callback_fn();
            });
    }

    download(req, res) {

        const downloadPath = path.join(outputFolderPath, 'data.zip');
        res.download(downloadPath);
    }

    getOutputFolderPath() {
        return outputFolderPath;
    }
}

let obj = new Hyphenation();

module.exports = obj;