const path = require('path');
const fs = require('fs');

const searchFolderPath = path.join(__dirname, './data/inputData/SearchFiles/');
const TOCJsonFolderPath = path.join(__dirname, './data/inputData/TOCJson/');

const dataFolderPath = path.join(__dirname, './data/');
const inputFolderPath = path.join(__dirname, './data/inputData/');
const outputFolderPath = path.join(__dirname, './data/outputData/');

class mergeTocTreeGTS {
    constructor() {
        this.searchFolderPath = searchFolderPath;
        this.TOCJsonFolderPath = TOCJsonFolderPath;
        this.combinedContentArray = [];
        this.fileCount = 0;

        // First create required folder structure if not present
        this.createRequireFolderStructure();
    }

    createRequireFolderStructure() {
        const requiredFolders = [];
        requiredFolders.push(dataFolderPath);
        requiredFolders.push(inputFolderPath);
        requiredFolders.push(outputFolderPath);

        requiredFolders.forEach(folder => {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder);
            }
        });
    }

    execute() {

        // this.readAllGTSFiles();
        this.readSearchFilesDirectorySync();
        console.log('Total files read : ', this.fileCount);

        return true;
    }

    readSearchFilesDirectorySync() {
        var files = fs.readdirSync(this.searchFolderPath);
        for (var i in files) {
            // console.log(files[i]);
            if (files[i] !== 'idx.json') {
                let content = this.readFileSync(this.searchFolderPath + files[i]);
                this.processGTSContent(files[i], content);
            }
        }
    }

    readFileSync(filePath) {
        if (fs.existsSync(filePath)) {
            // console.log(filePath + ' File exists');
            console.log(`Now reading contents of ${filePath}`);
            return fs.readFileSync(filePath, 'utf8');
        } else {
            console.log(filePath + ' File does not exist');
        }
    }

    getFilePath(fileName) {
        return path.join(this.searchFolderPath, `./${fileName}`);
    }

    readAllGTSFiles() {
        let THIS = this;
        fs.readdirSync(this.searchFolderPath, function(err, filenames) {
            if (err) {
                // onError(err);
                return;
            }
            filenames.forEach(function(filename) {
                // IGNORE IDX JSON
                if (filename.toLowerCase() !== 'idx.json') {
                    fs.readFileSync(THIS.searchFolderPath + filename, 'utf-8', function(err, content) {
                        if (err) {
                            // onError(err);
                            console.log(err);
                            return;
                        }
                        console.log(content);
                        THIS.processGTSContent(filename, content);
                    });
                }
            });
        });
    }

    // Filename expected : gts_1.json
    // Content expected : [{"page":"","text":""}]
    processGTSContent(filename, content) {
        // console.log(content);
        let glID = this.extractGlIDfromFileName(filename);
        console.log(glID);

        this.pushContentToCombinedArray(glID, JSON.parse(content));

    }

    pushContentToCombinedArray(glID, content) {
        let THIS = this;
        content.forEach(obj => {
            // Extract contents out of [] inside parsed json and push it to combinedContentArray
            obj.guidelineID = glID;
            // obj.test = '123';
            // console.log(obj);
            THIS.combinedContentArray.push(obj);
        });

        this.writeContentToFile(JSON.stringify(this.combinedContentArray, null, 2));
    }

    extractGlIDfromFileName(filename) {
        return filename.replace("gts_", "").replace(".json", "");
    }

    writeContentToFile(content) {
        fs.writeFileSync(path.join(__dirname, './data/outputData/combinedSearchJSON.json'), content, 'utf-8', function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }
}

let obj = new mergeTocTreeGTS();

module.exports = obj;