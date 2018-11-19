var text =


	[{
		"boxId": "1",
		"infoText": "<p>Initial syncope evaluation</p>",
		"boxType": "activity-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Certain or highly likely diagnosis</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "7"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>Likely&nbsp;underlying pathology</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Cardiac likely</p>",
			"eventAction": "4"
		}, {
			"text": "<p>Cardiac unlikely &amp; recurrent episodes</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Cardiac unlikely &amp; rare epidoses</p>",
			"eventAction": "6"
		}]
	}, {
		"boxId": "4",
		"infoText": "<ul>\n<li>Echocardiography</li>\n<li>ECG monitoring (external or implantable)</li>\n<li>EP study</li>\n<li>Stress test</li>\n<li>Coronary angio</li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<p>CV autonomic tests &amp; ECG monitoring (external or implantable)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<p>No further evaluation</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "7",
		"infoText": "<p>Start treatment</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001869",

		"abbreviationText": "<p>EEG = electroencephalogram; EP = electrophysiological.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_8.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];