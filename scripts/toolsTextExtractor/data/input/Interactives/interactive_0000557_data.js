var text = [

    {
        "boxId": "1",
        "infoText": "AF patient in need of OAC undergoing elective PCI with stent",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Bleeding risk compared to risk for ACS or stent thrombosis?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Low",
                "eventAction": "3"
			},
            {
                "text": "High",
                "eventAction": "4"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "Triple therapy<sup>a</sup> (IIaB) for upto one month (O, A, and C) <br/><br/>Dual therapy<sup>b</sup> (IIaC) for upto 12 months (O) and (A or C) <br/><br/>Lifelong OAC monotherapy<sup>c</sup> (IB) (O)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "4",
        "infoText": "Triple therapy<sup>a</sup> (IIaB) for upto one month (O, A, and C) <br/><br/>Dual therapy<sup>b</sup> (IIaC) for upto 6 months (O) and (A or C) <br/><br/>Lifelong OAC monotherapy<sup>c</sup> (IB) (O)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},

    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": false,
        "staticImageName": "interactive_0000557",
		"referenceText": "<sup>a</sup>Dual therapy with OAC and aspirin or clopidogrel may be considered in selected patients.<br/><sup>b</sup>OAC plus single antiplatelet. <br/><sup>c</sup>Dual therapy with OAC and an antiplatelet agent (ASA or clopidogrel) may be considered in patients at high risk of coronary events",
        "abbreviationText": "ACS = acute coronary syndrome; AF = atrial fibrillation; OAC = oral anticoagulation (using vitamin K antagonists or non-vitamin K antagonists oral anticoagulants); PCI = percutaneous coronary intervention.",
        "moreInfotext": "For more information, <a href=\"https://www.google.co.in\">see here</a>",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
                        "text": "Abbreviation(s) and footnote(s)",
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
					    "text": "<a class=\"more-info-link\" href=\"ref_ENAS5194_8.11.3.0.html\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
				]
			}
		]
	}

];