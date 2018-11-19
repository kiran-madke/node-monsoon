var text = [{
    "boxId": "1",
    "infoText": "Clinical suspicion of PE",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Shock/hypotension?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "3"
    }, {
        "text": "Yes",
        "eventAction": "14"
    }]
}, {
    "boxId": "3",
    "infoText": "Diagnostic algorithm, &quot;<a href=\"interactive_0000311\">PE without shock: Diagnosis</a>&quot;",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "4"
}, {
    "boxId": "4",
    "infoText": "PE confirmed",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "5"
}, {
    "boxId": "5",
    "infoText": "Assess clinical risk (PESI or sPESI)",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "PESI class III-V or sPESI &ge;1",
        "eventAction": "6"
    }, {
        "text": "PESI class I-II or sPESI = 0",
        "eventAction": "12"
    }]
}, {
    "boxId": "6",
    "infoText": "Intermediate risk",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "7"
}, {
    "boxId": "7",
    "infoText": "Consider further risk stratification:</br>RV function (echo or CT)<sup>a</sup></br>Laboratory testing<sup>b</sup>",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Both tests positive",
        "eventAction": "8"
    }, {
        "text": "One test positive or both negative",
        "eventAction": "10"
    }]
}, {
    "boxId": "8",
    "infoText": "Intermediate-high risk",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "9"
}, {
    "boxId": "9",
    "infoText": "A/C; monitoring; consider rescue reperfusion<sup>d</sup>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "10",
    "infoText": "Intermediate-low risk<sup>c</sup>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "11"
}, {
    "boxId": "11",
    "infoText": "A/C; Hospitalization<sup>e</sup>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "12",
    "infoText": "Low risk<sup>c</sup>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "13"
}, {
    "boxId": "13",
    "infoText": "A/C; consider early discharge and home treatment, if feasible<sup>f</sup>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "14",
    "infoText": "Diagnostic algorithm &quot;<a href=\"interactive_0000312\">" +
        "<u>PE with shock: Diagnosis</u></a>&quot;",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "15"
}, {
    "boxId": "15",
    "infoText": "PE confirmed",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "16"
}, {
    "boxId": "16",
    "infoText": "High risk",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "17"
}, {
    "boxId": "17",
    "infoText": "Primary reperfusion",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
		"staticImageName": "interactive_0000308",
    "referenceText": "<sup>a</sup> If echocardiography has already been performed during diagnostic workup for PE and detected RV dysfunction, or if the CT " +
        "already performed for diagnostic workup has shown RV enlargement " +
        "(RV/left LV ratio &ge;0.9), a cardiac troponin test should be performed " +
        "except for cases in which primary reperfusion is not a therapeutic " +
        "option (e.g. due to severe comorbidity or limited life expectancy of the " +
        "patient).</br><sup>b</sup> Markers of myocardial injury (e.g. elevated cardiac troponin I or T concentrations in plasma), or of " +
        "heart failure as a result of (right) ventricular dysfunction (elevated natriuretic peptide concentrations in plasma). If a laboratory test for " +
        "a cardiac biomarker has already been performed during initial diagnostic workup (e.g. in the chest pain unit) and was positive, then an " +
        "echocardiogram should be considered to assess RV function, or RV size should be (re)assessed on CT." +
        "</br><sup>c</sup> Patients in the PESI class I-II, or with sPESI of 0, and elevated cardiac biomarkers or signs of RV dysfunction on imaging tests, are also to be classified " +
        "into the intermediate-low risk category. This might apply to situations in which imaging or biomarker results become available before calculation of the clinical severity index. These patients are probably " +
        "no candidates for home treatment.</br><sup>d</sup> Thrombolysis, if (and as soon as) clinical signs of haemodynamic decompensation appear; surgical pulmonary embolectomy or percutaneous " +
        "catheter-directed treatment may be considered as alternative options to systemic thrombolysis, particularly if the bleeding risk is high." +
        "</br><sup>e</sup> Monitoring should be considered for patients with confirmed PE and a positive troponin test, even if there is no evidence of RV dysfunction on echocardiography or CT." +
        "</br><sup>f</sup> The simplified version of the PESI has not been validated in prospective home treatment trials; inclusion criteria other than the PESI were used in two single-armed (non-randomized) management studies.",
    "abbreviationText": "A/C = anticoagulation; CT = computed tomographic pulmonary angiography; echo = echocardiography; PE = pulmonary embolism; PESI = Pulmonary Embolism Severity Index; RV = right ventricular; sPESI = Simplified Pulmonary Embolism Severity Index.",
    "moreInfotext": "",
    "resetButtonText": "",
    "extraButtons": [{
        buttonRow: [{
            "text": "Abbreviation(s) and Footnote(s)",
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
            "text": "<a href=\"ref_ENAS262_7.6.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];