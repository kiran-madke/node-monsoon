var text =


	[{
		"boxId": "1",
		"infoText": "<p>Diagnostic evaluation</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>Reflex and orthostatic intolerance</p>",
			"eventAction": "2"
		}, {
			"text": "<p>Cardiac</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Unexplained and high-risk of SCD</p>",
			"eventAction": "8"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>&nbsp;</p>\n<p>&nbsp;</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Unpredictable or high-frequency&nbsp;</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Predictable or low-frequency</p>",
			"eventAction": "4"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>Consider specific therapy or delayed treatment (guided by ECG documentation)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>Education, reassurance avoidance of triggers usually sufficient</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<p>&nbsp;</p>\n<p>&nbsp;</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Cardiac arrhythmias</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Structural (cardiac or cardiopulmonary)</p>",
			"eventAction": "7"
		}]
	}, {
		"boxId": "6",
		"infoText": "<p>Specific therapy of the culprit arrhythmia</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "7",
		"infoText": "<p>Treatment of underlying disease</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "8",
		"infoText": "<p>i.e., CAD, DCM, HCM, ARVC, LQTS<br>Brugada syndrome</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "9"
	}, {
		"boxId": "9",
		"infoText": "<p>Consider risk/benefit of ICD therapy</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001870",

		"abbreviationText": "<p>ARVC = arrhythmogenic right ventricular cardiomyopathy; CAD = coronary artery disease; DCM = dilated cardiomyopathy; ECG = electrocardiographic; HCM= hypertrophic cardiomyopathy; ICD = implantable cardioverter defibrillator; LQTS = longQT syndrome; SCD= sudden cardiac death.</p>",
		"extraButtons": [{
			"buttonRow": [{
				"text": "Abbreviations(s)",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_19.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];