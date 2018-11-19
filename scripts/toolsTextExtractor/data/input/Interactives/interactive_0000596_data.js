var text = [
	{
	    "boxId": "1",
	    "infoText": "PATIENT WITH ACUTE HEART FAILURE",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "<span class=\"text-normal\">Bedside assessment to identify</span><br> <i>haemodynamic profiles</i>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "3"
	},
	{
	    "boxId": "3",
	    "infoText": "PRESENCE OF CONGESTION<sup>a</sup>?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "NO",
			    "eventAction": "4"
			},
			{
			    "text": "YES ",
			    "eventAction": "10"
			}
        ]
	},
	{
	    "boxId": "4",
	    "infoText": "\‘Dry\’ patient<br><span class=\"text-normal\">(5% of all AHF patients)</span>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
	    "nextBox": "5"
	},
	{
	    "boxId": "5",
	    "infoText": "ADEQUATE PERIPHERAL PERFUSION?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "NO",
			    "eventAction": "6"
			},
			{
			    "text": "YES",
			    "eventAction": "8"
			}
	    ]
	},
	{
	    "boxId": "6",
	    "infoText": "\‘Dry and cold\’<br><span class=\"text-normal\">Hypoperfused,<br/>Hypovolemic</span>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
		"nextBox": "7" 
	},
	{
        "boxId": "7",
        "infoText": "Consider fluid challenge<br/>Consider inotropic agent if still hypoperfused",
        "boxType":BoxTypes.ACTIVITY_EXIT_BOX
    },
	{
	    "boxId": "8",
	    "infoText": "\‘Dry and warm\’<br><span class=\"text-normal\">Adequately perfused &#8776; Compensated</span>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
		"nextBox": "9" 
	},
	{
        "boxId": "9",
        "infoText": "Adjust oral therapy",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
	{
	    "boxId": "10",
	    "infoText": "\‘Wet\’ patient’<br><span class=\"text-normal\">(95% of all AHF patients)</span>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
		"nextBox": "11" 
	},
	{
	    "boxId": "11",
	    "infoText": "ADEQUATE PERIPHERAL PERFUSION?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "NO",
			    "eventAction": "12"
			},
			{
			    "text": "YES",
			    "eventAction": "16"
			}
	    ]
	},
	{
	    "boxId": "12",
	    "infoText": "\‘Wet and Cold\’ patient",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
		"nextBox": "13" 
	},
	{
	    "boxId": "13",
	    "infoText": "<p class=\"text-normal\">Systolic blood pressure &lt;90 mmHg?</p>",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "NO",
			    "eventAction": "14"
			},
			{
			    "text": "YES",
			    "eventAction": "15"
			}
	    ]
	},
	{
	    "boxId": "14",
	    "infoText": "<p class=\"list-level1\"><b>Vasodilators</b></p><p class=\"list-level1\"><b>Diuretics</b></p><p class=\"list-level1\"><b>Consider inotropic agent in refractory cases</b></p></b>",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX 
	},
	{
	    "boxId": "15",
	    "infoText": "<p class=\"list-level1\"><b>Inotropic agents</b></p><p class=\"list-level1\"><b>Consider vasopressor in refractory casess</b></p><p class=\"list-level1\"><b>Diuretic (when perfusion corrected)</b></p><p class=\"list-level1\"><b>Consider mechanical circulatory support if no response to drugs</b></p>",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX 
	},
	{
	    "boxId": "16",
	    "infoText": "\’Wet and Warm\’ <span class=\"text-normal\">patient (typically elevated or normal systolic blood pressure)</span>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
		"nextBox": "17" 
	},
	{
	    "boxId": "17",
	    "infoText": "Vascular type or Cardiac type?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Vascular type",
			    "eventAction": "18"
			},
			{
			    "text": "Cardiac type",
			    "eventAction": "20"
			}
	    ]
	},
	{
	    "boxId": "18",
	    "infoText": "<p class=\"text-normal\">Vascular type – fluid redistribution <span class=\"bold-text\">Hypertension</span> predominates</p>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
		"nextBox": "19" 
	},
	{
	    "boxId": "19",
	    "infoText": "<p class=\"list-level1\"><b>Vasodilator</b></p><p class=\"list-level1\"><b>Diuretic</b></p>",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX 
	},
	{
	    "boxId": "20",
	    "infoText": "<p class=\"text-normal\">Cardiac type – fluid accumulation<br/><span class=\"bold-text\">Congestion</span> predominates</p>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
		"nextBox": "21" 
	},
	{
	    "boxId": "21",
	    "infoText": "<p class=\"list-level1\"><b>Diuretic</b></p><p class=\"list-level1\"><b>Vasodilator</b></p><p class=\"list-level1\"><b>Ultrafiltration (consider if diuretic resistance)</b></p>",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX 
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "Fu&#223;noten",
	    "hasFootnote": true,
	    "hasAbbreviation": false,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
	    "staticImageName": "interactive_0000596",
		"referenceText": "<sup>a</sup>Symptoms/signs of congestion: orthopnoea, paroxysmal nocturnal dyspnoea, breathlessness, bi-basilar rales, an abnormal blood pressure response to the Valsalva maneuver (left-sided); symptoms of gut congestion, jugular venous distension, hepatojugular reflux, hepatomegaly, ascites, and peripheral oedema (right-sided).",
	    "abbreviationText": "",
	    "moreInfotext": "",
	    "resetButtonText": "",
	    "extraButtons": [
			{
			    buttonRow: [
					{
					    "text": "Footnote(s)",
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
                        "text": "<a href=\"ref_ENAS5195_13.8.1.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                ]
			}
	    ]
	}
];