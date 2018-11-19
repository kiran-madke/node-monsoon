var text = [

    {
        "boxId": "1",
        "infoText": "AF patient undergoing open heart surgery (e.g. CABG, valve surgery)",
        "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
        "nextBox": "2"
	},
    {
        "boxId": "2",
        "infoText": "Rhythm control therapy desirable to improve AF-related symptoms",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "3"
			},
            {
                "text": "Yes",
                "eventAction": "4"
			}
		]
	},
    {
        "boxId": "3",
        "infoText": "Patient choice informed by AF Heart Team: <br/><br/>No AF surgery <br/><br/>Consider to add surgical <br/>LAA exclusion in selected patients (IIbC)<sup>b</sup>",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
    {
        "boxId": "4",
        "infoText": "Patient choice informed by AF Heart Team: <br/><br/>AF surgery (IIaA)<sup>a</sup><br/><br/>Consider to add surgical LAA exclusion in selected patients (IIbC)<sup>b</sup>",
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
        "staticImageName": "interactive_0000562",
		"referenceText": "<sup>a</sup>AF surgery may be PVI in paroxysmal AF and biatrial maze in persistent or long-standing persistent AF. <br/><sup>b</sup>Oral anticoagulation should be continued irrespective of AF surgery or LAA exclusion",
        "abbreviationText": "AF = atrial fibrillation; CABG = coronary artery bypass graft; LAA = left atrial appendage; PVI = pulmonary vein isolation.",
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
                        "text": "<a href=\"ref_ENAS5194_10.7.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                     }
				]
			}
		]
	}

];