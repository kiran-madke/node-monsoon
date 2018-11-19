var text = [{
    "boxId": "1",
    "infoText": "Pre-operative cardiac risk evaluation and peri-operative management",
    "boxType": BoxTypes.ACTIVITY_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Step I</br>Urgent surgery",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "3"
    }, {
        "text": "Yes",
        "eventAction": "4"
    }]
}, {
    "boxId": "3",
    "infoText": "Step 2 </br>One of active or unstable cardiac conditions",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "5"
    }, {
        "text": "Yes",
        "eventAction": "6"
    }]
}, {
    "boxId": "5",
    "infoText": "Step 3</br>Determine the risk of the surgical procedure <a href=\"ref_ENAS261_4.4.0.0.html\">(Table at Step 3)",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Intermediate or high",
        "eventAction": "7"
    }, {
        "text": "Low",
        "eventAction": "8"
    }]
}, {
    "boxId": "7",
    "infoText": "Step 4 </br>Consider functional capacity of the patient",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "&le; 4 METs",
        "eventAction": "9"
    }, {
        "text": "&gt; 4 METs",
        "eventAction": "8"
    }]
}, {
    "boxId": "9",
    "infoText": "Step 5</br>In patients with a poor functional capacity consider the risk of the surgical procedure",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "High-risk surgery",
        "eventAction": "11"
    }, {
        "text": "Intermediate risk surgery",
        "eventAction": "12"
    }]
}, {
    "boxId": "11",
    "infoText": "Step 6</br>Cardiac risk factors",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "&ge; 3",
        "eventAction": "13"
    }, {
        "text": "&le; 2",
        "eventAction": "14"
    }]
}, {
    "boxId": "13",
    "infoText": "<p class=\"text-left\">Consider non-invasive testing</p><p class=\"text-normal text-left\">Non-invasive testing can also be considered prior to any surgical procedure for patient counselling, change of peri-operative management in relation to type of surgery and anaesthesia technique</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "15"
}, {
    "boxId": "15",
    "infoText": "Interpretation of non-invasive stress test results",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No/mild/moderate stress-induced ischaemia",
        "eventAction": "16"
    }, {
        "text": "Extensive stress-induced ischaemia",
        "eventAction": "17"
    }]
}, {
    "boxId": "16",
    "infoText": "Proceed with the planned surgery<sup>b</sup>.",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "18",
    "infoText": "<p class=\"text-left\">Continuation or discontinuation of aspirin in patients previously " +
        "treated with aspirin may be considered in the peri-operative period, and should be based on an individual decision that depends " +
        "on the peri-operative bleeding risk weighed against the risk of thrombotic complications <a href =\"ref_ENAS261_12.0.0.0.html\">(see also the summary Table).</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "19"
}, {
    "boxId": "19",
    "infoText": "Surgery",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "4",
    "infoText": "<p class=\"text-left\">Patient or surgical specific factors dictate the strategy, and do not allow further cardiac testing or treatment. The consultant provides recommendations on peri-operative medical management, surveillance for cardiac events and continuation of chronic cardiovascular medical therapy.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "6",
    "infoText": "<p class=\"text-left\">Treatment options should be discussed in a multidisciplinary team, involving" +
        " all peri-operative care physicians as interventions might have implication" +
        " on anaesthesiological and surgical care. For instance in the presence of unstable angina, depending on the outcome of this discussion, patients can proceed for coronary artery intervention, with the initiation of dual-anti" +
        " platelet therapy if the index surgical procedure can be delayed, or directly for operation" +
        " if delay is impossible with optimal medical therapy.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "8",
    "infoText": "<p class=\"text-left\">The consultant can identify risk factors and provide recommendations on lifestyle and medical therapy, according to the ESC Guidelines. In patients with one or more clinical risk factors, pre-operative baseline ECG" +
        " may be considered to monitor changes during the peri-operative period. In patients with known IHD or myocardial ischaemia, initiation of a titrated low-dose beta-blocker regimen may be considered before surgery<sup>a</sup>. In patients with heart failure and systolic dysfunction, ACEI should be considered before surgery. In patients undergoing vascular surgery, initiation of statin therapy should be considered.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "12",
    "infoText": "<p class=\"text-left\">In addition to suggestions above: <br>In patients with one or more clinical risk factors, pre-operative baseline ECG is recommended to" +
        " monitor changes during the peri-operative period and non-invasive stress testing may be considered.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "14",
    "infoText": "<p class=\"text-left\">In addition to suggestions above:</br>Rest echocardiography and biomarkers may be considered for evaluation of LV function and obtaining prognostic information for peri-operative and late cardiac events.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "17",
    "infoText": "An individualized peri-operative management is recommended considering the potential benefit of the proposed surgical procedure compared with the predicted adverse outcome,<br/> and the effect of medical therapy and/or coronary revascularization.",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Balloon angioplasty",
        "eventAction": "20"
    }, {
        "text": "Bare-metal stent",
        "eventAction": "21"
    }, {
        "text": "DES",
        "eventAction": "22"
    }, {
        "text": "CABG",
        "eventAction": "18"
    }]
}, {
    "boxId": "20",
    "infoText": "<p class=\"text-left\">Surgery can be performed &gt;2 weeks after intervention with continuation of aspirin treatment.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "21",
    "infoText": "<p class=\"text-left\">Surgery can be performed &gt;4 weeks after intervention.Dual antiplatelet therapy should be continued for at least 4 weeks.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "22",
    "infoText": "<p class=\"text-left\">Surgery can be performed within 12 months after intervention for old-generation DES and within 6 months for new-generation DES.</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "18"
}, {
    "boxId": "9",
    "infoText": "CT pulmonary angiography<br/>Right heart catheterization +/- Pulmonary angiography",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": false,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
	"staticImageName": "interactive_0000310",
    "referenceText": "<sup>a</sup>Treatment should be initiated optimally between 30 days and at least 2 days before surgery and should be continued postoperatively aiming at target resting heart rate of 60–70 beats per minute and " +
        "systolic blood pressure &gt;100 mmHg. " +
        "</br><sup>b</sup> For strategy of anaesthesia and peri-operative monitoring see appropriate sections",
    "abbreviationText": "",
    "moreInfotext": "",
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
            "text": "<a href=\"ref_ENAS261_11.0.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];