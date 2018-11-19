var text = [{
    "boxId": "1",
    "infoText": "Symptoms, signs, history suggestive of CTEPH",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Echocardiographic probability of PH (<a href=\"ref_ENAS5081_5.3.0.0.html\">Table 7</a>)",
    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
    "nextBox": "3"
}, {
    "boxId": "3",
    "infoText": "High or intermediate probability of PH",
    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
    "nextBox": "4"
}, {
    "boxId": "4",
    "infoText": "V/Q scan<sup>a</sup> <br/>Mismatched perfusion defects?",
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
    "infoText": "CTEPH ruled out",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "7"

}, {
    "boxId": "6",
    "infoText": "CTEPH possible",
    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
    "nextBox": "8"
}, {
    "boxId": "7",
    "infoText": "Work-up for PH/PAH (<a href=\"ref_ENAS5081_5.8.0.0.html\">Figure 1</a>)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "8",
    "infoText": "Refer to PH/CTEPH expert centre",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "9"
}, {
    "boxId": "9",
    "infoText": "CT pulmonary angiography<br/>Right heart catheterization +/- Pulmonary angiography",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
	"staticImageName": "interactive_0000339",
    "referenceText": "<sup>a</sup>CT pulmonary angiography alone may miss diagnosis of chronic thromboembolic pulmonary hypertension.",
    "abbreviationText": "CT = computed thomography; CTEPH = chronic thromboembolic pulmonary hypertension; PAH = pulmonary arterial hypertension; V/Q = ventilation/perfusion",
    "moreInfotext": "",
    "resetButtonText": "",
    "extraButtons": [{
        buttonRow: [{
            "text": "Abbreviation(s) and Footnote(s)",
            "buttonId": FooterButtons.REF_BUTTON
        }, {
            "image": "Flip PDF",
            "buttonId": FooterButtons.PDF_BUTTON
        } ]
    }, {
        buttonRow: [{
            "text": "Reset",
            "buttonId": FooterButtons.RESET_BUTTON
        }, {
            "text": "<a href=\"ref_ENAS5081_10.1.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];