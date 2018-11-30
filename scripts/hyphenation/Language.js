const path = require('path');
var fs = require("fs");

class Language {

    constructor() {
        this.langSupport = {
            leftmin: {},
            rightmin: {},
            shortestPattern: {},
            longestPattern: {},
            specialChars: {},
            patterns: {}
        }
    }
}


var Lang = new Language();

let supportedLanguages = ['gu',
    'ka',
    'ta',
    'te',
    'pa',
    'de',
    'en',
    'sv',
    'hi',
    'fr',
    'nl',
    'ml',
    'it',
    'es',
    'bn',
]


for (var temp in supportedLanguages) {
    try {
        var JSON_path = path.join(__dirname, "./patterns/" + supportedLanguages[temp] + ".json");
        var contents = fs.readFileSync(JSON_path);
    } catch (e) {
        console.log("Language not found... please check if the json exist or not.");
    }
    var jsonContent = JSON.parse(contents);
    //French Support
    let currentLang = jsonContent.language;
    if (!Lang.langSupport.leftmin.hasOwnProperty(currentLang)) {
        Lang.langSupport.leftmin[currentLang] = jsonContent.leftmin;
        Lang.langSupport.rightmin[currentLang] = jsonContent.rightmin;
        Lang.langSupport.shortestPattern[currentLang] = jsonContent.shortestPattern;
        Lang.langSupport.longestPattern[currentLang] = jsonContent.longestPattern;
        Lang.langSupport.specialChars[currentLang] = jsonContent.specialChars;
        Lang.langSupport.patterns[currentLang] = jsonContent.patterns;
    }
}
//French Support
module.exports = Lang;