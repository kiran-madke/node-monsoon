var text = [{
    "boxId": "1",
    "infoText": "Symptoms Onset",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "First medical contact &#8594; NSTE-ACS diagnosis",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "3"
}, {
    "boxId": "3",
    "infoText": "Patient at PCI center or at EMS or Non-PCI center?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "PCI center",
        "eventAction": "4"
    }, {
        "text": "EMS or Non–PCI center",
        "eventAction": "9"
    }]
}, {
    "boxId": "4",
    "infoText": "Risk very high, high, intermediate or low?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Very high",
        "eventAction": "5"
    }, {
        "text": "High",
        "eventAction": "6"
    }, {
        "text": "Intermediate",
        "eventAction": "7"
    }, {
        "text": "Low",
        "eventAction": "8"
    }]
}, {
    "boxId": "5",
    "infoText": "Therapeutic strategy: Immediate invasive (&lt;2 hr)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "6",
    "infoText": "Therapeutic strategy: Early invasive (&lt;24 hr)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "7",
    "infoText": "Therapeutic strategy: Invasive (&lt;72 hr)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "8",
    "infoText": "Therapeutic strategy: Non-invasive testing if appropriate",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "9",
    "infoText": "Risk very high, high, intermediate or low?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Very high",
        "eventAction": "10"
    }, {
        "text": "High",
        "eventAction": "11"
    }, {
        "text": "Intermediate",
        "eventAction": "12"
    }, {
        "text": "Low",
        "eventAction": "13"
    }]
}, {
    "boxId": "10",
    "infoText": "Immediate transfer to PCI center",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "5"
}, {
    "boxId": "11",
    "infoText": "Same-day transfer to PCI center",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "6"
}, {
    "boxId": "12",
    "infoText": "Transfer to PCI center",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "7"
}, {
    "boxId": "13",
    "infoText": "Transfer optional",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "8"
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": false,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
    "staticImageName": "interactive_0000351",
	"referenceText": "",
    "abbreviationText": "EMS = emergency medical services; PCI = percutaneous coronary intervention.",
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
            "text": "<a href=\"ref_ENAS5080_5.5.1.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];