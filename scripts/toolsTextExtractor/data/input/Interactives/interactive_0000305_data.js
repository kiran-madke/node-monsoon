var text = [
    {
        "boxId": "0",
        "infoText": "Heart failure NYHA II-IV",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "1"
	},
    {
        "boxId": "1",
        "infoText": "How much is the resting or provocable LVOTO?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "&ge; 50 mmHg",
                "eventAction": "2"
			},
            {
                "text": "&lt; 50 mmHg",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "Management of LVOTO",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "3",
        "infoText": "Permanent or frequent paroxysms of AF: <br>Rate/rhythm control</br>Anticoagulation",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
    },
    {
        "boxId": "4",
        "infoText": "Measure LVEF",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "LVEF &ge; 50%",
                "eventAction": "5"
			},
            {
                "text": "LVEF &lt; 50%",
                "eventAction": "6"
			}
	    ]
	},
    {
        "boxId": "5",
        "infoText": "&#223;-blockers, verapamil or diltiazem</br>Low dose loop and thiazide diuretics",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
    },
    {
        "boxId": "7",
        "infoText": "Consider cardiac transplantation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "6",
        "infoText": "&#223;-blockers, ACEi, MRA</br>Low dose loop and thiazide diuretics",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000305",
        "referenceText": "",
        "abbreviationText": "ACEi = angiotensin converting enzyme inhibitor; AF = atrial fibrillation; LVEF = left ventricular ejection fraction; LVOTO = left ventricular outflow tract obstruction; MRA = mineralocorticoid receptor antagonist; NYHA = New York Heart Association functional class.",
        "moreInfotext": "",
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
                        "text": "<a href=\"ref_ENAS263_11.3.3.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];