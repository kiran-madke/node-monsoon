var text = [
    {
        "boxId": "1",
        "infoText": "Patient with atrial fibrillation and acute TIA or ischaemic stroke<br/>Exclusion of intracerebral bleeding by CT or MRI",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "TIA or stroke?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "TIA",
                "eventAction": "3"
			},
            {
                "text": "Stroke",
                "eventAction": "4"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "Start OAC 1 day after acute event",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "4",
        "infoText": "Stroke severity scale?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Mild stroke (NIHSS < 8)",
                "eventAction": "5"
			},
            {
                "text": "Moderate stroke (NIHSS 8 - 15)",
                "eventAction": "7"
			}
			,
            {
                "text": "Severe stroke (NIHSS &ge; 16)",
                "eventAction": "10"
			}
		]
	},
    {
        "boxId": "5",
        "infoText": "Consider additional clinical factors favouring early / delayed initiation <br/><ul><li>Small/no brain infarction on imaging</li><li>High recurrence risk e.g. cardiac thrombus on echo</li><li>No need for percutaneous endoscopic gastrostomy</li><li>No need for carotid surgery</li><li>No haemorrhagic transformation </li><li>Clinically stable</li><li>Young patient</li><li>Blood pressure is controlled",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
	},
    {
        "boxId": "6",
        "infoText": "Start OAC 3 days after acute event",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "Consider additional clinical factors favouring early / delayed initiation <ul><li>Large/moderate brain infarction on imaging</li><li>Needs gastrostomy or major surgical intervention</li><li>Needs carotid surgery</li><li>Haemorrhagic transformation</li><li>Neurologically unstable</li><li>Elderly patient </li><li>Uncontrolled hypertension</li></ul>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "8"
	},
    {
        "boxId": "8",
        "infoText": "Evaluate haemorrhagic transformation by CT or MRI at day 6",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
	},
    {
        "boxId": "9",
        "infoText": "Start OAC 6 days after acute event",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "10",
        "infoText": "Consider additional clinical factors favouring early / delayed initiation <br/><ul><li>Large/moderate brain infarction on imaging</li><li>Needs gastrostomy or major surgical intervention </li><li>Needs carotid surgery</li><li>Haemorrhagic transformation</li><li>Neurologically unstable</li><li>Elderly patient</li><li>Uncontrolled hypertension</li></ul>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "11"
	},
    {
        "boxId": "11",
        "infoText": "Evaluate haemorrhagic transformation by CT or MRI at day 12",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "12"
	},

    {
        "boxId": "12",
        "infoText": "Start OAC 12 days after acute event",
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
        "staticImageName": "interactive_0000553",
		"referenceText": "",
        "abbreviationText": "AF = atrial fibrillation; CT = computed tomography; MRI = magnetic resonance imaging; NIHSS = National Institute of Health stroke severity scale (available at http://www.strokecenter.org/wp-content/uploads/2011/&shy;08/NIH_Stroke_Scale.pdf); OAC = oral anticoagulation; TIA = transient ischaemic attack",
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
					    "text": "<a class=\"more-info-link\" href=\"ref_ENAS5194_8.9.2.0.html\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
				]
			}
		]
	}

];