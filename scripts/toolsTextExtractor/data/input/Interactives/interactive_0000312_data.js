var text = [
    {
        "boxId": "0",
        "infoText": "Suspected PE with shock and hypotension",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "1"
	},
    {
        "boxId": "1",
        "infoText": "CT angiography immediately available?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No<sup>a</sup>",
                "eventAction": "2"
			},
            {
                "text": "Yes",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "Echocardiography",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "4"
    },
    {
        "boxId": "4",
        "infoText": "RV overload<sup>b</sup>?",
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
        "infoText": "Search for other causes of haemodynamic instability",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "CT angiography or other tests available<sup>b</sup> and patient stabilised?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "7"
			},
            {
                "text": "Yes",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "7",
        "infoText": "PE-specific treatment: </br>Primary reperfusion<sup>c</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "3",
        "infoText": "CT angiography",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Negative",
                "eventAction": "5"
			},
            {
                "text": "Positive",
                "eventAction": "7"
			}
	    ]
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
	"staticImageName": "interactive_0000312",
        "referenceText": "<sup>a</sup>Includes the cases in which the patient’s condition is so critical that it only allows bedside diagnostic tests.</br><sup>b</sup>Apart from the diagnosis of RV dysfunction, bedside  transthoracic echocardiography may, in some cases, directly confirm PE  by visualizing mobile thrombi in the right heart chambers. Ancillary bedside imaging tests include transoesophageal echocardiography which may detect emboli in the pulmonary artery and its main branches, and bilateral compression venous ultrasonography which may confirm deep vein thrombosis and thus be of help in emergency management decisions.<br/><sup>c</sup>Thrombolysis; alternatively, surgical embolectomy or catheter-directed treatment.",
        "abbreviationText": "CT = computed tomographic (pulmonary angiography); PE = pulmonary embolism; RV = right ventricular.",
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
                        "text": "<a href=\"ref_ENAS262_5.3.1.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];