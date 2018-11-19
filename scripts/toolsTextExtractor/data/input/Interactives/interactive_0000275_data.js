var text = [
	{
	    "boxId": "1",
	    "infoText": "BBB and unexplained syncope",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Ejection Fraction",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "&lt;35%",
			    "eventAction": "3"
			},
			{
			    "text": "&gt;35%",
			    "eventAction": "4"
			}
	    ]
	},
	{
	    "boxId": "3",
	    "infoText": "Consider ICD/CRT-D",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "4",
	    "infoText": "Consider CSM/EPS",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Negative",
			    "eventAction": "5"
			},
			{
			    "text": "Positive",
			    "eventAction": "7"
			}
	    ]
	},
	{
	    "boxId": "5",
	    "infoText": "Consider ILR",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Negative",
			    "eventAction": "6"
			},
			{
			    "text": "Positive",
			    "eventAction": "7"
			}
	    ]
	},
	{
	    "boxId": "6",
	    "infoText": "Clinical follow-up",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "7",
	    "infoText": "Appropriate Therapy",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "",
	    "hasFootnote": false,
	    "hasAbbreviation": true,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000275",
	    "referenceText": "",
	    "abbreviationText": "<nobr>  CRT-D = cardiac</nobr>  resynchronization therapy and defibrillator; <nobr>CSM = carotid </nobr> sinus massage;<nobr>  EF = ejection</nobr>  fraction; <nobr> EPS = electrophysiological </nobr> study; <nobr> ICD = implantable </nobr> cardioverter defibrillator; <nobr> ILR = implantable</nobr>  loop recorder.",
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
					    "text": "<a href=\"ref_ENAS259_4.4.1.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];