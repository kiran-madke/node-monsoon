var text = [
    {
        "boxId": "0",
        "infoText": " Cardiovascular disease (CVD) and Diabetes mellitus (DM)",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "1"
	},
    {
        "boxId": "1",
        "infoText": "Main diagnosis?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "DM",
                "eventAction": "2"
			},
            {
                "text": "CVD",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "Known CVD?",
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
        "infoText": "ECG, echocardiography, exercise test, Holter monitoring",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
	},
    {
        "boxId": "6",
        "infoText": "Results normal?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "7"
			},
            {
                "text": "Yes",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "7",
        "infoText": "Cardiology consultation, ischaemia treatment, non-invasive or invasive",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "8",
        "infoText": "Follow-up",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "ECG, echocardiography, exercise test, Holter monitoring, if positive - cardiology consultation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "3",
        "infoText": "Known DM?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "9"
			},
            {
                "text": "Yes",
                "eventAction": "10"
			}
	    ]
	},
    {
        "boxId": "9",
        "infoText": "HbA<sub>1c</sub>, FPG, if needed OGTT, blood lipids, if MI or ACS aim for reasonable glycaemic control",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "11"
	},
    {
        "boxId": "11",
        "infoText": "Results normal?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "12"
			},
            {
                "text": "Yes",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "12",
        "infoText": "Newly detected DM or IGT, diabetology consultation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "10",
        "infoText": "Screen for  microangiopathy, if poor glycaemic control, diabetology consultation",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": false,
		"staticImageName": "interactive_0000276",
        "referenceText": "",
        "abbreviationText": "<nobr>ACS = acute</nobr> coronary syndrome;<nobr> CVD = cardiovascular</nobr> disease;<nobr> DM = diabetes</nobr> mellitus; <nobr>FPG = fasting</nobr> plasma glucose; <nobr>ECG = electrocardiogram;</nobr><nobr> HbA<sub>1c</sub> = glycated</nobr> haemoglobin A1c; <nobr>IGT = impaired</nobr> glucose tolerance; <nobr>MI = myocardial</nobr> infarction; <nobr>OGTT = oral</nobr> glucose tolerance test.",
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
                        "text": "<a href=\"ref_ENAS257_4.1.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];