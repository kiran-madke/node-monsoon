var text = [
    {
        "boxId": "0",
        "infoText": "Patients with suspected SCAD and intermediate PTP of 15% - 85%",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "1"
	},
    {
        "boxId": "1",
        "infoText": "Consider:<p class=\"list-level1\"><span class=\"bold-text\">Patient criteria<sup>a</sup>/suitability for given test</span></p><p class=\"list-level1\"><span class=\"bold-text\">Availability</span></p><p class=\"list-level1\"><span class=\"bold-text\">Local expertize</span></p>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Stress testing for ischaemia",
                "eventAction": "2"
			},
            {
                "text": "Coronary CTA<sup>a</sup> in patients at low intermediate PTP (15% - 50%)",
                "eventAction": "3"
			}
	    ]
	},
    {
        "boxId": "2",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "PTP 15-65% and LVEF &ge;50%",
                "eventAction": "4"
			},
            {
                "text": "PTP 66-85% or LVEF &lt;50% without typical angina",
                "eventAction": "5"
			}
	    ]
	},
    {
        "boxId": "4",
        "infoText": "Exercise ECG if feasible - stress imaging testing<sup>a</sup> preferred (echo<sup>b</sup>, CMR<sup>c</sup>, SPECT<sup>b</sup>, PET<sup>b</sup>) if local expertize and availability permit",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Unclear",
                "eventAction": "6"
			},
            {
                "text": "Ischaemia",
                "eventAction": "7"
			},
            {
                "text": "No ischaemia",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "6",
        "infoText": "Determine patient characteristics and preferences<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
    },
    {
        "boxId": "9",
        "infoText": "<table class=\"table\" style=\"border-collapse: collapse;\"> <col style=\"width:33.33%\"><col style=\width:33.33%\"><col style=\"width:33.33%\"><tr><td style=\"border: 1px solid #000000;\"><b>2nd(imaging)stress test <br/> (if not done before)<sup>f</sup></b></td><td style=\"border: 1px solid #000000;\"><b>Coronary CTA in suitable patient<sup>d</sup> <br/>  (if not done before)<sup>e</sup> </b></td> <td style=\"border: 1px solid #000000;\"><b>ICA (with FFR when necessary) </b></td></tr></table>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "7",
        "infoText": "Diagnosis SCAD established Further risk stratification (<a href=\"ref_ENAS258_7.5.2.0.html\">see Fig. 3</a>)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "8",
        "infoText": "Consider functional CAD Investigate other causes",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "5",
        "infoText": "Stress imaging<sup>a</sup> (echo<sup>b</sup>, CMR<sup>c</sup>, SPECT<sup>b</sup>, PET<sup>b</sup>); ECG exercise stress testing possible if resources for stress imaging not available",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Unclear",
                "eventAction": "6"
			},
            {
                "text": "Ischaemia",
                "eventAction": "7"
			},
            {
                "text": "No ischaemia",
                "eventAction": "8"
			}
	    ]
	},
    {
        "boxId": "3",
        "infoText": "<p class=\"list-level1\"><span class=\"bold-text\">If suitable candidated</span></p><p class=\"list-level1\"><span class=\"bold-text\">If adequate technology and local expertize available</span></p>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No stenosis",
                "eventAction": "8"
			},
            {
                "text": "Stenosis",
                "eventAction": "7"
			},
            {
                "text": "Unclear",
                "eventAction": "10"
			}
	    ]
	},
    {
        "boxId": "10",
        "infoText": "Ischaemia testing using stress imaging if not done before<sup>f</sup>",
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
		"staticImageName": "interactive_0000263",
        "referenceText": " <sup>a</sup>Consider age of patient versus radiation exposure.<br/><sup>b</sup>In patients unable to exercise use echo or SPECT/PET with pharmacologic stress instead.<br/><sup>c</sup>CMR is only performed using pharmacologic stress.<br/><sup>d</sup>Patient characteristics should make a fully diagnostic coronary CTA scan highly probable <a href=\"ref_ENAS258_7.3.8.0.html\">(see non-invasive techniques to assess coronary anatomy)</a> – consider result to be unclear in patients with severe diffuse or focal calcification.<br/><sup>e</sup>Proceed as in lower left coronary CTA box.<br/><sup>f</sup>Proceed as in “stress testing for ischaemia” box.",
        "abbreviationText": "<nobr>CAD = coronary</nobr> artery disease; <nobr>CTA = computed</nobr> tomography angiography; CMR = cardiac magnetic resonance; <nobr>ECG = electrocardiogram;</nobr> <nobr>ICA = invasive</nobr> coronary angiography; <nobr>LVEF = left</nobr> ventricular ejection fraction; <nobr>PET = positron</nobr> emission tomography; <nobr>PTP = pre-test</nobr> probability; <nobr>SCAD = stable</nobr> coronary artery disease; <nobr> SPECT = single</nobr> photon emission computed tomography.",
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
                        "text": "<a href=\"ref_ENAS258_7.3.4.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];