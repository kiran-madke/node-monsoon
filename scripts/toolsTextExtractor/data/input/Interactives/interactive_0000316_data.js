var text = [
    {
        "boxId": "1",
        "infoText": "Management of carotid artery disease",
        "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
        "nextBox": "2"
	},{
        "boxId": "2",
        "infoText": "Recent (<6 months) symptoms of stroke/TIA?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "3"
			},
            {
                "text": "Yes",
                "eventAction": "8"
			}
	    ]
	},{
        "boxId": "3",
        "infoText": "Imaging of carotid artery disease by Duplex ultrasound, CTA and/or MRA",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Carotid artery stenosis",
                "eventAction": "4"
			},
            {
                "text": "Occluded (or near-occluded) carotid artery",
                "eventAction": "5"
			}
	    ]
	},{
        "boxId": "4",
        "infoText": "Imaging of carotid artery disease by Duplex ultrasound, CTA and/or MRA",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "&lt;60%",
                "eventAction": "5"
			},
            {
                "text": "60–99%",
                "eventAction": "6"
			}
	    ]
	},{
        "boxId": "5",
        "infoText": "BMT",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},{
        "boxId": "6",
        "infoText": "Life expectancy >5 years?<br/> Favourable anatomy?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "NO",
                "eventAction": "5"
			},
            {
                "text": "Yes",
                "eventAction": "7"
			}
	    ]
	},{
        "boxId": "7",
        "infoText": "Revascularization should be considered<sup>2</sup> <br/>(+ BMT)",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},{
        "boxId": "8",
        "infoText": "Imaging of carotid artery disease by Duplex ultrasound, CTA and/or MRA",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Carotid artery stenosis",
                "eventAction": "9"
			},
            {
                "text": "Occluded (or near-occluded) carotid artery",
                "eventAction": "5"
			}
	    ]
	},{
        "boxId": "9",
        "infoText": "",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "&lt;50%",
                "eventAction": "5"
			},
            {
                "text": "50–69%",
                "eventAction": "7"
			},
            {
                "text": "70–99%",
                "eventAction": "10"
			}
	    ]
	},{
        "boxId": "10",
        "infoText": "Revascularization is recommended<sup>1, 2</sup><br/>+ BMT",
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
	"staticImageName": "interactive_0000316",
        "referenceText": "<table><tr><td valign=\"top\"><sup>1 </sup></td><td>The management of symptomatic carotid artery disease should be decided as soon as possible (&lt;14 days after onset of symptoms)</td></tr><tr><td valign=\"top\"><sup>2</sup></td><td> After multidisciplinary discussion including neurologists</td></tr></table>",
        "abbreviationText": "BMT= best medical therapy; CTA= computed tomography; MRA= magnetic resonance angiography; TIA= transient ischaemic attack",
        "moreInfotext": "",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [{
                        "text": "Abbreviation(s) and Footnote(s)",
                        "buttonId": FooterButtons.REF_BUTTON
                    },{
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
                        "text": "<a href=\"ref_ENAS257_12.3.0.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
			    ]
			}
	    ]
	}
];