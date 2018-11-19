var text =


	[{
		"boxId": "1",
		"infoText": "<p>Bifascicular BBB and unexplained syncope</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Ejection fraction &le;35% or &gt;35%?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Ejection fraction &le;35%</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Ejection fraction &gt;35%</p>",
			"eventAction": "4"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>ICD/CRT-D</p>\n<p>(Class I)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>EPS or Empiric PM?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>EPS</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Empiric PM</p>",
			"eventAction": "5"
		}]
	}, {
		"boxId": "5",
		"infoText": "<p>Empiric PM</p>\n<p>(Class IIb)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<p>Perform EPS (Class IIa)</p>",
		"boxType": "activity-going-through",
		"nextBox": "7"
	}, {
		"boxId": "7",
		"infoText": "<p>Findings negative?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "8"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "9"
		}]
	}, {
		"boxId": "8",
		"infoText": "<p>Appropriate therapy</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>Implant ILR</p>\n<p>(Class I)</p>",
		"boxType": "activity-going-through",
		"nextBox": "10"
	}, {
		"boxId": "10",
		"infoText": "<p>Findings negative?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "8"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "11"
		}]
	}, {
		"boxId": "11",
		"infoText": "<p>Clinical follow-up</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001859",

		"abbreviationText": "<p>BBB = bundle branch block; CRT-D = cardiac resynchronization therapy defibrillator; EPS = electrophysiological study; ICD = implantable cardioverter defibrillator; ILR = implantable loop recorder; PM = pacemaker.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_23.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];