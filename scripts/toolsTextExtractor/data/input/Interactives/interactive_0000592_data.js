var text = [
	{
	    "boxId": "1",
	    "infoText": "Patient with symptomatic<sup>a</sup> HF<i>r</i>EF<sup>b, *, **</sup>",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Therapy with ACE-I<sup>c</sup> and beta-blocker<br/><span class=\"text-normal\">(Up-titrate to maximum tolerated evidence-based doses) (Class I)</span>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "3"
	},
	{
	    "boxId": "3",
	    "infoText": "Still symptomatic and LVEF ≤35%",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "4"
			},
			{
			    "text": "Yes",
			    "eventAction": "5"
			}
	    ]
	},
	{
	    "boxId": "4",
	    "infoText": "No further action required<br/>Consider reducing diuretic dose",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "5",
	    "infoText": "Add MR antagonist<sup>d,e</sup><br/><span class=\"text-normal\">(up-titrate to maximum tolerated evidence-based dose) (Class I).</span>",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "6"
	},
	{
	    "boxId": "6",
	    "infoText": "Still symptomatic and LVEF ≤35%",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "No",
			    "eventAction": "4"
			},
			{
			    "text": "Yes",
			    "eventAction": "7"
			}
	    ]
	},
	{
	    "boxId": "7",
	    "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Able to tolerate ACE-I (or ARB)<sup>f,g</sup> : ARNI to replace ACE-I (Class I)</span></p><p class=\"list-level1\"><span class=\"bold-text\">Sinus rhythm, duration ≥130 msec: Evaluate need for CRT<sup>i,j</sup> (Class I, IIa)</p><p class=\"list-level1\"><span class=\"bold-text\">Sinus rhythm,<sup>h</sup> HR  70 bpm: Ivabradine (Class IIa)</span></p><br/>These above treatments may be combined if indicated.",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "8"
	},
	{
	    "boxId": "8",
	    "infoText": "Resistant symptoms",
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
	    "boxId": "9",
	    "infoText": "Consider digoxin or H-ISDN<br/>or LVAD, or heart transplantation",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "Footnote(s)",
	    "hasFootnote": true,
	    "hasAbbreviation": true,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
	    "staticImageName": "interactive_0000592",
		"referenceText": "<sup>a</sup>Symptomatic = NYHA Class II-IV.<br/><sup>b</sup>HFrEF = LVEF <40%.<br/><sup>c</sup>If ACE inhibitor not tolerated/contra-indicated, use ARB.<br/><sup>d</sup>If MR antagonist not tolerated/contra-indicated, use ARB.<br/><sup>e</sup>With a hospital admission for HF within the last 6 months or with elevated natriuretic peptides (BNP >250 pg/ml or NTproBNP >500 pg/ml in men and 750 pg/ml in women).<br/><sup>f</sup>With an elevated plasma natriuretic peptide level (BNP ≥150 pg/mL or plasma NT-proBNP ≥600 pg/mL, or if HF hospitalization within recent 12 months plasma BNP ≥100 pg/mL or plasma NT-proBNP ≥400 pg/mL).<br/><sup>g</sup>In doses equivalent to enalapril 10 mg b.i.d.<br/><sup>h</sup>With a hospital admission for HF within the previous year.<br/><sup>i</sup>CRT is recommended if QRS ≥130 msec and LBBB (in sinus rhythm).<br/><sup>j</sup>CRT should/may be considered if QRS ≥130 msec with non-LBBB (in a sinus rhythm) or for patients in AF provided a strategy to ensure bi-ventricular capture in place (individualized decision).<br/>For further details, see Sections 7 and 8 and corresponding web pages in the main document.<br/>*Diuretics to relieve symptoms and signs of congestion<br/>**If LVEF  35% despite OMT or a history of symptomatic VT/VF, implant ICD",
	    "abbreviationText": "ACE-I = angiotensin-converting enzyme inhibitor; ARB = angiotensin receptor blocker; ARNI = angiotensin receptor neprilysin inhibitor; BNP = B-type natriuretic peptide; CRT = cardiac resynchronization therapy; HF = heart failure; HFrEF = heart failure with reduced ejection fraction; H-ISDN = hydralazine and isosorbide dinitrate; HR = heart rate; ICD = implantable cardioverter defibrillator; LBBB = left bundle branch block; LVAD = left ventricular assist device; LVEF = left ventricular ejection fraction; MR = mineralocorticoid receptor; NT-proBNP = N-terminal pro-B type natriuretic peptide; NYHA = New York Heart Association; OMT = optimal medical therapy; VF = ventricular fibrillation; VT = ventricular tachycardia.",
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
                        "text": "<a class='more-info-link' href='ref_ENAS5195_8.2.0.0.html'>More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                            
			    ]
			}
	    ]
	}
];