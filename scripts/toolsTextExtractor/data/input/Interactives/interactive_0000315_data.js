var text = [
    {
        "boxId": "0",
        "infoText": "Management of Critical Limb Ischaemia",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Rest Pain",
                "eventAction": "1"
			},
            {
                "text": "Ischaemic lesion, gangrene",
                "eventAction": "2"
			}
	    ]
	},
    {
        "boxId": "1",
        "infoText": "Pain control (morphine)",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
	},
    {
        "boxId": "3",
        "infoText": "Urgent revascularization feasible?",
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
        "infoText": "Control CVD risk factors, pain control (morphine), wound care",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "6"
	},
    {
        "boxId": "6",
        "infoText": "Prostaglandins, consider spinal cord stimulation",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
	},
    {
        "boxId": "7",
        "infoText": "<p class=\"list-level1 \"><span class=\"bold-text\">Control CVD risk factors, debridement, shoe adaptation (removal of <nobr>weight-bearing</nobr> stress to lesion), surveillance</span></p><p class=\"list-level1\"><span class=\"bold-text\">Amputation, rehabilitation</span></p>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "Endovasc. revasc.: Technical failure, or endovasc. revasc. unsuitable? ",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "8"
			},
            {
                "text": "Yes",
                "eventAction": "9"
			}
	    ]
	},
    {
        "boxId": "8",
        "infoText": "Clinical and <nobr>non-invasive</nobr> assessment of haemodynamic result (<a href=\"ref_ENAS256_5.6.9.0.html\" >table 7</a>) favourable? ",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "10"
			},
            {
                "text": "Yes",
                "eventAction": "11"
			}
	    ]
	},
    {
        "boxId": "10",
        "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">Control CVD risk factors, pain control (morphine), wound care and proceed further<br/>OR</span></p><p class=\"list-level1\"><span class=\"bold-text\"><nobr>Re-do</nobr> procedure (endovascular or surgical)</span></p>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "12"
	},
    {
        "boxId": "12",
        "infoText": "Prostaglandins, consider spinal cord stimulation",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
	},
    {
        "boxId": "11",
        "infoText": "Control CVD risk factors, debridement, shoe adaptation (removal of <nobr>weight-bearing</nobr> stress to lesion), surveillance",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "9",
        "infoText": "Surgical revascularization",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "8"
	},
    {
        "boxId": "2",
        "infoText": "Pain control(morphine), wound care, treatment of infection (antibiotics)",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
	},
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
	"staticImageName": "interactive_0000315",
        "referenceText": "",
        "abbreviationText": "CVD= cardiovascular disease",
        "moreInfotext": "",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [{
                        "text": "Abbreviation(s)",
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
                        "text": "<a href=\"ref_ENAS257_12.2.1.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];