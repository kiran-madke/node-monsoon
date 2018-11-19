var text =


	[{
		"boxId": "1",
		"infoText": "<p>TLOC</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>Nontraumatic TLOC</p>",
			"eventAction": "2"
		}, {
			"text": "<p>TLOC due to head trauma</p>",
			"eventAction": "7"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>Causes</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Syncope</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Epileptic seizures</p>",
			"eventAction": "4"
		}, {
			"text": "<p>Psychogenic</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Rare causes</p>",
			"eventAction": "6"
		}]
	}, {
		"boxId": "3",
		"infoText": "<ul>\n<li>Reflex syncope</li>\n<li>Orthostatic hypotension</li>\n<li>Cardiac</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>Generalized:</p>\n<ul>\n<li>Tonic</li>\n<li>Clonic</li>\n<li>Tonic-clonic</li>\n<li>Atonic</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<ul>\n<li>Psychogenic pseudosyncope (PPS)</li>\n<li>Psychogenic non-epileptic seizures (PNES)</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<ul>\n<li>Subclavian steal syndrome</li>\n<li>Vertebrobasilar TIA</li>\n<li>Subarachnoid haemorrhage</li>\n<li>Cyanotic breath holding spell</li>\n</ul>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "7",
		"infoText": "<p>Head trauma</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001866",

		"abbreviationText": "<p>TIA = transient ischaemic attack; TLOC = transient loss of consciousness.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_3.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];