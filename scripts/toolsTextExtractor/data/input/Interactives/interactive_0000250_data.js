var text = [
    {
        "boxId": "1",
        "infoText": "Any changes of cardiac biomarker values (preferably cTn with at least one value above the 99th percentile upper limit (URL))?",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "No",
                "eventAction": "2"
			},
            {
                "text": "Yes",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "MI not very likely",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "3",
        "infoText": "Symptoms of ischaemia?",
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
        "infoText": "New or presumed new significant ST-segment–T wave (ST–T) changes or new left bundle branch block (LBBB)?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "6"
			},
            {
                "text": "Yes",
                "eventAction": "7"
			}
	    ]
    },
    {
        "boxId": "5",
        "infoText": "MI most likely",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "6",
        "infoText": "Development of pathological Q waves in the ECG?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "8"
			},
            {
                "text": "Yes",
                "eventAction": "9"
			}
	    ]
    },
    {
        "boxId": "7",
        "infoText": "MI most likely",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "9",
        "infoText": "MI most likely",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "8",
        "infoText": "Imaging evidence of new loss of viable myocardium or new regional wall motion abnormality?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "10"
			},
            {
                "text": "Yes",
                "eventAction": "11"
			}
	    ]
    },
    {
        "boxId": "11",
        "infoText": "MI most likely",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "10",
        "infoText": "Identification of an intracoronary thrombus by angiography or autopsy?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "12"
			},
            {
                "text": "Yes",
                "eventAction": "13"
			}
	    ]
    },
    {
        "boxId": "12",
        "infoText": "MI not very likely",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
    },
    {
        "boxId": "13",
        "infoText": "MI most likely",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": false,
        "hasPdfButton": false,
        "hasMoreInfoButton": true,
        "referenceText": "",
        "abbreviationText": "AF = atrial fibrillation",
        "moreInfotext": "",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Reset",
                        "buttonId": FooterButtons.RESET_BUTTON
					},
			        {
                        "text": "<a href=\"ref_ENAS247_2.0.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];