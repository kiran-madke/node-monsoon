var text = [{
        "boxId": "1",
        "infoText": "Clinical evaluation:</b></br>Pedigree</br>Signs and symptoms</br>ECG</br>Cardiac imaging</br>Laboratory",
        "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
        "nextBox": "2"
    }, {
        "boxId": "2",
        "infoText": "Diagnostic red flags (suggesting a specific disease) present?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
            "text": "No",
            "eventAction": "3"
        }, {
            "text": "Yes",
            "eventAction": "8"
        }]
    }, {
        "boxId": "3",
        "infoText": "Consider genetic tetsing",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
    }, {
        "boxId": "4",
        "infoText": "Definite disease causing protein mutation identified?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "5"
            }, {
                "text": "Yes",
                "eventAction": "14"
            }
        ]
    }, {
        "boxId": "5",
        "infoText": "Reconsider other genetic/non-genetic causes",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
    },
    {
        "boxId": "7",
        "infoText": "Further specialised tests and multidisciplinary input",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "8",
        "infoText": "Further specialised tests and multidisciplinary input",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
    },
    {
        "boxId": "9",
        "infoText": "Cause identified?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "10"
            }, {
                "text": "Yes",
                "eventAction": "11"
            }
        ]
    },
    {
        "boxId": "11",
        "infoText": "Specific genetic/acquired disorder confirmed",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "10",
        "infoText": "Consider genetic testing",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "12"
    },
    {
        "boxId": "12",
        "infoText": "Definite disease causing protein mutation identified?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "13"
            }, {
                "text": "Yes",
                "eventAction": "14"
            }
        ]
    },
    {
        "boxId": "14",
        "infoText": "Confirmed diagnosis of genetic mutation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "13",
        "infoText": "Reconsider other genetic/non-genetic causes",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "15"
    },
    {
        "boxId": "15",
        "infoText": "Further specialised tests and multidisciplinary input",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000294",
        "referenceText": "Notes: 1. Counselling is essential before and after testing for genetic disease. 2. Genetic testing is recommended in patients fulfilling diagnostic criteria for HCM to enable cascade genetic screening of their relatives. 3. For recommendations on individual investigations see relevant sections.",
        "abbreviationText": "ECG = electrocardiogram",
        "moreInfotext": "For more information, <a href=\"http://www.google.co.in\">see here</a>",
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
                "text": "<a href=\"ref_ENAS263_7.1.0.0.html\" class=\"more-info-link\">More Information</a>",
                "buttonId": FooterButtons.MORE_INFO_BUTTON
            }]
        }]
    }
];