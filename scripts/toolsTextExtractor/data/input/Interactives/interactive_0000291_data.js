var text = [
	{
	    "boxId": "1",
	    "infoText": "2D and doppler echo at rest, Valsalva and standing",
	    "boxType": BoxTypes.DECISION_STARTING_POINT,
	    "buttons": [
			{
			    "text": "Maximum provoked peak LVOTO &ge; 50 mmHg",
			    "eventAction": "2"
			},
			{
			    "text": "Maximum provoked peak LVOTO &lt; 50 mmHg",
			    "eventAction": "3"
			}
	    ]
	},
	{
	    "boxId": "2",
	    "infoText": "See <a href =\"ref_ENAS263_11.1.3.1.html\">treatment of LVOTO</a>",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "3",
	    "infoText": "Is patient symptomatic?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No*",
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
	    "infoText": "Repeat Echo 1 year",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "5",
	    "infoText": "Exercise stress echo",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Maximum provoked peak LVOTO &ge; 50 mmHg",
			    "eventAction": "2"
			},
			{
			    "text": "Maximum provoked peak LVOTO &lt; 50 mmHg",
			    "eventAction": "6"
			}
	    ]
	},
	{
	    "boxId": "6",
	    "infoText": "<a href =\"ref_ENAS263_11.1.1.0.html\">Medical therapy </a>",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "",
	    "hasFootnote": true,
	    "hasAbbreviation": true,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000291",
	    "referenceText": "* exercise echo may be considered in individual patients when the presence of a LVOT gradient is relevant to lifestyle advice and decisions on medical treatment.",
	    "abbreviationText": "LVOT = Left ventricular outflow tract obstruction;",
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
					    "text": "<a href=\"ref_ENAS263_7.5.1.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];