var text = [

    {
        "boxId": "1",
        "infoText": "Acute heart rate control of AF",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},

    {
        "boxId": "2",
        "infoText": "LVEF < 40% or &ge; 40%?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "LVEF < 40% or signs or congestive heart failure",
                "eventAction": "3"
			},
            {
                "text": "LVEF &ge; 40%",
                "eventAction": "6"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "Smallest dose of beta-blocker to achieve rate control <br/>(Amiodarone an option in haemodynamic instability or severely reduced LVEF <br/>Initial resting heart rate target <110 bpm)",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
	},
    {
        "boxId": "4",
        "infoText": "Add digoxin<br/>Initial resting heart rate target <110 bpm",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "5"
	},
    {
        "boxId": "5",
        "infoText": "Avoid bradycardia <br/>Perform echocardiogram to determine further management / choice of maintenance therapy <br/>Consider need for anticoagulation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "Beta-blockers or diltiazem/verapamil <br/>(Check previous drug history to avoid concomitant administration <br/>Initial resting heart rate target <110 bpm)",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
        "staticImageName": "interactive_0000558",
		"referenceText": "Digitoxin is a suitable alternative to digoxin, where available.",
        "abbreviationText": "AF = atrial fibrillation; bpm = beats per minute; LVEF = left ventricular ejection fraction",
        "moreInfotext": "For more information, <a href=\"http://www.google.co.in\">see here</a>",
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
					    "text": "<a class=\"more-info-link\" href=\"ref_ENAS5194_9.2.0.0.html\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
				]
			}
		]
	}

];