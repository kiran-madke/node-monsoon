var text = [{
    "boxId": "1",
    "infoText": "Significant CAD + Ischaemia (&gt;10% myocardium) + OMT",
    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
    "nextBox": "2"
}, {
    "boxId": "2",
    "infoText": "Revascularization possible?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No<sup>a</sup>",
        "eventAction": "3"
    }, {
        "text": "Yes<sup>b</sup>",
        "eventAction": "5"
    }]
}, {
    "boxId": "3",
    "infoText": "Refractory angina<sup>c</sup>",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "4"
}, {
    "boxId": "4",
    "infoText": "Stem cell therapy?<br/>Spinal cord stimulation?<br/>External counterpulsation?<br/>Chronic pain syndrome management?<br/>Drug therapy?",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "5",
    "infoText": "Revascularization successful?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No",
        "eventAction": "3"
    }, {
        "text": "Yes",
        "eventAction": "6"
    }]
}, {
    "boxId": "6",
    "infoText": "<table style=\"width=100%; border-collapse: collapse;\"><tr><td  style=\"border:1px solid; border-collapse: collapse;\">Anatomical factors</td><td  style=\"border:1px solid\">Single; multivessel disease; left main; last patent vessel;" +
        " chronic total occlusion; proximal LAD; syntax score.</td></tr>" +

        "<tr>" +
        "<td  style=\"border:1px solid\">Clinical factors</td><td  style=\"border:1px solid\">Age; gender; diabetes; comorbilities; frailty; LV" +
        " function; tolerance of meds; clinical scores. </td></tr>" +
        "<tr>" +
        "<td  style=\"border:1px solid\">Technical factors</td><td  style=\"border:1px solid\"> Incomplete/complete revascularization; post CABG; post PCI; extensive tortuosity/calcifications.</td></tr>" +
        "<tr>" +
        "<td  style=\"border:1px solid\">Local factors</td><td  style=\"border:1px solid\">Volume/quality of center/operator; patient preference; local cost; availability; waiting lists.</td></tr></table> ",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "7"
}, {
    "boxId": "7",
    "infoText": "<table style=\"width=100%; border-collapse: collapse;\"><col style=\"width:33%\"> <col  style=\"width:33%\"><col  style=\"width:33%\">" +
        "<tr> <td style=\"border:1px solid;border-collapse:collapse;\"><br/>CABG<br/>&nbsp;</td>" +
        "<td  style=\"border:1px solid;border-collapse:collapse;\">hybrid</td>" +
        "<td  style=\"border:1px solid;border-collapse:collapse;\">PCI</td></tr>" +
        "</table>",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
	"staticImageName": "interactive_0000273",
    "referenceText": "<sup>a</sup>Not suitable for revascularization due to anatomy or clinical conditions.<br/><sup>b</sup>Indication of revascularization for prognosis or symptoms(<a href=\"ref_ENAS258_9.4.0.0.html\"> see Table 31</a>).<br/><sup>c</sup>GM: Section 9; refractory angina.",
    "abbreviationText": "CABG = coronary artery bypass graft; CAD= coronary artery disease; LAD = left anterior descending; LV = left ventricular; OMT = optimal medical treatment; PCI = percutaneous coronary intervention.",
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
            "text": "<a href=\"ref_ENAS258_9.3.0.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];