/**
 * Created by BBI_2 on 1/18/2016.
 */

var scoreData = [{
        "boxId": "0",
        "toolIdentifier": "interactive_0000278",
        "toolName": "Interactive Score",
        "toolVersion": "1.0",
        "date": "20171128",
        "headerText": ""
    },
    {
        "boxId": "1",
        "questionText": "Family history",
        "maxValue": "Max. 2",
        "options": [{
                "text": "First-degree relative with known premature (men: &lt;55 years; women: &lt;60 years) coronary or vascular disease, or First-degree relative with known LDL-C above the 95th percentile",
                "value": 1
            },
            {
                "text": "First-degree relative with tendinous xanthomata and/or arcus cornealis, or children &lt;18 years of age with LDL-C above the 95th percentile",
                "value": 2
            },
            {
                "text": "None of above",
                "value": 0
            }
        ]
    },
    {
        "boxId": "2",
        "questionText": "Clinical history",
        "maxValue": "Max. 2",
        "options": [{
                "text": "Patient with premature (men: &lt;55 years; women: &lt;60 years) coronary artery disease",
                "value": 2
            },
            {
                "text": "Patient with premature (men: &lt;55 years; women: &lt;60 years) cerebral or peripheral vascular disease",
                "value": 1
            },
            {
                "text": "None of above",
                "value": 0
            }
        ]
    },
    {
        "boxId": "3",
        "questionText": "Physical examination<sup>a</sup>",
        "maxValue": "Max. 6",
        "options": [{
                "text": "Tendinous xanthomata",
                "value": 6
            },
            {
                "text": "Arcus cornealis before age 45 years",
                "value": 4
            },
            {
                "text": "Both are present",
                "value": 6
            },
            {
                "text": "None of above",
                "value": 0
            }
        ]
    },
    {
        "boxId": "4",
        "questionText": "LDL-C",
        "maxValue": "Max. 8",
        "options": [{
                "text": "&ge; 8.5 mmol/L (325 mg/dL)",
                "value": 8
            },
            {
                "text": "6.5–8.4 mmol/L (251–325 mg/dL)",
                "value": 5
            },
            {
                "text": "5.0–6.4 mmol/L (191–250 mg/dL)",
                "value": 3
            },
            {
                "text": "4.0–4.9 mmol/L (155–190 mg/dL)",
                "value": 1
            },
            {
                "text": "None of above",
                "value": 0
            }
        ]
    },
    {
        "boxId": "5",
        "questionText": "DNA analysis: Functional mutation in the LDLR, apoB or PCSK9 gene?",
        "maxValue": "Max. 8",
        "options": [{
                "text": "Yes",
                "value": 8
            },
            {
                "text": "No",
                "value": 0
            }
        ]
    },
    {
        "boxId": "997",
        "boxType": ResultBoxTypes.RESULT_SCORE_BOX,
        "scoreInfotext": "Score (min. 0 - max. 8)",
        "percentageInfoText": "This is percentage info text"
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "hasFootnote": true,
        "hasAbbreviation": true,
        "staticImageName": "interactive_0000278",
        "referenceText": "<sup>a</sup>Exclusive of each other (i.e. maximum 6 points if both are present)",
        "abbreviationText": "FH = familial hypercholesterolaemia; LDL-C = low-density lipoprotein-cholesterol.",
        "extraButtons": [{
                buttonRow: [{
                        "text": "Abbreviation(s) and footnote(s)",
                        "buttonId": FooterButtons.REF_BUTTON
                    },
                    {
                        "image": "Flip PDF",
                        "buttonId": FooterButtons.PDF_BUTTON
                    }
                ]
            },
            {
                buttonRow: [{
                        "text": "Reset",
                        "buttonId": FooterButtons.RESET_BUTTON
                    },
                    {
                        "text": "<a class='more-info-link' href='ref_ENAS5197_11.1.0.0.html'>More information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                ]
            }
        ]
    },
    {
        "boxId": "999",
        "result": [{
                "value": "3",
                "operator": "<",
                "inference": "No familial hypercholesterolaemia"
            },
            {
                "minValue": "3",
                "maxValue": "5",
                "operator": "between",
                "inference": "Possible familial hypercholesterolaemia"
            },
            {
                "minValue": "6",
                "maxValue": "8",
                "operator": "between",
                "inference": "Probable familial hypercholesterolaemia"
            },
            {
                "value": "8",
                "operator": ">",
                "inference": "Definite familial hypercholesterolaemia"
            }
        ]
    }
];