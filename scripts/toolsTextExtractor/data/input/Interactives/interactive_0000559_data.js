var text = [

    {
        "boxId": "1",
        "infoText": "Long-term heart rate control of AF",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Perform echocardiogram (I C)<br/>Choose initial rate control therapy (I B) and combination therapy if required (IIaC)<br/>Target initial resting heart rate <110 beats/minute (IIaB), avoiding bradycardia",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
	},
    {
        "boxId": "3",
        "infoText": "LVEF < 40% or &ge; 40%?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "LVEF < 40%",
                "eventAction": "4"
			},
            {
                "text": "LVEF &ge; 40%",
                "eventAction": "7"
			}
		]
	},
    {
        "boxId": "4",
        "infoText": "Type of drug therapy?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Beta-blocker",
                "eventAction": "5"
			},
            {
                "text": "Digoxin",
                "eventAction": "6"
			}
		]
	},
    {
        "boxId": "5",
        "infoText": "Consider early low-dose combination therapy<br/>Add digoxin",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "Consider early low-dose combination therapy<br/>Add beta-blocker",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "Type of drug therapy?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Diltiazem/ verapamil",
                "eventAction": "8"
			},
            {
                "text": "Beta-blocker",
                "eventAction": "8"
			},
            {
                "text": "Digoxin",
                "eventAction": "9"
			}
		]
	},
    {
        "boxId": "8",
        "infoText": "Add therapy to achieve target heart rate or if ongoing symptoms<br/>Add digoxin",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "9",
        "infoText": "Add therapy to achieve target heart rate or if ongoing symptoms<br/>Add diltiazem, verapamil or beta-blocker",
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
        "staticImageName": "interactive_0000559",
		"referenceText": "Digitoxin is a suitable alternative to digoxin, where available.",
        "abbreviationText": "AF = atrial fibrillation; bpm = beats per minute; LVEF = left ventricular ejection fraction",
        "moreInfotext": "",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Abbreviation(s) and footnote(s)",
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
                        "text": "<a href=\"ref_ENAS5194_9.3.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
				]
			}
		]
	}

];