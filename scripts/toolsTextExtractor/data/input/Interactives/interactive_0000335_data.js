var text = [
	{
	    "boxId": "1",
	    "infoText": "Suspected NSTEMI",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Measure Hs-cTnT",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "3"
	},
	{
	    "boxId": "3",
	    "infoText": "Hs-cTnT values very low? (0h &lt;A* ng/l or 0h &lt;B ng/l and &Delta;0-1h &lt;C ng/l)",
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
        "boxId": "4",
        "infoText": "Hs-cTnT values moderately elevated or high? (0h &ge;D ng/l or &Delta;0-1h &ge;E ng/l)",
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
	    "boxId": "7",
	    "infoText": "Rule-out",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "5",
	    "infoText": "Observe",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "6",
	    "infoText": "Rule-in",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "",
	    "hasFootnote": true,
	    "hasAbbreviation": false,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
	"staticImageName": "interactive_0000335",
	    "referenceText": "<table width=\"100%\" style=\"border:1px solid;border-collapse: collapse;\"> <tr> <td style=\"border:1px solid;\"> </td> <td style=\"border:1px solid;\">A </td> <td style=\"border:1px solid;\">B </td> <td style=\"border:1px solid;\">C </td style=\"border:1px solid;\"> <td style=\"border:1px solid;\">D </td> <td style=\"border:1px solid;\">E </td> </tr> <tr> <td style=\"border:1px solid;\">hs-cTnT (Elecsys) </td> <td style=\"border:1px solid;\">5 </td> <td style=\"border:1px solid;\">12 </td> <td style=\"border:1px solid;\">3 </td> <td style=\"border:1px solid;\">52</td> <td>5 </td style=\"border:1px solid;\"> </tr> <tr> <td style=\"border:1px solid;\">hs-cTnT (Architect) </td> <td style=\"border:1px solid;\">2 </td> <td style=\"border:1px solid;\">5 </td> <td style=\"border:1px solid;\">2 </td> <td style=\"border:1px solid;\">52 </td> <td style=\"border:1px solid;\">6 </td> </tr> <tr> <td style=\"border:1px solid;\">hs-cTnT (Dimension Vista) </td> <td style=\"border:1px solid;\">0.5 </td> <td style=\"border:1px solid;\">5 </td> <td style=\"border:1px solid;\">2 </td> <td style=\"border:1px solid;\">107 </td> <td style=\"border:1px solid;\">19 </td> </tr> </table><br/>0h/1h rule-in and rule-out algorithms using high-sensitivity cardiac troponins (hs-cTn) in patients presenting with suspected non-ST-elevation myocardial infarction (NSTEMI) to the emergency department. 0h and 1h refer to the time from first blood test. NSTEMI can be ruled-out already at presentation, if the hs-cTn concentration is very low. NSTEMI can also be ruled-out by the combination of low baseline levels and the lack of a relevant increase within 1h. Patients have a high likelihood for NSTEMI if the hs-cTn concentration at presentation is at least moderately elevated or hs-cTn concentrations show a clear rise within the first hour. Cut-off levels are assay-specific. Cut-off levels for other hs-cTn assays are in development. *Only applicable if chest pain onset &gt;3 h",
	    "abbreviationText": "",
	    "moreInfotext": "",
	    "resetButtonText": "",
	    "extraButtons": [
			{
			    buttonRow: [
                    {
                        "text": "Footnote(s)",
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
					    "text": "<a href=\"ref_ENAS5080_3.5.3.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];