var text =[  
   {  
      "boxId":"1",
      "infoText":"Acute limb ischaemia",
      "boxType":BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
      "nextBox":"2"
   },
   {  
      "boxId":"2",
      "infoText":"Heparin and pain management",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"3"
   },
   {  
      "boxId":"3",
      "infoText":"Which of the following is present?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Vi­able, no neuro­logi­cal defi­cit (Ruther­ford I)",
            "eventAction":"4"
         },
         {  
            "text":"Vi­able with neuro­logi­cal defi­cit (Ruther­ford II)",
            "eventAction":"9"
         },
         {  
            "text":"Ir­revers­ible (Ruther­ford III)",
            "eventAction":"10"
         }
      ]
   },
   {  
      "boxId":"4",
      "infoText":"Initial work-up<br>(DUS, CTA, DSA)",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"5"
   },
   {  
      "boxId":"5",
      "infoText":"Revascularization within hours:<br>(Thrombolysis\/ thrombectomy\/ bypass)",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"6"
   },
   {  
      "boxId":"6",
      "infoText":"Underlying vascular lesion?",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Absent<sup>b<\/sup>",
            "eventAction":"7"
         },
         {  
            "text":"Present",
            "eventAction":"8"
         }
      ]
   },
   {  
      "boxId":"7",
      "infoText":"Medical therapy and follow-up",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"8",
      "infoText":"Endovascular therapy and\/or surgery",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"7"
   },
   {  
      "boxId":"9",
      "infoText":"Urgent<sup>a<\/sup> revascularization:<br>Thrombectomy\/bypass",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"6"
   },
   {  
      "boxId":"10",
      "infoText":"Amputation",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"7"
   },
   {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"<sup>a<\/sup>Imaging should not delay revascularization </br><sup>b<\/sup>Specific etiological work-up is necessary (cardiac, aorta).",
      "hasAbbreviation":true,
      "abbreviationText":"CTA = computed tomography angiography; DSA = digital subtraction ultrasound; DUS = duplex ultrasound.",
      "staticImageName":"interactive_0001441",
      "extraButtons":[  
         {  
            "buttonRow":[  
               {  
                  "text":"Abbreviation(s) and Footnote(s)  ",
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
                  "text":"<a class='more-info-link' href='ref_ENAS5327_11.6.0.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }
];