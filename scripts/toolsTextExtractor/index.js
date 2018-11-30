const path = require('path');
const fs = require('fs');
const interactivesFolderPath = path.join(__dirname, './data/input/Interactives/');
const outputFolderPath = path.join(__dirname, './data/output/');

const ScoreStyleClass = {
        QUESTION_TEXT: "question-text",
        MAX_VALUE: "max-value",
        OPTION_TEXT: "option-text",
        OPTION_VALUE: "option-value",
        TEXT_BLUR: "text-blur",
        VALUE_BLUR: "value-blur",
        SCORE_BLOCK_TOP_OUTER: "score-block-top-outer",
        SCORE_BLOCK_MIDDLE_OUTER: "score-block-middle-outer",
        SCORE_BLOCK_TOP_INNER: "score-block-top-inner",
        SCORE_BLOCK_MIDDLE_INNER: "score-block-middle-inner",
        SCORE_BLOCK_BLUR: "score-block-blur",
        SCORE_RESULT_OUTER: "score-result-outer",
        SCORE_RESULT_INNER: "score-result-inner"
    },
    Mode = {
        FOCUS: "focus",
        BLUR: "blur"
    },
    Dimensions = {
        INNER: "-inner",
        OUTER: "-outer"
    },
    Scroll = {
        LENGTH_SHORT: 100,
        LENGTH_LONG: 700
    },
    BoxTypes = {
        FOOTER: "footer"
    },
    FooterButtons = {
        PDF_BUTTON: "pdfButton",
        RESET_BUTTON: "resetButton",
        REF_BUTTON: "refButton",
        MORE_INFO_BUTTON: "moreInfoButton"
    },
    StyleClass = {
        ABB_BUTTON: "abb-button",
        PDF_IMAGE: "pdf-image",
        REFERENCE_BOX: "reference-box",
        STATIC_REFERENCE_BOX: "static-reference-box",
        FOOTER: "footer",
        FLIP_PDF_BUTTON: "flip-pdf-button",
        EXCEPTION_MESSAGE: "exception-message",
        RESET_BUTTON: "reset-button",
        TEXT_LEFT: "text-left"
    },
    ResultBoxTypes = {
        RESULT_BOX: "result-box",
        SCORE_BOX: "score-box",
        RESULT_SCORE_BOX: "result-score-box",
        NONE: "none",
        FOOTER: "footer"
    };

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

        // Sanitize the JS constants and variables used in this JS content into string
        content = this.sanitizeConstants(content);
        // console.log(content);
        // console.log(JSON.parse(content));

    }

    sanitizeConstants(content) {

        const findAndReplaceArray = {};
        findAndReplaceArray['ResultBoxTypes.RESULT_SCORE_BOX'] = ResultBoxTypes.RESULT_SCORE_BOX;
        findAndReplaceArray['BoxTypes.FOOTER'] = BoxTypes.FOOTER;
        findAndReplaceArray['ResultBoxTypes.RESULT_SCORE_BOX'] = ResultBoxTypes.RESULT_SCORE_BOX;
        findAndReplaceArray['FooterButtons.REF_BUTTON'] = FooterButtons.REF_BUTTON;
        findAndReplaceArray['FooterButtons.MORE_INFO_BUTTON'] = FooterButtons.MORE_INFO_BUTTON;
        findAndReplaceArray['FooterButtons.RESET_BUTTON'] = FooterButtons.RESET_BUTTON;

        for (var key in arr) {
            // skip loop if the property is from prototype
            if (!findAndReplaceArray.hasOwnProperty(key)) continue;


        }

        content = content.replace('ResultBoxTypes.RESULT_SCORE_BOX', `"${ResultBoxTypes.RESULT_SCORE_BOX}"`);
        content = content.replace('BoxTypes.FOOTER', `"${BoxTypes.FOOTER}"`);
        content = content.replace('FooterButtons.REF_BUTTON', `"${FooterButtons.REF_BUTTON}"`);
        content = content.replace('FooterButtons.MORE_INFO_BUTTON', `"${FooterButtons.MORE_INFO_BUTTON}"`);
        content = content.replace('FooterButtons.RESET_BUTTON', `"${FooterButtons.RESET_BUTTON}"`);
        // content = content.replace('buttonRow', `"buttonRow"`);
        content = this.findAndReplaceKeyword(content, 'buttonRow', `"buttonRow"`);
        return content;
    }

    // This function finds and replaces all occurrences of keywords in content with expected string
    findAndReplaceKeyword(content, keyword, expected) {
        var find = keyword;
        var re = new RegExp(find, 'g');

        content = content.replace(re, expected);
        return content;
    }

    getOutliersList() {
        // Contains list of texts which we need to strip off from content to make it into a pure JSON.
        return ['var scoreData = ', 'var text = ', ';'];
    }

}

let obj = new ToolsTextExtractor();

module.exports = obj;