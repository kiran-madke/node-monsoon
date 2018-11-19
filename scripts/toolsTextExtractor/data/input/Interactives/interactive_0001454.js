var scoreData =[  
   {  
      "boxId":"0",
      "toolIdentifier":"interactive_0001454",
      "toolName":"DAPT score (DAPT)(1.0)",
      "toolVersion":"1.0",
      "date":"20170808",
      "headerText":"<b>Time of use:</b>\u00a0After 12 months of uneventful DAPT\u00a0"
   },
   {  
      "boxId":"1",
      "questionText":"<p>Age<\/p>",
      "maxValue":"Max 0",
      "options":[  
         {  
            "text":"<p>\u226575<\/p>",
            "value":"-2"
         },
         {  
            "text":"<p>65 to &lt;75<\/p>",
            "value":"-1"
         },
         {  
            "text":"<p>&lt;65<\/p>",
            "value":"0"
         }
      ]
   },
   {  
      "boxId":"2",
      "questionText":"<p>Cigarette smoking<\/p>",
      "maxValue":"Max 1",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"1"
         }
      ]
   },
   {  
      "boxId":"3",
      "questionText":"<p>Diabetes mellitus<\/p>",
      "maxValue":"Max 1",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"1"
         }
      ]
   },
   {  
      "boxId":"4",
      "questionText":"<p>MI at presentation<\/p>",
      "maxValue":"Max 1",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"1"
         }
      ]
   },
   {  
      "boxId":"5",
      "questionText":"<p>Prior PCI or prior MI<\/p>",
      "maxValue":"Max 1",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"1"
         }
      ]
   },
   {  
      "boxId":"6",
      "questionText":"<p>Paclitaxel-eluting stent<\/p>",
      "maxValue":"Max 1",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"1"
         }
      ]
   },
   {  
      "boxId":"7",
      "questionText":"<p>Stent diameter &lt;3 mm<\/p>",
      "maxValue":"Max 1",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"1"
         }
      ]
   },
   {  
      "boxId":"8",
      "questionText":"<p>CHF or LVEF &lt;30%<\/p>",
      "maxValue":"Max 2",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"2"
         }
      ]
   },
   {  
      "boxId":"9",
      "questionText":"<p>Vein graft stent<\/p>",
      "maxValue":"Max 2",
      "options":[  
         {  
            "text":"<p>No<\/p>",
            "value":"0"
         },
         {  
            "text":"<p>Yes<\/p>",
            "value":"2"
         }
      ]
   },
   {  
      "boxId":"997",
      "boxType":ResultBoxTypes.RESULT_SCORE_BOX,
      "scoreInfotext":"<p>Score (min. 0 - max. 10)<\/p>"
   },
    {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"<p>DAPT duration strategies assessed: Standard DAPT (12 months) vs. Long DAPT (30 months)<\/p><br/><p><sup>a<\/sup>For the PRECISE-DAPT score use the score nomogram: mark patient\u2019s value for each of the five clinical variables of the score and draw a vertical line to the \u2018Point\u2019 axis to determine the number of points obtained for each clinical variable. Than summate the points obtained for each clinical variable to the total score.<\/p><br/><p>A practical case example for score calculation is provided in Web Figure 1 of the Web Addenda (<a href=\"https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines\">www.escardio.org/guidelines</a>).<br>For the DAPT score summate positive points for each value and subtract values for age to the total score.<\/p>",
      "hasAbbreviation":true,
      "abbreviationText":"<p>CHF = congestive heart failure; CrCl = creatinine clearance; DAPT = dual antiplatelet therapy;<br>Hb = haemoglobin; LVEF = left ventricular ejection fraction; MI = myocardial infarction; PCI = percutaneous coronary intervention; PRECISE-DAPT = PREdicting bleeding Complications In patients undergoing Stent implantation and subsEquent Dual Anti Platelet Therapy; WBC = white blood cell count.<\/p>",
      "hasPdfButton":"true",
      "staticImageName":"interactive_0001454",
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
                  "text":"<a class='more-info-link' href='ref_ENAS5326_4.1.0.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }, 
   
  
   
   {  
      "boxId":"999",
      "result":[  
         {  
            "value":"2",
            "operator":">=",
            "inference":"Long DAPT"
         },
         {  
            "value":"2",
            "operator":"<",
            "inference":"Standard DAPT"
         }
      ]
   }
];