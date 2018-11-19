var text = [{
    "boxId": "1",
    "infoText": "Active adult/senior",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Low, moderate, or high intensity activity?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Low",
        "eventAction": "3"
    }, {
        "text": "Moderate",
        "eventAction": "4"
    }, {
        "text": "High",
        "eventAction": "8"
    }]
}, {
    "boxId": "3",
    "infoText": "Eligible for low intensity physical activity",
    "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX
}, {
    "boxId": "4",
    "infoText": "Assessment of risk<br/>(self- or by non physician)",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "6"
}, {
    "boxId": "6",
    "infoText": "Negative or positive risk?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Negative",
        "eventAction": "7"
    }, {
        "text": "Positive",
        "eventAction": "8"
    }]
}, {
    "boxId": "7",
    "infoText": "Eligible for moderate/high exercise training",
    "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX
}, {
    "boxId": "8",
    "infoText": "Screening by physician" +
        "<p class=\"list-level1\">History</p>" +
        "<p class=\"list-level1\">Phys. exam</p>" +
        "<p class=\"list-level1\">Risk SCORE</p>" +
        "<p class=\"list-level1\">Rest ECG</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "9"
}, {
    "boxId": "9",
    "infoText": "Negative or positive screening?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Negative",
        "eventAction": "7"
    }, {
        "text": "Positive",
        "eventAction": "10"
    }]
}, {
    "boxId": "10",
    "infoText": "Max exercise testing",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "11"
}, {
    "boxId": "11",
    "infoText": "Negative or positive?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Negative",
        "eventAction": "7"
    }, {
        "text": "Positive",
        "eventAction": "12"
    }]
}, {
    "boxId": "12",
    "infoText": "Further evaluation, appropriate treatment and individually prescribed PA",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
    "staticImageName": "interactive_0000345",
	"referenceText": "Adapted with permission from Borjesson M et al. Eur J Cardiovasc Prev Rehabil 2011;18:446-458.",
    "abbreviationText": "ECG&nbsp;=&nbsp;electrocardiogram; PA&nbsp;=&nbsp;physical activity; SCORE&nbsp;=&nbsp;Systematic coronary risk evaluation.",
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
            "text": "<a href=\"ref_ENAS5083_13.7.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];