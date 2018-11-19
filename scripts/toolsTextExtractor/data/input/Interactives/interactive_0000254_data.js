var text = [
    {
        "boxId": "1",
        "infoText": "Suspect hypertension?<br /> Take office blood pressure, <a href=\"ref_ENAS260_5.2.1.0.html\">follow instructions for correct BP measurement.</a> Would you like to specify your results?",
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
        "infoText": "<a href=\"ref_ENAS260_6.2.0.0.html\">see Initiate treatment</a>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "3",
        "infoText": "Grade I hypertension in the office?",
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
        "infoText": "High office BP in individuals without asymptomatic organ damage and at low total CV risk?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "6"
			},
            {
                "text": "Yes",
                "eventAction": "5"
			}
	    ]
	},
    {
        "boxId": "5",
        "infoText": "Suspicion of white-coat hypertension -> clinical indication for HBPM or ABPM",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "High normal BP in the office?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "7"
			},
            {
                "text": "Yes",
                "eventAction": "18"
			}
	    ]
	},
    {
        "boxId": "7",
        "infoText": "Normal office BP in individuals with asymptomatic organ damage or at high total CV risk?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "11"
			},
            {
                "text": "Yes",
                "eventAction": "18"
			}
	    ]
	},
    {
        "boxId": "11",
        "infoText": "Are you suspecting one of the following?",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "12"
	},
    {
        "boxId": "12",
        "infoText": "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Identification of white-coat effect in hypertensive patients</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Considerable variability of office BP over the same or different visits</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Autonomic, postural, post-prandial, siesta- and drug-induced hypotension</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Elevated office BP or suspected pre-eclampsia in pregnant women</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Identification of true and false resistant hypertension</span></p>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "13"
			},
            {
                "text": "Yes",
                "eventAction": "14"
			}
	    ]
	},
    {
        "boxId": "13",
        "infoText": "Is the reason for your further investigation one of the following?",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "15"
	},
    {
        "boxId": "14",
        "infoText": "Clinical indication for HBPM or ABPM",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
	},
    {
        "boxId": "15",
        "infoText": "<p class=\"list-level2 text-left\"><span class=\"bold-text\"> Marked discordance between office BP and home BP</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Assessment of dipping status</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Suspicion of nocturnal hypertension or absence of dipping, such as in patients with</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">sleep apnoea, CKD, or diabetes</span></p>" +
            "<p class=\"list-level2 text-left\"><span class=\"bold-text\">Assessment of BP variability</span></p>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "2"
			},
            {
                "text": "Yes",
                "eventAction": "17"
			}
	    ]
	},
    {
        "boxId": "17",
        "infoText": "Clinical indication for ABPM",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX
	},
    {
        "boxId": "18",
        "infoText": "Suspicion of masked hypertension -> clinical indication for HBPM or ABPM",
        "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": false,
        "hasPdfButton": false,
        "hasMoreInfoButton": true,
        "referenceText": "This is reference text1. This is reference text2. This is reference text3. <div class=\"hyp-comment\"><p class=\"reference\"><span class=\"sup\">8</span> <b>DGK-Kommentar:</b> Die Autoren der deutschen PLL sehen auch bei HF-PEF eine Präferenz für die Betablocker als Primärtherapie. Im nächsten Schritt sollte bei nicht adäquater Frequenzkontrolle Digoxin&nbsp;eingesetzt werden. Sollte auch unter dieser Kombi&shy;nation eine adäquate Frequenzkontrolle nicht zu erreichen sein, wird in der ESC-PLL die Hinzunahme eines Calcium&shy;kanalblockers (oder&nbsp;Betablocker) empfohlen. Da Calcium&shy;kanal&shy;blocker oder Betablocker aber als Primärtherapie ange&shy;geben werden, impliziert dieser Vorschlag der Stufentherapie die Kombination von Betablocker und&nbsp;Frequenzsenkendem Calciumkanalblocker (Abb.3). Die Autoren sehen aber auch bei&nbsp;Vorhofflimmern eine klare Kontraindikation für diese Kombination.</p></div>",
        "abbreviationText": "This is abbreviation text. This is abbreviation text. This is abbreviation text.",
        "moreInfotext": "For more information, <a href=\"http://www.google.co.in\">see here</a>",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
					{
                        "text": "Reset",
                        "buttonId": FooterButtons.RESET_BUTTON
					},
                    {
                        "text": "<a href=\"ref_ENAS260_5.2.1.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
					 
			    ]
			}
            
	    ]
	}
];