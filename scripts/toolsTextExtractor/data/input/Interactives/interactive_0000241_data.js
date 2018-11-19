/**
 * Created by BBI_2 on 1/18/2016.
 */

var scoreData = [{
        "boxId": "0",
        "toolIdentifier": "interactive_0000278",
        "toolName": "Interactive Score",
        "toolVersion": "1.0",
        "date": "20171128",
        "headerText": "FINnish Diabetes RIsk SCore (FINDRISC) to assess the 10-year risk of 2 diabetes in adults.(Available at: <a href = \"https://www.diabetes.fi/english\" > www.diabetes.fi / english </a>)."
    },
    {
        "boxId": "1",
        "questionText": "Age",
        "maxValue": "Max. 4",
        "options": [{
                "text": "Under 45 years",
                "value": 0
            },
            {
                "text": "45-54 years",
                "value": 2
            },
            {
                "text": "55-64 years",
                "value": 3
            },
            {
                "text": "Over 64 years",
                "value": 4
            }
        ]
    },
    {
        "boxId": "2",
        "questionText": "Body mass Index",
        "maxValue": "Max. 3",
        "options": [{
                "text": "Lower than 25 kg/m<sup>2</sup>",
                "value": 0
            },
            {
                "text": "25-30 kg/m<sup>2</sup>",
                "value": 1
            },
            {
                "text": "Higher than 30 kg/m<sup>2</sup>",
                "value": 3
            }
        ]
    },
    {
        "boxId": "3",
        "questionText": "Waist circumference measured below the ribs (usually at the level of the navel)",
        "maxValue": "Max. 4",
        "options": [{
                "text": "Male: Less than 94 cm, Female: Less than 80 cm",
                "value": 0
            },
            {
                "text": "Male: 94-102 cm, Female: 80-88 cm",
                "value": 3
            },
            {
                "text": "Male: More than 102 cm, Female: More than 88 cm",
                "value": 4
            }
        ]
    },
    {
        "boxId": "4",
        "questionText": "Do you usually have daily at least 30 min of physical activity at work and/or during leisure time (including normal daily activity)?",
        "maxValue": "Max. 2",
        "options": [{
                "text": "Yes",
                "value": 0
            },
            {
                "text": "No",
                "value": 2
            }
        ]
    },
    {
        "boxId": "5",
        "questionText": "￼How often do you eat vegetables, fruit, or berries?",
        "maxValue": "Max. 1",
        "options": [{
                "text": "Every day",
                "value": 0
            },
            {
                "text": "Not every day",
                "value": 1
            }
        ]
    },
    {
        "boxId": "6",
        "questionText": "￼Have you ever taken anti-hypertensive medication regularly?",
        "maxValue": "Max. 2",
        "options": [{
                "text": "No",
                "value": 0
            },
            {
                "text": "Yes",
                "value": 2
            }
        ]
    },
    {
        "boxId": "7",
        "questionText": "￼Have you ever been found to have high blood glucose (e.g. in a health examination, during an illness, during pregnancy)?",
        "maxValue": "Max. 5",
        "options": [{
                "text": "No",
                "value": 0
            },
            {
                "text": "Yes",
                "value": 5
            }
        ]
    },
    {
        "boxId": "8",
        "questionText": "￼￼Have any of the members of your immediate family or other relatives been diagnosed with diabetes (type 1 or type 2)?",
        "maxValue": "Max. 5",
        "options": [{
                "text": "No",
                "value": 0
            },
            {
                "text": "Yes: grandparent, aunt, uncle, or first cousin <br/>(but no own parent,brother, sister or child)",
                "value": 3
            },
            {
                "text": "Yes: parent, brother, sister, or own child",
                "value": 5
            }
        ]
    },
    {
        "boxId": "997",
        "boxType": ResultBoxTypes.RESULT_SCORE_BOX,
        "scoreInfotext": "Score (min. 0 - max. 5)",
        "percentageInfoText": ""
    },
    {
        "boxId": "998",
        "boxType": BoxTypes.FOOTER,
        "hasFootnote": true,
        "hasAbbreviation": false,
        "staticImageName": "",
        "referenceText": "* Test designed by Professor Jaakko Tuomilehto. Department of Public Health, University of Helsinki, and Dr Jaana Lindstrôm, MFS, National Public Health Institute.",
        "abbreviationText": "",
        "extraButtons": [{
                buttonRow: [{
                        "text": "Abbreviation(s) and footnote(s)",
                        "buttonId": FooterButtons.REF_BUTTON
                    },
                    {
                        "text": "<a class='more-info-link' href='ref_ENAS257_5.3.1.0.html'>More information</a>",
                        "buttonId": FooterButtons.MORE_INFO_BUTTON
                    }
                ]
            },
            {
                buttonRow: [{
                    "text": "Reset",
                    "buttonId": FooterButtons.RESET_BUTTON
                }]
            }
        ]
    },
    {
        "boxId": "999",
        "result": [{
                "value": "20",
                "operator": ">",
                "inference": "The risk of developing type 2 diabetes within 10 years is:<b> Very High</b> estimated 1 in 2 will develop disease"
            },
            {
                "value": "15",
                "operator": ">=",
                "inference": "The risk of developing type 2 diabetes within 10 years is: <b>High</b> estimated 1 in 3 will develop disease"
            },
            {
                "value": "12",
                "operator": ">=",
                "inference": "The risk of developing type 2 diabetes within 10 years is:<b> Moderate</b> estimated 1 in 6 will develop disease"
            },
            {
                "value": "7",
                "operator": ">=",
                "inference": "Slightly elevated: estimated 1 in 25 will develop disease"
            },
            {
                "value": "7",
                "operator": "<",
                "inference": "The risk of developing type 2 diabetes within 10 years is: <b>Low</b> <br/>estimated 1 in 100 will develop disease"
            }
        ]
    }
];