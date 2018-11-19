var text =[  
   {  
      "boxId":"1",
      "infoText":"Management of antiplatelet therapy in carotid artery stenosis",
      "boxType":BoxTypes.ACTIVITY_STARTING_POINT,
      "nextBox":"2"
   },
   {  
      "boxId":"2",
      "infoText":"Which of the following is applicable?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Asymp­toma­tic",
            "eventAction":"3"
         },
         {  
            "text":"Caro­tid Ar­tery Stent­ing",
            "eventAction":"4"
         },
         {  
            "text":"Caro­tid Surg­ery",
            "eventAction":"5"
         }
      ]
   },
   {  
      "boxId":"3",
      "infoText":"SAPT<sup>a, d <\/sup>(A or C) (<em>Class IIa C</em>)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"4",
      "infoText":"<ul>\n<li>DAPT (A + C) for upto 1 month (<em>Class I A</em>) <\/li>\n<li>SAPT<sup>b, d<\/sup> (A or C) (<em>Class I A</em>)<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"5",
      "infoText":"SAPT<sup>c, d <\/sup>(A or C) (<em>Class I A</em>)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"<sup>a<\/sup>At the exception of patient at very high bleeding risk<br/><sup>b<\/sup>DAPT may be used if another indication supersedes that of carotid artery stenting such as acute coronary syndrome or percutaneous coronary intervention of less than 1 year<br/><sup>c<\/sup>In case of recent minor stroke or TIA. A loading dose of aspirin (300 mg) and\/or clopidogrel (300\/600 mg) is recommended at the acute phase of stroke\/TIA or during CAS<br/><sup>d<\/sup>Stands for as long as it is well tolerated.",
      "hasAbbreviation":true,
      "abbreviationText":"A = Aspirin 75–100 mg\/day; C = Clopidogrel 75 mg\/day; DAPT = dual antiplatelet therapy, a daily combination of aspirin (75–100 mg) and clopidogrel (75 mg); CAS = carotid artery stenting; SAPT = single antiplatelet therapy; TIA = transient ischaemic attack",
      "staticImageName":"interactive_0001442",
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
                  "text":"<a class='more-info-link' href='ref_ENAS5327_6.2.0.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }
];