var text = [
	{
	    "boxId": "1",
	    "infoText": "Suspected acute PE",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Shock or hypotension<br/> Hypotension defined as systolic blood pressure &lt;90 mm Hg, or a systolic pressure drop by &ge;40 mm Hg, for &gt;15 minutes, if not caused by new-onset arrhythmia, hypovolaemia, or sepsis.",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "3"
			},
			{
			    "text": "Yes",
			    "eventAction": "4"
			}
	    ]
	},
	{
	    "boxId": "3",
	    "infoText": "Non high-risk, based on the estimated PE-related in-hospital or 30-day mortality.",
	    "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
	{
	    "boxId": "4",
	    "infoText": "High risk, based on the estimated PE-related in-hospital or 30-day mortality.",
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
		"staticImageName": "interactive_0000292",
	    "referenceText": "",
	    "abbreviationText": "PE = pulmonary embolism",
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
					    "text": "<a href=\"ref_ENAS262_4.4.0.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];