var text =[  
   {  
      "boxId":"1",
      "infoText":"LEAD in patients requiring long-term oral anticoagulation",
      "boxType":BoxTypes.ACTIVITY_STARTING_POINT,
      "nextBox":"2"
   },
   {  
      "boxId":"2",
      "infoText":"Which of the following is applicable?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"(A)symp­tom­atic",
            "eventAction":"3"
         },
         {  
            "text":"Sur­gery",
            "eventAction":"3"
         },
         {  
            "text":"Per­cuta­neous inter­vention",
            "eventAction":"4"
         }
      ]
   },
   {  
      "boxId":"3",
      "infoText":"OAC Monotherapy<sup>a, c <\/sup>(O) (<em>Class I</em>)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"4",
      "infoText":"Bleeding risk low or high?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Low<sup>b<\/sup>",
            "eventAction":"5"
         },
         {  
            "text":"High<sup>b<\/sup>",
            "eventAction":"6"
         }
      ]
   },
   {  
      "boxId":"5",
      "infoText":"<ul>\n<li>DAT (O, A or C) (<em>Class IIa</em>) for upto 1 month<\/li>\n<li>DAT<sup>c<\/sup> (O, A or C) (<em>Class IIb</em>)<\/li>\n<li>OAC Monotherapy<sup>a, c<\/sup> (O) (<em>Class IIb</em>)<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"6",
      "infoText":"OAC Monotherapy<sup>a, c <\/sup>(O) (<em>Class IIa</em>)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"<sup>a<\/sup>DAT may be considered in high ischaemic rick patients defined as prior stent thrombosis, acute limb ischaemia on OAC and concomitant CAD (recent ACS, stenting of the last patent coronary artery, multiple coronary vessel disease<br>in diabetic patients with incomplete revascularization).<br><sup>b<\/sup>Compared to the risk for stroke\/CLTI due to stent\/graft occlusion.<br><sup>c<\/sup>Stands for as long as it is well tolerated.",
      "hasAbbreviation":true,
      "abbreviationText":" A = Aspirin 75–100 mg\/day; C = Clopidogrel 75 mg\/day; O = Oral Anticoagulation (VKA or NOACs); ACS = acute coronary syndrome; CAD = coronary artery disease; CLTI = chronic limb-threatening ischaemia; DAT = dual antithrombotic therapy; LEAD = lower extremity artery disease; NOACs = non-vitamin K oral anticoagulants; OAC = oral anticoagulation; VKA = vitamin K antagonist.",
      "staticImageName":"interactive_0001439",
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
                  "text":"<a class='more-info-link' href='ref_ENAS5327_6.4.0.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }
];