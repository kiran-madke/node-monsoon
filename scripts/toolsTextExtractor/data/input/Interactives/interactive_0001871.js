var text =


	[{
		"boxId": "1",
		"infoText": "<p>Woman with mechanical valve and HIGH dose VKA or LOW dose VKA?</p>",
		"boxType": "decision-starting-point",
		"buttons": [{
			"text": "<p>High dose VKA</p>",
			"eventAction": "12"
		}, {
			"text": "<p>Low dose VKA</p>",
			"eventAction": "13"
		}]
	}, {
		"boxId": "2",
		"infoText": "<p>Pregnant</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "3"
	}, {
		"boxId": "3",
		"infoText": "<p>Patient's current status?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>1st trimester</p>",
			"eventAction": "4"
		}, {
			"text": "<p>2/3&nbsp;trimester</p>",
			"eventAction": "11"
		}, {
			"text": "<p>36 weeks</p>",
			"eventAction": "6"
		}, {
			"text": "<p>36 hrs before planned delivery</p>",
			"eventAction": "7"
		}, {
			"text": "<p>Delivery</p>",
			"eventAction": "8"
		}]
	}, {
		"boxId": "4",
		"infoText": "<p>&nbsp;</p>\n<p>Select preferred treatment option</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Continue VKA, monitor INR at least 2-weekly (IIb)</p>",
			"eventAction": "5"
		}, {
			"text": "<p>In-hospital change to i.v. UFH aPTT &ge;2x control (IIa)<sup>a</sup></p>",
			"eventAction": "9"
		}, {
			"text": "<p>In-hospital change to LMWH 2-daily, close monitoring (IIa)<sup>a,b</sup></p>",
			"eventAction": "10"
		}]
	}, {
		"boxId": "5",
		"infoText": "<p>2nd/3rd trimester</p>\n<p>Continue VKA, monitor INR at least 2-weekly (IIa)</p>",
		"boxType": "activity-going-through",
		"nextBox": "6"
	}, {
		"boxId": "6",
		"infoText": "<p>36 weeks</p>\n<p>In-hospital change to i.v. UFH aPTT &ge;2x control) (I); or in-hospital change to LMWH 2-daily or continue LMWH, close monitoring<sup>b</sup> (I)</p>",
		"boxType": "activity-going-through",
		"nextBox": "7"
	}, {
		"boxId": "7",
		"infoText": "<p>36 hrs before planned delivery</p>\n<p>i.v. UFH (aPTT &ge;2x control) (I)</p>",
		"boxType": "activity-going-through",
		"nextBox": "8"
	}, {
		"boxId": "8",
		"infoText": "<p>Delivery</p>\n<p>stop UFH 4&ndash;6 hours before delivery and restart 4&ndash;6 hours after delivery if no bleeding</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "9",
		"infoText": "<p>2<sup>nd</sup>/3<sup>rd</sup> trimester</p>\n<p>In-hospital change from LMWH/UFH to VKA (IIa).</p>\n<p>When on target INR monitor INR at least 2-weekly</p>",
		"boxType": "activity-going-through",
		"nextBox": "6"
	}, {
		"boxId": "10",
		"infoText": "<p>For 2<sup>nd</sup>/3<sup>rd</sup> trimester, select preferred treatment option</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>In-hospital change from LMWH/UFH to VKA (IIa).<br>When on target INR monitor INR at least 2-weekly</p>",
			"eventAction": "6"
		}, {
			"text": "<p>Continue LMWH 2-daily close monitoring<br>(IIb)<sup>b</sup></p>",
			"eventAction": "6"
		}]
	}, {
		"boxId": "11",
		"infoText": "<p>Which Tx option was selected at 1st trimester?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Continued VKA, monitor INR at least 2-weekly (IIb)</p>",
			"eventAction": "5"
		}, {
			"text": "<p>In-hospital change to i.v. UFH aPTT &ge;2x control (IIa)<sup>a</sup></p>",
			"eventAction": "9"
		}, {
			"text": "<p>In-hospital change to LMWH 2-daily, close monitoring (IIa)<sup>a,b</sup></p>",
			"eventAction": "10"
		}]
	}, {
		"boxId": "12",
		"infoText": "<p><strong>Woman with mechanical valve and HIGH dose VKA</strong> (warfarin &gt;5 mg/day or phenprocoumon &gt;3 mg/day or acenocoumarol &gt;2 mg/day)<br><strong>who contemplates pregnancy: Pre-pregnancy counselling</strong><br><strong>Continue VKA antagonist until pregnant</strong></p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "2"
	}, {
		"boxId": "13",
		"infoText": "<p>Woman with mechanical valve and LOW dose VKA (warfarin &lt;5 mg/day or phenprocoumon &lt;3 mg/day or acenocoumarol &lt;2 mg/day) who contemplates pregnancy: Pre-pregnancy counselling<br>Continue VKA antagonist until pregnant</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "14"
	}, {
		"boxId": "14",
		"infoText": "<p>Pregnant</p>",
		"boxType": "clinical-condition-going-through",
		"nextBox": "15"
	}, {
		"boxId": "15",
		"infoText": "<p>Patient's current status?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>1st trimester</p>",
			"eventAction": "16"
		}, {
			"text": "<p>2nd/3rd trimester</p>",
			"eventAction": "23"
		}, {
			"text": "<p>36 weeks</p>",
			"eventAction": "18"
		}, {
			"text": "<p>36 hrs before planned delivery</p>",
			"eventAction": "19"
		}, {
			"text": "<p>Delivery</p>",
			"eventAction": "20"
		}]
	}, {
		"boxId": "16",
		"infoText": "<p>Select preferred treatment option</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Continue VKA, monitor INR at least 2-weekly (IIa)</p>",
			"eventAction": "17"
		}, {
			"text": "<p>In-hospital change to LMWH 2-daily, close monitoring (IIb)<sup>a,b</sup></p>",
			"eventAction": "21"
		}, {
			"text": "<p>In-hospital change to i.v. UFH aPTT &ge;2x control (IIb)<sup>a</sup></p>",
			"eventAction": "22"
		}]
	}, {
		"boxId": "17",
		"infoText": "<p>2<sup>nd</sup>/3<sup>rd</sup> trimester</p>\n<p>Continue VKA, monitor INR at least 2-weekly (I)</p>",
		"boxType": "activity-going-through",
		"nextBox": "18"
	}, {
		"boxId": "18",
		"infoText": "<p>36 weeks</p>\n<p>In-hospital (change to) i.v. UFH aPTT &ge;2x control) (I); or in-hospital change to LMWH 2-daily close monitoring<sup>b</sup>&nbsp;(I)&nbsp;&nbsp;</p>",
		"boxType": "activity-going-through",
		"nextBox": "19"
	}, {
		"boxId": "19",
		"infoText": "<p>36 hrs before planned delivery</p>\n<p>i.v. UFH (aPTT &ge;2x control) (I)</p>",
		"boxType": "activity-going-through",
		"nextBox": "20"
	}, {
		"boxId": "20",
		"infoText": "<p>Delivery</p>\n<p>stop UFH 4&ndash;6 hours before delivery and restart 4&ndash;6 hours after delivery if no bleeding</p>",
		"boxType": "activity-exit-box"
	}, {
		"boxId": "21",
		"infoText": "<p>2nd/3rd trimester</p>\n<p>In-hospital change from LMWH to VKA (I).</p>\n<p>When on target INR monitor INR at least 2-weekly</p>",
		"boxType": "activity-going-through",
		"nextBox": "18"
	}, {
		"boxId": "22",
		"infoText": "<p>2nd/3rd trimester</p>\n<p>In-hospital change from UFH to VKA (I).</p>\n<p>When on target INR monitor INR at least 2-weekly</p>",
		"boxType": "activity-going-through",
		"nextBox": "18"
	}, {
		"boxId": "23",
		"infoText": "<p>Which Tx option was selected at 1st trimester?</p>",
		"boxType": "decision-going-through",
		"buttons": [{
			"text": "<p>Continued VKA, monitor INR at least 2-weekly (IIa)</p>",
			"eventAction": "17"
		}, {
			"text": "<p>In-hospital change to LMWH 2-daily, close monitoring (IIb)<sup>a,b</sup></p>",
			"eventAction": "21"
		}, {
			"text": "<p>In-hospital change to i.v. UFH aPTT &ge;2x control (IIb)<sup>a</sup></p>",
			"eventAction": "22"
		}]
	}, {
		"boxId": "998",
		"boxType": "footer",
		"hasFootnote": true,
		"staticImageName": "interactive_0001871",
		"referenceText": "<p><sup>a</sup>Weeks 6&ndash;12&nbsp;</p>\n<p><sup>b</sup>Monitoring LMWH: - starting dose for LMWH is 1 mg/kg body weight for enoxaparin and 100 IU/kg for dalteparin, twice daily subcutaneously; -In-hospital daily anti-Xa levels until target, then weekly (I); -target anti-Xa levels: 1.0&ndash;1.2 U/mL (mitral and right sided valves) or 0.8&ndash;1.2 U/mL (aortic valves) 4&ndash;6 hrs post-dose (I); -pre-dose anti-Xa levels &gt;0.6 U/mL (IIb).</p>",
		"hasAbbreviation": true,
		"abbreviationText": "<p>aPTT = activated partial thromboplastic time; INR, international normalized ratio; i.v. = intravenous; LMWH = low molecular weight heparin; LVEF = left ventricular ejection fraction; UFH = unfractionated heparin; VKA = vitamin K antagonist.</p>",
		"extraButtons": [{
			"buttonRow": [{
				"text": "Abbreviation(s) and Footnote(s)",
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
				"text": " <a class='more-info-link' href='ref_ENAS5531_7.6.2.0.html'>More Information</a>",
				"buttonId": "moreInfoButton"
			}]
		}]
	}];