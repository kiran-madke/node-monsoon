var text = [{
    "boxId": "1",
    "infoText": "Diagnosis confirmed by CTEPH expert center",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Lifelong anticoagulation",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "3"
}, {
    "boxId": "3",
    "infoText": "Operability assessment by a multidisciplinary CTEPH team",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Technically non-operable",
        "eventAction": "4"
    }, {
        "text": "Technically operable",
        "eventAction": "8"
    }]
}, {
    "boxId": "4",
    "infoText": "<p class=\"list-level1\">Targeted medical therapy</p><p class=\"list-level1\">Consider BPA in expert center<sup>b</sup></p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "5"
}, {
    "boxId": "5",
    "infoText": "Persistent severe symptomatic PH?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "6"
    }, {
        "text": "Yes",
        "eventAction": "7"
    }]
}, {
    "boxId": "6",
    "infoText": "Follow-up",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "7",
    "infoText": "Consider lung transplantation",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "8",
    "infoText": "Acceptable risk/benefit ratio?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No<sup>a</sup>",
        "eventAction": "4"
    }, {
        "text": "Yes",
        "eventAction": "9"
    }]
}, {
    "boxId": "9",
    "infoText": "Pulmonary endarterectomy",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "10"
}, {
    "boxId": "10",
    "infoText": "Persistent Symptomatic PH?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "6"
    }, {
        "text": "Yes",
        "eventAction": "4"
    }]
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
    "staticImageName": "interactive_0000349",
	"referenceText": "<sup>a</sup>Technically operable patients with non-acceptable risk/benefit ratio can be considered also for BPA." +
        "<br /> <sup>b</sup>In some centers medical therapy and BPA are initiated concurrently.",
    "abbreviationText": "BPA = balloon pulmonary angioplasty; CTEPH = chronic thromboembolic pulmonary hypertension; PH = pulmonary hypertension",
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
            "text": "<a href=\"ref_ENAS5081_10.2.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];