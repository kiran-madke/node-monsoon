var LangObject = require('./Language.js')

function wordPlay(word, lang) {
    if (word === "") {
        return "";
    }
    //excuse the workds that are not intented
    //like links and emails phone numbers
    var w = "_" + word + "_";
    var wl = w.length;
    var s = w.split("");
    w = w.toLowerCase();
    var hypos = [];
    var p,
        maxwins,
        win,
        pat = false,
        patl,
        c,
        digits,
        z;
    var numbers = {
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true
    };
    var n = wl - LangObject.langSupport.shortestPattern[lang];
    for (p = 0; p <= n; p++) {
        maxwins = Math.min((wl - p), LangObject.langSupport.longestPattern[lang]);
        for (win = LangObject.langSupport.shortestPattern[lang]; win <= maxwins; win++) {
            if (LangObject.langSupport.patterns[lang].hasOwnProperty(w.substr(p, win))) {
                pat = LangObject.langSupport.patterns[lang][w.substr(p, win)];
            } else {
                continue;
            }
            digits = 1;
            patl = pat.length;
            for (i = 0; i < patl; i++) {
                c = pat.charAt(i);
                if (numbers[c]) {
                    if (i === 0) {
                        z = p - 1;
                        if (!hypos[z] || hypos[z] < c) {
                            hypos[z] = c;
                        }
                    } else {
                        z = p + i - digits;
                        if (!hypos[z] || hypos[z] < c) {
                            hypos[z] = c;
                        }
                    }
                    digits++;
                }
            }
        }
    }

    hyphen = "&shy;" || String.fromCharCode(173);

    var inserted = 0;
    for (i = LangObject.langSupport.leftmin[lang]; i <= (word.length - LangObject.langSupport.rightmin[lang]); i++) {
        if (!!(hypos[i] & 1)) {
            s.splice(i + inserted + 1, 0, hyphen);
            inserted++;
        }
    }

    //console.log(s);
    var hyphenatedword = s.slice(1, -1).join("");
    // console.log(hyphenatedword);
    return hyphenatedword;

}

function convertWord() {
    for (var lang1 in LangObject.langSupport.patterns) {
        if (LangObject.langSupport.patterns.hasOwnProperty(lang1)) {
            var sa = LangObject.langSupport.patterns[lang1].split(" ");
            LangObject.langSupport.patterns[lang1] = {};
            var pat,
                key,
                i = 0;
            while (!!(pat = sa[i++])) {
                key = pat.replace(/\d/g, "");
                LangObject.langSupport.patterns[lang1][key] = pat;
            }
        }
    }
}



class Hyphenate {
    constructor() {
        convertWord()
    }

    conv(word, lang) {
        return wordPlay(word, lang)
    }
}

var obj = new Hyphenate();
// obj.conv("thérapeutique", "fr")
// obj.conv("thérapeutique", "fr")
// obj.conv("thérapeutique", "fr")
// obj.conv("thérapeutique", "fr")
module.exports = obj;