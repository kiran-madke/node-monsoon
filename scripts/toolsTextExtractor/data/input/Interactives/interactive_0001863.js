var text =


	[{
		"boxId": "1",
		"infoText": "<p>Patient with cardiogenic shock</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<ul>\n<li>Medical therapy</li>\n<li>Inotropic support</li>\n<li>Ventilatory support</li>\n<li>Reperfusion</li>\n<li>Revascularization</li>\n<li>Repair of mechanical complications</li>\n</ul>",
		"boxType": "activity-going-through",
		"nextBox": "3"
	}, {
		"boxId": "3",
		"infoText": "<p>Patient status?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Unstable</p>",
			"eventAction": "4"
		}, {
			"text": "<p>Stable</p>",
			"eventAction": "10"
		}]
	}, {
		"boxId": "4",
		"infoText": "<p>Short-term mechanical circulatory support</p>",
		"boxType": "activity-going-through",
		"nextBox": "5"
	}, {
		"boxId": "5",
		"infoText": "<p>Recovery of cardiac function</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "9"
		}]
	}, {
		"boxId": "6",
		"infoText": "<p>Assess neurological/end organ function</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Irreversible neurological deficit</p>",
			"eventAction": "7"
		}, {
			"text": "<p>Favourable neurological function</p>",
			"eventAction": "8"
		}]
	}, {
		"boxId": "7",
		"infoText": "<p>Weaning</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "8",
		"infoText": "<p>Mechanical circulatory support for destination therapy or as bridge to cardiac transplantation</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>Weaning</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "10",
		"infoText": "<p>Weaning</p>",
		"boxType": "activity-going-through",
		"nextBox": "11"
	}, {
		"boxId": "11",
		"infoText": "<p>Recovery of cardiac function?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "12"
		}]
	}, {
		"boxId": "12",
		"infoText": "<p>Standard therapy</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
				"staticImageName": "interactive_0001863",

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
				"text": " <a class='more-info-link' href='ref_ENAS5532_9.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];