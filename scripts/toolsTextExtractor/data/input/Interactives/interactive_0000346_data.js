var text = [{
    "boxId": "1",
    "infoText": "Pericarditis?<br/>(physical examination, ECG, chest x-ray, echacardiogram, CRP, troponin)",
    "boxType": BoxTypes.DECISION_STARTING_POINT,
    "buttons": [{
        "text": "No",
        "eventAction": "2"
    }, {
        "text": "Yes",
        "eventAction": "3"
    }]
}, {
    "boxId": "2",
    "infoText": "Diagnostic criteria not satisfied. Search for alternative diagnoses",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "3",
    "infoText": "Specific aetiology highly suspected or any predictor of poor prognosis?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "4"
    }, {
        "text": "Yes",
        "eventAction": "5"
    }]
}, {
    "boxId": "4",
    "infoText": "NON-HIGH RISK CASES<br/>No admission and aetiology search. Empiric trial with NSAID",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "6"
}, {
    "boxId": "6",
    "infoText": "Response to NSAID?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "7"
    }, {
        "text": "Yes",
        "eventAction": "8"
    }]
}, {
    "boxId": "7",
    "infoText": "MODERATE RISK CASES<br/>Admission and aetiology search",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "8",
    "infoText": "LOW RISK CASES<br/>Outpatient follow-up",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "5",
    "infoText": "HIGH RISK CASES<br/>Admission and aetiology search (major or minor prognostic predictor)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
    "staticImageName": "interactive_0000346",
	"referenceText": "Predictors of prognosis:" +
        "<br/>Major" + "<p class=\"list-level1\"><span class=\"italic-text\">Fever &gt;38&deg;C</span></p>" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Subacute onset</span></p>" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Large pericardial effusion</span></p>" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Cardiac tamponade</span></p>" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Lack of response to aspirin or NSAIDs after at least 1 week of therapy</span></p>" +
        " <br/>Minor" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Myopericarditis</span></p>" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Immunosuppression</span></p>" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Trauma</span></p>" +
        "<p class=\"list-level1\"><span class=\"italic-text\">Oral anticoagulant therapy</span></p>",
    "abbreviationText": "CRP = C-reactive protein; ECG = electrocardiogram",
    "moreInfotext": "",
    "resetButtonText": "",
    "extraButtons": [{
        buttonRow: [{
            "text": "Abbreviation(s) and Footnote(s)",
            "buttonId": FooterButtons.REF_BUTTON
        }, {
            "image": "Flip PDF",
            "buttonId": FooterButtons.PDF_BUTTON
        }]
    }, {
        buttonRow: [{
            "text": "Reset",
            "buttonId": FooterButtons.RESET_BUTTON
        }, {
            "text": "<a href=\"ref_ENAS5082_3.2.4.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];