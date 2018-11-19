var text = [
    {
        "boxId": "1",
        "infoText": "Urgent angiogram and complete revascularization as appropriate",
        "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
        "nextBox": "2"
    },
    {
        "boxId": "2",
        "infoText": "Beta-blocker therapy<br/>(e.g. 5 mg metoprolol i.v.)",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
    },
    {
        "boxId": "3",
        "infoText": "Recurrent VT/VF or frequent non-sustained VT or stable patient?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Recurrent VT/VF or frequent non-sustained VT",
                "eventAction": "4"
            },
            {
                "text": "Patient stable",
                "eventAction": "9"
            }
        ]
    },
    {
        "boxId": "4",
        "infoText": "Cardioversion/defibrillation<br/>Overdrive pacing<br/>Amiodarone 300 mg i.v.<br/>Lidocaine",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "5"
    },
    {
        "boxId": "5",
        "infoText": "Consider need for further revascularization<br/>(check LV function, repeat angiogram)<br/>Consider repletion of K<sup>+</sup> and Mg<sup>2+</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
    },
    {
        "boxId": "6",
        "infoText": "Patient stable?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "7"
            },
            {
                "text": "Yes",
                "eventAction": "8"
            }
        ]
    },
    {
        "boxId": "7",
        "infoText": "Consider catheter ablation and/or sedation and referral to specialist center",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "8",
        "infoText": "Continue treatment",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "9",
        "infoText": "Continue beta-blocker therapy",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
        "staticImageName": "interactive_0000341",
		"referenceText": "<sup>a</sup>May be omitted in very young and healthy patients with a high suspicion of an extracardiac cause of chest pain and in multimorbid patients in whom the echo result has no consequence for further patient management.<br/> <sup>b</sup>If diagnosis of SCAD is doubtful, establishing a diagnosis using pharmacologic stress imaging prior to treatment may be reasonable.",
        "abbreviationText": "ACS = acute coronary syndromes; i.v. = intravenous; K<sup>+</sup> = potassium; LV = left ventricular; Mg<sup>2+</sup> = magnesium; VF = ventricular fibrillation; VT = ventricular tachycardia",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Abbreviation(s)",
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
                        "text": "<a href=\"ref_ENAS5083_6.1.3.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                ]
            }
        ]
    }
];