var text = [
	{
	    "boxId": "1",
	    "infoText": "Muscular symptoms during statin treatment",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Consider if statin-attributed muscle symptoms favour statin continuation / reinitiation",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
	    "nextBox": "3"
	},
	{
	    "boxId": "3",
	    "infoText": "Creatine kinase <4 or &ge;4?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "CK <4",
			    "eventAction": "4"
			},
			{
			    "text": "CK &ge;4",
			    "eventAction": "15"
			}
	    ]
	},
	{
	    "boxId": "4",
	    "infoText": "Symptomatic & CK <4 X ULN",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
	    "nextBox": "5"
	},
	{
	    "boxId": "5",
	    "infoText": "2–4 weeks washout of statin",
	    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
	    "nextBox": "6"
	},
	{
	    "boxId": "6",
	    "infoText": "Symptoms persist or improve?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Symptoms persist",
			    "eventAction": "7"
			},
			{
			    "text": "Symptoms improve",
			    "eventAction": "11"
			}
	    ]
	},
	{
	    "boxId": "7",
	    "infoText": "Statin re-challenge",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "8"
	},
	{
	    "boxId": "8",
	    "infoText": "Aim: achieve LDL-C goal with maximally tolerated dose of statin",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "9"
	},
	{
	    "boxId": "9",
	    "infoText": "Ezetimibe",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "A + bile acid absorption inhibitor",
			    "eventAction": "10"
			},
			{
			    "text": "B + fibrate (not gemfibrozil)",
			    "eventAction": "10"
			},
			{
			    "text": "A + B",
			    "eventAction": "10"
			}
	    ]
	},
	{
        "boxId": "10",
        "infoText": "If still not at goal: consider additional (future) novel therapies: PCSK9 monoclonal antibody therapy, CETP inhibitor",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
	{
	    "boxId": "11",
	    "infoText": "Second statin at usual or starting dose",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "12"
	},
	{
	    "boxId": "12",
	    "infoText": "Symptom free or symptoms re-occuring?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Symptom-free",
			    "eventAction": "13"
			},
			{
			    "text": "Symptoms re-occur",
			    "eventAction": "14"
			}
	    ]
	},
	{
	    "boxId": "13",
	    "infoText": "Continue statin",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "8"
	},
	{
	    "boxId": "14",
	    "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Low-dose third efficacious (potent)<sup>a</sup> statin;</span></p><p class=\"list-level1\"><span class=\"bold-text\">Efficacious<sup>a</sup> statin with alternate day or once/twice weekly dosing regimen</span></p>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "8"
	},
	{
	    "boxId": "15",
	    "infoText": "CK &ge;4 X ULN +/- rhabdomyolisis",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "16"
	},
	{
	    "boxId": "16",
	    "infoText": "6 weeks washout of statin until normalisation of CK: creatinine and symptoms",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "17"
	},
	{
	    "boxId": "17",
	    "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Low-dose second efficacious<sup>a</sup> statin;</span></p><p class=\"list-level1\"><span class=\"bold-text\">Efficacious<sup>a</sup> statin with alternate day or once/twice weekly dosing regimen.</span></p>",
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
	    "staticImageName": "interactive_0000594",
		"referenceText": "<sup>a</sup>Efficacious statin such as atorvastatin or rosuvastatin. From Reiner Z. et al.",
	    "abbreviationText": "CETP = cholesteryl ester transfer protein; CK = creatine kinase; LDL-C= low-density lipoprotein cholesterol; PCKS9 = propotein onvertase subtilisin/kesin type 9; ULN = upper limit of the normal range.",
	    "moreInfotext": "For more information, <a href=\"\">see here</a>",
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
                        "text": "<a href=\"ref_ENAS5197_12.2.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                            
			    ]
			}
	    ]
	}
];