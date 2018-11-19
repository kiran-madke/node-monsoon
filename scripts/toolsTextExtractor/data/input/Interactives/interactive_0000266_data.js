var text = [
    {
        "boxId": "0",
        "infoText": "Suggested optimal pacing mode in children",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Bradycardia",
                "eventAction": "1"
			},
            {
                "text": "Dyssynchrony associated HF",
                "eventAction": "2"
			}
	    ]
	},
    {
        "boxId": "1",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Sinus node dysfunction",
                "eventAction": "3"
			},
            {
                "text": "(Complete) AV block",
                "eventAction": "4"
			}
	    ]
	},
    {
        "boxId": "3",
        "infoText": "Prevent dyssynchrony<br/> Atrial pacing only",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "4",
        "infoText": "Prevent dyssynchrony<br/>(Left) ventricular pacing only",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "2",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Intrinsic LBBB",
                "eventAction": "5"
			},
            {
                "text": "RV pacing induced dyssynchrony",
                "eventAction": "5"
			}
	    ]
	},
    {
        "boxId": "5",
        "infoText": "Treat dyssynchrony<br/>Single-site LV (or BiV) pacing",
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
		"staticImageName": "interactive_0000266",
        "referenceText": "Modified from van Geldorp I et al.",
        "abbreviationText": " <nobr> AV = atrioventricular;</nobr> <nobr>LBBB = left</nobr> bundle branch block; <nobr>RV = right </nobr>ventricular; <nobr>LV = left</nobr> ventricular; <nobr>BiV = biventricular;</nobr> <nobr>HF = heart</nobr> failure.",
        "moreInfotext": "",
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
                        "text": "<a href=\"ref_ENAS259_6.3.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];