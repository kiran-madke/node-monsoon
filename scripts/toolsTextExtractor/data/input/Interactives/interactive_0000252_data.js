var text = [
    {
        "boxId": "1",
        "infoText": "ALL PATIENTS",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Clinical examination",
                "eventAction": "2"
			},
            {
                "text": "Symptomatic assessment",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">ECG</span></p><p class=\"list-level1\"><span class=\"bold-text\">Bio-Chemistry</span></p><p class=\"list-level1\"><span class=\"bold-text\">Resting echocardiography<sup>a</sup></span></p><p  class=\"list-level1\"><span class=\"bold-text\">CXR inselected patients</span></p>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Cause of chest pain other than CAD?",
                "eventAction": "5"
			},
            {
                "text": "Consider comorbidities and QoL",
                "eventAction": "6"
			}
	    ]
	},
    {
        "boxId": "3",
        "infoText": "Symptoms consistent with unstable angina",
        "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
        "nextBox": "4"
	},
    {
        "boxId": "4",
        "infoText": "Follow specific NSTE-ACS guidelines",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "5",
        "infoText": "",
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
        "boxId": "8",
        "infoText": "Treat as appropriate",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "6",
        "infoText": "Comorbidities or QoL make revascularization unlikely",
        "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
        "nextBox": "15"
	},
    {
        "boxId": "15",
        "infoText": "Medical therapy<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "LVEF <50%?",
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
        "boxId": "10",
        "infoText": "Typical angina?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "17"
			},
            {
                "text": "Yes",
                "eventAction": "18"
			}
	    ]
	},
    {
        "boxId": "17",
        "infoText": "<a href=\"ref_ENAS258_7.3.6.0.html\">See Fig.2</a> for selection of test",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "18",
        "infoText": "Offer ICA if revascularization suitable",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "9",
        "infoText": "Assess pre-test-probability (PTP) (<a href=\"ref_ENAS258_7.3.4.0.html\">see Table 11</a>) for the presence of coronary stenoses",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Low PTP (<15%)",
                "eventAction": "11"
			},
            {
                "text": "Intermediate PTP, eg 15-85%",
                "eventAction": "12"
			},
            {
                "text": "High PTP (>85%)",
                "eventAction": "13"
			}
	    ]
	},
    {
        "boxId": "11",
        "infoText": "Investigate other causes<br>Consider functional coronary disease",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "12",
        "infoText": "Noninvasive testing for diagnostic purposes<br/><a href=\"ref_ENAS258_7.3.6.0.html\">See Fig.2</a> for decisions based on noninvasive testing and choice between stress testing and coronary CTA<br/><a href=\"ref_ENAS258_7.5.2.0.html\">See Fig.3</a> for further management pathway",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "13",
        "infoText": "Diagnosis of SCAD established",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "14"
	},
    {
        "boxId": "14",
        "infoText": "Proceed to risk stratification (<a href=\"ref_ENAS258_7.5.2.0.html\">See Fig.3</a>). In patients with severe symptoms or clinical constellation suggesting high risk coronary anatomy initiate guideline-directed medical therapy and offer ICA",
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
		 "staticImageName": "interactive_0000252",
        "referenceText": "<sup>a</sup>May be omitted in very young and healthy patients with a high suspicion of an extracardiac cause of chest pain and in multimorbid patients in whom the echo result has no consequence for further patient management.<br/> <sup>b</sup>If diagnosis of SCAD is doubtful, establishing a diagnosis using pharmacologic stress imaging prior to treatment may be reasonable.",
        "abbreviationText": "<nobr>CAD = coronary </nobr>artery disease; <nobr>CTA = computed</nobr> tomography angiography;CXR = chest X-ray; <nobr>ECG = electrocardiogram;</nobr> <nobr> ICA = invasive</nobr> coronary angiography; <nobr>LVEF = left ventricular</nobr> ejection fraction; <nobr>PTP = pre-test</nobr> probability; <nobr>QoL = quality of <nobr/>life; <nobr>  SCAD = stable</nobr> coronary artery disease.",
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
                        "text": "<a href=\"ref_ENAS258_7.3.4.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];