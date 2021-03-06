var text = [{
    "boxId": "1",
    "infoText": "Management of SCAD",
    "boxType": BoxTypes.DECISION_STARTING_POINT,
    "buttons": [{
        "text": "Angina relief",
        "eventAction": "2"
    }, {
        "text": "Event prevention",
        "eventAction": "5"
    }]
}, {
    "boxId": "2",
    "infoText": "",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "1<sup>st</sup> line",
        "eventAction": "3"
    }, {
        "text": "2<sup>nd</sup> line <p class=\"text-normal\">May add or switch (1<sup>st</sup> line for some cases)",
        "eventAction": "4"
    }]
}, {
    "boxId": "3",
    "infoText": "<p class=\"text-normal\">Short-acting Nitrates, <span class=\"italic-text\">plus</span></p><br/><p class=\"list-level1\"><span class=\"bold-text\">Beta-blockers</span> or <span class=\"bold-text\">CCB-heart rate &#8595;</span></p><p class=\"list-level1\">Consider <span class=\"bold-text\">CCB-DHP </span>" +
        "<span class=\"italic-text\">if </span> low heart rate or intolerance/contraindications</p><p class=\"list-level1\">Consider <span class=\"bold-text\"> Beta-blockers + CCB-DHP</span> <span class=\"italic-text\"> if </span> CCS Angina &gt; 2",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "4",
    "infoText": "Ivabradine<br/>Long-acting nitrates<br/>Nicorandil<br/>Ranolazine<sup>a</sup><br/>Trimetazidine<sup>a</sup><br/>+<br/>Consider Angio &#8594; PCI – Stenting or CABG",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "5",
    "infoText": "<p class=\"list-level1\">Lifestyle management</p><p class=\"list-level1\">Control of risk factors<br/>+<br/>Educate the patient</p>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "6"
}, {
    "boxId": "6",
    "infoText": "<p class=\"list-level1\">Aspirine<sup>b</sup></p><p class=\"list-level1\">Statins</p><p class=\"list-level1\">Consider ACEI or ARBs</p>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
	"staticImageName": "interactive_0000307",
    "referenceText": "<sup>a</sup>Data for diabetics.<br/><sup>b</sup>if intolerance, consider clopidogrel.",
    "abbreviationText": "ACEI = angiotensin converting enzyme inhibitor; CABG = coronary artery bypass graft; CCB = calcium channel blockers; CCS = Canadian Cardiovascular Society;" +
        "DHP = dihydropyridine; PCI = percutaneous coronary intervention.",
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
            "text": "<a href=\"ref_ENAS258_8.4.1.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];