var text =


	[{
		"boxId": "1",
		"infoText": "<p>1- Is the syncope the predominant reason for ED presentation?</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "2"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "4"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>Syncope is one of the symptoms of an acute principal disease<sup>a</sup></p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "3"
	}, {
		"boxId": "3",
		"infoText": "<p>Care pathway of the principal disease</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>2-&nbsp;Is diagnosis uncertain (after initial evaluation in ED)?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "7"
		}]
	}, {
		"boxId": "5",
		"infoText": "<p>Diagnosis is certain or highly likely</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "6"
	}, {
		"boxId": "6",
		"infoText": "<p>Appropriate therapy</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "7",
		"infoText": "<p>3- Follow the risk stratification flow chart (<a href=\"ref_ENAS5530_6.3.0.0.html\">Figure 5</a>)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001868",

		"referenceText": "<p><sup>a</sup>e.g. this includes pulmonary embolism presenting with shortness of breath, pleuritic chest pain, and syncope, but not trauma secondary to syncope.</p>",
		"extraButtons": [{
			"buttonRow": [{
				"text": "Footnote(s)",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_6.1.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];