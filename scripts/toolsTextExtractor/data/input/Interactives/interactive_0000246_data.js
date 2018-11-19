var text = [
    {
        "boxId": "1",
        "infoText": "Indications for AVJ ablation in patients with symptomatic permanent AF and optimal pharmacological therapy",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Heart Failure, NYHA class III–IV and EF <35%",
                "eventAction": "2"
			},
            {
                "text": "Reduced EF and uncontrollable HR, any QRS",
                "eventAction": "9"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "QRS",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "≥ 120 ms",
                "eventAction": "4"
			},
            {
                "text": "< 120 ms",
                "eventAction": "5"
			}
	    ]
	},
    {
        "boxId": "4",
        "infoText": "CRT<sup>*</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
	},
    {
        "boxId": "5",
        "infoText": "Rate Control",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Inadequate",
                "eventAction": "9"
			},
            {
                "text": "Adequate",
                "eventAction": "10"
			}
	    ]
	},
    {
        "boxId": "6",
        "infoText": "BiV pacing",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Incomplete",
                "eventAction": "7"
			},
            {
                "text": "Complete",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "7",
        "infoText": "AVJ ablation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "8",
        "infoText": "No AVJ ablation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "9",
        "infoText": "AVJ ablation & CRT",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "10",
        "infoText": "No AVJ ablation <br/>No CRT<sup>*</sup>",
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
		 "staticImageName": "interactive_0000246",
        "referenceText": "*Consider ICD according to guidelines",
        "abbreviationText": "AVJ = atrioventricular junction; AF =atrial fibrillation; BiV = biventricular; CRT = cardiac resynchronization therapy; EF = ejection fraction; HR = heart rate; ICD = implantable cardioverter defibrillator; NYHA = New York Heart Association.",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Abbreviation(s) and Footnote(s)",
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
                        "text": "<a href=\"ref_ENAS259_5.3.1.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];