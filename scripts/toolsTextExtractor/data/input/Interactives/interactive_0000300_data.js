var text = [
    {
        "boxId": "0",
        "infoText": "Patient on NOAC presenting with bleeding",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "1"
	},
    {
        "boxId": "1",
        "infoText": "Check haemodynamic status, basic coagulation tests to assess for an anticoagulation <br />effect (e.g. aPTT for dabigatran, etc), renal function, etc.<br/><br/> Bleeding status?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Minor",
                "eventAction": "2"
			},
            {
                "text": "Moderate-severe",
                "eventAction": "3"
			},
            {
                "text": "Very severe",
                "eventAction": "4"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "Delay next dose or discontinue treatment",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "5"
	},
    {
        "boxId": "5",
        "infoText": "Haemodynamic status improved?",
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
        "boxId": "6",
        "infoText": "When the haemodynamic status has improved: <br/>Symptomatic/supportive treatment </br>Mechanical compression </br>Fluid replacement <br />Blood transfusion </br>Oral charcoal if recently ingested<sup>*</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "8"
	},
    {
        "boxId": "8",
        "infoText": "Haemodynamic status improved?",
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
        "infoText": "Consideration of rFVIIa or PCC </br>Charcoal filtration<sup>*</sup> / <br />Haemodialysis<sup>*</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "10",
        "infoText": "Delay next dose or discontinue treatment",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "Consider further treatment with NOAC",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "3",
        "infoText": "Symptomatic/supportive treatment </br>Mechanical compression </br>Fluid replacement </br>Blood transfusion </br>Oral charcoal if recently ingested<sup>*</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "8"
	},
    {
        "boxId": "4",
        "infoText": "Consideration of rFVIIa or PCC </br>Charcoal filtration<sup>*</sup> / <br />Haemodialysis<sup>*</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "11"
	},
    {
        "boxId": "11",
        "infoText": "Symptomatic/supportive treatment </br>Mechanical compression </br>Fluid replacement </br>Blood transfusion </br>Oral charcoal if recently ingested<sup>*</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": false,
        "referenceText": "* with dabigatran",
			"staticImageName": "interactive_0000300",
        "abbreviationText": "aPTT = activated patrial thromboplastin time; NOAC = non-vitamin K antagonist direct oral anticogulant; PCC = prothrombin coagulation complax; rFVIIa = activated recombinant factor VII",
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
                        "text": "<a href=\"ref_ENAS261_7.5.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];