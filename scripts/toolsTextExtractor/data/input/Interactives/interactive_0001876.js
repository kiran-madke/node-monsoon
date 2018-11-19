var text =


	[{
		"boxId": "1",
		"infoText": "<p><strong>History taking</strong><br>Onset of symptoms (acute, subacute, chronic, progressive)<br>Medication list (check for vasoactive drugs)<br><strong>First evaluation</strong><br>Basic general examination (heart, lung, abdomen, hydration state)<br>Orthostatic challenge + autonomic function tests<br>Neurological examination</p>",
		"boxType": "activity-starting-point",
		"nextBox": "2"
	}, {
		"boxId": "2",
		"infoText": "<p>Suspected cause based on initial evaluation?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Isolated autonomic failure</p>",
			"eventAction": "3"
		}, {
			"text": "<p>Autonomic failure + peripheral neuropathy</p>",
			"eventAction": "4"
		}, {
			"text": "<p>Autonomic failure + CNS involvement (parkinsonism, ataxia, cognitive impairment)</p>",
			"eventAction": "5"
		}]
	}, {
		"boxId": "3",
		"infoText": "<ul>\n<li>Anti-ganglionic acetylcholine receptor antibodies</li>\n<li>Neoplasm-associated antibodies (anti-Hu)</li>\n<li><sup>123</sup>I-MIBG cardiac SPECT</li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "4",
		"infoText": "<ul>\n<li>Nerve conduction studies</li>\n<li>Labo&shy;ra&shy;tory tests: blood cells count, fasting glucose, Hb1AC, anti SS-A and anti SS-B antibodies, neo&shy;plasm-asso&shy;ciated anti&shy;bodies (anti-Hu, anti-PCA-2, anti-CRMP-5), serum/urinary protein&nbsp; electrophoresis, HIV.</li>\n<li>Punch skin biopsy</li>\n<li>Genetic testing: familial amyloid neuro&shy;pathy, hereditary sensory-autonomic neuro&shy;pathy (in case of positive family history)</li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "5",
		"infoText": "<ul>\n<li>Neuroimaging (MRI)</li>\n<li>Cognitive tests</li>\n<li>DAT scan</li>\n</ul>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasAbbreviation": true,
				"staticImageName": "interactive_0001876",
		"abbreviationText": "<p><sup>123</sup>I-MIBG = <sup>123</sup>I-metaiodobenzylguanidine; CNS = central nervous system; CRMP-5 = collapsin response mediator protein 5; DAT = dopamine active transporter; HbA1c = haemoglobin A1c; HIV = human immunodeficiency virus; MRI = magnetic resonance imaging; PCA-2 = Purkinje cell cytoplasmic autoantibody type 2; SPECT = single-photon emission computed tomography; SS-A = Sjogren&rsquo;s syndrome-associated antigen A; SS-B = Sjogren&rsquo;s syndrome-associated antigen B.</p>",
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
				"text": " <a class='more-info-link' href='ref_ENAS5530_29.7.0.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];