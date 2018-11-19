var text =


	[{
		"boxId": "1",
		"infoText": "<p>Presentation of patient with probable TLOC<br>(may include ambulance or referral data)</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>TLOC present?<br>(history)</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No TLOC</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Syncope</p>",
			"eventAction": "4"
		}, {
			"text": "<p>TLOC - non syncopal</p>",
			"eventAction": "12"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>Act as needed</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>Initial syncope evaluation<br>(H&amp;P exam, ECG, supine and standing BP)</p>",
		"boxType": "activity-going-through",
		"nextBox": "5"
	}, {
		"boxId": "5",
		"infoText": "<p>Certain or high likely diagnosis*?</p>",
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
		"infoText": "<p>Uncertain diagnosis<br>(see <a href=\"ref_ENAS5530_5.3.0.0.html\">Table 3</a>)</p>",
		"boxType": "activity-going-through",
		"nextBox": "7"
	}, {
		"boxId": "7",
		"infoText": "<p>Risk stratification<br>(see <a href=\"ref_ENAS5530_6.2.0.0.html\">Table 4</a>)</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>High-risk of short-term serious events</p>",
			"eventAction": "8"
		}, {
			"text": "<p>Low-risk but recurrent syncopes</p>",
			"eventAction": "9"
		}, {
			"text": "<p>Low-risk, single or rare recurrences</p>",
			"eventAction": "10"
		}]
	}, {
		"boxId": "8",
		"infoText": "<p>Early evaluation &amp; treatment</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>Ancillary tests followed by treatment</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "10",
		"infoText": "<p>Explanation, no further evaluation</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "11",
		"infoText": "<p>Start treatment</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "12",
		"infoText": "<ul>\n<li>Epileptic seizure</li>\n<li>Psychogenic TLOC</li>\n<li>TLOC, rare causes</li>\n</ul>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "13"
	}, {
		"boxId": "13",
		"infoText": "<p>Treat appropriately</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001867",

		"referenceText": "<p>*(see definition in <a href=\"ref_ENAS5530_5.2.0.0.html\">Table of Recommendations</a>)</p>",
		"hasAbbreviation": true,
		"abbreviationText": "<p>BP = blood pressure; ECG = electrocardiogram; H&amp;P exam = history and physical examination; TLOC = transient loss of consciousness.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_5.1.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];