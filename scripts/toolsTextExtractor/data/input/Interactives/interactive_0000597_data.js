var text = [{
        "boxId": "0",
        "toolIdentifier": "Score",
        "toolName": "Score",
        "toolVersion": "1.0",
        "date": "20171201",
        "toolType": ToolType.RESULT_SCORE,
        "boxStructure": BoxStructure.BOX_SINGLE_LINE_NON_TABULAR,
        "buttonStructure": ButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED,
        "resultStructure": "",
        "header": {
            "headerText": "Risk Factor",
            "options": [{
                    "text": "No",
                    "value": ""
                },
                {
                    "text": "Yes",
                    "value": ""
                }
            ]
        }
    },
    {
        "boxId": "1",
        "infoText": "Congestive HF/LV dysfunction",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "1",
                "value": "1"
            }
        ]
    },
    {
        "boxId": "2",
        "infoText": "Hypertension",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "1",
                "value": "1"
            }
        ]
    },
    {
        "boxId": "3",
        "infoText": "Age &ge; 75",
        "options": [{
                "text": "0 (&le;64)",
                "value": "0"
            },
            {
                "text": "1 (65-74)",
                "value": "1"
            },
            {
                "text": "2 (&ge;75)",
                "value": "2"
            }
        ]
    },
    {
        "boxId": "4",
        "infoText": "Diabetes mellitus",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "1",
                "value": "1"
            }
        ]
    },
    {
        "boxId": "5",
        "infoText": "Stroke / TIA / TE",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "2",
                "value": "2"
            }
        ]
    },
    {
        "boxId": "6",
        "infoText": "Vascular Disease<sup>a</sup>",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "1",
                "value": "1"
            }
        ]
    },
    {
        "boxId": "7",
        "infoText": "Female gender",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "1",
                "value": "1"
            }
        ]
    },
    {
        "boxId": "997",
        "boxType": ResultBoxTypes.RESULT_SCORE_PERCENTAGE_BOX,
        "scoreInfoText": "Score",
        "scoreUnitText": "",
        "resultInfoText": "Treatment recommendation",
        "extraInformation": "",
        "percentageInfoText": "Stroke and thromboembolism event rate at 1 year follow-up(%)",
    },
    {
        "boxId": "998",
        "boxType": ResultBoxTypes.FOOTER,
        "hasFootnote": true,
        "hasAbbreviation": false,
        "staticImageName": "interactive_0000597",
        "referenceText": "* includes women without other stroke risk factors.<br/> ** IIaB for women with only one additional stroke risk factor<br/>*** IB for patients with mechanical heart valves or mitral stenosis.<br><sup>a</sup>Previous myocardial infarction, peripheral artery disease, or aortic plaque.",
        "abbreviationText": "",
        "extraButtons": [{
            buttonRow: [{
                "text": "Abbreviation(s) and footnote(s)",
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
                "text": "<a class='more-info-link' href=\"ref_ENAS5193_3.4.2.2.html\">More information</a>",
                "buttonId": FooterButtons.MORE_INFO_BUTTON
            }]
        }]
    },
    {
        "boxId": "999",
        "result": [{
                "value": "0",
                "operator": "===",
                "inference": "No anticoagulation or antiplatelet therapy is recommended (IIIB)*"
            },
            {
                "value": "1",
                "operator": "===",
                "inference": "Oral anticoagulation with NOAC<sup>**</sup> or VKA<sup>**, ***</sup> should be considered to prevent thromboembolism (class IIa, level of evidence B)"
            },
            {
                "value": "2",
                "operator": ">=",
                "inference": "Oral anticoagulation with NOAC<sup>**</sup> or VKA<sup>**, ***</sup> to prevent thromboembolism is recommended (class I, level of evidence A)"
            }
        ]
    }
];