const path = require('path');
const fs = require('fs');

const indexJSONPath = path.join(__dirname, './data/input/idx.json');
const guidelineTocJSONPath = path.join(__dirname, './data/input/guidelinesTOC.json');
const outputFolderPath = path.join(__dirname, './data/output/');

class mapIndexGLID {
    constructor() {
        this.indexJSONPath = indexJSONPath;
        this.guidelineTocJSONPath = guidelineTocJSONPath;
        this.outputFolderPath = outputFolderPath;
        this.indexJsonContent = '';
        this.guidelineTOCJsonContent = '';
    }

    execute() {
        // Read IDX JSON File
        this.indexJsonContent = this.readFileSync(this.indexJSONPath);
        // Read guidelineToc
        this.guidelineTOCJsonContent = this.readFileSync(this.guidelineTocJSONPath);

        // Map Guideline ID with Index JSON objects
        let newIndexJson = this.mapGuidelineID();
        // console.log(newIndexJson);

        // Write the new index file to output folder
        this.writeToOutput(JSON.stringify(newIndexJson, null, 2));

        return true;
    }

    writeToOutput(content) {
        fs.writeFileSync(path.join(this.outputFolderPath, 'idx.json'), content, 'utf-8', function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }

    mapGuidelineID() {

        // Process Index JSON
        let parsedIndexContent = JSON.parse(this.indexJsonContent);
        for (let i = 0; i < parsedIndexContent.length; i++) {
            let obj = parsedIndexContent[i];
            // Extract CMS id
            let cmsID = this.extractCMSID(obj);
            let glID = this.getGLIDfromCMSID(cmsID);
            if (glID !== '' && glID !== undefined) {
                // console.log(glID);
                parsedIndexContent[i].guidelineID = glID;
            } else {
                // console.log('Guideline ID undefined');
            }
        }
        return parsedIndexContent;
    }

    getGLIDfromCMSID(cmsID) {
        let glID = '';
        // console.log(cmsID);
        JSON.parse(this.guidelineTOCJsonContent).forEach(glObj => {
            // console.log(glObj.guidelineID);
            if (glObj.cmsID === cmsID) {
                // console.log('Guideline ID found');
                glID = glObj.guidelineID;
            }
        });
        return glID;
    }

    extractCMSID(obj) {
        return obj.jumpto.split("_")[0];
    }

    readFileSync(filePath) {
        if (fs.existsSync(filePath)) {
            console.log(filePath + ' File exists');
            console.log(`Now reading contents of ${filePath}`);
            return fs.readFileSync(filePath, 'utf8');
        } else {
            console.log(filePath + ' File does not exist');
        }
    }


}

let obj = new mapIndexGLID();

module.exports = obj;