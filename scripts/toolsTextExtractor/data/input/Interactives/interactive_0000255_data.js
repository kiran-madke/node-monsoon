var text = [
    {
        "boxId": "1",
        "infoText": "Management of SCAD",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Angina relief",
                "eventAction": "2"
			},
            {
                "text": "Event prevention",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "1<sup>st</sup> line",
                "eventAction": "4"
			},
            {
                "text": "2<sup>nd</sup> line <br/><b style=\"font-weight:normal\">May add or switch (1st line for some cases)",
                "eventAction": "5"
			}
	    ]
	},

    {
        "boxId": "4",
        "infoText": "Short-acting Nitrates, <span class=\"italic-text\">plus</span> <br></br> <p class=\"list-level1\"><span class =\"bold-text\">Beta-blockers<\span> <span class=\"text-normal\">or</span> <span class=\"bold-text\">CCB-heart rate &darr;</span></p> <p class=\"list-level1\">Consider <span class=\"bold-text\">CCB-DHP</span> <span class=\"italic-text\">if</span> low heart rate or intolerance/contraindications</p> <p class=\"list-level1\">Consider <span class=\"bold-text\"> Beta-blockers + CCB-DHP</span> <span class=\"italic-text\">if</span> CCS Angina > 2",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "Ivabradine<br/>Long-acting nitrates<br/>Nicorandil<br/>Ranolazine<sup>a</sup><br/>Trimetazidine<sup>a</sup><br/>+<br/>Consider Angio &rarr; PCI – Stenting or CABG",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "3",
        "infoText": "<p class =\"list-level1\">Lifestyle management</p><p class=\"list-level1\">Control of risk factors <br>+</br> Educate the patient</p>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
	},
    {
        "boxId": "6",
        "infoText": "<p class=\"list-level1\">Aspirine<sup>b</sup></p><p class=\"list-level1\">Statins</p><p class=\"list-level1\">Consider ACEI or ARBs</p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		 "staticImageName": "interactive_0000255",
        "referenceText": "<sup>a</sup>Data for diabetics.<br/><sup>b</sup>if intolerance, consider clopidogrel.",
        "abbreviationText": "<nobr>ACEI = angiotensin</nobr> converting enzyme inhibitor; <nobr>CABG = coronary</nobr> artery bypass graft; <nobr>CCB = calcium</nobr> channel blockers; <nobr>CCS = Canadian</nobr> Cardiovascular Society;<nobr>DHP = dihydropyridine;</nobr> <nobr>PCI = percutaneous</nobr> coronary intervention.",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Abbreviation(s) and Footnote(s)",
                        "buttonId": FooterButtons.REF_BUTTON
					},
                    {
                        "image": "Flip PDF",
                        "buttonId": FooterButtons.PDF_BUTTON
					}
			    ]
			},
            {
                buttonRow: [
                    {
                        "text": "Reset",
                        "buttonId": FooterButtons.RESET_BUTTON
					},
                    {
                        "text": "<a href=\"ref_ENAS258_8.4.1.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];