var text = [{
        "boxId": "1",
        "infoText": "Genetic testing",
        "boxType": BoxTypes.DECISION_STARTING_POINT,
        "buttons": [
            {
                "text": "Definite mutation",
                "eventAction": "2"
            },
            {
                "text": "Variant of unknown/uncertain significance",
                "eventAction": "3"
            },
            {
                "text": "No mutation",
                "eventAction": "4"
            }
        ]
    },
    {
        "boxId": "2",
        "infoText": "Cascade genetic test",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "Mutation negative",
                "eventAction": "5"
            },
            {
                "text": "Mutation positive ± clinical phenotype",
                "eventAction": "6"
            }
        ]
    },
    {
        "boxId": "3",
        "infoText": "Is segregation analysis possible?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "No",
                "eventAction": "7"
            },
            {
                "text": "Yes",
                "eventAction": "2"
            }
        ]
    },
    {
        "boxId": "4",
        "infoText": "Reconsider other genocopies/phenocopies",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "7"
    },
    {
        "boxId": "7",
        "infoText": "Cascade clinical screening",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [
            {
                "text": "HCM",
                "eventAction": "6"
            },
            {
                "text": "Normal",
                "eventAction": "10"
            }
        ]
    },
    {
        "boxId": "5",
        "infoText": "Discharge",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "6",
        "infoText": "Long-term follow-up",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "10",
        "infoText": "Repeat screening at intervals",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": false,
        "hasAbbreviation": true,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
			"staticImageName": "interactive_0000298",
        "referenceText": "*Use absolute values for LVOT gradient, MLVWT and left atrial diameter.</br>** ICD not recommended unless there other clinical features that are of potential prognostic importance and when the likely benefit is greater than the lifelong risk of complications and the impact of an ICD on lifestyle, socioeconomic status and psychological health.",
        "abbreviationText": "HCM = hypertrophic cardiomyopathy; Cascade genetic test = screening of first degree relatives of patients already diagnosed with HCM.",
        "resetButtonText": "",
        "extraButtons": [
            {
                buttonRow: [
                    {
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
                        "text": "<a href=\"ref_ENAS263_8.2.2.0.html\" class=\"more-info-link\">More Information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                ]
            }
        ]
    }
];