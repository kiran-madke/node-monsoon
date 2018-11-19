var text =[  
   {  
      "boxId":"1",
      "infoText":"Recent (&lt;6 months) symptoms of stroke\/TIA",
      "boxType":BoxTypes.DECISION_STARTING_POINT,
      "buttons":[  
         {  
            "text":"NO",
            "eventAction":"2"
         },
         {  
            "text":"YES",
            "eventAction":"7"
         }
      ]
   },
   {  
      "boxId":"2",
      "infoText":"Imaging of carotid artery disease by Duplex ultrasound, CTA and\/or MRA",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Carotid stenosis",
            "eventAction":"3"
         },
         {  
            "text":"Occlusion or near occlusion<sup>a<\/sup>",
            "eventAction":"5"
         }
      ]
   },
   {  
      "boxId":"3",
      "infoText":"60-99% or &lt;60%?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"60-99%",
            "eventAction":"4"
         },
         {  
            "text":"&lt;60%",
            "eventAction":"5"
         }
      ]
   },
   {  
      "boxId":"4",
      "infoText":"Life expectancy &gt;5 yrs? Favourable anatomy? ≥1 feature suggesting higher stroke risk on BMT?<sup>b<\/sup>",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"NO",
            "eventAction":"5"
         },
         {  
            "text":"YES",
            "eventAction":"6"
         }
      ]
   },
   {  
      "boxId":"5",
      "infoText":"BMT (<em>Class I A</em>)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"6",
      "infoText":"<ul>\n<li>CEA + BMT should be considered (<em>Class IIa B</em>)<\/li>\n<li>CAS + BMT may be considered (<em>Class IIb B</em>)<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"7",
      "infoText":"Imaging of carotid artery disease by Duplex ultrasound, CTA and\/or MRA",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Carotid stenosis",
            "eventAction":"8"
         },
         {  
            "text":"Occlusion or near occlusion<sup>a<\/sup>",
            "eventAction":"5"
         }
      ]
   },
   {  
      "boxId":"8",
      "infoText":"&lt;50% or 50-69% or 70-99%?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"&lt;50%",
            "eventAction":"5"
         },
         {  
            "text":"50-69%",
            "eventAction":"6"
         },
         {  
            "text":"70-99%",
            "eventAction":"9"
         }
      ]
   },
   {  
      "boxId":"9",
      "infoText":"<ul>\n<li>CEA + BMT is recommended (<em>Class I A</em>)<\/li>\n<li>CAS + BMT* should be considered if high-risk for CEA<sup>c<\/sup> (<em>Class IIa B</em>) **otherwise may be considered (<em>Class IIb B</em>)<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"<sup>a<\/sup>With post-stenotic internal carotid artery narrowed to the point of near occlusion<br/><sup>b<\/sup>See <a href=\"ref_ENAS5327_7.1.6.0.html\">Table 5</a>.<br/><sup>c<\/sup>Age &gt;80 years, clinically significant cardiac disease, severe pulmonary disease, contralateral internal carotid artery occlusion, contralateral recurrent laryngeal nerve palsy, previous radical neck surgery or radiotherapy and recurrent stenosis after CEA. ",
      "hasAbbreviation":true,
      "abbreviationText":"BMT = best medical therapy; CAS = carotid artery stenting; CEA = carotid endarterectomy; CTA = computed tomography angiography; MRA = magnetic resonance angiography; TIA = transient ischaemic attack.",
      "staticImageName":"interactive_0001444",
      "extraButtons":[  
         {  
            "buttonRow":[  
               {  
                  "text":"Abbreviation(s) and Footnote(s)",
                  "buttonId":FooterButtons.REF_BUTTON
               },
               {  
                  "image":"Flip PDF",
                  "buttonId":FooterButtons.PDF_BUTTON
               }
            ]
         },
         {  
            "buttonRow":[  
               {  
                  "text":"Reset",
                  "buttonId":FooterButtons.RESET_BUTTON
               },
               {  
                  "text":"<a class='more-info-link' href='ref_ENAS5327_7.1.5.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }
];