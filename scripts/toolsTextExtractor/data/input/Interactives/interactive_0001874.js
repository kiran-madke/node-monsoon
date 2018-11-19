var text =


	[{
		"boxId": "1",
		"infoText": "<p>Cardiac tachyarrhythmia syncope</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>SVT or VT?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>SVT</p>",
			"eventAction": "3"
		}, {
			"text": "<p>VT</p>",
			"eventAction": "4"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>Catheter ablation (Class I)&nbsp;</p>\n<p>Or</p>\n<p>AA drugs (Class IIa)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>Catheter ablation (Class I)&nbsp;</p>\n<p>Or</p>\n<p>ICD (Class I, Class IIa)</p>\n<p>Or</p>\n<p>AA drugs (Class IIa)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001874",

		"abbreviationText": "<p>AA = antiarrhythmic; ICD = implantable cardioverter defibrillator; SVT = supraventricular tachycardia; VT = ventricular tachycardia.</p>",
		"extraButtons": [{
			"buttonRow": [{
				"text": "Abbreviation(s)",
				"buttonId": "refButton"
			}, {
				"image": "Flip PDF",
				"buttonId": "pdfButton"
			}]
		}, {
			"buttonRow": [{
				"text": "Reset",
				"buttonId": "resetButton"
			}, {
				"text": " <a class='more-info-link' href='ref_ENAS5530_24.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];