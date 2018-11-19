var text = [
    {
        "boxId": "1",
        "infoText": "Patient with cardiogenic shock",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
    },
    {
        "boxId": "2",
        "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Medical therapy</span></p><p class=\"list-level1\"><span class=\"bold-text\">Inotropic support</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Ventilatory support</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Revascularization</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Reperfusion</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Repair of mechanical complications</span></p>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
    },
    {
        "boxId": "3",
        "infoText": "Assess patient condition",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Unstable",
                "eventAction": "4"
            },
            {
                "text": "Stable",
                "eventAction": "5"
            }
        ]
    },
    {
        "boxId": "4",
        "infoText": "Short-term mechanical circulatory support",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No recovery of cardiac function",
                "eventAction": "6"
            },
            {
                "text": "Recovery of cardiac function",
                "eventAction": "8"
            }
        ]
    },
    {
        "boxId": "5",
        "infoText": "Weaning",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No recovery of cardiac function",
                "eventAction": "6"
            },
            {
                "text": "Recovery of cardiac function",
                "eventAction": "10"
            }
        ]
    },
    {
        "boxId": "6",
        "infoText": "Assess neurological/end organ function",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Irreversible neurological deficit",
                "eventAction": "8"
            },
            {
                "text": "Normal neurological function",
                "eventAction": "9"
            }
        ]
    },
    {
        "boxId": "8",
        "infoText": "Weaning",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "9",
        "infoText": "Mechanical circulatory support for destination therapy or as bridge to cardiac transpantation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "10",
        "infoText": "Standard therapy",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": false,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000306",
        "referenceText": "If initial TOE is negative but high suspicion for IE remains, repeat TTE and/or TOE within 5–7 days<br /> <sup>a</sup>TOE is not mandatory in isolated right-sided native valve IE with good quality TTE examination and unequivocal echocardiographic findings.",
        "abbreviationText": "CV= cardiovascular",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "<a href=\"ref_ENAS265_11.0.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    },
                    {
                        "image": "Flip PDF",
                        "buttonId": FooterButtons.PDF_BUTTON
                    }
                ]
            },
            {
                buttonRow: [
                    {
                        "text": "Reset",
                        "buttonId": FooterButtons.RESET_BUTTON
                    }
                ]
            }
        ]
    }
];