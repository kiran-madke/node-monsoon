var text = [{
    "boxId": "1",
    "infoText": "Patient treatment naive?",
    "boxType": BoxTypes.DECISION_STARTING_POINT,
    "buttons": [{
        "text": "No",
        "eventAction": "3"
    }, {
        "text": "Yes",
        "eventAction": "4"
    }]
}, {
    "boxId": "2",
    "infoText": "Patient remains symptomatic?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "No or tolerable",
        "eventAction": "3"
    }, {
        "text": "Yes",
        "eventAction": "4"
    }]
}, {
    "boxId": "3",
    "infoText": "Double or triple sequential combination therapy (<a href=\"ref_ENAS5081_6.2.3.4.html\">Table 20</a>) <br/>[and consider referral for lung transplantation]",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "4",
    "infoText": "PAH confirmed by expert center",
    "boxType": BoxTypes.CLINICAL_CONDITION_GOING_THROUGH,
    "nextBox": "5"
}, {
    "boxId": "5",
    "infoText": "General measures (<a href=\"ref_ENAS5081_6.2.2.1.html\">Table 15</a>)<br/> Supportive therapy (<a href=\"ref_ENAS5081_6.2.2.2.html\">Table 16</a>)",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "6"

}, {
    "boxId": "6",
    "infoText": "Acute vasoreactivity test <br/>(IPAH/HPAH/DPAH only)",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Non-vasoreactive",
        "eventAction": "7"
    }, {
        "text": "Vasoreactive",
        "eventAction": "8"
    }]
}, {
    "boxId": "7",
    "infoText": "PAH risk assessment",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{
        "text": "Low/intermediate risk<br/>(WHO FC II–III)<sup>a</sup>",
        "eventAction": "9"
    }, {
        "text": "High risk<br/>(WHO FC IV)<sup>a</sup>",
        "eventAction": "10"
    }]
}, {
    "boxId": "8",
    "infoText": "CCB Therapy (<a href=\"ref_ENAS5081_6.2.3.1.html\">Table 17</a>)",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "9",
    "infoText": "Initial monotherapy<sup>b</sup> (<a href=\"ref_ENAS5081_6.2.3.2.html\">Table 18</a>) OR <br/>Initial oral combination<sup>b</sup> (<a href=\"ref_ENAS5081_6.2.3.3.html\">Table 19</a>)",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "11"
}, {
    "boxId": "10",
    "infoText": "Initial combination including i.v. PCA<sup>c</sup> (<a href=\"ref_ENAS5081_6.2.3.3.html\">Table 19</a>)",
    "boxType": BoxTypes.ACTIVITY_GOING_THROUGH,
    "nextBox": "11"
}, {
    "boxId": "11",
    "infoText": "Clinical response adequate (<a href=\"ref_ENAS5081_6.1.3.0.html\">Table 14</a>)?",
    "boxType": BoxTypes.DECISION_GOING_THROUGH,
    "buttons": [{

        "text": "No",
        "eventAction": "12"
    }, {

        "text": "Yes",
        "eventAction": "13"
    }]
}, {
    "boxId": "12",
    "infoText": "Double or triple sequential combination (<a href=\"ref_ENAS5081_6.2.3.4.html\">Table 20</a>) <br/>[and consider referral for lung transplantation]",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "13",
    "infoText": "Continue treatment",
    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
}, {
    "boxId": "998",
    "boxType": BoxTypes.FOOTER,
    "buttonText": "Fu&#223;noten",
    "hasFootnote": true,
    "hasAbbreviation": true,
    "hasPdfButton": true,
    "hasMoreInfoButton": false,
    "staticImageName": "interactive_0000350",
	"referenceText": "<sup>a</sup>Some WHO-FC III patients may be considered high risk (see <a href=\"ref_ENAS5081_6.1.2.0.html\">Table 13</a>)." + "<br /> <sup>b</sup>Initial combination with ambrisentan plus tadalafil has proven to be superior to initial monotherapy with ambrisentan or tadalafil in delaying clinical failure." +
        "<br /> <sup>c</sup>Intravenous epoprostenol should be prioritised as it has reduced the 3 months rate for mortality in high risk PAH patients also as monotherapy." +
        "<br /> <sup>d</sup>Consider also balloon atrial septostomy",
    "abbreviationText": "CCB = calcium channel blockers; DPAH = drug induced PAH; HPAH = heritable PAH;" +
        "IPAH: = idiopathic PAH; i.v. = intravenous; PAH = pulmonary arterial hypertension; PCA = prostacyclin analogues.",
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
            "text": "<a href=\"ref_ENAS5081_6.2.5.0.html\" class=\"more-info-link\">More Information</a>",
            "buttonId": FooterButtons.MORE_INFO_BUTTON
        }]
    }]
}];