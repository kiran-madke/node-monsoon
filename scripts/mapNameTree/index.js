const path = require('path');
const fs = require('fs');

const combinedJSONPath = path.join(__dirname, './data/inputData/combinedGTS/combinedGTS.json');
const TOCJSONFolderPath = path.join(__dirname, './data/inputData/TOCJson/');
const outputFolderPath = path.join(__dirname, './data/outputData/');

class mapNameTree {
    constructor() {
        this.combinedJSONPath = combinedJSONPath;
        this.TOCJSONFolderPath = TOCJSONFolderPath;
        this.outputFolderPath = outputFolderPath;
        this.parsedGTSContent = [];
    }

    execute() {

        // Read the combined GTS file
        let readStatus = this.readCombinedGTSFile();

        if (readStatus) {
            // Read TOC JSON directory
            this.readTOCJSONDirectory();
            console.log('Completed reading TOC JSON directory');

            // Write out to the output file
            this.writeToOutput(JSON.stringify(this.parsedGTSContent, null, 2));
        } else {
            console.log('Error occurred while reading GTS file');
        }

        return true;
    }

    writeToOutput(content) {
        fs.writeFileSync(path.join(this.outputFolderPath, 'mappedCombinedGTS.json'), content, 'utf-8', function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }

    readCombinedGTSFile() {
        // First Check if combined GTS file exits
        if (fs.existsSync(combinedJSONPath)) {
            console.log('Combined GTS File exists..');

            // Read the file
            console.log('Reading GTS content');
            let stringContent = fs.readFileSync(combinedJSONPath, 'utf8');
            this.parsedGTSContent = JSON.parse(stringContent);
            console.log('Completed Reading GTS content');

            return true;
        } else {
            console.log('Combined GTS File not found !');
            return false;
        }
    }

    readTOCJSONDirectory() {
        let THIS = this;

        // Check if TOC JSON Folder directory exists
        if (fs.existsSync(TOCJSONFolderPath)) {
            console.log('TOC JSON Folder Exists..');

            let GLFolders = fs.readdirSync(TOCJSONFolderPath);
            GLFolders.forEach(function(GLFolder) {
                // Proceed and ignore following files:
                /**
                 * Tools folder
                 * extralinks json
                 * guidelinesTOC_old.json
                 * guidelinesTOC.json
                 */
                if (THIS.isGLFolder(GLFolder)) {
                    // Read the GL Folder Directory
                    console.log('Reading directory : ', GLFolder);
                    let files = fs.readdirSync(path.join(TOCJSONFolderPath, `./${GLFolder}/`));
                    files.forEach((file) => {
                        // Ignore other files except Toc Tree file
                        if (THIS.isTocTreeFile(file)) {
                            console.log('Reading file : ', file);

                            let stringContent = fs.readFileSync(path.join(TOCJSONFolderPath, `./${GLFolder}/${file}`), 'utf8');
                            // console.log(stringContent);

                            // Parse this content
                            let parsedContent = JSON.parse(stringContent);
                            // console.log(parsedContent);

                            parsedContent.forEach(obj => {
                                // Map with combinedGTS
                                parsedContent.forEach(obj => {
                                    THIS.mapWithCombinedGTSObjects(obj);
                                });
                            });
                        } else {
                            console.log('Ignoring file : ', file);
                        }
                    });

                } else {
                    console.log('Ignored file : ', GLFolder);
                }

            });
            return true;
        } else {
            console.log('TOC JSON Folder was not found');
            return false;
        }

    }

    mapWithCombinedGTSObjects(tocTreeObj) {
        // console.log(tocTreeObj);
        this.parsedGTSContent.forEach(gtsObj => {
            if (tocTreeObj.htmlpage === gtsObj.page) {
                gtsObj.nametree = tocTreeObj.nametree;
            }
        });
    }

    isTocTreeFile(fileName) {
        return fileName.includes('TocTree');
    }

    isGLFolder(fileName) {
        let blockFilesArray = [];
        blockFilesArray.push('Tools');
        blockFilesArray.push('guidelinesTOC.json');
        blockFilesArray.push('guidelinesTOC_old.json');
        blockFilesArray.push('extraLinksTOC.json');

        return !blockFilesArray.includes(fileName);
    }

}

let obj = new mapNameTree();

module.exports = obj;