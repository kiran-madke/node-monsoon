var text = [

    {
        "boxId": "1",
        "infoText": "Patient with AF suffering from an intracranial bleed on OAC<br/>If acute event: establish intensity of anticoagulation (see bleeding flow chart)",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Contraindications known for OAC or further information needed to allow informed judgement?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {

                "text": "Contraindications known for OAC",
                "eventAction": "6"
			},
            {
                "text": "Consider further information",
                "eventAction": "3"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "Factors supporting withholding of OAC:<span class=\"text-normal\"><ul><li>Bleeding occurred on adequately dosed NOAC or in setting of treatment interruption or underdosing</li><li>Older age</li><li>Uncontrolled hypertension </li><li>Cortical bleed</li><li>Severe intracranial bleed</li><li>Multiple microbleeds (e.g. &gt;10)</li><li>Cause of bleed cannot be removed or treated</li><li>Chronic alcohol abuse</li><li>Need for dual antiplatelet therapy after PCI</li></ul></span><br/>Factors supporting reinitiation of OAC:<br/><span class=\"text-normal\"><ul><li>Bleeding occurred on VKA or in setting of overdose</li><li>Traumatic or treatable cause</li><li>Younger age</li><li>Well controlled hypertension</li><li>Basal ganglia bleed</li><li>No or mild white matter lesions</li><li>Surgical removal of subdural haematoma</li><li>Subarachnoid bleed: aneurysm clipped or coiled</li><li>High risk of ischaemic stroke</li></span>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
	},
    {
        "boxId": "3",
        "infoText": "Start OAC 1 day after acute event",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "4",
        "infoText": "Patient or next of kin choice informed by multidisciplinary team advice",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "5"
	},
    {
        "boxId": "5",
        "infoText": "<p class=\"list-level1\">Initiate or resume OAC, choosing an agent with low intracranial bleeding risk, after 4–8 weeks (IIbB)</p>  <p class=\"list-level1\">LAA occlusion (IIbC)</p>  <p class=\"list-level1\">No stroke protection (no evidence)</p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "<p class=\"list-level1\">Consider LAA occlusion if appropriate (IIbC)</p><p class=\"list-level1\">No stroke prevention (no evidence available)</p>",
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
        "staticImageName": "interactive_0000554",
		"referenceText": "",
        "abbreviationText": "AF = atrial fibrillation; LAA = left atrial appendage; NOAC = non-vitamin K antagonist oral anticoagulant; OAC = oral anticoagulation; PCI = percutaneous coronary intervention; VKA = vitamin K antagonist.",
        "moreInfotext": "",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Abbreviation(s) and footnote(s)",
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
					    "text": "<a class=\"more-info-link\" href=\"ref_ENAS5194_8.9.3.0.html\">More information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
				]
			}
		]
	}

];