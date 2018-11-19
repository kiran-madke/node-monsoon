var text = [
    {
        "boxId": "1",
        "infoText": "Type of prevention?",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Primary prevention",
                "eventAction": "2"
			},
            {
                "text": "Secondary prevention",
                "eventAction": "8"
			}
	    ]
	},{
        "boxId": "2",
        "infoText": "Recommended assessment:</br>History</br>2-D/Doppler echocardiogram</br>48 hour ambulatory ECG",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
    },{
        "boxId": "3",
        "infoText": "HCM risk-SCD variables:<br/><li>Age</li><li>Family history of sudden cardiac death</li><li>Unexplained syncope</li><li>Left ventricular outflow gradient*</li><li>Maximum left ventricular wall thickness*</li><li>Left atrial diameter*</li><li>NSVT</li>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
    },
    {
        "boxId": "4",
        "infoText": "HCM-risk SCD score",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Low risk</br>5 year risk <4%",
                "eventAction": "5"
			},
            {
                "text": "Intermediate risk 5 year risk ≥4-<6%",
                "eventAction": "6"
			},
            {
                "text": "High risk 5 year risk ≥6%",
                "eventAction": "7"
			}
	    ]
	},
    {
        "boxId": "5",
        "infoText": "ICD generally not indicated<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "6",
        "infoText": "ICD may be considered",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "7",
        "infoText": "ICD should be considered",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
	{
        "boxId": "8",
        "infoText": "<li>Cardiac arrest due to ventricular tachycardia (VT) or ventricular fibrillation (VF)</li><li>Spontaneous sustained VT causing syncope or haemodynamic compromise</li>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
    },
	{
        "boxId": "9",
        "infoText": "Life expectancy >1 year",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "10"
    },
	{
        "boxId": "10",
        "infoText": "ICD recommended",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
	"staticImageName": "interactive_0000297",
        "referenceText": "*Use absolute values for LVOT gradient, MLVWT and left atrial diameter.</br>** ICD not recommended unless there other clinical features that are of potential prognostic importance and when the likely benefit is greater than the lifelong risk of complications and the impact of an ICD on lifestyle, socioeconomic status and psychological health.",
        "abbreviationText": "2D = two dimensional; ECG = electrocardiogram; HCM=hypertrophic cardiomyopathy; ICD = implantable cardioverter defibrillator; LVOT = left ventricular outflow tract; MLVWT = maximum left ventricular wall thickness; NSVT = non-sustained ventricular tachycardia during 24-48 hour ambulatory ECG monitoring; SCD=sudden cardiac death; VF = ventricular fibrillation; VT = ventricular tachycardia.",
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
                        "text": "<a href=\"ref_ENAS263_11.6.3.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];