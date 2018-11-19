var text = [
	{
	    "boxId": "1",
	    "infoText": "NSTE-ACS patients with non-valvular atrial fibrillation",
	    "boxType": BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
	    "nextBox": "2"
	},
	{
	    "boxId": "2",
	    "infoText": "Medically managed/ CABG or PCI?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "PCI",
			    "eventAction": "3"
			},
			{
			    "text": "Medically managed/ CABG",
			    "eventAction": "6"
			}
	    ]
	},
	{
	    "boxId": "3",
	    "infoText": "High or low to intermediate bleeding risk?",
	    "boxType": BoxTypes.DECISION_GOING_THROUGH,
	    "buttons": [
			{
			    "text": "Low to intermediate<br/>(e.g. HAS-BLED = 0–2)",
			    "eventAction": "4"
			},
			{
			    "text": "High <br/>(e.g. HAS-BLED &ge;3)",
			    "eventAction": "5"
			}
	    ]
	},
	{
	    "boxId": "4",
	    "infoText": "Triple therapy (O, A, and C) for up to 6 months<br/>Dual therapy<sup>b</sup> (O) and (C or A) for up to 12 months<br/>Lifelong monotherapy<sup>c</sup> (O)",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "5",
	    "infoText": "Triple or dual therapy<sup>a</sup> (O, A, and C) for up to 4 weeks followed by <br/>Dual therapy<sup>b</sup> (O) and (C or A) for up to 12 months<br/>Lifelong monotherapy<sup>c</sup> (O)",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "6",
	    "infoText": "Dual therapy<sup>b</sup> (O) and (C or A) for 12 months and Lifelong monotherapy<sup>c</sup> (O)",
	    "boxType": BoxTypes.ACTIVITY_EXIT_BOX
	},
	{
	    "boxId": "998",
	    "boxType": BoxTypes.FOOTER,
	    "buttonText": "",
	    "hasFootnote": true,
	    "hasAbbreviation": true,
	    "hasPdfButton": true,
	    "hasMoreInfoButton": true,
	"staticImageName": "interactive_0000337",
	    "referenceText": "<sup>a</sup>Dual therapy with oral anticoagulation and clopidogrel may be considered in selected patients (low ischaemic risk). <br /> <sup>b</sup>Aspirin as an alternative to clopidogrel may be considered in patients on dual therapy (i.e. oral anticoagulation plus single antiplatelet); triple therapy may be considered up to 12 months in very selected patients at high risk of ischaemic events (e.g. prior stent thrombosis on adequate antiplatelet therapy, stenting in the left main or last remaining patent coronary artery, multiple stenting in proximal coronary segments, two stents bifurcation treatment, or diffuse multivessel disease, especially in diabetic patients). <br /> <sup>c</sup>Dual therapy with oral anticoagulation and an antiplatelet agent (aspirin or clopidogrel) beyond one year may be considered in patients at very high risk of coronary events. In patients undergoing coronary stenting, dual antiplatelet therapy may be an alternative to triple or dual therapy if the CHA2DS2-VASc score is 1 (males) or 2 (females). <br /> O: Oral anticoagulation (VKA or NOACs) <br /> A: Aspirin 75-100 mg daily <br /> C: Clopidogrel 75 mg daily",
	    "abbreviationText": "CABG = coronary artery bypass graft; DAPT = dual antiplatelet therapy; NOACs = non-vitamin K antagonist oral anticoagulant; PCI = percuteanous coronary intervention; VKAs = vitamin K antagonists. (Adapted from Lip et al. Eur Heart J 2014;35:3155-3179).",
	    "moreInfotext": "",
	    "resetButtonText": "",
	    "extraButtons": [
			{
			    buttonRow: [
                    {
                        "text": "Abbreviation(s) and Footnote(s)",
                        "buttonId": FooterButtons.REF_BUTTON
                    },
					{
					    "image": "Flip PDF",
					    "buttonId": FooterButtons.PDF_BUTTON
					}
			    ]
			},
			{
			    buttonRow: [
					{
					    "text": "Reset",
					    "buttonId": FooterButtons.RESET_BUTTON
					},
					{
					    "text": "<a href=\"ref_ENAS5080_5.4.2.0.html\" class=\"more-info-link\">More Information</a>",
					    "buttonId": FooterButtons.MORE_INFO_BUTTON
					}
			    ]
			}
	    ]
	}
];