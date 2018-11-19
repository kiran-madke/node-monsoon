var text =


	[{
		"boxId": "1",
		"infoText": "<p>Severe, recurrent&nbsp;unpredictable syncopes,&nbsp;age &gt;40 years?</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "2"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "3"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>Pacing not indicated</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "3",
		"infoText": "<p>Perform CSM &amp;&nbsp;tilt table test</p>",
		"boxType": "activity-going-through",
		"nextBox": "4"
	}, {
		"boxId": "4",
		"infoText": "<p>CI-CSS?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "9"
		}]
	}, {
		"boxId": "5",
		"infoText": "<p>Asystolic tilt test?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "11"
		}]
	}, {
		"boxId": "6",
		"infoText": "<p>Implant ILR</p>",
		"boxType": "activity-going-through",
		"nextBox": "7"
	}, {
		"boxId": "7",
		"infoText": "<p>Asystole?</p>",
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
		"infoText": "<p>Pacing not indicated</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>Tilt table test?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Negative</p>",
			"eventAction": "10"
		}, {
			"text": "<p>Positive</p>",
			"eventAction": "11"
		}]
	}, {
		"boxId": "10",
		"infoText": "<p>Implant a DDD PM</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "11",
		"infoText": "<p>Implant a DDD PM &amp; counteract hypotensive susceptibility</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001872",

		"abbreviationText": "<p>CI-CSS = cardioinhibitory carotid sinus syndrome; CSM = carotid sinusmassage; DDD PM = dual-chamber pacemaker; ILR = implantable loop recorder.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_21.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];