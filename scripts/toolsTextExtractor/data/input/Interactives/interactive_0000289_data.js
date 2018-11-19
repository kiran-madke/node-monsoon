var text = [
	{
	    "boxId": "1",
	    "infoText": "Clinical suspicion",
	    "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Echo: TR &gt;2.8m/s and &gt;3 months of therapeutic anticoagulation",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "3"
	},
	{
	    "boxId": "3",
	    "infoText": "V/Q scan",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Negative",
			    "eventAction": "4"
			},
			{
			    "text": "Indeterminate",
			    "eventAction": "5"
			},
			{
			    "text": "At least 1-2 segmental larger-sized defects",
			    "eventAction": "7"
			}
	    ]
	},
	{
	    "boxId": "4",
	    "infoText": "CTEPH ruled out",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "5",
	    "infoText": "CTEPH uncertain",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "6"
	},
	{
	    "boxId": "6",
	    "infoText": "Consider right heart catheterization and pulmonary angiography (by conventional DSA, multidetector CT, MRA)",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "7",
	    "infoText": "CTEPH likely",
	    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
	    "nextBox": "6"
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "",
	    "hasFootnote": true,
	    "hasAbbreviation": true,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000289",
	    "referenceText": "<sup>a</sup> Conventional pulmonary angiography using DSA technique is the gold standard for imaging of the pulmonary vasculature. MDCT and MRA may replace conventional pulmonary angiography if sufficient expertise is available.",
	    "abbreviationText": "CT = computed tomography (pulmonary angiography and high resolution imaging of the lung for diagnosis of parenchymal lesions); CTEPH = chronic thromboembolic pulmonary hypertension; DSA = digital subtraction angiography; Echo = echocardiography; MRA = magnetic resonance angiography; TR = tricuspid regurgitation; V/Q = ventilation-perfusion.",
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
					    "text": "<a href=\"ref_ENAS262_9.1.0.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];