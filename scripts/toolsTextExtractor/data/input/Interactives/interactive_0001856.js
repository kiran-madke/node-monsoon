var text =


	[{
		"boxId": "1",
		"infoText": "<p><strong>Syncope<sup>a</sup></strong><br>(after initial evaluation in ED)</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Which of the following features are observed?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p><strong>Low-risk features only</strong></p>",
			"eventAction": "3"
		}, {
			"text": "<p><strong>Neither high nor low-risk</strong></p>",
			"eventAction": "6"
		}, {
			"text": "<p><strong>Any high-risk Feature</strong></p>",
			"eventAction": "9"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>Likely reflex, situational or orthostatic</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "4"
	}, {
		"boxId": "4",
		"infoText": "<p>Can be discharged directly from the ED<sup>b</sup></p>",
		"boxType": "activity-going-through",
		"nextBox": "5"
	}, {
		"boxId": "5",
		"infoText": "<p>If recurrent:</p>\n<p>Syncope out-patient clinic (SU) (if available)</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<p>Should not be discharged from the ED</p>",
		"boxType": "activity-going-through",
		"nextBox": "7"
	}, {
		"boxId": "7",
		"infoText": "<p>ED or Hospital Syncope Observational Unit (if available)</p>",
		"boxType": "activity-going-through",
		"nextBox": "8"
	}, {
		"boxId": "8",
		"infoText": "<ul>\n<li>Syncope out-patient clinic (SU) (if available)</li>\n<li>Admission for diagnosis or treatment</li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>Any high-risk features require intensive diagnostic approach</p>\n<p>Should not be discharged from the ED</p>",
		"boxType": "activity-going-through",
		"nextBox": "10"
	}, {
		"boxId": "10",
		"infoText": "<p>Monitor in ED or Hospital Syncope Observational Unit<br>(if available)</p>",
		"boxType": "activity-going-through",
		"nextBox": "11"
	}, {
		"boxId": "11",
		"infoText": "<p>Admission for diagnosis or treatment</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001856",

		"referenceText": "<p><sup>a</sup>Recent studies have suggested that outcomes in patients presenting with presyncope are similar to those presenting with syncope - <sup>b</sup>These patients may still require admission to hospital for associated illness, injury or welfare reasons. Low-risk patients can be referred to the outpatient syncope clinic for therapy purposes, if needed.</p>",
		"hasAbbreviation": true,
		"abbreviationText": "<p>ED= emergency department; SU = syncope unit</p>",
		"extraButtons": [{
			"buttonRow": [{
				"text": "Abbreviation(s) and Footnote(s)",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_6.3.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];