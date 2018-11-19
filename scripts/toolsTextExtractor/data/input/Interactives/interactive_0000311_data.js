var text = [{
    "boxId": "0",
    "infoText": "Suspected PE without shock or hypotension",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "1"
}, {
    "boxId": "1",
    "infoText": "Assess clinical probability of PE</br>Clinical judgement or prediction rule<sup>a</sup>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Low/intermediate clinical probability or <span class=\"italic-text\">PE unlikely</span>",
        "eventAction": "2"
    }, {
        "text": "High clinical probability or <span class=\"italic-text\">PE likely</span>",
        "eventAction": "3"
    }]
}, {
    "boxId": "2",
    "infoText": "D-dimer?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Negative",
        "eventAction": "4"
    }, {
        "text": "Positive",
        "eventAction": "5"
    }]
}, {
    "boxId": "4",
    "infoText": "No treatment",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "5",
    "infoText": "CT angiography",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No PE?",
        "eventAction": "6"
    }, {
        "text": "PE confirmed<sup>c</sup>?",
        "eventAction": "7"
    }]
}, {
    "boxId": "6",
    "infoText": "No treatment<sup>b</sup>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "7",
    "infoText": "Treatment<sup>b</sup>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "3",
    "infoText": "CT angiography",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No PE?",
        "eventAction": "8"
    }, {
        "text": "PE confirmed<sup>c</sup>?",
        "eventAction": "9"
    }]
}, {
    "boxId": "8",
    "infoText": "No treatment<sup>b</sup> or investigate further<sup>d</sup>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "9",
    "infoText": "Treatment<sup>b</sup>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": true,
	"staticImageName": "interactive_0000311",
    "referenceText": "<sup>a</sup> Two alternative classification schemes may be used for clinical probability assessment, i.e. a three-level scheme (clinical probability defined as low, intermediate, or high) or a two-level scheme (PE unlikely or PE likely). When using a moderately sensitive assay, D-dimer measurement should be restricted to patients with low clinical probability or a PE-unlikely classification, while highly sensitive assays may also be used in patients with intermediate clinical probability of PE due to a higher sensitivity and negative predictive value. Note that plasma D-dimer measurement is of limited use in suspected PE occurring in hospitalized patients.</br><sup>b</sup> Treatment refers to anticoagulation treatment for PE.</br><sup>c</sup> CT angiogram is considered diagnostic of PE if it shows PE at the segmental or more proximal level.</br><sup>d</sup> In case of a negative CT angiogram in patients with high clinical probability, further investigation may be considered before withholding PE-specific treatment.",
    "abbreviationText": "CT = computed tomographic; PE = pulmonary embolism.",
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
            "text": "<a href=\"ref_ENAS262_5.3.2.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];