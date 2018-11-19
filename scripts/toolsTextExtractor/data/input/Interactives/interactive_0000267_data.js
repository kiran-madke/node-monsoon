var text = [
    {
        "boxId": "0",
        "infoText": "Left main coronary artery involvement?",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "No",
                "eventAction": "1"
			},
            {
                "text": "Yes",
                "eventAction": "2"
			}
	    ]
	},
    {
        "boxId": "1",
        "infoText": "Number of coronary arteries with relevant stenosis<sup>a</sup> in proximal segment",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "1 or 2 vessel disease",
                "eventAction": "3"
			},
            {
                "text": "3 vessel disease",
                "eventAction": "4"
			}
	    ]
	},
    {
        "boxId": "3",
        "infoText": "Proximal LAD involvement?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "5"
			},
            {
                "text": "Yes",
                "eventAction": "6"
			}
	    ]
	},
    {
        "boxId": "5",
        "infoText": "PCI",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "Heart Team Discussion<sup>&#174;</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
    },
    {
        "boxId": "7",
        "infoText": "Low surgical risk<sup>b</sup>?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "5"
			},
            {
                "text": "Yes",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "8",
        "infoText": "CABG",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "4",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Syntax score &le; 22",
                "eventAction": "6"
			},
            {
                "text": "Syntax score &ge; 23",
                "eventAction": "9"
			}
	    ]
	},
    {
        "boxId": "9",
        "infoText": "Low surgical risk<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "8"
    },
    {
        "boxId": "2",
        "infoText": "Left main coronary artery with relevant stenosis<sup>c</sup>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "&#177;1 vessel disease",
                "eventAction": "10"
			},
            {
                "text": "+2 or 3 vessel disease",
                "eventAction": "11"
			}
	    ]
	},
    {
        "boxId": "10",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Ostium/mid shaft",
                "eventAction": "12"
			},
            {
                "text": "Distal bifurcation",
                "eventAction": "13"
			}
	    ]
	},
    {
        "boxId": "12",
        "infoText": "High surgical risk<sup>d</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "5"
    },
    {
        "boxId": "13",
        "infoText": "Heart Team Discussion&#174;",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "High surgical risk<sup>d</sup>",
                "eventAction": "5"
			},
            {
                "text": "Low surgical risk<sup>d</sup>",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "11",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Syntax score &le;32",
                "eventAction": "13"
			},
            {
                "text": "Syntax score &ge;33",
                "eventAction": "14"
			}
	    ]
	},
    {
        "boxId": "14",
        "infoText": "Low surgical risk<sup>d</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "8"
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000267",
        "referenceText": "<sup>a</sup>&gt;50% stenosis and proof of ischaemia, &gt;90% stenosis in two angiographic views, or FFR &le;0.80. <br/><sup>b</sup>CABG is the preferred option in most patients unless patients co-morbidities or specificities deserve discussion by the heart team. According to local practice (time constraints, workload) direct transfer to CABG may be allowed in these low risk patients, when formal discussion in a multidisciplinary team is not required (adapted from ESC/ EACTS Guidelines on Myocardial Revascularization 2010).<br/><sup>c</sup>&gt;50% stenosis and proof of ischaemia, &gt;70% stenosis in two angiographic views, or fractional flow reserve &le; 0.80.<br/><sup>d</sup>Preferred option in general. According to local practice (time constraints, workload) direct decision may be taken without formal multidisciplinary discussion, but preferably with locally agreed protocols (adapted from ESC/EACTS Guidelines on Myocardial Revascularization 2010).",
        "abbreviationText": "<nobr>CABG = coronary</nobr> artery bypass graft; <nobr>LAD = left</nobr> anterior descending; <nobr>PCI = percutaneous</nobr> coronary intervention.",
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
                        "text": "<a href=\"ref_ENAS258_9.6.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];