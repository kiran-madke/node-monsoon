const path = require('path');
const fs = require('fs');
const interactivesFolderPath = path.join(__dirname, './data/input/Interactives/');
const outputFolderPath = path.join(__dirname, './data/output/');

class ToolsTextExtractor {
    constructor() {
        this.countDataFiles = 0;
    }

    execute() {

        // Read Directory Interactives
        this.readInteractivesDirectorySync();

        console.log(`We have about : ${this.countDataFiles} data files`);

        return true;
    }

    readInteractivesDirectorySync() {
        let THIS = this;

        // Check if Interactives Folder directory exists
        if (fs.existsSync(interactivesFolderPath)) {
            console.log('TOC JSON Folder Exists..');

            let interactivesFolder = fs.readdirSync(interactivesFolderPath);
            interactivesFolder.forEach(function(fileName) {
                // We need to screen the file name to only process data files and ignore others

                // TEMPORARILY PROCESS ONLY ONE FILE
                if (fileName == 'interactive_0000241_data.js') {
                    THIS.screenFile(fileName);
                }
            });
            return true;
        } else {
            console.log('Interactives Folder was not found');
            return false;
        }

    }

    screenFile(fileName) {
        const extName = path.extname(fileName);
        // We want to process only JS files
        if (extName == '.js') {
            if (this.isDataFile(fileName)) {
                // Count Data Files (Increment the counter)
                this.countDataFiles += 1;
                console.log(fileName);

                // Read this Data File
                this.readDataFileSync(fileName);
            }
        }
    }

    readDataFileSync(dataFileName) {
        // For reading we need to have the path of the file
        const dataFilePath = path.join(interactivesFolderPath, dataFileName);

        // Check if this path even exists or not
        if (fs.existsSync(dataFilePath)) {
            // Read the contents of this data file
            let content = fs.readFileSync(dataFilePath, 'utf8');

            // We need to pre-process the data file to convert from JS to pure JSON
            this.preProcessDataFileContent(dataFileName, content);
        } else {
            console.log(`${dataFileName} was not found on its location!`);
        }

    }

    isDataFile(fileName) {
        return fileName.split('_').indexOf('data.js') !== -1;
    }

    preProcessDataFileContent(dataFileName, content) {

        // We need to pre-process the data file to convert from JS to pure JSON
        const outliersList = this.getOutliersList();
        outliersList.forEach(outlier => {
            if (content.indexOf(outlier) !== -1) {
                content = content.replace(outlier, '');
                // console.log(JSON.parse(content));
            }
        });

        // let regEx = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/g;
        // content = content.replace(regEx, '$1');
        const comment = content.substr(0, content.indexOf('[{'));
        content = content.replace(comment, '');

        content = stringifyBoxTypes(content);

    }

    stringifyBoxTypes(content) {

        const STYLE_CLASSES = {
            ResultBoxTypes: {
                RESULT_BOX: "result-box",
                SCORE_BOX: "score-box",
                RESULT_SCORE_BOX: "result-score-box",
                NONE: "none",
                FOOTER: "footer"
            },

            BoxTypes: {
                FOOTER: "footer"
            },

            FooterButtons: {
                PDF_BUTTON: "pdfButton",
                RESET_BUTTON: "resetButton",
                REF_BUTTON: "refButton",
                MORE_INFO_BUTTON: "moreInfoButton"
            }
        }

        content = content.replace('ResultBoxTypes.RESULT_SCORE_BOX', '');
    }

    getOutliersList() {
        // Contains list of texts which we need to strip off from content to make it into a pure JSON.
        return ['var scoreData = ', 'var text = ', ';'];
    }

}

let obj = new ToolsTextExtractor();

module.exports = obj;