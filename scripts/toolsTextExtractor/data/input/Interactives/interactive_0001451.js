var text = [{
	"boxId": "1",
	"infoText": "Patients with Acute Coronary Syndrome Undergoing Medical Treatment Alone",
	"boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	"nextBox": "2"
}, {
	"boxId": "2",
	"infoText": "High Bleeding Risk",
	"boxType": BoxTypes.DECISION_GOING_THROUGH,
	"buttons": [{
		"text": "No",
		"eventAction": "3"
	}, {
		"text": "Yes",
		"eventAction": "4"
	}]
}, {
	"boxId": "3",
	"infoText": "<ul>\n<li>DAPT initiated for upto 12 months (A, T OR A, C<sup>1<\/sup>) (<em>Class I A</em>)<\/li>\n<li>Continue DAPT &gt;12 mo. in pts with prior MI (A, T OR A, C<sup>1<\/sup>) (<em>Class IIb B</em>)<\/li>\n<\/ul>",
	"boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
	"boxId": "4",
	"infoText": "DAPT for ≥1 month (A, C) (<em>Class IIa C</em>)",
	"boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
	"boxId": "998",
	"boxType": BoxTypes.FOOTER,
	"hasFootnote": true,
	"referenceText": "Treatments presented within the same line are sorted in alphabetic order, no preferential recommendation unless clearly stated otherwise.<br/>High bleeding risk is considered as an increased risk of spontaneous bleeding during DAPT (e.g. PRECISE-DAPT score ≥25).<br>Colour-coding refers to the ESC Classes of Recommendations (green = Class I; yellow = Class IIa; orange = Class IIb).<br><sup>1<\/sup>if patient is not eligible for a treatment with ticagrelor",
	"hasAbbreviation": true,
	"abbreviationText": "A = Aspirin; C = Clopidogrel; T = Ticagrelor",
	"staticImageName": "interactive_0001451",
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
			"text": "<a class='more-info-link' href='ref_ENAS5326_7.2.0.0.html'>More Information</a>",
			"buttonId": FooterButtons.MORE_INFO_BUTTON
		}]
	}]
}];