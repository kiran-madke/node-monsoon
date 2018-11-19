var text = [

    {
        "boxId": "1",
        "infoText": "Patient with active bleeding",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Compress bleeding sites mechanically",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
	},
    {
        "boxId": "3",
        "infoText": "Assess haemodynamic status, blood pressure, basic coagulation parameters, blood count, and kidney function",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
	},
    {
        "boxId": "4",
        "infoText": "Anticoagulation history?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "VKA",
                "eventAction": "5"
			},
            {
                "text": "NOAC",
                "eventAction": "12"
			}
		]
	},
    {
        "boxId": "5",
        "infoText": "Active bleeding is?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Minor",
                "eventAction": "6"
			},
            {
                "text": "Moderate - severe",
                "eventAction": "8"
			},
            {
                "text": "Severe or life-threatening",
                "eventAction": "10"
			}
		]
	},
    {
        "boxId": "6",
        "infoText": "Delay VKA until INR <2",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
	},
    {
        "boxId": "7",
        "infoText": "Bleeding improved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "8"
			},
            {
                "text": "Yes",
                "eventAction": "11"
			}
		]
	},
    {
        "boxId": "8",
        "infoText": "Add symptomatic treatment:<br/>Fluid replacement <br/>Blood transfusion <br/>Treat bleeding cause (e.g. gastroscopy) <br/><br/>Consider to add Vitamin K (1 &ndash; 10 mg) i.v.",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
	},
    {
        "boxId": "9",
        "infoText": "Bleeding improved?",
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
        "boxId": "10",
        "infoText": "Consider PCC and FFP<br/>Consider replacement of platelets where appropriate",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "11",
        "infoText": "Continue anti-coagulation therapy",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "12",
        "infoText": "Active bleeding?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Minor",
                "eventAction": "13"
			},
            {
                "text": "Moderate-severe",
                "eventAction": "15"
			},
            {
                "text": "Severe or life-threatening",
                "eventAction": "17"
			}
		]
	},
    {
        "boxId": "13",
        "infoText": "Delay NOAC for 1 dose or 1 day",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "14"
	},
    {
        "boxId": "14",
        "infoText": "Bleeding improved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "15"
			},
            {
                "text": "Yes",
                "eventAction": "11"
			}
		]
	},
    {
        "boxId": "15",
        "infoText": "Add symptomatic treatment:<br/>Fluid replacement<br/>Blood transfusion<br/>Treat bleeding cause (e.g. gastroscopy)<br/><br/>Consider to add oral charcoal if recently ingested NOAC",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "16"
	},
    {
        "boxId": "16",
        "infoText": "Bleeding improved?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "17"
			},
            {
                "text": "Yes",
                "eventAction": "11"
			}
		]
	},
    {
        "boxId": "17",
        "infoText": "Consider specific antidote or PCC if no antidote available<br/>Consider replacement of platelets where appropriate",
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
        "staticImageName": "interactive_0000555",
		"referenceText": "",
        "abbreviationText": "FFP = fresh frozen plasma; INR = international normalized ratio; i.v. = intravenous; NOAC = non-vitamin K antagonist oral anticoagulant; PCC = prothrombin complex concentrates; VKA = vitamin K antagonist.",
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
                        "text": "<a href=\"ref_ENAS5194_8.10.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": "btnInfo"
                    }
				]
			}
		]
	}

];