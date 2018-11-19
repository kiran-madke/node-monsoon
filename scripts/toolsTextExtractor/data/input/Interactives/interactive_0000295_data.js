var text = [{
        "boxId": "1",
        "infoText": "Acute chest pain",
        "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
        "nextBox": "2"
    }, {
        "boxId": "2",
        "infoText": "Medical history + clinical examination + ECG",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "3"
    }, {
        "boxId": "3",
        "infoText": "What is preferred diagnosis?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "Aortic disease",
                "eventAction": "4"
            }, {
                "text": "STEMI",
                "eventAction": "5"
            }
        ]
    },
    {
        "boxId": "5",
        "infoText": "STEMI<sup>a</sup>: <a href=\"ref_ENAS250_1.1.0.0.html\">See ESC guidelines",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "4",
        "infoText": "Assess haemodynamic state",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "Unstable",
                "eventAction": "6"
            }, {
                "text": "Stable",
                "eventAction": "8"
            }
        ]
    },
    {
        "boxId": "6",
        "infoText": "TTE + TOE/CT<sup>b</sup>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "Negative",
                "eventAction": "7"
            }, {
                "text": "Positive",
                "eventAction": "17"
            }
        ]
    },
    {
        "boxId": "8",
        "infoText": "Assessment of probability score",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "Low probability (score 0-1)",
                "eventAction": "9"
            }, {
                "text": "High probability (score 2-3) or<br>typical chest pain",
                "eventAction": "10"
            }
        ]
    },
    {
        "boxId": "9",
        "infoText": "Assess D-dimers<sup>d,e</sup> + TTE + Chest X-ray",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "D-dimers",
                "eventAction": "11"
            }, {
                "text": "TTE",
                "eventAction": "20"
            }, {
                "text": "Chest X-ray",
                "eventAction": "21"
            }
        ]
    },
    {
        "boxId": "20",
        "infoText": "Signs of AD positive on TTE?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "12"
            }, {
                "text": "Yes",
                "eventAction": "22"
            }
        ]
    },
    {
        "boxId": "21",
        "infoText": "Widened mediastinum seen on chest X-ray?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "12"
            }, {
                "text": "Yes",
                "eventAction": "22"
            }
        ]
    },
    {
        "boxId": "22",
        "infoText": "CT (MRI or TOE)<sup>b</sup>",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "Negative",
                "eventAction": "16_1"
            }, {
                "text": "Positive",
                "eventAction": "17"
            }
        ]
    },
    {
        "boxId": "10",
        "infoText": "Perform TTE",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "Inconclusive",
                "eventAction": "14"
            }, {
                "text": "Conclusive",
                "eventAction": "15"
            }
        ]
    },
    {
        "boxId": "15",
        "infoText": "Definite Type A-AD<sup>c</sup>?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "14"
            }, {
                "text": "Yes",
                "eventAction": "19"
            }
        ]
    },
    {
        "boxId": "19",
        "infoText": "Refer on emergency to surgical team and pre-operative TOE",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "14",
        "infoText": "CT (or TOE)",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "Negative",
                "eventAction": "16"
            }, {
                "text": "Positive",
                "eventAction": "17"
            }
        ]
    },
    {
        "boxId": "16",
        "infoText": "Consider alternate diagnosis repeat CT if necessary",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "16_1",
        "infoText": "Consider alternate diagnosis",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "17",
        "infoText": "AAS confirmed",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "7",
        "infoText": "AAS excluded<br>Consider alternate diagnosis",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "11",
        "infoText": "Are D-dimers positive?",
        "boxType": BoxTypes.DECISION_GOING_THROUGH,
        "buttons": [{
                "text": "No",
                "eventAction": "12"
            }, {
                "text": "Yes",
                "eventAction": "22"
            }
        ]
    },
    {
        "boxId": "12",
        "infoText": "No argument for AD",
        "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
        "nextBox": "13"
    },
    {
        "boxId": "13",
        "infoText": "Consider alternate diagnosis",
        "boxType": BoxTypes.ACTIVITY_EXIT_BOX
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "buttonText": "Fu&#223;noten",
        "hasFootnote": true,
        "hasAbbreviation": false,
        "hasPdfButton": true,
        "hasMoreInfoButton": true,
		"staticImageName": "interactive_0000295",
        "referenceText": "<sup>a</sup>STEMI can be associated with AAS in rare cases. </br><sup>b</sup>Pending local availability, patient characteristics, and physician experience.</br><sup>c</sup>Proof of type-A AD by the presence of flap, aortic regurgitation, and/or pericardial effusion.</br><sup>d</sup>Preferably point-of-care, otherwise classical.</br><sup>e</sup>Also troponin to detect non–ST-segment elevation myocardial infarction.",
        "abbreviationText": "This is abbreviation text. This is abbreviation text. This is abbreviation text.",
        "moreInfotext": "For more information, <a href=\"http://www.google.co.in\">see here</a>",
        "resetButtonText": "",
        "extraButtons": [{
            buttonRow: [{
                "text": "Footnote(s)",
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
                "text": "<a href=\"ref_ENAS264_8.2.5.3.html\" class=\"more-info-link\">More Information</a>",
                "buttonId": FooterButtons.MORE_INFO_BUTTON
            }]
        }]
    }
];