var text = [
    {
        "boxId": "0",
        "infoText": " Suspected IE",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "1"
	},
    {
        "boxId": "1",
        "infoText": "Blood cultures",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Negative (BCNIE)",
                "eventAction": "2"
			},
            {
                "text": "Positive",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "Serologies (Coxiella burnettii<sup>a</sup>, Bartonella henselea<sup>a</sup>, Bartonella Quintana, Legionella Pneumophila, Brucella spp, Mycoplasma spp, Aspergillus spp)",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Negative",
                "eventAction": "4"
			},
            {
                "text": "Positive",
                "eventAction": "5"
			}
	    ]
	},
    {
        "boxId": "4",
        "infoText": "Blood PCR<sup>a</sup><br/><span class=\"italic-text\">Staphylococcus aureus, Tropheryma whipplei, Fungi, Escherichia coli, Streptococcus gallolyticus, Streptococcus mitis, Enterococci</span>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Negative",
                "eventAction": "6"
			},
            {
                "text": "Positive",
                "eventAction": "7"
			}
	    ]
	},
    {
        "boxId": "6",
        "infoText": "Antinuclear antibodies<sup>b</sup><br/>Anti phospholipid antibodies<sup>b</sup><br/>Anti-Pork antibodies<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "Treat underlying cause",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX

    },
    {
        "boxId": "5",
        "infoText": "Specific PCR<sup>a</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX

    },
    {
        "boxId": "3",
        "infoText": "Identification by mass spectrometry",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Negative",
                "eventAction": "8"
			},
            {
                "text": "Positive",
                "eventAction": "9"
			}
	    ]
	},
    {
        "boxId": "8",
        "infoText": "Agar culture",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Negative (BCNIE)",
                "eventAction": "2"
			},
            {
                "text": "Positive",
                "eventAction": "11"
			}
	    ]
	},
    {
        "boxId": "11",
        "infoText": "Microbiological identification",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "12"

    },
    {
        "boxId": "12",
        "infoText": "Mass spectrometry OR Routine identification",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "13"

    },
    {
        "boxId": "13",
        "infoText": "Antimicrobial susceptibility testing",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX

    },
    {
        "boxId": "9",
        "infoText": "Antibiotic resistance and agar culture",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "13"

    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
        "staticImageName": "interactive_0000343",
		"referenceText": "<sup>a</sup>Qualified microbiological laboratory<br /><sup>b</sup>Immunological laboratory",
        "abbreviationText": "BCNIE = blood culture-negative infective endocarditis; IE = infective endocarditis; PCR = polymerase chain reaction",
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
                        "text": "<a href=\"ref_ENAS5079_5.3.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];