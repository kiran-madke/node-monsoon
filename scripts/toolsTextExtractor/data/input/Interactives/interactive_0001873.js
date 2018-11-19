var text =


	[{
		"boxId": "1",
		"infoText": "<p>Syncope due to intrinsic cardiac SND or AV block</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>ECG-documented bradycardia</p>",
			"eventAction": "2"
		}, {
			"text": "<p>Bifascicular BBB (ECG-undocumented bradycardia)</p>",
			"eventAction": "6"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>&nbsp;</p>\n<p>&nbsp;</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Sympt. SND (Class I)</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Asympt. SND (Class IIa)</p>",
			"eventAction": "4"
		}, {
			"text": "<p>2&deg; and 3&deg; AV block (Class I)</p>",
			"eventAction": "5"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>Established relationship between SB and syncope</p>\n<p>Pacing indicated</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<p>Non-established relationship between SB and syncope</p>\n<p>Pacing indicated</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<ul>\n<li>Persistent AVB</li>\n<li>Paroxysmal AV block (narrow QRS and BBB)</li>\n<li>AF with slow HR</li>\n</ul>\n<p>Pacing indicated</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "6",
		"infoText": "<p>&nbsp;</p>\n<p>&nbsp;</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>EPS or ILR positive (Class I)</p>",
			"eventAction": "7"
		}, {
			"text": "<p>EPS/ILR negative or not done (Class IIb)</p>",
			"eventAction": "8"
		}]
	}, {
		"boxId": "7",
		"infoText": "<ul>\n<li>HV &gt;70ms or induced AV block</li>\n<li>Sympt. pause &gt;3\"</li>\n<li>Asympt. pause &gt;6\"</li>\n</ul>\n<p>Pacing indicated</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "8",
		"infoText": "<p>Empiric pacing (mechanism uncertain)</p>\n<p>Pacing idicated</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001873",

		"abbreviationText": "<p>AF = atrial fibrillation; asympt. = asymptomatic; AV = atrioventricular; BBB = bundle branch block; ECG = electrocardiogram; EPS = electrophysiological study; HR = heart rate; ILR = implantable loop recorder; SB = sinus bradycardia; SND = sinus node dysfunction; sympt. = symptomatic.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_23.0.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];