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
            "headerText": "Clinical characteristic",
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
        "boxId": "2",
        "infoText": "Abnormal RF",
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
        "infoText": "Abnormal LF",
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
        "infoText": "Stroke",
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
        "infoText": "Bleeding",
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
        "infoText": "Labile INRs<sup>1</sup>",
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
        "infoText": "Elderly<sup>2</sup> (age>65)",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "1",
                "value": "1"
            }
        ]
    }, {
        "boxId": "8",
        "infoText": "Drugs<sup>3</sup>",
        "options": [{
                "text": "0",
                "value": "0"
            },
            {
                "text": "1",
                "value": "1"
            }
        ]
    }, {
        "boxId": "9",
        "infoText": "Alcohol",
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
        "boxType": ResultBoxTypes.SCORE_BOX,
        "scoreInfoText": "Score",
        "scoreUnitText": "",
        "resultInfoText": "",
        "extraInformation": "In patients with a HAS-BLED score ≥ 3, caution and regular review are recommended, as well as efforts to correct the potentially reversible risk factors for bleeding. A high HAS-BLED score per se should not be used to exclude patients from OAC therapy.",
        "percentageInfoText": "",
    },
    {
        "boxId": "998",
        "boxType": ResultBoxTypes.FOOTER,
        "hasFootnote": true,
        "hasAbbreviation": true,
        "staticImageName": "",
        "referenceText": "'Hypertension' is defined as uncontrolled blood pressure e.g., systolic blood pressure > 160 mmHg. 'Abnormal kidney function' is defined as the presence of chronic dialysis or renal transplantation or serum creatinine ≥ 200 μmol/L. <br>'Abnormalliverfunction' is definedas chronichepatic disease (e.g.,cirrhosis) orbio chemical evidence of significant hepatic derangement (e.g., bilirubin > 2x upper limit of normal, in association with AST/ALT/ALP > 3x upper limit normal, etc). <br>'Bleeding' refers to previous bleeding history and/or predisposition to bleeding, e.g., bleeding diathesis, anaemia, etc. 'Labile INRs' refers to unstable/high INRs or poor time in therapeutic range (e.g., <60%). <br>'Drugs or alcohol' refers to concomitant use of drugs such as antiplatelet agents, non-steroidal anti-inflammatory drugs, etc., or alcohol abuse. <br><sup>1</sup>  if taking VKA<br><sup>2</sup> e.g., age >65, frail condition<br><sup>3</sup> concomitant aspirin, NSAID",
        "abbreviationText": "AST/ALT/ALP = aspartate / alanine aminotransferase / alkaline phosphatase; INR = international normalized ratio; NSAID = non-steroidal anti-inflammatory drug; RF = Renal Function; LF = Liver Function.",
        "extraButtons": [{
            buttonRow: [{
                "text": "Abbreviation(s) and footnote(s)",
                "buttonId": FooterButtons.REF_BUTTON
            }, {
                "text": "Reset",
                "buttonId": FooterButtons.RESET_BUTTON
            }]
        }]
    },
    {
        "boxId": "999",
        "result": [{
                "value": "0",
                "operator": "===",
                "inference": "low risk: no anticoagulation recommended"
            },
            {
                "value": "1",
                "operator": "===",
                "inference": "intermediate risk: OAC recommended"
            },
            {
                "maxValue": "2",
                "minValue": "5",
                "operator": "between",
                "inference": "high risk: OAC recommended"
            },
            {
                "maxValue": "6",
                "minValue": "9",
                "operator": "between",
                "inference": "OAC therapy with adjusted-dose VKA (INR 2-3) or with NOACs is recommended, unless contraindicated"
            }
        ]
    }
];