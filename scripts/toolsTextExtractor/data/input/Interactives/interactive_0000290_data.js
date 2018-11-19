var text = [
	{
	    "boxId": "1",
	    "infoText": "CTEPH diagnosis</br>Continue lifelong anticoagulation",
	    "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Operability assessment by CTEPH team",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Operable",
			    "eventAction": "3"
			},
			{
			    "text": "Inoperable",
			    "eventAction": "9"
			}
	    ]
	},
	{
	    "boxId": "3",
	    "infoText": "Pulmonary endarterectomy",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "4"
	},
	{
	    "boxId": "4",
	    "infoText": "Persistent symtomatic pulmonary hypertension<sup>a</sup>?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "5"
			},
			{
			    "text": "Yes",
			    "eventAction": "6"
			}
	    ]
	},
	{
	    "boxId": "5",
	    "infoText": "Continue lifelong anticoagulation",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "6",
	    "infoText": "Targeted medical therapy",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "7"
	},
	{
	    "boxId": "7",
	    "infoText": "Is therapy sufficient?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "8"
			},
			{
			    "text": "Yes",
			    "eventAction": "5"
			}
	    ]
	},
	{
	    "boxId": "8",
	    "infoText": "Referral for lung transplantation or emerging therapies (BPA?)",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "9",
	    "infoText": "Consider second opinion by another experienced centre",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "10"
	},
	{
	    "boxId": "10",
	    "infoText": "Is operation recommended by experienced centre?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "6"
			},
			{
			    "text": "Yes",
			    "eventAction": "3"
			}
	    ]
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "",
	    "hasFootnote": true,
	    "hasAbbreviation": true,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000290",
	    "referenceText": "<sup>a</sup> Defined as in Jamieson et al.",
	    "abbreviationText": "BPA = balloon pulmonary angioplasty; CTEPH = chronic thromboembolic pulmonary hypertension; CTEPH Team = a multidisciplinary team of experts experienced in the diagnosis and operability assessment of patients with CTEPH.",
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
					    "text": "<a href=\"ref_ENAS262_9.2.0.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];