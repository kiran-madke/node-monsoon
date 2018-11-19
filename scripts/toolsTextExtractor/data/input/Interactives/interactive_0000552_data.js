var text = [

    {
        "boxId": "1",
        "infoText": "Mechanical heart valves or moderate or severe mitral stenosis?",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "No",
                "eventAction": "3"
			},
            {
                "text": "Yes",
                "eventAction": "2"
			}
		]
	},
    {
        "boxId": "2",
        "infoText": "VKA (IA)<sup>c,d</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "3",
        "infoText": "Estimate stroke risk based on number of CHA<sub>2</sub>DS<sub>2</sub>VASc risk factors<sup>a</sup>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "0<sup>b</sup>",
                "eventAction": "4"
			},
            {
                "text": "1",
                "eventAction": "5"
			},
            {
                "text": "&ge;2",
                "eventAction": "6"
			}
		]
	},
    {
        "boxId": "4",
        "infoText": "No antiplatelet or anticoagulant treatment (IIIB)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "OAC should be considered (IIaB)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "Oral anticoagulation indicated <br/>Assess for contraindications <br/>Correct reversible bleeding risk factors",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
	},
    {
        "boxId": "7",
        "infoText": "Clear contraindications for oral anticoagulation?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "8"
			},
            {
                "text": "Yes",
                "eventAction": "9"
			}

		]
	},
    {
        "boxId": "8",
        "infoText": "Best option: NOAC (IA)<sup>c</sup> <br/>Alternative option: VKA (IA)<sup>c,d</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "9",
        "infoText": "LAA occluding devices may be considered in patients with clear contraindications for OAC (IIbC)",
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
        "staticImageName": "interactive_0000552",
		"referenceText": "<sup>a</sup>Congestive heart failure, Hypertension, Age &ge;75 years (2 points), Diabetes, prior stroke/TIA/embolus (2 points), Vascular disease, age 65-74 years, female Sex. <br/><sup>b</sup>Includes women without other stroke risk factors.<br/><sup>c</sup>IIaB for women with only one additional stroke risk factor<br/><sup>d</sup>IB for patients with mechanical heart valves or mitral stenosis.",
        "abbreviationText": "AF = atrial fibrillation; LAA = left atrial appendage; NOAC =  non-vitamin K antagonist oral anticoagulant; OAC = oral anticoagulation; VKA = vitamin K antagonist",
        "moreInfotext": "For more information, <a href=\"http://www.google.co.in\">see here</a>",
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
                        "text": "<a href=\"ref_ENAS5194_8.3.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
				]
			}
		]
	}
];