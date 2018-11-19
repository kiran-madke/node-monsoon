var text = [
    {
        "boxId": "1",
        "infoText": "Patients considered for antibradycardia PM therapy",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Persistent Bradycardia",
                "eventAction": "2"
			},
            {
                "text": "Intermittent Bradycardia",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "<table style=\"width: 100%;border-collapse:collapse;\" > <col style=\"width:50%\"> <tr> <td  style=\"border:1px solid\">Sinus node disease </td> <td  style=\"border:1px solid\">AV block <p class=\"list-level1\"><span class=\"bold-text\">Sinus rhythm</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Atrial fibrillation</span></p> </td> </tr> </table>",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "3",
        "infoText": "ECG documented?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "4"
			},
            {
                "text": "Yes",
                "eventAction": "5"
			}
	    ]
	},
    {
        "boxId": "4",
        "infoText": "<table style=\"width: 100%;border-collapse:collapse;\" > <col style=\"width:33.33%\"> <col style=\"width:33.33%\"> <tr> <td  style=\"border:1px solid\">BBB </td> <td  style=\"border:1px solid\"><p>Reflex syncope</p> <p class=\"list-level1\"><span class=\"bold-text\">Carotoid sinus</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Tilt-induced</span</p> </td> <td  style=\"border:1px solid\">Unexplained syncope </td> </tr> </table>",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "5",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Intrinsic",
                "eventAction": "6"
			},
            {
                "text": "Extrinsic (functional)",
                "eventAction": "7"
			}
	    ]
	},
    {
        "boxId": "6",
        "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Paroxysmal AV block</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Sino-atrial block and sinus arrest (including brady-tachy form of SSS)</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Atrial fibrillation with slow ventricular conduction</span></p>",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "7",
        "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Vagal induced sinus arrest or AV block</span></p> <p class=\"list-level1\"><span class=\"bold-text\">Idiopathic AV block (adenosine-mediated)</span></p>",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "",
        "hasFootnote": false,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		 "staticImageName": "interactive_0000247",
        "referenceText": "",
        "abbreviationText": "<nobr>AV = atrioventricular;</nobr> <nobr>BBB = bundle</nobr> branch block; <nobr>ECG = electrocardiogram;</nobr> <nobr>PM = pacemaker;</nobr> <nobr>SSS = sick sinus syndrome.</nobr>",
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
                        "text": "<a href=\"ref_ENAS259_4.1.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];