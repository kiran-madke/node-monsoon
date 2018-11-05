const path = require('path');
const fs = require('fs');

const searchFolderPath = path.join(__dirname, './data/inputData/SearchFiles/');
const TOCJsonFolderPath = path.join(__dirname, './data/inputData/TOCJson/');

class mergeTocTreeGTS {
    constructor() {
        this.searchFolderPath = searchFolderPath;
        this.TOCJsonFolderPath = TOCJsonFolderPath;
        this.combinedContentArray = [];
    }

    execute() {

        this.readAllGTSFiles();

        return true;
    }

    getFilePath(fileName) {
        return path.join(this.searchFolderPath, `./${fileName}`);
    }

    readAllGTSFiles() {
        let THIS = this;
        fs.readdir(this.searchFolderPath, function(err, filenames) {
            if (err) {
                // onError(err);
                return;
            }
            filenames.forEach(function(filename) {
                // IGNORE IDX JSON
                if (filename.toLowerCase() !== 'idx.json') {
                    fs.readFile(THIS.searchFolderPath + filename, 'utf-8', function(err, content) {
                        if (err) {
                            // onError(err);
                            return;
                        }
                        THIS.processGTSContent(filename, content);
                    });
                }
            });
        });
    }

    // Filename expected : gts_1.json
    // Content expected : [{"page":"","text":""}]
    processGTSContent(filename, content) {
        let glID = this.extractGlIDfromFileName(filename);
        console.log(glID);

        this.pushContentToCombinedArray(glID, JSON.parse(content));

    }

    pushContentToCombinedArray(glID, content) {
        let THIS = this;
        content.forEach(obj => {
            // Extract contents out of [] inside parsed json and push it to combinedContentArray
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