var text =


	[{
		"boxId": "1",
		"infoText": "<p>Reflex syncope</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Education, life-style measures<br>(Class I)</p>",
		"boxType": "activity-going-through",
		"nextBox": "3"
	}, {
		"boxId": "3",
		"infoText": "<p>Severe/recurrent form</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Low BP phenotype</p>",
			"eventAction": "4"
		}, {
			"text": "<p>Prodromes</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Hypotensive drugs</p>",
			"eventAction": "8"
		}, {
			"text": "<p>Dominant cardioinhibition<sup>a</sup></p>",
			"eventAction": "9"
		}]
	}, {
		"boxId": "4",
		"infoText": "<ul>\n<li>Fludrocortisone</li>\n<li>Midodrine</li>\n</ul>\n<p>(Class IIb)</p>\n<p>This is recommended for younger patients</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<p>Prodromes</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No or very short</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "7"
		}]
	}, {
		"boxId": "6",
		"infoText": "<p>ILR-guided management in selected cases (Class I);</p>\n<p><em>See section <a href=\"ref_ENAS5530_13.0.0.0.html\">Electrocardiographic monitoring</a></em></p>\n<p>This is recommended for younger and older patients</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "7",
		"infoText": "<ul>\n<li>Counter-pressure manoeuvre (Class IIa)</li>\n<li>Tilt training (Class IIb)</li>\n</ul>\n<p>This is recommended for younger patients</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "8",
		"infoText": "<p>Stop/reduce hypotensive drugs (Class IIa)</p>\n<p>This is recommended for younger and older patients</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>Cardiac pacing (Class IIa/IIb)</p>\n<p>See <a href=\"ref_ENAS5530_21.0.0.0.html\">Figure 10</a></p>\n<p>This is recommended for older patients</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001857",

		"referenceText": "<p><sup>a</sup>Spontaneous or provoked by, sequentially, carotid sinus massage, tilt testing, or ILR.</p>",
		"hasAbbreviation": true,
		"abbreviationText": "<p>ILR = implantable loop recorder.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_20.1.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];