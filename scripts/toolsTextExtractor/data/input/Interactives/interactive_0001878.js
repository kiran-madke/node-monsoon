var text =


	[{
		"boxId": "1",
		"infoText": "<p>Patients with an indication for oral anticoagulation<sup>1</sup> undergoing PCI<sup>2</sup></p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Concerns about ischaemic risk<span style=\"font-size: 11.6667px;\"><sup>3</sup></span>&nbsp;prevailing or bleeding risk<span style=\"font-size: 11.6667px;\"><sup>4</sup></span>&nbsp;prevailing?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Ischaemic risk</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Bleeding risk</p>",
			"eventAction": "5"
		}]
	}, {
		"boxId": "3",
		"infoText": "<ul>\n<li>Triple Therapy (A, C and O) for one month <em>(Class IIa B)</em></li>\n<li>Triple Therapy&nbsp;(A, C and O) up to 6 months<em>&nbsp;(Class IIa B)</em></li>\n<li>Dual Therapy (C, O or A, O) up to 12 months<em>&nbsp;(Class IIa A)</em></li>\n</ul>",
		"boxType": "activity-going-through",
		"nextBox": "4"
	}, {
		"boxId": "4",
		"infoText": "<p>Beyond 12 months (O) OAC monotherapy <em>(Class IIa B)</em></p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<ul>\n<li>Triple Therapy (A, C and O) for one month&nbsp;<em>(Class IIa B)</em></li>\n<li>Dual Therapy (C, O or A, O) up to 12 months&nbsp;<em>(Class IIa A)</em><br>OR</li>\n<li>Dual Therapy (C, O or A, O) up to 12 months&nbsp;<em>(Class IIa A)</em></li>\n</ul>",
		"boxType": "activity-going-through",
		"nextBox": "4"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001878",

		"referenceText": "<p><sup>1</sup>Non-vitamin K antagonist oral anticoagulant (NOAC) preferred over VKA in patients with non-valvular AF. (Class IIaA).</p>\n<p><sup>2</sup>Periprocedural administration of aspirin and clopidogrel during PCI is recommended irrespective of the treatment strategy</p>\n<p><sup>3</sup>High ischaemic risk is considered as an acute clinical presentation or anatomical/procedural features which might increase the risk for myocardial infarction</p>\n<p><sup>4</sup>Bleeding risk can be estimated by HAS-BLED or ABC score.</p>",
		"hasAbbreviation": true,
		"abbreviationText": "<p>A = Aspirin; ABC = Age, Biomarkers, Clinical history; AF = atrial fibrillation; C = Clopidogrel; HAS-BLED = Hypertension, Abnormal renal/liver function, Stroke, Bleeding history or predisposition, Labile INR, Elderly, Drugs/alcohol concomitantly; O = Oral anticoagulation<sup>4</sup>; OAC = oral anticoagulant; PCI = percutaneous coronary intervention; VKA = vitamin K antagonist</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5532_18.8.0.0.html'>More information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];