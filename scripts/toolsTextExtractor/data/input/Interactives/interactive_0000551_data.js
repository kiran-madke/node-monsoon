var text = [
    {
        "boxId": "1",
        "infoText": "Patient without known AF presenting with atrial high rate episode (AHRE, >5-6 min and >180 bpm) detected by an implanted device",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Assess eligibility for oral anticoagulation using CHA<sub>2</sub>DS<sub>2</sub>-VASc score",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
	},
    {
        "boxId": "3",
        "infoText": "Stroke risk high or low?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Low",
                "eventAction": "4"
			},
            {
                "text": "High",
                "eventAction": "5"
			}
		]
	},
    {
        "boxId": "4",
        "infoText": "No antithrombotic therapy (IB)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "Verify presence of atrial fibrillation by ECG documentation<span class=\"text-normal\"><ul><li>e.g. resting ECG</li><li>Ambulatory ECG recorder</li><li>Patient-operated devices</li><li>Review device electrograms (if available) to determine whether it is AF</li></ul></span>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
	},
    {
        "boxId": "6",
        "infoText": "AF diagnosed?",
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
        "infoText": "Consider patient characteristics (e.g. stroke risk) and patient preference",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
	},
    {
        "boxId": "8",
        "infoText": "Initiate oral anticoagulation (IA)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "9",
        "infoText": "No antithrombotic therapy (IB)<br/><span class=\"text-normal\">(In rare individual circumstances, oral anticoagulation may be considered in patients with AHRE, but without diagnosed AF. This clearly needs discussion with the patient and careful evaluation of perceived benefit and risk.)</span>",
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
        "staticImageName": "interactive_0000551",
		"referenceText": "<sup>a</sup>Adapted from the report of the 3rd AFNET/EHRA consensus conference.",
        "abbreviationText": "AF = atrial fibrillation; AFNET = German Competence NETwork on Atrial Fibrillation; AHRE = atrial high rate episodes; bpm = beats per minute; CHA2DS2-VASc = Congestive Heart failure, hypertension, Age ≥75 (doubled), Diabetes, Stroke (doubled), Vascular disease, Age 65–74, and Sex (female); ECG = electrocardiogram; EHRA = European Heart Rhythm Association.",
        "moreInfotext": "",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Abbreviation(s) and footnote(s)",
                        "buttonId": "refButton"
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
                        "text": "<a href=\"ref_ENAS5194_4.2.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": "btnInfo"
                    }
				]
			}
		]
	}
];