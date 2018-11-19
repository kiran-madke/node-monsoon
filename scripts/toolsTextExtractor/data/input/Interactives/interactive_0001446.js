var text =[  
   {  
      "boxId":"1",
      "infoText":"Claudication",
      "boxType":BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
      "nextBox":"2"
   },
   {  
      "boxId":"2",
      "infoText":"<ul>\n<li>Assessment of risk factors and medication<\/li>\n<li>Control of the risk factors (smoking, hypertension, dyslipidaemia, diabetes)<\/li>\n<li>Antiplatelet and lipid lowering therapy<\/li>\n<li>Initiation of exercise therapy, preferably supervised<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"3"
   },
   {  
      "boxId":"3",
      "infoText":"Does claudication impact on daily life at the baseline or after exercise therapy?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"4"
         },
         {  
            "text":"Yes",
            "eventAction":"5"
         }
      ]
   },
   {  
      "boxId":"4",
      "infoText":"Exercise, preventive and medical therapies<br/>(Post interventional exercise therapy and risk factor modification)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"5",
      "infoText":"Does patient‘s general condition allow invasive treatment?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"4"
         },
         {  
            "text":"Yes",
            "eventAction":"6"
         }
      ]
   },
   {  
      "boxId":"6",
      "infoText":"Assessment of lower limb arteries",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Aortoiliac lesions",
            "eventAction":"7"
         },
         {  
            "text":"Femoro-popliteal lesions",
            "eventAction":"12"
         },
         {  
            "text":"Isolated crural lesions",
            "eventAction":"4"
         }
      ]
   },
   {  
      "boxId":"7",
      "infoText":"Type of aortoiliac lesions?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Aortoiliac lesions extending to CFA",
            "eventAction":"8"
         },
         {  
            "text":"Isolated iliac lesions not extending down to CFA",
            "eventAction":"9"
         },
         {  
            "text":"Occlusion of the aorta distal to the renal arteries down to iliac level",
            "eventAction":"10"
         }
      ]
   },
   {  
      "boxId":"8",
      "infoText":"Hybrid<br/>(Post interventional exercise therapy and risk factor modification)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"9",
      "infoText":"Endovascular<br/>(Post interventional exercise therapy and risk factor modification)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"10",
      "infoText":"High surgical risk or Young patient, fit for open surgery?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"High surgical risk",
            "eventAction":"9"
         },
         {  
            "text":"Young patient, fit for open surgery",
            "eventAction":"11"
         }
      ]
   },
   {  
      "boxId":"11",
      "infoText":"Open surgery<br/>(Post interventional exercise therapy and risk factor modification)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"12",
      "infoText":"Type of femoro-popliteal lesions?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Stenotic\/occlusive lesions &lt;25cm without prior endovascular procedures",
            "eventAction":"9"
         },
         {  
            "text":"&gt;25cm occlusion, reocclusion of SFA",
            "eventAction":"13"
         },
         {  
            "text":"CFA lesion",
            "eventAction":"14"
         }
      ]
   },
   {  
      "boxId":"13",
      "infoText":"Which of the following is applicable?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Risk of operation elevated or no vein",
            "eventAction":"9"
         },
         {  
            "text":"Risk of operation not elevated, vein material ok",
            "eventAction":"11"
         }
      ]
   },
   {  
      "boxId":"14",
      "infoText":"Hybrid therapy (in case of associated SFA-popliteal stenosis)<br/>(Post interventional exercise therapy and risk factor modification)",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"<sup>a<\/sup>Related to atherosclerotic lower extremity artery disease (LEAD).",
      "hasAbbreviation":true,
      "abbreviationText":"CFA = common femoral artery; SFA = superficial femoral artery.",
      "staticImageName":"interactive_0001446",
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
                  "text":"<a class='more-info-link' href='ref_ENAS5327_11.4.0.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }
];