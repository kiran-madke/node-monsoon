var text = [

    {
        "boxId": "1",
        "infoText": "Selection of further rhythm control therapy after therapy failure to improve symptoms of AF",
        "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Choose from the following",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Failure of dronedarone, flecainide, propafenone or sotalol",
                "eventAction": "3"
			},
            {
                "text": "Failure of amiodarone",
                "eventAction": "5"
			},
            {
                "text": "Failure of catheter ablation",
                "eventAction": "6"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "According to Patient choice, choose from the following therapy?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Amiodarone (IA)",
                "eventAction": "4"
			},
            {
                "text": "another AAD (IIa)",
                "eventAction": "4"
			},
            {
                "text": "Catheter ablation (IA/IIaB)<sup>a<sup>",
                "eventAction": "4"
			}
		]
	},
    {
        "boxId": "4",
        "infoText": "<p class=\"text-left text-bold\">Patient choice informed by AF Heart Team</p><p class=\"list-level1\">AF surgery (IIaC)<sup>b<sup></p><p class=\"list-level1\">Rate control (IB)</p><p class=\"list-level1\">Hybrid therapy (IIaC)<sup>c<sup></p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "According to Patient choice, choose from the following therapy?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Catheter ablation (IA/IIaB)<sup>a<sup>",
                "eventAction": "4"
			},
            {
                "text": "Hybrid therapy (IIaC)<sup>c<sup>",
                "eventAction": "4"
			}
		]
	},
    {
        "boxId": "6",
        "infoText": "According to Patient choice, choose from the following therapy?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Hybrid therapy (IIaC)<sup>c<sup>",
                "eventAction": "4"
			},
            {
                "text": "Repeat ablation (IA/IIaB)<sup>a<sup>",
                "eventAction": "4"
			},
            {
                "text": "another AAD (IIa)",
                "eventAction": "4"
			}
		]
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
        "staticImageName": "interactive_0000563",
		"referenceText": "<sup>a</sup> catheter ablation should target PVI. IA for paroxysmal AF and IIaB for persistent AF.<br/><sup>b</sup> AF surgery may be PVI (e.g. in paroxysmal AF) or maze surgery (e.g. in therapy-refractory or long-standing persistent AF).<br/><sup>c</sup> Hybrid therapy involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery.",
        "abbreviationText": "AAD = antiarrhythmic drugs; AF = atrial fibrillation; PVI = pulmonary vein isolation.",
        "moreInfotext": "",
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
                        "text": "<a href=\"ref_ENAS5194_10.6.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
				]
			}
		]
	}

];