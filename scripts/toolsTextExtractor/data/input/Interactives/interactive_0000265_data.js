var text = [
    {
        "boxId": "0",
        "infoText": "Optimal pacing mode",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Sinus node disease",
                "eventAction": "1"
			},
            {
                "text": "AV block",
                "eventAction": "2"
			}
	    ]
	},
    {
        "boxId": "1",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Persistent",
                "eventAction": "3"
			},
            {
                "text": "Intermittent",
                "eventAction": "4"
			}
	    ]
	},
    {
        "boxId": "3",
        "infoText": "Chronotropic incompetence?",
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
        "infoText": " <p class=\"text-normal\">1 choice:<span class=\"bold-text\"> DDD + AVM</span><br/>2 choice:<span class=\"bold-text\"> AAI</span></p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "6",
        "infoText": " <p class=\"text-normal\">1 choice:<span class=\"bold-text\"> DDDR + AVM</span><br/>2 choice:<span class=\"bold-text\"> AAIR</span></p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "4",
        "infoText": " <p class=\"text-normal\">1 choice:<span class=\"bold-text\"> DDDR + AVM</span><br/>2 choice:<span class=\"bold-text\"> DDDR, no AVM</span><br/>3 choice:<span class=\"bold-text\">  AAIR</span></p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "2",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Persistent",
                "eventAction": "7"
			},
            {
                "text": "Intermittent",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "7",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "SND",
                "eventAction": "9"
			},
            {
                "text": "No SND",
                "eventAction": "10"
			},
            {
                "text": "AF",
                "eventAction": "11"
			}
	    ]
	},
    {
        "boxId": "9",
        "infoText": " <p class=\"text-normal\">1 choice:<span class=\"bold-text\"> DDDR</span><br/>2 choice:<span class=\"bold-text\"> DDD</span><br/>3 choice:<span class=\"bold-text\">  VVIR</span></p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "10",
        "infoText": " <p class=\"text-normal\">1 choice:<span class=\"bold-text\"> DDD</span><br/>2 choice:<span class=\"bold-text\"> VDD</span><br/>3 choice:<span class=\"bold-text\">  VVIR</span></p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "11",
        "infoText": "VVIR",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "8",
        "infoText": "DDD + AVM (VVI<span class=\"italic-text text-normal\"> if AF</span>)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
			"staticImageName": "interactive_0000265",
        "referenceText": "Consider CRT if low EF/H",
        "abbreviationText": "<nobr>AF = atrial fibrillation;</nobr><nobr> AV= atrioventricular;</nobr> <nobr>AVM = AV delay </nobr> management, i.e. to prevent unnecessary right ventricular pacing by means of manual optimization of AV interval or programming of AV hysteresis; <nobr> SND = sinus </nobr>node disease.",
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
                        "text": "<a href=\"ref_ENAS259_4.2.1.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     },

			    ]
			}
	    ]
	}
];