var text = [{
    "boxId": "1",
    "infoText": "Safety precautions for MRI in patients with conventional cardiac devices",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Implanted PM/ICD?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Conventional",
        "eventAction": "3"
    }, {
        "text": "MRI-conditional",
        "eventAction": "12"
    }]
}, {
    "boxId": "3",
    "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Leads implanted &lt;6 weeks before?</span></p><p class=\"list-level1\"><span class=\"bold-text\">Abandoned or epicardial leads?</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "4"
    }, {
        "text": "Yes",
        "eventAction": "11"
    }]
}, {
    "boxId": "4",
    "infoText": "Record devices variables<br/>(lead impedence/threshold, P/R wave amplitude and battery voltage)",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "5"
}, {
    "boxId": "5",
    "infoText": "PM dependent?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "6"
    }, {
        "text": "Yes",
        "eventAction": "10"
    }]
}, {
    "boxId": "6",
    "infoText": "Programme VVI/DDI (inhibited)",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "7"
}, {
    "boxId": "7",
    "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Deactivate other pacing functions</span></p><p class=\"list-level1\"><span class=\"bold-text\">Deactivate monitoring and ATP/shock therapies (ICD)</span></p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "8"
}, {
    "boxId": "8",
    "infoText": "Monitor ECG and symptoms during MRI",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "9"
}, {
    "boxId": "9",
    "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Re-check device variables and compare with baseline</span></p><p class=\"list-level1\"><span class=\"bold-text\">Restore original programming</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "10",
    "infoText": "Programme VOO/DOO (asynchronous)",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "7"
}, {
    "boxId": "11",
    "infoText": "Exclude the patient for MRI",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "12",
    "infoText": "Follow manufacturer’s instructions",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
	"staticImageName": "interactive_0000262",
    "referenceText": "Adapted from Nazarian et al.",
    "abbreviationText": "ATP = antitachycardiac pacing; ECG = electrocardiogram; ICD = implantable cardioverter defibrillator; MRI = magnetic resonance imaging PM = pacemaker.",
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
            "text": "<a href=\"ref_ENAS259_8.3.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];