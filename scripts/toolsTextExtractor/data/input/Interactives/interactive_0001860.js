var text =


	[{
		"boxId": "1",
		"infoText": "<p>Elevated Cardiac Troponin Value(s) &gt;99th percentile URL</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Troponin level?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Troponin rise and/or fall</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Troponin level stable<sup>a</sup></p>",
			"eventAction": "10"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>With or without acute ischaemia?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Without acute ischaemia<sup>b</sup></p>",
			"eventAction": "4"
		}, {
			"text": "<p>With acute ischaemia<sup>b</sup></p>",
			"eventAction": "6"
		}]
	}, {
		"boxId": "4",
		"infoText": "<p>Acute myocardial injury</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "5"
	}, {
		"boxId": "5",
		"infoText": "<p><strong>Examples</strong></p>\n<ul>\n<li>Acute heart failure</li>\n<li>Myocarditis</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<p>Acute myocardial infarction</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "7"
	}, {
		"boxId": "7",
		"infoText": "<p>Underlying cause/pathophysiology?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Atherosclerosis + thrombosis</p>",
			"eventAction": "8"
		}, {
			"text": "<p>Oxygen supply and demand imbalance</p>",
			"eventAction": "9"
		}]
	}, {
		"boxId": "8",
		"infoText": "<p><strong>Type 1 MI: triggers</strong></p>\n<ul>\n<li>Plaque rupture</li>\n<li>Plaque erosion</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p><strong>Type 2 MI: examples</strong></p>\n<ul>\n<li>Severe hypertension</li>\n<li>Sustained tachyarrhythmia</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "10",
		"infoText": "<p>Chronic myocardial injury</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "11"
	}, {
		"boxId": "11",
		"infoText": "<p><strong>Examples</strong></p>\n<ul>\n<li>Structural heart disease</li>\n<li>Chronic kidney disease</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001860",

		"referenceText": "<p><sup>a</sup>Stable denotes &le;20% variation of troponin values in the appropriate clinical context.<br><sup>b</sup>Ischaemia denote signs and/or symptoms of clinical myocardial ischaemia.<br>Ischaemic thresholds vary substantially in relation to the magnitude of the stressor and the extent of underlying cardiac disease.</p>",
		"hasAbbreviation": true,
		"abbreviationText": "<p>URL = upper reference limit</p>",
		"extraButtons": [{
			"buttonRow": [{
				"text": "Abbreviation and Footnote(s)",
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
				"text": " <a class='more-info-link' href='ref_ENAS5524_7.3.2.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];