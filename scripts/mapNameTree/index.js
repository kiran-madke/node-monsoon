const path = require('path');
const fs = require('fs');

const combinedJSONPath = path.join(__dirname, './data/inputData/combinedGTS/combinedGTS.json');
const TOCJSONFolderPath = path.join(__dirname, './data/inputData/TOCJson/');

class mapNameTree {
    constructor() {
        this.combinedJSONPath = combinedJSONPath;
        this.TOCJSONFolderPath = TOCJSONFolderPath;
    }

    execute() {
        return true;
    }
}