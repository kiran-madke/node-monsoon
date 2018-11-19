﻿var text =[  
   {  
      "boxId":"1",
      "infoText":"Management of clinically significant mitral stenosis (MVA &lt;1.5 cm<sup>2<\/sup>)",
      "boxType":BoxTypes.ACTIVITY_STARTING_POINT,
      "nextBox":"2"
   },
   {  
      "boxId":"2",
      "infoText":"Symptoms",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"3"
         },
         {  
            "text":"Yes",
            "eventAction":"10"
         }
      ]
   },
   {  
      "boxId":"3",
      "infoText":"High risk of embolism or haemodynamic decompensation<sup>a<\/sup>",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"4"
         },
         {  
            "text":"Yes",
            "eventAction":"7"
         }
      ]
   },
   {  
      "boxId":"4",
      "infoText":"Exercise testing",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"5"
   },
   {  
      "boxId":"5",
      "infoText":"Symptoms",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"6"
         },
         {  
            "text":"Yes",
            "eventAction":"7"
         }
      ]
   },
   {  
      "boxId":"6",
      "infoText":"Follow-up",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"7",
      "infoText":"CI to or unfavourable characteristics for PMC",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"8"
         },
         {  
            "text":"Yes",
            "eventAction":"9"
         }
      ]
   },
   {  
      "boxId":"8",
      "infoText":"PMC",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"9",
      "infoText":"Surgery<sup>d<\/sup>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"10",
      "infoText":"CI to PMC",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"11"
         },
         {  
            "text":"Yes",
            "eventAction":"16"
         }
      ]
   },
   {  
      "boxId":"11",
      "infoText":"CI or high risk for surgery",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"12"
         },
         {  
            "text":"Yes",
            "eventAction":"15"
         }
      ]
   },
   {  
      "boxId":"12",
      "infoText":"Favourable anatomical characteristics<sup>c<\/sup>",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"13"
         },
         {  
            "text":"Yes",
            "eventAction":"15"
         }
      ]
   },
   {  
      "boxId":"13",
      "infoText":"Favourable clinical characteristics<sup>c<\/sup>",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"No",
            "eventAction":"14"
         },
         {  
            "text":"Yes",
            "eventAction":"15"
         }
      ]
   },
   {  
      "boxId":"14",
      "infoText":"Surgery",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"15",
      "infoText":"PMC<sup>b<\/sup>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"16",
      "infoText":"Surgery",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"<sup>a<\/sup>High thromboembolic risk: history of systemic embolism, dense spontaneous contrast in the left atrium, newonset atrial fibrillation. High-risk of haemodynamic decompensation: systolic pulmonary pressure &gt;50 mmHg at rest, need for major non-cardiac surgery, desire for pregnancy<br/><sup>b<\/sup>Surgical commissurotomy may be considered by experienced surgical teams or in patients with contra-indications to PMC<br/><sup>c<\/sup>See <a href=\"ref_ENAS5328_8.3.1.0.html\">table of recommendations on indications for PMC and mitral valve surgery in clinically significant mitral stenosis</a> in section 7.2<br/><sup>d<\/sup>Surgery if symptoms occur for a low level of exercise and operative risk is low.",
      "hasAbbreviation":true,
      "abbreviationText":"CI = contra-indication; MS = mitral stenosis; PMC = percutaneous mitral commissurotomy.",
      "staticImageName":"interactive_0001438",
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
                  "text":"<a class='more-info-link' href='ref_ENAS5328_8.3.2.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }
];