var text =


	[{
		"boxId": "1",
		"infoText": "<p>AHF during pregnancy</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Induction of lung maturation &gt;23 + 5 weeks initiated without delaying patient transfer to tertiary center</p>",
		"boxType": "activity-going-through",
		"nextBox": "3"
	}, {
		"boxId": "3",
		"infoText": "<p>Meeting of the Task force for AHF in pregnancy<br>Goal: &le;15 minutes<br>Members: cardiologist, obstetrician, neonatologist, anesthesiologist, cardiac surgeon, operating room coordinator</p>",
		"boxType": "activity-going-through",
		"nextBox": "4"
	}, {
		"boxId": "4",
		"infoText": "<p>Status and prognosis of the foetus</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Foetus non-viable</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Foetus viable</p>",
			"eventAction": "7"
		}]
	}, {
		"boxId": "5",
		"infoText": "<p>Delivery</p>",
		"boxType": "activity-going-through",
		"nextBox": "6"
	}, {
		"boxId": "6",
		"infoText": "<p>Maximal advanced AHF therapy<br>Supportive psychotherapy</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "7",
		"infoText": "<p>Parents' wish; maternal and foetal status</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Delivery</p>",
			"eventAction": "8"
		}, {
			"text": "<p>Pregnancy continued</p>",
			"eventAction": "9"
		}]
	}, {
		"boxId": "8",
		"infoText": "<p>Maximal advanced AHF therapy</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>Monitoring mother/foetus<br>Tailored HF therapy<br>Consider advanced AHF therapy</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001884",

		"referenceText": "<p>Example of a prespecified protocol of interdisciplinary work-up (modified from Bauersachs et al, EJHF 2016)</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5531_9.4.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];