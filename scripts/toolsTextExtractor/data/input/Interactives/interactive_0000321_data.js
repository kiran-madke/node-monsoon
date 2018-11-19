var text = [{
        "boxId": "1",
        "infoText": "Management of intermittent claudication",
        "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
        "nextBox": "2"
    },
    {
        "boxId": "2",
        "infoText": "Conservative therapy (Risk factors control, exercise training, pharmacotherapy 3–6 months)",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
    },
    {
        "boxId": "3",
        "infoText": "Favourable results?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
            "text": "No",
            "eventAction": "4"
        }, {
            "text": "Yes",
            "eventAction": "9"
        }]
    },

    {
        "boxId": "4",
        "infoText": "Image lesions",
        "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
        "nextBox": "6"
    },

    {
        "boxId": "6",
        "infoText": "Endovascular therapy feasible?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "7"
            }, {
                "text": "Yes",
                "eventAction": "8"
            }

        ]
    },

    {
        "boxId": "7",
        "infoText": "Bypass surgery",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
    },

    {
        "boxId": "8",
        "infoText": "Endovascular therapy",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "9"
    },

    {
        "boxId": "9",
        "infoText": "Follow up:<br/>- Symptoms<br/>- CV risk control",
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
	"staticImageName": "interactive_0000321",
        "referenceText": "If initial TOE is negative but high suspicion for IE remains, repeat TTE and/or TOE within 5–7 days<br /> <sup>a</sup>TOE is not mandatory in isolated right-sided native valve IE with good quality TTE examination and unequivocal echocardiographic findings.",
        "abbreviationText": "CV= cardiovascular",
        "resetButtonText": "",
        "extraButtons": [{
            buttonRow: [{
                "text": "Abbreviation(s)",
                "buttonId": FooterButtons.REF_BUTTON
            }, {
                "image": "Flip PDF",
                "buttonId": FooterButtons.PDF_BUTTON
            }]
        }, {
            buttonRow: [{
                "text": "Reset",
                "buttonId": FooterButtons.RESET_BUTTON
            }, {
                "text": "<a href=\"ref_ENAS257_12.2.1.0.html\" class=\"more-info-link\">More Information</a>",
                "buttonId": FooterButtons.MORE_INFO_BUTTON
            }]
        }]
    }
];