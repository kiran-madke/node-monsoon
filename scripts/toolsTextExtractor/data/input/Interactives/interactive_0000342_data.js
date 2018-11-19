var text = [
    {
        "boxId": "1",
        "infoText": "Clinical suspicion of IE",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
    },
    {
        "boxId": "2",
        "infoText": "TTE",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
    },
    {
        "boxId": "3",
        "infoText": "Native valve or prosthetic valve/intracardiac device?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Prosthetic valve/intracardiac device",
                "eventAction": "4"
            },
            {
                "text": "Native valve",
                "eventAction": "5"
            }
        ]
    },
    {
        "boxId": "4",
        "infoText": "TOE<sup>a</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "5",
        "infoText": "Positive, negative, or non-diagnostic TTE?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Negative TTE",
                "eventAction": "6"
            },
            {
                "text": "Non-diagnosis TTE",
                "eventAction": "4"
            },
            {
                "text": "Positive TTE",
                "eventAction": "4"
            }
        ]
    },
    {
        "boxId": "6",
        "infoText": "High or low clinical suspicion of IE?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Low",
                "eventAction": "9"
            },
            {
                "text": "High",
                "eventAction": "4"
            }
        ]
    },
    {
        "boxId": "9",
        "infoText": "Stop",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": false,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
        "staticImageName": "interactive_0000342",
		"referenceText": "If initial TOE is negative but high suspicion for IE remains, repeat TTE and/or TOE within 5–7 days<br /> <sup>a</sup>TOE is not mandatory in isolated right-sided native valve IE with good quality TTE examination and unequivocal echocardiographic findings.",
        "abbreviationText": "AVJ = atrioventricular junction; AF =atrial fibrillation; BiV = biventricular; CRT = cardiac resynchronization therapy; EF = ejection fraction; HR = heart rate; ICD = implantable cardioverter defibrillator; NYHA = New York Heart Association.",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Footnote(s)",
                        "buttonId": FooterButtons.REF_BUTTON
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
                    },
                    {
                        "text": "<a href=\"ref_ENAS5079_5.2.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                ]
            }
        ]
    }
];