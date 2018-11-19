var text = [{
    "boxId": "1",
    "infoText": "Suspect secondary hypertension?",
    "boxType": BoxTypes.DECISION_STARTING_POINT,
    "buttons": [{
        "text": "No",
        "eventAction": "2"
    }, {
        "text": "Yes",
        "eventAction": "3"
    }]
}, {
    "boxId": "2",
    "infoText": "Follow <a href=\"ref_ENAS260_7.1.0.0.html\">treatment strategies",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "3",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "4"
}, {
    "boxId": "4",
    "infoText": "<p class=\"text-left\">Clinical history:<span class=\"text-normal\"> rapid weight gain, polyuria, polydipsia, psychological disturbances.</span><br/>" +
        "Physical examination:<span class=\"text-normal\"> typical body habitus (central obesity, moon-face, buffalo hump, red striae, hirsutism).</span><br/>Laboratory investigations:<span class=\"text-normal\"> hyperglycaemia</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "5"
    }, {
        "text": "Yes",
        "eventAction": "27"
    }]
}, {
    "boxId": "5",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "6"
}, {
    "boxId": "6",
    "infoText": "<p class=\"text-left\">Clinical history:<span class=\"text-normal\"> paroxysmal hypertension or a crisis superimposed to sustained hypertension; headache, sweating, palpitations and pallor; positive family history of pheochromocytoma.</span><br/>" +
        "Physical examination:<span class=\"text-normal\">skin stigmata of neurofibromatosis (caf&eacute;-au-lait spots, neurofibromas).</span><br/>Laboratory investigations:<span class=\"text-normal\"> incidental discovery of adrenal (or in some cases, extraadrenal) masses.</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "7"
    }, {
        "text": "Yes",
        "eventAction": "26"
    }]
}, {
    "boxId": "7",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "8"
}, {
    "boxId": "8",
    "infoText": "<p class=\"text-left\">Clinical history:<span class=\"text-normal\"> history of urinary tract infection or obstruction, haematuria, analgesic abuse; family history of polycystic kidney disease.</span><br/>" +
        "Physical examination:<span class=\"text-normal\"> abdominal masses (in case of polycystic kidney disease).</span><br/>Laboratory investigations:<span class=\"text-normal\"> presence of protein, erythrocytes, or leucocytes in the urine, decreased GFR.</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "9"
    }, {
        "text": "Yes",
        "eventAction": "25"
    }]
}, {
    "boxId": "9",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "10"
}, {
    "boxId": "10",
    "infoText": "<p class=\"text-left\">Clinical history:<br/>Fibromuscular dysplasia:<span class=\"text-normal\"> early onset hypertension (especially in women).</span><br/>Atherosclerotic stenosis: <span class=\"text-normal\">hypertension of abrupt onset," +
        " worsening or increasingly difficult to treat; flash pulmonary oedema.</span><br/>Physical examination:<span class=\"text-normal\"> Abdominal bruit</span><br/>Laboratory investigations:<span class=\"text-normal\"> difference of &gt;1.5 cm in length between the two kidneys (renal ultrasound), rapid deterioration " +
        "in renal function (spontaneous or in response to RAA blockers).</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "11"
    }, {
        "text": "Yes",
        "eventAction": "24"
    }]
}, {
    "boxId": "11",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "12"
}, {
    "boxId": "12",
    "infoText": "<p class=\"text-left\">Physical examination:<span class=\"text-normal\"> auscultation of precordial or chest murmurs</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "13"
    }, {
        "text": "Yes",
        "eventAction": "23"
    }]
}, {
    "boxId": "13",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "14"
}, {
    "boxId": "14",
    "infoText": "<p class=\"text-left\">Physical examination:<span class=\"text-normal\"> diminished or delayed femoral pulses and reduced femoral blood pressure compared to simultaneous arm BP</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "15"
    }, {
        "text": "Yes",
        "eventAction": "22"
    }]
}, {
    "boxId": "15",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "16"
}, {
    "boxId": "16",
    "infoText": "<p class=\"text-left\">Physical examination:<span class=\"text-normal\"> left-right arm BP difference</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "17"
    }, {
        "text": "Yes",
        "eventAction": "21"
    }]
}, {
    "boxId": "17",
    "infoText": "Are the following symptoms/sign present?",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "18",
    "infoText": "<p class=\"text-left\">Clinical history:<span class=\"text-normal\"> muscle weakness; family history of early onset hypertension and cerebrovascular events at age &lt;40 years.</span><br/>" +
        "Physical examination:<span class=\"text-normal\"> arrhythmias (in case of severe hypokalaemia).</span><br/>Laboratory investigations:<span class=\"text-normal\"> hypokalaemia (spontaneous or diuretic-induced); incidental discovery of adrenal masses.</span></p>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "19"
    }, {
        "text": "Yes",
        "eventAction": "20"
    }]
}, {
    "boxId": "19",
    "infoText": "Consider primary hypertension",
    "boxType": BoxTypes.CLINICAL_CONDITION_EXIT_BOX,
}, {
    "boxId": "20",
    "infoText": "Primary aldosteronism possible<p>First-line test(s):<span class=\"text-normal\"> aldosterone–renin ratio under standardized conditions (correction of hypokalaemia and withdrawal of drugs affecting RAA system).</span><br/>" +
        "Additional/confirmatory test(s):<span class=\"text-normal\"> confirmatory tests (oral sodium loading, saline infusion, fludrocortisone suppression, or captopril test); adrenal CT scan; adrenal vein sampling.</span>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "21",
    "infoText": "<p class=\"text-left\">Aortic coarctation/subclavian artery stenosis possible<br/><span class=\"text-normal\">Consider further diagnostic procedures</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "22",
    "infoText": "<p class=\"text-left\">Aortic coarctation/aortic disease/lower extremity artery disease possible<br/><span class=\"text-normal\">Consider further diagnostic procedures</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "23",
    "infoText": "<p class=\"text-left\">Aortic coarctation/aortic disease/upper extremity artery disease possible<br/><span class=\"text-normal\">Consider further diagnostic procedures</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "24",
    "infoText": "<p class=\"text-left\">Renovascular hypertension possible<br/>First-line test(s):<span class=\"text-normal\"> renal Duplex Doppler ultrasonography</span><br/>" +
        "Additional/confirmatory test(s):<span class=\"text-normal\"> magnetic resonance angiography, spiral computed tomography, intra-arterial digital subtraction angiography.</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "25",
    "infoText": "<p class=\"text-left\">Polycystic kidneys/renal parenchymal disease possible<br/>First-line test(s):<span class=\"text-normal\"> renal ultrasound</span><br/>" +
        "Additional/confirmatory test(s):<span class=\"text-normal\"> detailed work-up for kidney disease.</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "26",
    "infoText": "<p class=\"text-left\">Pheochromocytoma possible<br/>First-line test(s):<span class=\"text-normal\"> measurement of urinary fractionated metanephrines or plasma-free metanephrines.</span><br/>" +
        "Additional/confirmatory test(s):<span class=\"text-normal\"> CT or MRI of the abdomen and pelvis; 123 I-labelled meta-iodobenzyl-guanidine scanning; genetic screening for pathogenic mutations.</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "27",
    "infoText": "<p class=\"text-left\">Cushing syndrome possible<br/>First-line test(s):<span class=\"text-normal\"> 24-h urinary cortisol excretion</span><br/>" +
        "Additional/confirmatory test(s):<span class=\"text-normal\"> dexamethasone-suppression tests</span></p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": false,
    "hasAbbreviation": false,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
    "referenceText": "",
    "abbreviationText": "",
    "moreInfotext": "",
    "resetButtonText": "",
    "extraButtons": [{
        buttonRow: [{
            "text": "Reset",
            "buttonId": FooterButtons.RESET_BUTTON
        }, {
            "text": "<a href=\"ref_ENAS260_5.9.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];