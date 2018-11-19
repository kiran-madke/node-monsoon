var text =


	[{
		"boxId": "1",
		"infoText": "<p>Reflex syncope</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Spontaneous asystolic pauses/s or test-induced asystolic pauses/s?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Spontaneous asystolic pauses/s</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Test-induced asystolic pauses/s</p>",
			"eventAction": "4"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p><em>Pacing indicated</em></p>\n<p>Extrinsic (functional)</p>\n<p>(Class IIa)</p>\n<ul>\n<li><em>Vagally-mediated or</em></li>\n<li><em>Adenosine-sensitive</em></li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>Test-induced asystolic pauses/s present?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "6"
		}]
	}, {
		"boxId": "5",
		"infoText": "<p><em>Pacing not indicated</em></p>\n<p>Undocumented syncope</p>\n<p>(Class III)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<p><em>Pacing indicated</em></p>\n<ul>\n<li>CI-CSS (Class IIa)</li>\n<li>Asystolic tilt (Class IIb)</li>\n<li>Adenosine sensitive syncope (Class IIb)</li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001858",

		"abbreviationText": "<p>CI-CSS = cardioinhibitory carotid sinus syndrome.</p>",
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