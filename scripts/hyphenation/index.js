const path = require('path');
const fs = require('fs');
const hyphenate = require('./hyphenate');
var unzipper = require('unzipper');
const isDirectory = require('is-directory');
const archiver = require('archiver');

const dataFolderPath = path.join(__dirname, './data/');
const inputFolderPath = path.join(__dirname, './data/input/');
const outputFolderPath = path.join(__dirname, './data/output/');
const uploadedZipFolderPath = path.join(__dirname, './data/uploaded_zip_data/');
const downloadZipFolderPath = path.join(__dirname, './data/download_zip_data/');

class Hyphenation {

    constructor() {
        this.USER_TOKEN = '';
        this.USER_INPUT_FOLDER_PATH = '';
        this.USER_OUTPUT_FOLDER_PATH = '';
        this.scriptLogData = [];
        this.SET_LANGUAGE = "en";
        this.SCRIPT_ANALYTICS = [];

        // Collection of REG EX
        this.REGEX_EXTRACT_BODY_PATTERN = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
        this.REGEX_EXTRACT_WORD_PATTERN = /(([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])+)(?![^<]*>|[^<>]<\/)/g;

        // First create required folder structure if not present
        this.createRequireFolderStructure();
    }

    createRequireFolderStructure() {
        const requiredFolders = [];
        requiredFolders.push(dataFolderPath);
        requiredFolders.push(inputFolderPath);
        requiredFolders.push(outputFolderPath);
        requiredFolders.push(uploadedZipFolderPath);
        requiredFolders.push(downloadZipFolderPath);

        requiredFolders.forEach(folder => {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder);
            }
        });
    }

    execute(userToken, language) {

        this.initializeScriptAnalytics();
        this.USER_TOKEN = userToken;
        this.SET_LANGUAGE = language;
        this.SCRIPT_ANALYTICS.LANGUAGE = this.SET_LANGUAGE;
        this.USER_INPUT_FOLDER_PATH = path.join(inputFolderPath, userToken);
        this.USER_OUTPUT_FOLDER_PATH = path.join(outputFolderPath, userToken);
        var start = this.clock();
        // Initialise the script log array
        this.scriptLogData = [];
        this.scriptLog('SCRIPT EXECUTION STARTED..');
        this.scriptLog(`HYPHENATION LANGUAGE SET AS ${this.SET_LANGUAGE}`);
        this.scriptLog(`_________________________________________`);

        // Read the input directory folder
        this.readInputFolderSync();

        this.scriptLog(`_________________________________________`);
        this.scriptLog(`SCRIPT EXECUTION COMPLETE!`);
        this.displayScriptAnalytics(start);

        console.log(JSON.stringify(this.scriptLogData, null, 2));

        // Create a zip of this user output folder and save it in data/download_zip_data
        this.zipUserOutputData();

        return JSON.stringify(this.scriptLogData, null, 2);
    }

    initializeScriptAnalytics() {
        this.SCRIPT_ANALYTICS.LANGUAGE = "en";
        this.SCRIPT_ANALYTICS.TOTAL_EXECUTION_TIME = 0;
        this.SCRIPT_ANALYTICS.TOTAL_GL_FOLDERS_COUNT = 0;
        this.SCRIPT_ANALYTICS.TOTAL_HYPHENATED_WORDS_COUNT = 0;
        this.SCRIPT_ANALYTICS.TOTAL_IGNORED_FILES_COUNT = 0;
        this.SCRIPT_ANALYTICS.TOTAL_TOOL_HTML_FILES_COUNT = 0;
        this.SCRIPT_ANALYTICS.TOTAL_HYPHENATED_FILES_COUNT = 0;
    }

    scriptLog(msg) {
        this.scriptLogData.push(msg);
    }

    clock(start) {
        if (!start) return process.hrtime();
        var end = process.hrtime(start);
        return Math.round((end[0] * 1000) + (end[1] / 1000000));
    }

    displayScriptAnalytics(start) {
        this.scriptLog('');
        this.scriptLog('');
        this.scriptLog('***************SCRIPT ANALYTICS************************');
        this.scriptLog(`TOTAL GL FOLDERS = ${this.SCRIPT_ANALYTICS.TOTAL_GL_FOLDERS_COUNT}`);
        this.scriptLog(`TOTAL FILES HYPHENATED = ${this.SCRIPT_ANALYTICS.TOTAL_HYPHENATED_FILES_COUNT}`);
        this.scriptLog(`TOTAL FILES IGNORED (HTML+JS+PNG+CSS) =  ${this.SCRIPT_ANALYTICS.TOTAL_IGNORED_FILES_COUNT}`);
        this.scriptLog(`TOTAL TOOL HTML FILES IGNORED =  ${this.SCRIPT_ANALYTICS.TOTAL_TOOL_HTML_FILES_COUNT}`);
        this.scriptLog(`TOTAL WORDS HYPHENATED =  ${this.SCRIPT_ANALYTICS.TOTAL_HYPHENATED_WORDS_COUNT}`);

        var duration = this.clock(start);
        this.SCRIPT_ANALYTICS.TOTAL_EXECUTION_TIME = (duration / 1000).toFixed(6);
        this.scriptLog("TOTAL EXECUTION TIME = " + (duration / 1000).toFixed(6) + " second(s)");
        this.scriptLog('***************************************');
    }

    getHyphenatedWord(word) {
        return hyphenate.conv(word, this.SET_LANGUAGE);
    }

    readInputFolderSync() {
        const THIS = this;

        if (fs.existsSync(this.USER_INPUT_FOLDER_PATH)) {
            this.scriptLog(`USER INPUT DIRECTORY FOUND : ${this.USER_INPUT_FOLDER_PATH}`);
            this.scriptLog(`Now started reading input folder`);

            if (isDirectory.sync(this.USER_INPUT_FOLDER_PATH)) {
                const inputFolder = fs.readdirSync(this.USER_INPUT_FOLDER_PATH);
                inputFolder.forEach(function(fileName) {

                    THIS.scriptLog(`_________________________________________`);

                    // THIS.readInputFileSync(fileName);
                    THIS.readGlFolderSync(fileName);

                });
            } else {
                console.log('Non-directory encountered');
            }
        } else {
            this.scriptLog(`DID NOT FIND : ${this.USER_INPUT_FOLDER_PATH}`);
        }
    }

    readGlFolderSync(GL_Folder_name) {
        const THIS = this;
        const GL_Folder_Path = path.join(this.USER_INPUT_FOLDER_PATH, GL_Folder_name);
        console.log(GL_Folder_Path);
        if (fs.existsSync(GL_Folder_Path)) {
            this.scriptLog(`GL FOLDER DIRECTORY FOUND : ${GL_Folder_Path}`);
            this.scriptLog(`Now started reading GL folder`);

            if (isDirectory.sync(GL_Folder_Path)) {

                // Increment GL folder Count
                THIS.SCRIPT_ANALYTICS.TOTAL_GL_FOLDERS_COUNT++;
                const GL_Folder = fs.readdirSync(GL_Folder_Path);
                GL_Folder.forEach(function(fileName) {

                    THIS.readInputFileSync(GL_Folder_name, GL_Folder_Path, fileName);
                    // this.scriptLog(fileName);

                });
            } else {
                console.log('Non-directory encountered');
            }


        } else {
            this.scriptLog(`DID NOT FIND : ${GL_Folder_Path}`);
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
            // this.scriptLog(`_________________________________________`);
            // Increment total files count
            this.SCRIPT_ANALYTICS.TOTAL_HYPHENATED_FILES_COUNT++;

            //Read this html file
            const filePath = path.join(GL_Folder_Path, fileName);
            // Check if this path even exists or not
            if (fs.existsSync(filePath)) {
                // this.scriptLog(`Reading the html file : ${fileName}`);
                // Read the contents of this data file
                let content = fs.readFileSync(filePath, 'utf8');

                let hyphenatedContent = this.getHyphenatedContent(content);

                // Write the hyphenated content to the appropriate GL folder inside the output folder.

                // Create user output folder first if it doesn't exist
                if (!fs.existsSync(this.USER_OUTPUT_FOLDER_PATH)) {
                    fs.mkdirSync(this.USER_OUTPUT_FOLDER_PATH);
                }

                // Create a GL folder in output directory
                const output_GL_folder_path = path.join(this.USER_OUTPUT_FOLDER_PATH, GL_Folder);
                // Create a GL folder in output if it doesn't exist
                if (!fs.existsSync(output_GL_folder_path)) {
                    fs.mkdirSync(output_GL_folder_path);
                }
                // Create/write in file inside this GL folder
                const outputFilePath = path.join(output_GL_folder_path, fileName);
                fs.writeFileSync(outputFilePath, hyphenatedContent);

            } else {
                this.scriptLog(`File not found on location : ${fileName}`);
            }

        } else {
            // Increment the ignored files count
            this.SCRIPT_ANALYTICS.TOTAL_IGNORED_FILES_COUNT++;
            // this.scriptLog(`Ignoring the file : ${fileName}`);
        }
    }

    zipUserOutputData() {
        console.log('Starting to create output zip');
        const sourcePath = this.USER_OUTPUT_FOLDER_PATH;
        const destinationPath = path.join(downloadZipFolderPath, `${this.USER_TOKEN}.zip`);

        // Check if Source directory which is set exists or not
        if (isDirectory.sync(sourcePath)) {
            this.archiveZip(sourcePath, destinationPath);

            // Check if Destination directory is created or not after archiving
            if (fs.existsSync(destinationPath)) {
                // Do something
                console.log('Output Zip Successfully created');


            } else {
                console.log('Failed to create output zip');
            }
        }
    }

    deleteUserIOFolders() {
        // Delete the output folder once zip is created
        this.deleteFolderRecursive(this.USER_OUTPUT_FOLDER_PATH);

        // Check if user output folder is deleted successfully
        if (!fs.existsSync(this.USER_OUTPUT_FOLDER_PATH)) {
            console.log('User output folder was deleted successfully');
        }

        // Delete the user input folder 
        this.deleteFolderRecursive(this.USER_INPUT_FOLDER_PATH);

        // Check if user output folder is deleted successfully
        if (!fs.existsSync(this.USER_INPUT_FOLDER_PATH)) {
            console.log('User input folder was deleted successfully');
        }
    }

    deleteFolderRecursive(path) {
        const THIS = this;
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function(file) {
                var curPath = path + "/" + file;
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    THIS.deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };

    archiveZip(sourcePath, destinationPath) {
        // create a file to stream archive data to.
        var output = fs.createWriteStream(destinationPath);
        var archive = archiver('zip', {
            zlib: { level: 9 } // Sets the compression level.
        });

        // listen for all archive data to be written
        // 'close' event is fired only when a file descriptor is involved
        output.on('close', function() {
            // console.log(archive.pointer() + ' total bytes');
            // console.log('archiver has been finalized and the output file descriptor has closed.');
        });

        // This event is fired when the data source is drained no matter what was the data source.
        // It is not part of this library but rather from the NodeJS Stream API.
        // @see: https://nodejs.org/api/stream.html#stream_event_end
        output.on('end', function() {
            // console.log('Data has been drained');
        });

        // good practice to catch warnings (ie stat failures and other non-blocking errors)
        archive.on('warning', function(err) {
            if (err.code === 'ENOENT') {
                // log warning
            } else {
                // throw error
                throw err;
            }
        });

        // good practice to catch this error explicitly
        archive.on('error', function(err) {
            throw err;
        });

        // pipe archive data to the file
        archive.pipe(output);

        // append files from a sub-directory, putting its contents at the root of archive
        archive.directory(sourcePath, false);

        // finalize the archive (ie we are done appending files but streams have to finish yet)
        // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
        archive.finalize();
    }

    getHyphenatedContent(content) {
        const THIS = this;
        this.SCRIPT_ANALYTICS.SINGLE_FILE_HYPHENATED_WORDS_COUNT = 0;
        // this.scriptLog(`Started hyphenating...`);

        let hyphenatedContent = '';

        // Remove all existing &shy; tags from the content
        content = this.removeExistingShyTags(content);

        // Following regex is used to extract the text inside the body tag; including the body tags
        var extractBodyContentPattern = this.REGEX_EXTRACT_BODY_PATTERN;
        var array_matches = extractBodyContentPattern.exec(content);
        if (array_matches != null) {

            let bodyContent = array_matches[1];

            // Replace forward slashes in content with forward slash+zero width space entity
            bodyContent = this.addZeroWidthEntity(bodyContent);

            // Following regex is used to extract 6+ character words from the text; which are not inside any <> html tags
            var word_matches_array = bodyContent.match(this.REGEX_EXTRACT_WORD_PATTERN);
            if (word_matches_array != null) {
                // Find and replace
                word_matches_array.forEach(element => {

                    // Following Regex is used to avoid replacing text inside <> html tags.
                    var re = new RegExp('((' + element + ')+)(?![^<]*>|[^<>]<\/)', 'g');
                    let hyphenatedWord = THIS.getHyphenatedWord(element);
                    bodyContent = bodyContent.replace(re, hyphenatedWord);

                    // Increment our word counter
                    THIS.SCRIPT_ANALYTICS.SINGLE_FILE_HYPHENATED_WORDS_COUNT++;
                    // Increment total word counter
                    THIS.SCRIPT_ANALYTICS.TOTAL_HYPHENATED_WORDS_COUNT++;
                });

                // Hyphenate the body content 
                hyphenatedContent = bodyContent;

                // First replace all occurrences of $1, $2 with $//1 and $//2. (Escaping before regex replacement)
                hyphenatedContent = this.getEscapedContent(hyphenatedContent, false);

                // Replace original content with hyphenated content (Notice: this hyphenated content still contains escaped content like $1->$//1, we'll need to revert it later)
                hyphenatedContent = content.replace(extractBodyContentPattern, `<body onload="_geturl1();">${hyphenatedContent}</body>`);

                // Revert the escaped stuff ($//1 -> $1)
                hyphenatedContent = this.getEscapedContent(hyphenatedContent, true);
            } else {
                // This was a tool html file
                // so we copy content as it is without changing anything
                hyphenatedContent = content;

                // Increment TOOL HTML file counter
                this.SCRIPT_ANALYTICS.TOTAL_TOOL_HTML_FILES_COUNT++;
            }
            // this.scriptLog(`${this.SCRIPT_ANALYTICS.SINGLE_FILE_HYPHENATED_WORDS_COUNT} words were hyphenated..`)
        } else {

            // There's no body tag content in this html file
            // So return the content as it is.
            hyphenatedContent = content;
            this.scriptLog(content);
        }

        return hyphenatedContent;
    }

    addZeroWidthEntity(content) {
        let re = /(\/)(?![^<]*>|[^<>]<\/)/g;

        return content.replace(re, '/&#8203;');
    }

    removeExistingShyTags(content) {
        return content.split('&shy;').join('');
    }

    getEscapedContent(content, shouldRevert) {

        const replace = {
            '$1': '$//1',
            '$2': '$//2',
            '$3': '$//3',
            '$4': '$//4',
            '$5': '$//5',
            '$6': '$//6',
            '$7': '$//7',
            '$8': '$//8',
            '$9': '$//9'
        };

        for (const key in replace) {
            if (replace.hasOwnProperty(key)) {
                const value = replace[key];
                const search = key;
                const replacement = value;
                content = shouldRevert ? content.split(replacement).join(search) : content.split(search).join(replacement);
            }
        }
        return content;
    }


    uploadZip(fileUploaded, oldpath, newpath) {
        try {
            let data = fs.readFileSync(oldpath);
            // Write the file
            fs.writeFileSync(newpath, data);

            // Delete the file
            fs.unlinkSync(oldpath);

            // Check if zip was successfully uploaded
            if (fs.existsSync(newpath)) {
                return true;
            } else {
                return false;
            }

            console.log('File uploaded');
        } catch (error) {

        }

    }

    getListOfUnzippedFiles(userFolderName) {
        const list = [];

        const userInputFolderNamePath = this.getUserInputFolderPath(userFolderName);

        if (fs.existsSync(userInputFolderNamePath)) {

            const inputFolder = fs.readdirSync(userInputFolderNamePath);
            inputFolder.forEach(function(fileName) {
                const filePath = path.join(userInputFolderNamePath, fileName);
                obj = [];
                obj.fileName = fileName;
                obj.isFolder = isDirectory.sync(filePath);
                list.push(obj);
            });
        } else {
            this.scriptLog(`DID NOT FIND : ${userInputFolderNamePath}`);
        }


        console.log(JSON.stringify(this.scriptLogData, null, 2));
        return list;
    }

    getUserInputFolderPath(userFolderName) {
        return path.join(inputFolderPath, userFolderName);
    }

    getScriptAnalytics() {
        return this.SCRIPT_ANALYTICS;
    }

    unzip_data(fileDetails, userFolderName, callback_fn) {
        // console.log(fileDetails);
        console.log(userFolderName);
        // console.log('Unzipping');
        if (userFolderName !== undefined) {
            const zipFilePath = path.join(uploadedZipFolderPath, `${userFolderName}.zip`);
            const userInputFolderNamePath = this.getUserInputFolderPath(userFolderName);

            fs.createReadStream(zipFilePath)
                .pipe(unzipper.Extract({ path: userInputFolderNamePath })).on('close', function() {
                    console.log('UNZIP SUCCESSFUL');

                    // Delete the zip file
                    fs.unlinkSync(zipFilePath);

                    // Redirect to upload done page
                    callback_fn();
                });
        }
    }

    download(res) {
        const downloadPath = path.join(downloadZipFolderPath, `${this.USER_TOKEN}.zip`);
        res.download(downloadPath);
    }

    getOutputFolderPath() {
        return outputFolderPath;
    }
}

let obj = new Hyphenation();

module.exports = obj;