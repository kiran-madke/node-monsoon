var text = [

    {
        "boxId": "1",
        "infoText": "Initiation of long term rhythm control therapy to improve symptoms in AF",
        "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Choose from following condition",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No or minimal signs for structural heart disease",
                "eventAction": "3"
			},
            {
                "text": "Coronary artery disease, significant valvular heart disease, abnormal LVH",
                "eventAction": "5"
			},
            {
                "text": "Heart failure",
                "eventAction": "7"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "Patient choice",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
	},

    {
        "boxId": "4",
        "infoText": "Dronedarone (IA)<br/>Flecainide (IA) <br/>Propafenone (IA) <br/>Sotalol (IA)<sup>a</sup><br/>OR<br/>Catheter ablation (IIaB)<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "Patient choice",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
	},
    {
        "boxId": "6",
        "infoText": "Dronedarone (IA), <br/>Sotalol (IA)<sup>a</sup><br/>Amiodarone (IA)<sup>d</sup><br/>OR<br/>Catheter ablation (IIaB)<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "Patient choice",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "8"
	},
    {
        "boxId": "8",
        "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Amiodarone (IA)</span></p><p class=\"list-level1\"><span class=\"bold-text\">Catheter ablation (IIaB)<sup>c</sup><br/>as a first-line therapy is usually reserved to patients with tachycardiomyopathy in HF patients</span></p>",
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
        "staticImageName": "interactive_0000561",
		"referenceText": "<sup>a</sup>Sotalol requires careful evaluation of proarrhythmic risk.<br/><sup>b</sup>Catheter ablation should isolate pulmonary veins and can be performed using radiofrequency catheters or cryoballoons.<br/><sup>c</sup>Catherter ablation as a first-line therapy is usually reserved for heart failure patients with tachycardiomypathy.<br/><sup>d</sup>Amiodarone is a second-choice therapy in many patients due to its extracardiac side effects",
        "abbreviationText": "AF = atrial fibrillation; LVH = left ventricular hypertrophy",
        "moreInfotext": "For more information, <a href=\"http://www.google.co.in\">see here</a>",
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
                        "text": "<a href=\"ref_ENAS5194_10.2.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
				]
			}
		]
	}

];