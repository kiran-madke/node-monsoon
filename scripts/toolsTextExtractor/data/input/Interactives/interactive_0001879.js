var text =


	[{
		"boxId": "1",
		"infoText": "<p>Antithrombotic Treatment in Patients Undergoing Percutaneous Coronary Intervention</p>",
		"boxType": "clinical-condition-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Treatment indication</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Stable Coronary Artery Disease</p>",
			"eventAction": "3"
		}, {
			"text": "<p>NSTE-ACS</p>",
			"eventAction": "8"
		}, {
			"text": "<p>STEMI</p>",
			"eventAction": "13"
		}]
	}, {
		"boxId": "3",
		"infoText": "<p>(Pre)-treatment DAPT:</p>\n<p>A <em>(Class I)&nbsp;</em>+ C <em>(Class IIb)</em></p>",
		"boxType": "activity-going-through",
		"nextBox": "4"
	}, {
		"boxId": "4",
		"infoText": "<p>Anticoagulation for PCI:</p>\n<p>UFH <em>(Class I)</em> or Enoxaparin&nbsp;<em>(Class IIa)</em></p>",
		"boxType": "activity-going-through",
		"nextBox": "5"
	}, {
		"boxId": "5",
		"infoText": "<p>High Bleeding Risk</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "7"
		}]
	}, {
		"boxId": "6",
		"infoText": "<ul>\n<li>DAPT (A, C) for upto&nbsp;6 months<sup>1</sup>&nbsp;<em>(Class I)</em></li>\n<li>DAPT&nbsp;(A, C)&nbsp; for &gt;6 months <em>(Class IIb)</em></li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "7",
		"infoText": "<ul>\n<li>DAPT (A, C) for&nbsp;1&nbsp;month <em>(Class IIb)</em></li>\n<li>DAPT (A, C) for upto 3 months <em>(Class IIb)</em></li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "8",
		"infoText": "<p>(Pre)-treatment DAPT:</p>\n<p>A <em>(Class I)</em> + T, C<sup>2&nbsp;</sup><em>(Class IIa)</em></p>",
		"boxType": "activity-going-through",
		"nextBox": "9"
	}, {
		"boxId": "9",
		"infoText": "<p>Anticoagulation for PCI:</p>\n<p>UFH <em>(Class I)</em> or Enoxaparin&nbsp;<em>(Class IIa)</em> or Bivalirudin&nbsp;<em>(Class IIb)</em></p>",
		"boxType": "activity-going-through",
		"nextBox": "10"
	}, {
		"boxId": "10",
		"infoText": "<p>High Bleeding Risk</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "11"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "12"
		}]
	}, {
		"boxId": "11",
		"infoText": "<ul>\n<li>DAPT (A, P OR A, T OR A, C<sup>2</sup>) for upto 12 months <em>(Class I)</em></li>\n<li>Continue DAPT (A, T OR A, P<sup>3</sup> OR A, C<sup>3</sup>) &gt;12 months <em>(Class IIb)</em></li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "12",
		"infoText": "<p>DAPT for upto 6 months (A, T OR A, C) <em>(Class IIa)</em></p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "13",
		"infoText": "<p>(Pre)-treatment DAPT:</p>\n<p>A + T, P, C<sup>4</sup> <em>(Class I)</em></p>",
		"boxType": "activity-going-through",
		"nextBox": "14"
	}, {
		"boxId": "14",
		"infoText": "<p>Anticoagulation for PCI:</p>\n<p>UFH <em>(Class I)</em> or Enoxaparin&nbsp;<em>(Class IIa)</em> or Bivalirudin&nbsp;<em>(Class IIb)</em></p>",
		"boxType": "activity-going-through",
		"nextBox": "15"
	}, {
		"boxId": "15",
		"infoText": "<p>High Bleeding Risk</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "11"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "12"
		}]
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
				"staticImageName": "interactive_0001879",

		"referenceText": "<p><sup>1</sup>After PCI with DCB 6 months DAPT should be considered (class IIa)</p>\n<p><sup>2</sup>Clopidogrel if patient is not eligible for a treatment with prasugrel or ticagrelor; or in a setting of DAPT de-escalation (Class IIb).</p>\n<p><sup>3</sup>Clopidogrel or prasugrel if patient is not eligible for a treatment with ticagrelor.</p>\n<p><sup>4</sup>Pretreatment before PCI (or at the latest at the time of PCI); clopidogrel if potent P2Y12 inhibitors are<br>contraindicated or not available.<br>(For scores see Supplementary Table 4.). High bleeding risk is considered as an increased risk of<br>spontaneous bleeding during DAPT (e.g. PRECISE-DAPT score &ge;25).</p>",
		"hasAbbreviation": true,
		"abbreviationText": "<p>A = Aspirin; C = Clopidogre; DAPT = dual antiplatelet therapy; DCB = drug-coated balloon; NSTE-ACS = non-ST-elevation acute coronary syndrome; P= Prasugrel; PCI = percutaneous coronary intervention; PRECISE-DAPT = PREdicting bleeding Complications In patients undergoing Stent implantation and subsEquent Dual Anti Platelet Therapy; STEMI = ST-elevation myocardial infarction; T = Ticagrelor; UFH = unfractioned heparin.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5532_18.6.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];