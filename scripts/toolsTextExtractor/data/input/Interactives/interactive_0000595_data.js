var text = [
	{
	    "boxId": "1",
	    "infoText": "PATIENT WITH SUSPECTED HF<sup>a</sup> <span class=\"text-normal\">(non-acute onset)</span>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "ASSESSMENT OF HF PROBABILITY<br/><br/><p class=\"text-left\">1. Clinical history:<p class=\"list-level2\">History of CAD (MI, revascularization)</p><p class=\"list-level2\">History of arterial hypertension</p><p class=\"list-level2\">Exposition to cardiotoxic drug/radiation</p><p class=\"list-level2\"> Use of diuretics</p><p class=\"list-level2\">Orthopnoea / paroxysmal nocturnal dyspnoea</p><br></p><p class=\"text-left\">2. Physical examination:</p><p class=\"list-level2\">Rales</p><p class=\"list-level2\">Bilateral ankle oedema</p><p class=\"list-level2\">Heart murmur</p><p class=\"list-level2\">Jugular venous dilatation</p><p class=\"list-level2\">Laterally displaced/broadened apical beat</p><br><p class=\"text-left\">3. ECG:</span><p class=\"list-level2\">Any abnormality</p></p>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "3"
	},
	{
	    "boxId": "3",
	    "infoText": "&ge;1 present or all absent from above conditions?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "All absent",
			    "eventAction": "4"
			},
			{
			    "text": "&ge;1 present",
			    "eventAction": "5"
			}
	    ]
	},
	{
	    "boxId": "4",
	    "infoText": "<u>HF unlikely:</u><br>consider other diagnosis",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "5",
	    "infoText": "NATRIURETIC PEPTIDES<sup>*</sup><p class=\"list-level1\">NT-proBNP ≥125 pg/mL</p><p class=\"list-level1\">BNP &ge;35 pg/mL</p>",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "4"
			},
			{
			    "text": "Yes",
			    "eventAction": "6"
			}
	    ]
	},
	{
        "boxId": "6",
        "infoText": "ECHOCARDIOGRAPHY",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "7" 
	},
	{
	    "boxId": "7",
	    "infoText": "ECG Normal<sup>b,c</sup> or not?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "8"
			},
			{
			    "text": "Yes",
			    "eventAction": "4"
			}
	    ]
	},
	{
        "boxId": "8",
        "infoText": "<u>If HF confirmed (based on all available data):</u> <br>determine aetiology and start appropriate treatment",
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
	    "staticImageName": "interactive_0000595",
		"referenceText": "<sup>a</sup>Patient reporting symptoms typical of HF (see <a href=\"ref_ENAS5195_4.0.0.0.html\">Table 1</a>).<br><sup>b</sup>Normal ventricular and atrial volumes and function. <br><sup>c</sup>Consider other causes of elevated natriuretic peptides.<br>*Assessment of natriuretic peptides not routinely done in clinical practice",
	    "abbreviationText": "BNP = B-type natriuretic peptide; CAD = coronary artery disease; HF = heart failure; MI = myocardial infarction; NT-proBNP = N-terminal pro-B type natriuretic peptide.",
	    "moreInfotext": "",
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
					    "text": "<a class=\"more-info-link\" href='ref_ENAS5195_5.2.0.0.html'>More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];