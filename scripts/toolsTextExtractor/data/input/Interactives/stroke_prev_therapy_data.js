var strokePrevText = [{
    "toolType": "result-score",
    "boxStructure": "box-single-line-non-tabular",
    "buttonStructure": "button-single-line-non-tabular-spanned",
    "resultStructure": "",
    "header": {
        "headerText": "",
        "options": []
    }
}, {
    "boxId": "1",
    "infoText": "Congestive Heart Failure OR left ventricular dysfunction",
    "category": "",
    "calculable": true,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "2",
    "infoText": "Hypertension (controlled)",
    "category": "",
    "calculable": true,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "3",
    "infoText": "Hypertension (uncontrolled)",
    "category": "0",
    "calculable": true,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "4",
    "infoText": "Age",
    "category": "1",
    "calculable": true,
    "options": [{
        "type": "input",
        "text": "",
        "value": ""
    }]
}, {
    "boxId": "5",
    "infoText": "Diabetes mellitus",
    "category": "",
    "calculable": true,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "6",
    "infoText": "Prior Stroke / TIA",
    "category": "1",
    "calculable": true,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "2"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "7",
    "infoText": "Vascular Disease (coronary, cerebral, peripheral)",
    "category": "",
    "calculable": true,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "8",
    "infoText": "Sex / Gender",
    "category": "",
    "calculable": true,
    "options": [{
        "type": "button",
        "text": "Female",
        "value": "1"
    }, {
        "type": "button",
        "text": "Male",
        "value": "0"
    }]
}, {
    "boxId": "9",
    "infoText": "Unstable INRs OR low time in therapeutic range",
    "category": "0",
    "calculable": false,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "10",
    "infoText": "Prior bleed or anaemia",
    "category": "1",
    "calculable": false,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "11",
    "infoText": "Concomitant antiplatelets",
    "category": "0",
    "calculable": false,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "12",
    "infoText": "Alcohol excess and other markers for decreased therapy adherence",
    "category": "0",
    "calculable": false,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "13",
    "infoText": "Chronic kidney disease",
    "category": "1",
    "calculable": false,
    "options": [{
        "type": "button",
        "text": "Yes",
        "value": "1"
    }, {
        "type": "button",
        "text": "No",
        "value": "0"
    }]
}, {
    "boxId": "1997",
    "boxType": "score-box",
    "resultInfoText": "Treatment recommendation",
    "extraInformation": "",
    "percentageInfoText": "",
    "categories": [
        "Modifiable bleeding risk factors:",
        "Non-modifiable bleeding risk factors:"
    ]
}, {
    "boxId": "1998",
    "boxType": "footer",
    "buttonText": "Footnotes",
    "hasFootnote": true,
    "hasAbbreviation": false,
    "hasPdfButton": false,
    "hasMoreInfoButton": false,
    "referenceText": "* includes women without other stroke risk factors.<br/> ** IIaB for women with only one additional stroke risk factor",
    "abbreviationText": "",
    "moreInfotext": "For more information, <a href=\"http://www.google.co.in\">see here</a>",
    "resetButtonText": "",
    "extraButtons": [{
        buttonRow: [{
            "text": "Reset",
            "buttonId": "resetButton"
        }, {
            "text": "More Information",
            "buttonId": "btnInfo"
        }]
    }, {
        buttonRow: [{
            "text": "Email",
            "buttonId": "btnEmail"
        }, {
            "text": "Print",
            "buttonId": "btnPrint"
        }, {
            "text": "Save",
            "buttonId": "btnSave"
        }]
    }]
}, {
    "boxId": "1999",
    "result": [{
        "value": "0",
        "operator": "===",
        "inference": "Anticoagulant or antiplatelet therapy is not recommended for stroke prevention (Class III, level of evidence B)"
    }, {
        "value": "1",
        "operator": "===",
        "inference": "Oral anticoagulation with NOAC or VKA should be considered to prevent thromboembolism (Class IIa, level of evidence B)"
    }, {
        "value": "2",
        "operator": ">=",
        "inference": "Oral anticoagulation with NOAC<sup>***</sup> or VKA<sup>***</sup> is recommended to prevent thromboembolism (Class I, level of evidence A)"
    }]
}];