var text = [{
        "boxId": "0",
        "toolIdentifier": "Score",
        "toolName": "Score",
        "toolVersion": "1.0",
        "date": "20171201",
        "toolType": ToolType.RESULT_SCORE,
        "boxStructure": BoxStructure.BOX_SINGLE_LINE_NON_TABULAR,
        "buttonStructure": ButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR,
        "resultStructure": "",
        "header": {
            "headerText": "Risk factor",
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
        "infoText": "Active cancer (tx ongoing, within 6 months, or palliative)",
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
        "infoText": "Paralysis/recent plaster immobilization of lower extremity",
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
        "infoText": "Bedridden > 3 days within prior 4 wks due to major surgery",
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
        "boxId": "4",
        "infoText": "Localized tenderness along distribution of deep veins",
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
        "infoText": "Swelling of the entire leg",
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
        "boxId": "6",
        "infoText": "Calf swelling > 3 cm compared with asymptomatic leg",
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
        "infoText": "Pitting edema (greater in the symptomatic leg)",
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
        "boxId": "8",
        "infoText": "Previous DVT",
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
        "boxId": "9",
        "infoText": "Collateral superficial veins (nonvaricose)",
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
        "boxId": "10",
        "infoText": "Alternative diagnosis (as likely or greater than that of DVT)",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "-2",
                "value": "-2"
            }
        ]
    },
    {
        "boxId": "997",
        "boxType": ResultBoxTypes.RESULT_SCORE_BOX,
        "scoreInfoText": "Score",
        "scoreUnitText": "",
        "resultInfoText": "Result",
        "extraInformation": "",
        "percentageInfoText": "Percentage",
    },
    {
        "boxId": "998",
        "boxType": ResultBoxTypes.FOOTER,
        "hasFootnote": false,
        "hasAbbreviation": false,
        "staticImageName": "",
        "referenceText": "",
        "abbreviationText": "",
        "extraButtons": [{
            buttonRow: [{
                "text": "Reset",
                "buttonId": FooterButtons.RESET_BUTTON
            }]
        }]
    },
    {
        "boxId": "999",
        "result": [{
                "value": "2",
                "operator": ">",
                "inference": "High DVT probability"
            },
            {
                "minValue": "1",
                "maxValue": "2",
                "operator": "between",
                "inference": "Moderate DVT probability"
            },
            {
                "value": "0",
                "operator": "<=",
                "inference": "Low DVT probability"
            }
        ]
    }
];