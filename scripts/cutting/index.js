const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

const dataFolderPath = path.join(__dirname, './data/');
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

        // create required folder structure if not present
        this.createRequireFolderStructure();
    }

    initializeScriptAnalytics() {
        this.SCRIPT_ANALYTICS.TOTAL_EXECUTION_TIME = 0;
        this.SCRIPT_ANALYTICS.TOTAL_CUTTING_KEYS_INSERTED = 0;
    }

    scriptLog(msg) {
        this.scriptLogData.push(msg);
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

    executeCutting(userToken) {
        this.scriptLog('Starting execution of script');
        console.log(userToken);

        // initialize
        this.initializeScriptAnalytics();

        // Set user token
        this.USER_TOKEN = userToken;

        // Set user file path 
        this.USER_INPUT_FILE_PATH = path.join(inputFolderPath, `./${this.USER_TOKEN}.html`);
        this.USER_OUTPUT_FILE_PATH = path.join(outputFolderPath, `./${this.USER_TOKEN}.html`);

        //Read input file
        this.inputFileContent = this.readInputFileSync();
        const $ = cheerio.load(this.inputFileContent);
        // console.log($.html());

        // Process this content to add cutting keys on this content
        this.cutInputFileContent = this.addCuttingKeysToContent($);

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

    addCuttingKeysToContent($) {
        // Check if content is non-empty
        var content = this.inputFileContent;
        if (content !== '') {
            content = this.parseHTML($);

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

    parseHTML($) {
        // Add cutting keys to all h1 elements        
        // this.cut(".h1", null, $);
        $(".h1").each((i, h1_element) => {
            // Step 1 : Add cutting key before this h1 element
            $(`<h1 class="page_end_Here">xxxxxxxxx</h1>`).insertBefore(h1_element);
        });

        // Add cutting keys to h2 elements (except the ones which are immediate siblings to the h1 elements)
        // this.cut(".h2", 'h1', $);
        $(".h2").each((i, h2_element) => {

            // Check if previous sibling is h1 element
            if (!$(h2_element).prev().hasClass('h1')) {
                // Step 2 : Add cutting key before this h2 element
                $(`<h1 class="page_end_Here">xxxxxxxxx</h1>`).insertBefore(h2_element);
            }

        });

        // Add cutting keys to h3 elements (except the ones which are immediate siblings to the h2 elements)
        // this.cut(".h3", 'h2', $);
        $(".h3").each((i, h3_element) => {

            // Check if previous sibling is h2 element
            if (!$(h3_element).prev().hasClass('h2')) {
                // Step 2 : Add cutting key before this h3 element
                $(`<h1 class="page_end_Here">xxxxxxxxx</h1>`).insertBefore(h3_element);
            }

        });

        // Add cutting keys to h4 elements (except the ones which are immediate siblings to the h3 elements)
        // this.cut(".h4", 'h3', $);
        $(".h4").each((i, h4_element) => {

            // Check if previous sibling is h3 element
            if (!$(h4_element).prev().hasClass('h3')) {
                // Step 2 : Add cutting key before this h4 element
                $(`<h1 class="page_end_Here">xxxxxxxxx</h1>`).insertBefore(h4_element);
            }

        });

        return $.html();
    }

    /* cut(findLevelClass, prevLevelElement) {
        $(findLevelClass).each((i, element) => {

            if (findLevelClass != ".h1") {
                // Check if previous sibling is h1 element
                if (!$(element).prev().hasClass(prevLevelElement)) {
                    // Step 2 : Add cutting key before this h1 element

                }
            } else {
                $(`<h1 class="page_end_Here">xxxxxxxxx</h1>`).insertBefore(element);
            }

        });

} */

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



    uploadFile(fileUploaded, oldpath, newpath) {
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