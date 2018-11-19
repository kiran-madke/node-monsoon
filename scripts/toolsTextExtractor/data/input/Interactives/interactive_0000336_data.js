var text = [
	{
	    "boxId": "1",
	    "infoText": "Acute Chest Pain",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "High sensitivity troponin test",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "hsTn &lt;ULN",
			    "eventAction": "3"
			},
			{
			    "text": "hsTn &gt;ULN",
			    "eventAction": "8"
			}
	    ]
	},
	{
	    "boxId": "3",
	    "infoText": "Duration of pain?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Pain &lt;6h",
			    "eventAction": "4"
			},
			{
			    "text": "Pain &gt;6h",
			    "eventAction": "5"
			}
	    ]
	},
    {
        "boxId": "4",
        "infoText": "Re-test hsTn: 3h",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "hsTn no change",
			    "eventAction": "5"
			},
			{
			    "text": "&Delta; change<sup>a</sup><br>(l value &gt; ULN)",
			    "eventAction": "7"
			}
	    ]
    },
	{
	    "boxId": "5",
	    "infoText": "Painfree, GRACE &lt;140, differential diagnoses excluded",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
	    "nextBox": "6"
	},
	{
	    "boxId": "6",
	    "infoText": "Discharge/Stress testing",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "7",
	    "infoText": "Invasive management",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
        "boxId": "8",
        "infoText": "Highly abnormal Tn + clinical presentation?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "9"
			},
			{
			    "text": "Yes",
			    "eventAction": "7"
			}
	    ]
    },
	{
        "boxId": "9",
        "infoText": "Re-test hsTn: 3h",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "hsTn no change",
			    "eventAction": "10"
			},
			{
			    "text": "&Delta; change<sup>a</sup><br>(1 value &gt; ULN)",
			    "eventAction": "7"
			}
	    ]
    },
	{
	    "boxId": "10",
	    "infoText": "Work-up differential diagnoses",
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
	"staticImageName": "interactive_0000336",
	    "referenceText": "<sup>a</sup>&Delta; change, dependent on assay. Highly abnormal hsTn defines values beyond 5-fold the upper limit of normal.",
	    "abbreviationText": "3h rule-out algorithm of ACS using high-sensitivity troponin assays.<br/>GRACE = Global Registry of Acute Coronary Events score; hsTn = high sensitivity troponin; ULN = upper limit of normal, 99th percentile of healthy controls.",
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
					    "text": "<a href=\"ref_ENAS5080_3.5.2.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];