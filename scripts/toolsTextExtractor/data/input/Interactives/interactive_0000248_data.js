var text = [{
    "boxId": "1",
    "infoText": "Confirmed diagnosis SCAD",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">PTP 15–85% &rarr; test information will already be available</span></p>" +
        "<p class=\"list-level1\"><span class=\"bold-text\">PTP >85% &rarr; additional testing for risk stratification only in patients who have" +
        " mild symptoms with medical management but following adequate information wish to proceed to revascularization in case of high risk</span>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Low event risk (mortality &lt;1%/year)",
        "eventAction": "3"
    }, {
        "text": "Intermediate event risk (mortality &ge;1% but &lt;3%/year)",
        "eventAction": "9"
    }, {
        "text": "High event risk (mortality &ge;3%/year)",
        "eventAction": "7"
    }]
}, {
    "boxId": "3",
    "infoText": "Trial of OMT",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "4"
}, {
    "boxId": "4",
    "infoText": "Symptoms improved?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "5"
    }, {
        "text": "Yes",
        "eventAction": "8"
    }]
}, {
    "boxId": "5",
    "infoText": "Intensify medical treatment",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "6"
}, {
    "boxId": "6",
    "infoText": "Symptoms improved?",
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
    "infoText": "ICA (+ FFR when required) (+ revascularization when appropriate) + OMT",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "8",
    "infoText": "Continue OMT",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "9",
    "infoText": "OMT and consider ICA (based on co-morbilities and patient preferences)",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Trial of OMT",
        "eventAction": "4"
    }, {
        "text": "ICA",
        "eventAction": "7"
    }]
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": false,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
	 "staticImageName": "interactive_0000248",
    "referenceText": "",
    "abbreviationText": "ICA = invasive coronary angiography; OMT = optimal medical therapy; PTP = pre-test probability; SCAD = stable coronary artery disease. " +
        "BP = blood pressure; CV=cardiovascular.",
    "moreInfotext": "",
    "resetButtonText": "",
    "extraButtons": [{
        buttonRow: [{
            "text": "Abbreviation(s)",
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
            "text": "<a href=\"ref_ENAS258_7.5.1.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];