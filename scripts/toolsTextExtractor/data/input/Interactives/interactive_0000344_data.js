var text = [{
    "boxId": "1",
    "infoText": "Pericardial effusion",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Cardiac tamponade or suspected bacterial or neoplastic aetiology?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "3"
    }, {
        "text": "Yes",
        "eventAction": "4"
    }]
}, {
    "boxId": "3",
    "infoText": "Elevated inflammatory markers?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "5"
    }, {
        "text": "Yes",
        "eventAction": "6"
    }]
}, {
    "boxId": "5",
    "infoText": "Known associated disease?",
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
    "infoText": "Large (&gt;20 mm) pericardial effusion?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "9"
    }, {
        "text": "Yes",
        "eventAction": "10"
    }]
}, {
    "boxId": "9",
    "infoText": "Follow-up",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "10",
    "infoText": "Consider pericardiocentesis and drainage if chronic (&gt;3 months)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "8",
    "infoText": "Pericardial effusion probably related.<br/>Treat the disease.",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "6",
    "infoText": "Empiric anti-inflammatory therapy (treat as pericarditis)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "4",
    "infoText": "Pericardiocentesis and aetiology search",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": false,
    "hasAbbreviation": false,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
    "staticImageName": "interactive_0000344",
	"referenceText": "",
    "abbreviationText": "",
    "moreInfotext": "",
    "resetButtonText": "",
    "extraButtons": [{
        buttonRow: [{
            "text": "<a href=\"ref_ENAS5082_3.6.5.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }, {
            "image": "Flip PDF",
            "buttonId": FooterButtons.PDF_BUTTON
        }]
    }, {
        buttonRow: [{
            "text": "Reset",
            "buttonId": FooterButtons.RESET_BUTTON
        }]
    }]
}];