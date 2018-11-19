var text = [
	{
	    "boxId": "1",
	    "infoText": "Neurological complication",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "<p class=\"list-level1\">Clincal assessment</p> <p class=\"list-level1\">Cerebral CT scan / MRI </p> <p class=\"list-level1\">TTE / TOE</p>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "3"
	},
	{
	    "boxId": "3",
	    "infoText": "Heart failure, uncontrolled infection, abscess, or high embolic risk?",
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
	    "infoText": "Conservative treatment and monitoring",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "5",
	    "infoText": "Intracranial haemorrhage, coma, severe comorbilities, or stroke with severe damage?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "6"
			},
			{
			    "text": "Yes",
			    "eventAction": "4"
			}
	    ]
	},
	{
	    "boxId": "6",
	    "infoText": "Consider surgery",
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
	    "staticImageName": "interactive_0000348",
		"referenceText": "",
	    "abbreviationText": "CT = computed tomography; IE = infective endocarditis; MRI = magnetic resonance imaging; TOE = transoesophageal echocardiography; TTE = transthoracic echocardiography",
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
					    "text": "<a href=\"ref_ENAS5079_9.0.0.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];