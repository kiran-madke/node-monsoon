var text =


	[{
		"boxId": "1",
		"infoText": "<p>Falls in adults</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>Non-accidental</p>",
			"eventAction": "2"
		}, {
			"text": "<p>Accidental</p>",
			"eventAction": "6"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>&nbsp;</p>\n<p>&nbsp;</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Unexplained fall</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Explained</p>",
			"eventAction": "5"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>Syncope likely</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "4"
	}, {
		"boxId": "4",
		"infoText": "<p>Same evaluation as for unexplained syncope</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<p>i.e., impaired gait/balance, cognitive status, environment hazard</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<p>Slip or trip</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
				"staticImageName": "interactive_0001875",

		"extraButtons": [{
			"buttonRow": [{
				"image": "Flip PDF",
				"buttonId": "pdfButton"
			}]
		}, {
			"buttonRow": [{
				"text": "Reset",
				"buttonId": "resetButton"
			}, {
				"text": " <a class='more-info-link' href='ref_ENAS5530_27.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];