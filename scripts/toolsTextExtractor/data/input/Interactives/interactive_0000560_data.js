var text = [

    {
        "boxId": "1",
        "infoText": "Recent onset AF",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Haemodynamic instability?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "3"
			},
            {
                "text": "Yes",
                "eventAction": "10"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "According to patient choice: Electrical  or pharmacological cardioversion?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Electrical ",
                "eventAction": "10"
			},
            {
                "text": "Pharmacological cardioversion",
                "eventAction": "4"
			}
		]
	},
    {
        "boxId": "4",
        "infoText": "Choose from following conditions",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Severe HFrEF, <br/>significant aortic stenosis",
                "eventAction": "5"
			},
            {
                "text": "Coronary artery disease, <br/>moderate HFrEFor HFmrEF, <br/>abnormal LVH",
                "eventAction": "6"
			},
            {
                "text": "No relevant structural heart disease",
                "eventAction": "7"
			}
		]
	},
    {
        "boxId": "5",
        "infoText": "Intravenous <br/>Amiodarone (IA)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "Intravenous <br/>Vernakalant (IIbB) <br/>Amiodarone (IA)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "Intravenous pharmacotherapy or pill in the pocket technique?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Intravenous pharmacotherapy",
                "eventAction": "8"
			},
            {
                "text": "Pill-in-the-pocket technique",
                "eventAction": "9"
			}

		]
	},
    {
        "boxId": "8",
        "infoText": "Intravenous <br/>Flecainide (IA) <br/>Ibutilide (IIaB)<sup>a</sup> <br/>Propafenone (IA) <br/>Vernakalant (IA)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "9",
        "infoText": "Pill in the pocket <br/>Flecainide (IIaB)<br/>Propafenone (IIaB)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},

    {
        "boxId": "10",
        "infoText": "Electrical cardioversion (IB)",
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
        "staticImageName": "interactive_0000560",
		"referenceText": "<sup>a</sup>Ibutilide should not be used in patients with long QT interval",
        "abbreviationText": "AF = atrial fibrillation; HFmrEF = heart failure with mid-range ejection fraction; HFrEF = heart failure with reduced ejection fraction",
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
                        "text": "<a href=\"ref_ENAS5194_10.1.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
				]
			}
		]
	}

];