var text = [
	{
	    "boxId": "1",
	    "infoText": "Patient with suspected AHF",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Cardiogenic shock ?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "3"	
			},
			{
			    "text": "Yes",
			    "eventAction": "6"
			}
	    ]
	},
	{
	    "boxId": "3",
	    "infoText": "Respiratory failure ?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "4"	
			},
			{
			    "text": "Yes",
			    "eventAction": "9"
			}
	    ]
	},
	{
	    "boxId": "4",
	    "infoText": "Identification of acute aetiology?:<div style=\"text-align:left;\"><br/>C <span class=\"text-normal\">acute</span> C<span class=\"text-normal\">oronary syndrome</span><br/>H H<span class=\"text-normal\">ypertension emergency</span><br/>A A<span class=\"text-normal\">rrhythmia</span><br/>M <span class=\"text-normal\">acute </span>M<span class=\"text-normal\">echanical cause<sup>a</sup></span><br/>P P<span class=\"text-normal\">ulmonary embolism</span></div>",
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
	   "boxId": "5",
	   "infoText": "Diagnostic work-up to confirm AHF<br/>Clinical evaluation to select optimal management",
	  "boxType": BoxTypes.ACTIVITY_EXIT_BOX 
	},
	{
	    "boxId": "6",
	    "infoText": "Circulatory support<br/><p class=\"list-level1\">pharmacological</p><p class=\"list-level1\">mechanical</p>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "7"
	},
	{
	    "boxId": "7",
	    "infoText": "Immediate stabilization and transfer to ICU/CCU",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "4"
	},
	{
	    "boxId": "8",
	    "infoText": "<u>Immediate</u> initiation of specific treatment",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "5"
	},
	{
	    "boxId": "9",
	    "infoText": "Ventilatory support<p class=\"list-level1\">oxygen</p><p class=\"list-level1\">non-invasive positive pressure ventilation (CPAP, BiPAP)</p><p class=\"list-level1\">mechanical ventilation</p>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "7"
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "Fu&#223;noten",
	    "hasFootnote": true,
	    "hasAbbreviation": true,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
	    "staticImageName": "interactive_0000593",
		"referenceText": "<sup>a</sup>Acute mechanical cause: myocardial rupture complicating acute coronary syndrome (free wall rupture, ventricular septal defect, acute mitral regurgitation), chest trauma or cardiac intervention, acute native or prosthetic valve incompetence secondary to endocarditis, aortic dissection or thrombosis.<br/>*Follow detailed recommendations in the specific ESC HF Guidelines",
	    "abbreviationText": "ACS = acute coronary syndrome; AHF = acute heart failure; Bi-PAP = bilevel positive airway pressure; CCU = coronary care unit; CPAP = continuous positive airway pressure; ESC = European Society of Cardiology; ICU = intensive care unit.",
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
                        "text": "<a href=\"ref_ENAS5195_13.5.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                            
			    ]
			}
	    ]
	}
];