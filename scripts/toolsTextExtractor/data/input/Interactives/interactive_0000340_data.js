var text = [
    {
        "boxId": "0",
        "infoText": "Symptoms, signs, history suggestive of PH",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "1"
	},
    {
        "boxId": "1",
        "infoText": "Echocardiographic probability of PH (<a href=\"ref_ENAS5081_5.3.0.0.html\">Table 7</a>)",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Low",
                "eventAction": "2"
			},
            {
                "text": "High or intermediate",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "Consider other causes and/or follow-up (<a href=\"ref_ENAS5081_5.5.0.0.html\">Table 8</a>)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "3",
        "infoText": "Consider left heart disease and lung diseases by symptoms, signs, risk factors, ECG, PFT+DLCO, chest radiograph and HRCT, arterial blood gases (<a href=\"ref_ENAS5081_5.5.0.0.html\">Table 8</a>)",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
    },
    {
        "boxId": "4",
        "infoText": "Diagnosis of left heart diseases or lung diseases confirmed?",
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
        "infoText": "V/Q scan<sup>a</sup> Mismatched perfusion defects? <br/>(Refer to PH expert centre)",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "7"
			},
            {
                "text": "Yes",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "7",
        "infoText": "RHC (<a href=\"ref_ENAS5081_5.6.0.0.html\">Table 9</a>)<br/>mPAP &ge;25 mmHg, PAWP &le;15 mmHg, PVR &gt;3 Wood units?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "9"
			},
            {
                "text": "Yes",
                "eventAction": "10"
			}
	    ]
	},
    {
        "boxId": "9",
        "infoText": "Consider other causes",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "10",
        "infoText": "PAH likely<br/>Specific diagnostic tests:<p class=\"list-level1\" >CTD</p><p class=\"list-level1\" >CHD</p><p class=\"list-level1\" >Drugs + Toxin</p><p class=\"list-level1\" >Portopulmonary</p><p class=\"list-level1\" >HIV</p><p class=\"list-level1\" >Schistosomiasis</p><p class=\"list-level1\" >Idiopathic PVOD/PCH</p><p class=\"list-level2\" >Heritable PVOD/PCH</p><p class=\"list-level1\" >Idiopathic PAH</p><p class=\"list-level2\" >Heritable PAH</p><p class=\"list-level1\" > Group 5 (<a href=\"ref_ENAS5081_4.2.1.0.html\">Table 4</a>)</p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "8",
        "infoText": "CTEPH possible: CT pulmonary angiography, RHC +/- Pulmonary Angiography",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "6",
        "infoText": "Signs of severe PH/RV dysfunction?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "11"
			},
            {
                "text": "Yes",
                "eventAction": "12"
			}
	    ]
	},
    {
        "boxId": "11",
        "infoText": "Treat underlying disease",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "12",
        "infoText": "Refer to PH expert centre",
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
	"staticImageName": "interactive_0000340",
        "referenceText": "<sup>a</sup>CT pulmonary angiography alone may miss diagnosis of chronic <br /> thromboembolic pulmonary hypertension.",
        "abbreviationText": "CHD = congenital heart diseases; CT = Computed Tomography; CTD = Connective Tissue Disease; CTEPH = chronic thromboembolic pulmonary hypertension; DLCO = carbon monoxide diffusing capacity; ECG = electrocardiogram; HIV = Human immunodeficiency virus; HR-CT = high resolution CT; mPAP = mean pulmonary arterial pressure; PA = pulmonary angiography; PAH = pulmonary arterial hypertension; PAWP = pulmonary  artery wedge pressure; PEA = pulmonary endarterectomy; PH = pulmonary hypertension; PVOD/PCH = pulmonary veno-occlusive disease or pulmonary capillary hemangiomathosis; PVR = pulmonary vascular resistance; RHC = right heart catheterisation; RV = right ventricular; V/Q = ventilation/perfusion.",
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
                        "text": "<a href=\"ref_ENAS5193_3.8.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];