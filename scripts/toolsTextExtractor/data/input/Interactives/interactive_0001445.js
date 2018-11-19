var text = [{
	"boxId": "1",
	"infoText": "Patients with an indication for oral anticoagulation undergoing PCI<sup>1<\/sup>",
	"boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	"nextBox": "2"
}, {
	"boxId": "2",
	"infoText": "Concerns about ischaemic risk<sup>2  <\/sup>prevailing or bleeding risk<sup>3<\/sup>  prevailing?",
	"boxType": BoxTypes.DECISION_GOING_THROUGH,
	"buttons": [{
		"text": "Ischaemic risk",
		"eventAction": "3"
	}, {
		"text": "Bleeding risk",
		"eventAction": "4"
	}]
}, {
	"boxId": "3",
	"infoText": "<ul>\n<li>Triple Therapy (A,C and O) for one month <em>(Class IIa B)</em>\n<\/li>\n<li>Triple Therapy (A, C, and O) for up to 6 months <em>(Class IIa B)</em>\n<\/li>\n<li>Dual Therapy (C, O or A, O) up to 12 months <em>(Class IIa A)</em>\n<\/li>\n<\/ul>",
	"boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	"nextBox": "5"
}, {
	"boxId": "4",
	"infoText": "<ul>\n<li>Triple Therapy (A, C and O) for one month <em>(Class IIa B)</em>\n<\/li>\n<li>Dual Therapy (C, O or A, O) up to 12 months <em>(Class IIa A)</em>\n<\/li>\n<\/ul>\nOR\n<ul>\n<li>Dual Therapy (C, O or A, O) up to 12 months <em>(Class IIa A)</em>\n<\/li>\n<\/ul>",
	"boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	"nextBox": "5"
}, {
	"boxId": "5",
	"infoText": "Beyond 12 months (O) OAC alone <em>(Class IIa B)</em>",
	"boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
	"boxId": "998",
	"boxType": BoxTypes.FOOTER,
	"hasFootnote": true,
	"referenceText": "Colour-coding refers to the number of concomitant antithrombotic medication(s). Triple therapy denotes treatment with DAPT plus oral anticoagulant (OAC). Dual therapy denotes treatment with a single antiplatelet agent (aspirin or clopidogrel) plus OAC.<br><sup>1<\/sup>Periprocedural administration of aspirin and clopidogrel during PCI is recommended irrespective of the treatment strategy.<br><sup>2<\/sup>High ischaemic risk is considered as an acute clinical presentation or anatomical\/procedural features which might increase the risk for myocardial infarction.<br><sup>3<\/sup>Bleeding risk can be estimated by HAS-BLED or ABC score.",
	"hasAbbreviation": true,
	"abbreviationText": "A = Aspirin; ABC = age, biomarkers, clinical history; ACS = acute coronary syndrome; mo. = month(s); C = Clopidogrel; O = Oral anticoagulation with VKA; OAC = oral anticoagulant; PCI = percutaneous coronary intervention.",
	"staticImageName": "interactive_0001445",
	"extraButtons": [{
		"buttonRow": [{
			"text": "Abbreviation(s) and Footnote(s)",
			"buttonId": FooterButtons.REF_BUTTON
		}, {
			"image": "Flip PDF",
			"buttonId": FooterButtons.PDF_BUTTON
		}]
	}, {
		"buttonRow": [{
			"text": "Reset",
			"buttonId": FooterButtons.RESET_BUTTON
		}, {
			"text": "<a class='more-info-link' href='ref_ENAS5326_8.5.0.0.html'>More information</a>",
			"buttonId": FooterButtons.MORE_INFO_BUTTON
		}]
	}]
}];