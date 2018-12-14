const path = require('path');
const fs = require('fs');

const inputFolderPath = path.join(__dirname, './data/input/');
const outputFolderPath = path.join(__dirname, './data/output/');

class Cutting {
    constructor() {
        this.scriptLogData = [];
        this.SCRIPT_ANALYTICS = [];
        this.inputFileContent = '';
        this.USER_TOKEN = '';
        this.USER_INPUT_FILE_PATH = '';
        this.cutInputFileContent = '';
    }

    initializeScriptAnalytics() {
        this.SCRIPT_ANALYTICS.TOTAL_EXECUTION_TIME = 0;
        this.SCRIPT_ANALYTICS.TOTAL_CUTTING_KEYS_INSERTED = 0;
    }

    scriptLog(msg) {
        this.scriptLogData.push(msg);
    }

    executeCutting(userToken) {
        this.scriptLog('Starting execution of script');
        console.log(userToken);
        // Set user token
        this.USER_TOKEN = userToken;

        // Set user file path 
        this.USER_INPUT_FILE_PATH = path.join(inputFolderPath, `./${this.USER_TOKEN}.html`);
        this.USER_OUTPUT_FILE_PATH = path.join(outputFolderPath, `./${this.USER_TOKEN}.html`);

        //Read input file
        this.inputFileContent = this.readInputFileSync();

        // Process this content to add cutting keys on this content
        this.cutInputFileContent = this.addCuttingKeysToContent();

        // Write this cutting keys inserted content to output file
        this.writeCuttingFileToOutput();

        // Stringified script log
        const stringifiedScriptLog = JSON.stringify(this.scriptLogData, null, 2);
        console.log(stringifiedScriptLog);
        // Script log clear
        this.clearScriptLog();
        return stringifiedScriptLog;
    }

    clearScriptLog() {
        this.scriptLogData = [];
    }

    readInputFileSync() {

        // Check if user token input file exists or not
        if (fs.existsSync(this.USER_INPUT_FILE_PATH)) {
            this.scriptLog('Reading input file now');

            // Read the contents of this data file
            let content = fs.readFileSync(this.USER_INPUT_FILE_PATH, 'utf8');
            // console.log(content);

            return content;

        } else {
            this.scriptLog('User input file was not found');
            return '';
        }

    }

    addCuttingKeysToContent() {
        // Check if content is non-empty
        var content = this.inputFileContent;
        if (content !== '') {

            // First remove any existing cutting keys present on the file content
            content = this.removeAllCuttingKeys(content);

            this.scriptLog('Adding cutting keys to the content now');


            // Count number of cuttings
            const match_pattern = /(<p class="h1">+)/g;
            this.SCRIPT_ANALYTICS.TOTAL_CUTTING_KEYS_INSERTED = (content.match(match_pattern)).length;

            var re = new RegExp('(<p class="h1">+)', 'g');
            content = content.replace(re, `<h1 class="page_end_Here">xxxxxxxxx</h1>
            <p class="h1">`);

            this.scriptLog('Finished adding cutting keys');
            this.scriptLog(`Total ${this.SCRIPT_ANALYTICS.TOTAL_CUTTING_KEYS_INSERTED} cutting keys were inserted`);

            return content;

        } else {
            this.scriptLog('Empty Content encountered');
            return '';
        }
    }

    removeAllCuttingKeys(content) {
        var re = new RegExp('(<h1 class="page_end_Here">xxxxxxxxx</h1>+)', 'g');
        content = content.replace(re, ``);
        return content;
    }

    writeCuttingFileToOutput() {
        const THIS = this;
        this.scriptLog('Writing cutting keys inserted contents to output file now');

        fs.writeFile(this.USER_OUTPUT_FILE_PATH, this.cutInputFileContent, function(err) {
            if (err) throw err;
            THIS.scriptLog('Output file successfully created and written');
        });
    }

    getScriptAnalytics() {
        return this.SCRIPT_ANALYTICS;
    }

    download(res) {
        console.log(this.USER_OUTPUT_FILE_PATH);
        res.download(this.USER_OUTPUT_FILE_PATH);
    }
}


let obj = new Cutting();

module.exports = obj;