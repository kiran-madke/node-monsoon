var text = [
    {
        "boxId": "0",
        "infoText": "Target BP Not achieved?",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Mild BP elevation Low/moderate CV risk",
                "eventAction": "1"
			},
            {
                "text": "Marked BP elevation High/very high CV risk",
                "eventAction": "2"
			}
	    ]
	 },
    {
        "boxId": "1",
        "infoText": "Therapy option",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Stay with single agent therapy",
                "eventAction": "3"
			},
            {
                "text": "Consider two drug combination",
                "eventAction": "4"
			}
	    ]
	},
    {
        "boxId": "3",
        "infoText": "Switch to different agent or continue previous agent at full dose?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Switch to different agent",
                "eventAction": "5"
			},
            {
                "text": "Previous agent at full dose",
                "eventAction": "6"
			}
	    ]
	},
    {
        "boxId": "5",
        "infoText": "Target BP achieved?",
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
        "infoText": "Two drug combination full doses",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
    },
    {
        "boxId": "9",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "10"
			},
            {
                "text": "Yes",
                "eventAction": "20"
			}
	    ]
	},
    {
        "boxId": "10",
        "infoText": "Switch to different two-drug combination",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "12"
	},
    {
        "boxId": "12",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "13"
			},
            {
                "text": "Yes",
                "eventAction": "11"
			}
	    ]
	},
    {
        "boxId": "13",
        "infoText": "Three drug combination at full doses",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "11",
        "infoText": "Two drug combination at full doses",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "8",
        "infoText": "Full dose monotherapy",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "14"
			},
            {
                "text": "Yes",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "14",
        "infoText": "Two drugs combination at full doses",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "16"
    },
    {
        "boxId": "16",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "17"
			},
            {
                "text": "Yes",
                "eventAction": "20"
			}
	    ]
	},
    {
        "boxId": "17",
        "infoText": "Switch to different two drugs combination",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "19"
	},
    {
        "boxId": "19",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "18"
			},
            {
                "text": "Yes",
                "eventAction": "20"
			}
	    ]
	},
    {
        "boxId": "18",
        "infoText": "Three drugs combination at full dose",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "20",
        "infoText": "Two drugs combination at full dose",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "4",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "21"
			},
            {
                "text": "Yes",
                "eventAction": "22"
			}
	    ]
	},
    {
        "boxId": "21",
        "infoText": "Switch to different two-drug combination",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "23"
	},
    {
        "boxId": "23",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "13"
			},
            {
                "text": "Yes",
                "eventAction": "22"
			}
	    ]
	},
    {
        "boxId": "22",
        "infoText": "Two-drug combination at full doses",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "2",
        "infoText": "Therapy option",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Stay with two drug combination",
                "eventAction": "24"
			},
            {
                "text": "Add third drug",
                "eventAction": "25"
			}
	    ]
	},
    {
        "boxId": "24",
        "infoText": "Previous combination at full dose.",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "26"
	},
    {
        "boxId": "26",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "21"
			},
            {
                "text": "Yes",
                "eventAction": "27"
			}
	    ]
	},
    {
        "boxId": "27",
        "infoText": "Previous combination at full dose",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "25",
        "infoText": "Target BP achieved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "13"
			},
            {
                "text": "Yes",
                "eventAction": "28"
			}
	    ]
	},
    {
        "boxId": "28",
        "infoText": "Continue therapy",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000277",
        "referenceText": "",
        "abbreviationText": "<nobr>BP = blood pressure;</nobr> <nobr>CV=cardiovascular.</nobr>",
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
                        "text": "<a href=\"ref_ENAS260_7.2.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];