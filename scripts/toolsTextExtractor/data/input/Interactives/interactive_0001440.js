var text =[  
   {  
      "boxId":"1",
      "infoText":"Bleeding during treatment with dual antiplatelet therapy ± OAC",
      "boxType":BoxTypes.CLINICAL_CONDITION_STARTING_POINT,
      "nextBox":"2"
   },
   {  
      "boxId":"2",
      "infoText":"Bleeding type",
      "boxType":BoxTypes.DECISION_GOING_THROUGH,
      "buttons":[  
         {  
            "text":"Tri­vial\n ",
            "eventAction":"8"
         },
         {  
            "text":"Mild",
            "eventAction":"9"
         },
         {  
            "text":"Mod­er­ate",
            "eventAction":"10"
         },
         {  
            "text":"Sev­ere",
            "eventAction":"11"
         },
         {  
            "text":"Life­-threat­en­ing",
            "eventAction":"12"
         }
      ]
   },
   {  
      "boxId":"3",
      "infoText":"<strong>DAPT management:</strong>\n<ul>\n<li>Continue DAPT <\/li>\n<\/ul>\n<strong>OAC management:</strong>\n<ul>\n<li>Consider OAC continuation or skip one single next pill<\/li>\n<\/ul>\n<strong>General recommendations:</strong>\n<ul>\n<li>Reassure the patient<\/li>\n<li>Identify and discuss with the patient possible preventive strategies<\/li>\n<li>Counsel patient on the importance of drug-adherence<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"4",
      "infoText":"<strong>DAPT management:</strong>\n<ul>\n<li>Continue DAPT<\/li>\n<li>Consider shortening DAPT duration or switching to less potent P2Y<sub>12 <\/sub>inhibitor (i.e. from ticagrelor\/prasugrel to clopidogrel), especially if recurrent bleeding occurs<\/li>\n<\/ul>\n<strong>OAC management:</strong>\n<ul>\n<li>In case of triple therapy consider downgrading to dual therapy, preferably with clopidogrel and OAC<\/li>\n<\/ul>\n<strong>General recommendations:</strong>\n<ul>\n<li>Identify and possibly treat concomitant conditions associated with bleeding (e.g. peptic ulcer, haemorrhoidal plexus, neoplasm)<\/li>\n<li>Add PPI if not previously implemented<\/li>\n<li>Counsel patient on the importance of drug-adherence<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"5",
      "infoText":"<strong>DAPT management:</strong>\n<ul>\n<li>Consider stopping DAPT and continue with SAPT, preferably with the P2Y<sub>12<\/sub> inhibitor especially in case of upper GI bleeding<\/li>\n<li>Reinitiate DAPT as soon as deemed safe<\/li>\n<li>Consider shortening DAPT duration or switching to less potent P2Y<sub>12<\/sub> inhibitor (i.e. from ticagrelor\/prasugrel to clopidogrel), especially if recurrent bleeding occurs<\/li>\n<\/ul>\n<strong>OAC management:</strong>\n<ul>\n<li>Consider OAC discontinuation or even reversal until bleeding is controlled, unless very high thrombotic risk (i.e. mechanical heart valves, cardiac assist device, CHA<sub>2<\/sub>DS<sub>2<\/sub>-VASc ≥4)<\/li>\n<li>Reinitiate treatment within one week if clinically indicated. For Vitamin-K antagonist consider a target INR of 2.0–2.5 unless overriding indication (i.e. mechanical heart valves or cardiac assist device) for NOAC consider the lowest effective dose<\/li>\n<li>In case of triple therapy consider downgrading to dual therapy, preferably with clopidogrel and OAC<\/li>\n<li>If patients on dual therapy, consider stopping antiplatelet therapy if deemed safe<\/li>\n<\/ul>\n<strong>General recommendations:</strong>\n<ul>\n<li>Consider i.v. PPI if GI bleeding occurred<\/li>\n<li>Identify and possibly treat concomitant conditions associated with bleeding (e.g. peptic ulcer, haemorrhoidal plexus, neoplasm)<\/li>\n<li>Counsel patient on the importance of drug-adherence<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"6",
      "infoText":"<strong>DAPT management:</strong>\n<ul>\n<li>Consider stopping DAPT and continue with SAPT, preferably with the P2Y<sub>12<\/sub> inhibitor especially in case of upper GI bleeding<\/li>\n<li>If bleeding persists despite treatment or treatment is not possible, consider stopping all antithrombotic medications<\/li>\n<li>Once bleeding has ceased, re-evaluate the need for DAPT or SAPT, preferably with the P2Y<sub>12<\/sub> inhibitor especially in case of upper GI bleeding<\/li>\n<li>If DAPT is re-started, consider shortening DAPT duration or switching to less potent P2Y<sub>12<\/sub> inhibitor (i.e. from ticagrelor\/prasugrel to clopidogrel), especially if recurrent bleeding occurs<\/li>\n<\/ul>\n<strong>OAC management:</strong>\n<ul>\n<li>Consider stopping and reversing OAC until bleeding is controlled unless prohibitive thrombotic risk (i.e. mechanical heart valve in mitral position, cardiac assist device)<\/li>\n<li>Reinitiate treatment within one week if clinically indicated. For vitamin-K antagonists consider a target INR of 2.0-2.5 unless overriding indication (i.e. mechanical heart valves or cardiac assist device) for NOAC consider the lowest effective dose<\/li>\n<li>If patient on triple therapy consider downgrading to dual therapy with clopidogrel and OAC. If patients on dual therapy, consider stopping antiplatelet therapy if deemed safe<\/li>\n<\/ul>\n<strong>General recommendations:</strong>\n<ul>\n<li>Consider i.v. PPI if GI bleeding occurred<\/li>\n<li>RBC transfusion if HB &lt;7-8 g\/dL<\/li>\n<li>Consider platelet transfusion<\/li>\n<li>Urgent surgical or endoscopic treatment of bleeding source if deemed possible<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"7",
      "infoText":"<strong>DAPT management:</strong>\n<ul>\n<li>Immediately discontinue all antithrombotic medications<\/li>\n<li>Once bleeding has ceased, re-evaluate the need for DAPT or SAPT, preferably with the P2Y<sub>12<\/sub> inhibitor especially in case of upper GI bleeding<\/li>\n<\/ul>\n<strong>OAC management:</strong>\n<ul>\n<li>Stop and reverse OAC<\/li>\n<\/ul>\n<strong>General recommendations:</strong>\n<ul>\n<li>Fluid replacement if hypotension<\/li>\n<li>Consider RBC transfusion irrespective of HB values<\/li>\n<li>Platelet transfusion<\/li>\n<li>Consider i.v. PPI if GI bleeding occurred<\/li>\n<li>Urgent surgical or endoscopic treatment of bleeding source if deemed possible<\/li>\n<\/ul>",
      "boxType":BoxTypes.ACTIVITY_EXIT_BOX
   },
   {  
      "boxId":"8",
      "infoText":"Any bleeding not requiring medical intervention or further evaluation<br>e.g. skin bruising or ecchimosis, self-resolving epistaxis, minimal conjunctival bleeding",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"3"
   },
   {  
      "boxId":"9",
      "infoText":"Any bleeding that requires medical attention without requiring hospitalization<br>e.g. not self resolving epistaxis, moderate conjunctival bleeding, genitourinary or upper\/lower gastrointestinal bleeding without significant blood loss, mild haemoptysis",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"4"
   },
   {  
      "boxId":"10",
      "infoText":"Any bleeding associated with a significant blood loss (&gt;3 g\/dL HB) and\/or requiring hospitalization, which is haemodynamicallystable and not rapidly evolving<br>e.g. genitourinary, respiratory or upper\/lower gastrointestinal bleeding with significant blood loss or requiring transfusion",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"5"
   },
   {  
      "boxId":"11",
      "infoText":"Any bleeding requiring hospitalisation, associated with a severe blood loss (&gt;5 g\/dL HB) which is haemodynamically stable and not rapidly evolving<br>e.g. severe genitourinary, respiratory or upper\/lower gastrointestinal bleeding",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"6"
   },
   {  
      "boxId":"12",
      "infoText":"Any severe active bleeding putting patient’s life immediately at risk<br>e.g. massive overt genitourinary, respiratory or upper\/lower gastrointestinal bleeding, active intracranial, spinal or intraocular haemorrhage, or any bleeding causing haemodynamic instability",
      "boxType":BoxTypes.ACTIVITY_GOING_THROUGH,
      "nextBox":"7"
   },
   {  
      "boxId":"998",
      "boxType":BoxTypes.FOOTER,
      "hasFootnote":true,
      "referenceText":"Blue boxes refer to management of antiplatelet therapy. Dark-red boxes refer to the management of oral anticoagulation. Light-green boxes refer to general recommendation for patients’ safety.",
      "hasAbbreviation":true,
      "abbreviationText":"ACS = acute coronary syndrome; CHA2DS2-VASc= cardiac failure, hypertension, age ≥ 75 (2 points), diabetes, stroke (2 points)–vascular disease, age 65–74, sex category; DAPT = dual antiplatelet therapy; GI = gastrointestinal; HB = haemoglobin; INR = international normalized ratio; i.v. = intravenous; OAC = oral anticoagulant; NOAC = non-vitamin-K antagonist; PPI = proton pump inhibitor; RBC = red blood cell; SAPT = single antiplatelet therapy.",
      "staticImageName":"interactive_0001440",
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
                  "text":"<a class='more-info-link' href='ref_ENAS5326_10.2.0.0.html'>More Information</a>",
                  "buttonId":FooterButtons.MORE_INFO_BUTTON
               }
            ]
         }
      ]
   }
];