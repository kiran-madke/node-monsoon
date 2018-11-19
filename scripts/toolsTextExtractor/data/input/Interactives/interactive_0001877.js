var text =


	[{
		"boxId": "1",
		"infoText": "<p>Suspect secondary hypertnsion?</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "2"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "3"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>Follow <a href=\"ref_ENAS5533_5.1.0.0.html\">treatment strategies</a></p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "3",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "4"
	}, {
		"boxId": "4",
		"infoText": "<p>Mostly asymptomatic; muscle weakness (rare)</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "5"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "22"
		}]
	}, {
		"boxId": "5",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "6"
	}, {
		"boxId": "6",
		"infoText": "<p>Snoring; obesity (can be present in non-obese); morning headache; daytime somnolence</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "7"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "23"
		}]
	}, {
		"boxId": "7",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "8"
	}, {
		"boxId": "8",
		"infoText": "<p>Mostly asymptomatic; diabetes; haematuria, proteinuria, nocturia; anaemia, renal mass in adult polycystic CKD</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "9"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "24"
		}]
	}, {
		"boxId": "9",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "10"
	}, {
		"boxId": "10",
		"infoText": "<p>Older; widespread atherosclerosis (especially PAD); diabetes; smoking; recurrent flash pulmonary oedema; abdominal bruit</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "11"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "25"
		}]
	}, {
		"boxId": "11",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "12"
	}, {
		"boxId": "12",
		"infoText": "<p>Younger; more common in women; abdominal bruit</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "13"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "26"
		}]
	}, {
		"boxId": "13",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "14"
	}, {
		"boxId": "14",
		"infoText": "<p>Signs and symptom of hyper- or hypothyroidism</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "15"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "27"
		}]
	}, {
		"boxId": "15",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "16"
	}, {
		"boxId": "16",
		"infoText": "<p>Usually detected in children or adolescence; different BP (&ge;20/10 mmHg) between upper&ndash;lower extremities and/or between right&ndash;left arm and delayed radial-femoral femoral pulsation; low ABI interscapular ejection murmur; rib notching on chest X-ray</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "17"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "28"
		}]
	}, {
		"boxId": "17",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "18"
	}, {
		"boxId": "18",
		"infoText": "<p>Hypercalcaemia, hypophosphatemia</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "19"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "29"
		}]
	}, {
		"boxId": "19",
		"infoText": "<p>Are the following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "20"
	}, {
		"boxId": "20",
		"infoText": "<p>Moon face, central obesity, skin atrophy, striae and bruising; diabetes; chronic steroid use</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "21"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "30"
		}]
	}, {
		"boxId": "21",
		"infoText": "<p>Are following symptoms and signs present?</p>",
		"boxType": "activity-going-through",
		"nextBox": "31"
	}, {
		"boxId": "22",
		"infoText": "<p><strong>Primary aldosteronism possible</strong></p>\n<p>Prevalence in&nbsp;hypertensive patients: 5-15%</p>\n<p>Screening investigations: Plasma aldosterone and renin, and aldosterone: renin ratio; hypokalaemia (in a minority): note hypokalaemia can depress aldosterone levels</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "23",
		"infoText": "<p><strong>Obstructive sleep apnoea possible</strong></p>\n<p>Prevalence in hypertensive patients: 5-10%</p>\n<p>Screening investigations:&nbsp;Epworth score + ambulatory polygraphy</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "24",
		"infoText": "<p><strong>Renal parenchymal&nbsp;disease possible</strong></p>\n<p>Prevalence in hypertensive patients: 2-10%</p>\n<p>Screening investigations:&nbsp;Plasma creatinine and electrolytes, eGFR; urine dipstick for blood and protein, urinary albumin:creatinine ratio; renal ultrasound</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "25",
		"infoText": "<p><strong>Atherosclerotic renovascular disease possible</strong></p>\n<p>Prevalence in hypertensive patients: 1-10%</p>\n<p>Screening investigations:&nbsp;Duplex renal artery Doppler or CT angiography or MR angiography</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "26",
		"infoText": "<p><strong>Fibromuscular dysplasia possible</strong></p>\n<p>Prevalence in hypertensive patients: 1-10%</p>\n<p>Screening investigations:&nbsp;Duplex renal artery Doppler or CT angiography or MR angiography</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "27",
		"infoText": "<p><strong>Thyroid disease (hyper- or hypothyroidism) possible</strong></p>\n<p>Prevalence in hypertensive patients:&nbsp;1&ndash;2%</p>\n<p>Screening investigations:&nbsp;Thyroid function tests</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "28",
		"infoText": "<p><strong>Coarctation of the aorta possible</strong></p>\n<p>Prevalence in hypertensive patients:&nbsp;&lt;1%</p>\n<p>Screening investigations:&nbsp;Echocardiogram</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "29",
		"infoText": "<p><strong>Hyperparathyroidism possible</strong></p>\n<p>Prevalence in hypertensive patients: &lt;1%</p>\n<p>Screening investigations:&nbsp;Parathyroid hormone, Ca<sup>2+</sup></p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "30",
		"infoText": "<p><strong>Cushing&rsquo;s syndrome possible</strong></p>\n<p>Prevalence in hypertensive patients:&nbsp;&lt;1%</p>\n<p>Screening investigations:&nbsp;24-h urinary free cortisol</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "31",
		"infoText": "<p>Episodic symptoms (the 5 &lsquo;Ps&rsquo;): paroxysmal hypertension, pounding headache, perspiration, palpitations, and pallor; labile BP; BP surges precipitated by drugs (e.g. betablockers,&nbsp;metoclopramide, sympathomimetics, opioids, and tricyclic antidepressants)</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>No</p>",
			"eventAction": "32"
		}, {
			"text": "<p>Yes</p>",
			"eventAction": "33"
		}]
	}, {
		"boxId": "32",
		"infoText": "<p>Consider primary hypertension</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "33",
		"infoText": "<p><strong>Phaeochromocytoma possible</strong></p>\n<p>Prevalence in hypertensive patients: &lt;1%</p>\n<p>Screening investigations:&nbsp;Plasma or 24 h urinary fractionated metanephrines</p>",
		"boxType": "clinical-condition-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001877",

		"abbreviationText": "<p>ABI = ankle&ndash;brachial index; BP = blood pressure; CKD = chronic kidney disease; CT = computed tomography; eGFR = estimated glomerular filtration rate; PAD = peripheral artery disease</p>",
		"extraButtons": [{
			"buttonRow": [{
				"text": "Abbreviation(s)",
				"buttonId": "refButton"
			}, {
				"image": "Flip PDF",
				"buttonId": "pdfButton"
			}]
		}, {
			"buttonRow": [{
				"text": "Reset",
				"buttonId": "resetButton"
			}, {
				"text": " <a class='more-info-link' href='ref_ENAS5533_7.3.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];