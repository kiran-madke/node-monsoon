var drugs = [{
        "drugName": "Abciximab",
        "classification": "Monoclonal antibody with antiplatelet effects",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human studies<br>- use only if potential benefit outweighs potential risk <br>Animal data:<br>- no animal reproduction studies"
    },
    {
        "drugName": "ACE inhibitorsᵃ",
        "classification": "ACE inhibitor",
        "fdaCategory": "D",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup> (max 1.6%)",
        "safetyData": "Contra-indicated <br>- renal or tubular dysplasia, oligohydramnios, growth retardation, ossification disorders of skull, lung hypoplasia, contractures, large joints, anaemia, intrauterine fetal death"
    },
    {
        "drugName": "Acenocoumarol",
        "classification": "Vitamin K antagonist",
        "fdaCategory": " D ",
        "permeable": "Yes",
        "fetalDose": "Yes (no adverse effects reported)",
        "safetyData": "Embryopathy (mainly 1st trimester), bleeding (<a href=\"https://academic.oup.com/eurheartj/article-lookup/doi/10.1093/eurheartj/ehy340\">see discussion chapter 5</a>)"
    },
    {
        "drugName": "Acetylsalicylic acid (low dose)",
        "classification": "Antiplatelet drug",
        "fdaCategory": "B",
        "permeable": "Yes ",
        "fetalDose": "Well tolerated",
        "safetyData": "No teratogenic effects<br>- there is insufficient clinical experience regarding the use of doses above 100 mg/day up to 500 mg/day"
    },
    {
        "drugName": "Adenosineᶜ",
        "classification": "Antiarrhythmic",
        "fdaCategory": "C",
        "permeable": "No",
        "fetalDose": "No",
        "safetyData": "No fetal adverse effects reported (limited human data)"
    },
    {
        "drugName": "Alirocumab",
        "classification": "Lipid-lowering drug (monoclonal antibody)",
        "fdaCategory": "-",
        "permeable": "Yes",
        "fetalDose": "Unknown",
        "safetyData": "No human data: not recommended<br>Animal data:<br>- no adverse effects on fetal growth or development in rats and monkeys<br>- maternal toxicity in rats<br>- weaker secondary response to antigen challenge in the offspring of monkeys"
    },
    {
        "drugName": "Aliskiren",
        "classification": "Renin inhibitor",
        "fdaCategory": "D",
        "permeable": "Unknown",
        "fetalDose": "Yes (secreted in rat milk)",
        "safetyData": "No use in 1st trimester; contra-indicated in 2nd and 3rd trimester<br>- see other RAAS blockers<br>Animal data:<br>- no evidence of embryofetal toxicity or teratogenicity at doses up to 600 mg/kg/day in rats or 100 mg/kg/day in rabbits <br>- fertility, pre-natal development and post-natal development were unaffected in rats at doses up to 250 mg/kg/day. The doses in rats and rabbits provided systemic exposures of 1–4x and 5x MRHD"
    },
    {
        "drugName": "Ambrisentan",
        "classification": "Endothelin receptor antagonist",
        "fdaCategory": "X",
        "permeable": "Unknown",
        "fetalDose": "Unknown<br>(contra-indicated during breastfeeding)",
        "safetyData": "Contra-indicated<br>- no human data<br>Animal data: <br> teratogenic in rats (≥ 15 mg/kg/day) and rabbits (≥ 7 mg/kg/day). In both species abnormalities of lower jaw, hard/ soft palate, heart and vascular malformation, thymus and thyroid abnormalities, ossification of the basisphenoid bone, displacement of the umbilical artery"
    },
    {
        "drugName": "Amiloride",
        "classification": "Diuretic (potassium-sparing)",
        "fdaCategory": "B",
        "permeable": "Yes",
        "fetalDose": "Yes<br>(secreted in rat milk)",
        "safetyData": "Inadequate human data<br>Animal data:<br>- no harm to fetus in teratogenicity studies in rabbits (20x RHD) and mice (25x RHD)<br>- no impaired fertility in rats (20x RHD)<br>- decreased rat pup growth and survival (5x or higher RHD)"
    },
    {
        "drugName": "Amiodarone",
        "classification": "Antiarrhythmic<br>(class III)",
        "fdaCategory": "D",
        "permeable": "Yes",
        "fetalDose": "Yes",
        "safetyData": "Thyroid insufficiency (9%), hyperthyroidism, goitre, bradycardia, growth retardation, premature birth"
    },
    {
        "drugName": "Angiotensin receptor blocker (sartans)",
        "classification": "Angiotensin receptor blocker",
        "fdaCategory": "D",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Contra-indicated<br>- renal/ tubular dysplasia, oligohydramnios, growth retardation, ossification disorders of skull, lung hypoplasia, contractures, large joints, anaemia, intrauterine fetal death"
    },
    {
        "drugName": "Penicillin, ampicillin, amoxicillin, erythromycin, mezlocillin, cephalosporins",
        "classification": "Antibiotics",
        "fdaCategory": "B",
        "permeable": "Yes",
        "fetalDose": "Yes",
        "safetyData": "No fetal adverse effects reported"
    },
    {
        "drugName": "Vancomycin, imipenem, rifampicin, teicoplanin",
        "classification": "Antibiotics",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Limited data"
    },
    {
        "drugName": "Aminoglycosides, quinolones tetracyclines",
        "classification": "Antibiotics",
        "fdaCategory": "D",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Fetal risk: use only when benefit outweighs risk"
    },
    {
        "drugName": "Apixaban",
        "classification": "Anticoagulant",
        "fdaCategory": "-",
        "permeable": "Transplacental passage in ex vivo studies of placental transfer",
        "fetalDose": "Extensive secretion into rat milk with the parent drug as the major component",
        "safetyData": "No human data: not recommended <br>Animal data:<br>- no direct/indirect reproductive toxicity in animal studies<br>- no fetal malformation in rodents<br>- increased maternal bleeding incidence in rodents "
    },
    {
        "drugName": "Atenololᵈ",
        "classification": "&#946-blocker (class II)",
        "fdaCategory": "D",
        "permeable": "Yes",
        "fetalDose": "Yes",
        "safetyData": "Hypospadias (1st trimester), birth defects, low birth weight, bradycardia and hypoglycaemia in fetus (2nd and 3rd trimesters)"
    },
    {
        "drugName": "Beraprost",
        "classification": "Prostacyclin analogue",
        "fdaCategory": "- ",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "No human data<br>Animal data:<br>- no lethal or teratogenic effects in rats (< 2.0 mg/kg/day) or rabbits (< 1 mg/kg/day)"
    },
    {
        "drugName": "Bendroflumethiazide",
        "classification": "Diuretic (thiazide)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes",
        "safetyData": "Inadequate human data"
    },
    {
        "drugName": "Bisoprolol",
        "classification": "&#946-blocker (class II)",
        "fdaCategory": "C ",
        "permeable": "Yes",
        "fetalDose": "Yes",
        "safetyData": "Fetal bradycardia and hypoglycaemia"
    },
    {
        "drugName": "Bosentan",
        "classification": "Endothelin receptor antagonist",
        "fdaCategory": "X",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Contra-indicated<br>- no human data<br>Animal data:<br>- teratogenic in rats (≥ 60 mg/kg/day; 2x MRHD), malformations of the head, mouth, face and large blood vessels; increased stillbirths and pup mortality (60/300 mg/kg/day; 2x and 10x MRHD)<br>- no birth defects in rabbits (up to 1500 mg/kg/day)"
    },
    {
        "drugName": "Bumetanide",
        "classification": "Diuretic (loop)",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>Animal data:<br>- in rodents no teratogenicity with oral application<br>- no teratogenic effects with i.v. application (rats/mice: 140x MRHD)<br>- moderate growth retardation and increased incidence of delayed ossification of sternebrae in rats (at 3400x oral MRHD; not seen at 1000x oral MRHD)"
    },
    {
        "drugName": "Cangrelor",
        "classification": "Antiplatelet drug",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "No human data<br>Animal data:<br>- no malformations in rat or rabbit, no teratogenicity <br>- fetal growth retardation in rats (at 5x less than the MRHD)<br>- increased incidence of abortion and intrauterine losses, and fetal growth retardation in rabbits (12x MRHD) "
    },
    {
        "drugName": "Carvedilol",
        "classification": "&#945 / &#946-blocker",
        "fdaCategory": "C",
        "permeable": "Yes<br>(data from rats; no human data available)",
        "fetalDose": "Yes<br>(data in rats, increased, no human data) (increased mortality at 1 week post-partum in neonates from rats treated with 10x MRHD and above from last trimester through day 22 of lactation)",
        "safetyData": "No adequate human data<br>- bradycardia and hypoglycaemia in fetus<br>- use only if potential benefit outweighs potential risk <br>Animal data:<br>- increased post-implantation loss, decrease in fetal body weight, and delayed skeletal development in rats (50 x MRHD). No developmental toxicity in rats at 10x MRHD<br>- increased post-implantation loss in rabbits (25x MRHD). No developmental toxicity in rabbits at 5x MRHD"
    },
    {
        "drugName": "Clopidogrel",
        "classification": "Antiplatelet drug",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Yes (secreted in rat milk)",
        "safetyData": "No adequate human data<br>Animal data:<br>- no impaired fertility or fetotoxicity in rats (65x MRHD) and rabbits (78x MRHD) "
    },
    {
        "drugName": "Colestipol, cholestyramine",
        "classification": "Lipid-lowering drugs",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Yes (lowering fat-soluble vitamins)",
        "safetyData": "May impair absorption of fat-soluble vitamins, e.g. vitamin K -> cerebral bleeding (neonatal)"
    },
    {
        "drugName": "Dabigatran",
        "classification": "Anticoagulant",
        "fdaCategory": "-",
        "permeable": "Transplacental passage in <i>ex vivo<i> studies of placental transfer",
        "fetalDose": "Unknown",
        "safetyData": "No human data<br>Animal data:<br>- female fertility: decrease in implantations/increase in pre-implantation loss (plasma exposure 5-fold higher compared to patients)<br>- decrease in fetal body weight and embryofetal viability in rodents (plasma exposure 5- to 10-fold higher compared to patients)<br>- increased maternal bleeding (vaginal/uterine) in rodents <br>-use not recommend during pregnancy unless clearly necessary"
    },
    {
        "drugName": "Danaparoid",
        "classification": "Anticoagulant",
        "fdaCategory": "B",
        "permeable": "No",
        "fetalDose": "No",
        "safetyData": "Limited human data<br>Animal data:<br>- no impaired fertility or fetotoxicity in rats (8.7x RHD) and rabbits (6x RHD)"
    },
    {
        "drugName": "Digoxinᵉ",
        "classification": "Cardiac glycoside",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Serum levels unreliable, safe"
    },
    {
        "drugName": "Dihydralazine",
        "classification": "Vasodilator",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Yes",
        "safetyData": "Maternal side effects: reflex tachycardia, headache, tachyphylaxis<br>- lupus-like symptoms (maternal/ fetal)"
    },
    {
        "drugName": "Diltiazem",
        "classification": "Calcium-channel blocker (class IV)",
        "fdaCategory": "C",
        "permeable": "No",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "- possible teratogenic effects<br>- use only when benefit outweighs risk <br>Animal data:<br>- embryo and fetal lethality in mice, rats and rabbits (4-6x RHD), and abnormalities of the skeleton, heart, retina, and tongue <br>- mice, rats or rabbits: reductions in early individual pup weights and pup survival, and prolonged delivery and increased incident of stillbirths"
    },
    {
        "drugName": "Disopyramide",
        "classification": "Antiarrhythmic (class IA)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Uterine contractions<br>- use only when benefit outweighs risk<br>Animal data:<br>- no teratogenicity<br>- decreased implantation sites, decreased pup growth and survival (20x RHD) "
    },
    {
        "drugName": "Dronedarone",
        "classification": "Antiarrhythmic (class III)",
        "fdaCategory": "-",
        "permeable": "Yes<br>(data from animals; no human data available)",
        "fetalDose": "Yes<br>(data from animals; no human data available)",
        "safetyData": "Not recommended: limited human data <br>Animal data:<br>- reproductive toxicity (post-implantation losses, reduced fetal and placental weights, and external, visceral and skeletal malformations)"
    },
    {
        "drugName": "Edoxaban",
        "classification": "Anticoagulant",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Animal studies show excretion in breast milk; contra-indicated in breastfeeding",
        "safetyData": "Contra-indicated: <br>- human data: Hokusai-VTE study: 10 cases with exposure in 1st trimester, for up to 6 weeks. Results: 6 live births (4 full term, 2 pre-term), one 1st trimester spontaneous abortion, and 3 elective terminations<br>Animal data:<br>- reproductive toxicity (gallbladder variations, increased post-implantation losses (49–65x MRHD)<br>- vaginal haemorrhage at higher doses in rats/rabbits"
    },
    {
        "drugName": "Enoximone",
        "classification": "Phosphodiesterase inhibitor",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human studies<br>- use only if necessary "
    },
    {
        "drugName": "Eplerenone",
        "classification": "Aldosterone antagonist",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Yes<br>(data from animals; no human data available)",
        "safetyData": "Inadequate human data<br>- should be used during pregnancy only if clearly needed<br>Animal data:<br>- no teratogenic effects in rats or rabbits (exposures up to 32 and 31 times the human AUC); <br>- decreased body weight in maternal rabbits<br>- increased rabbit fetal resorptions and post-implantation loss at the highest administered dose "
    },
    {
        "drugName": "Epoprostenol",
        "classification": "Prostacyclin analogue",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>Animal data:<br>- no impaired fertility or fetal harm in rats (2.5x RHD) and rabbits (4.8x RHD)"
    },
    {
        "drugName": "Evolocumab",
        "classification": "Lipid-lowering drug (monoclonal antibody)",
        "fdaCategory": "-",
        "permeable": "Yes<br>(data in monkeys; no human data available)",
        "fetalDose": "Unknown",
        "safetyData": "- inadequate human data<br>- not recommended<br>Animal data:<br>- no adverse effects on fetal growth or development in monkeys<br>- reduced T-cell dependent antibody response in monkeys immunized with KLH"
    },
    {
        "drugName": "Ezetemibe",
        "classification": "Lipid-lowering drug",
        "fdaCategory": "-",
        "permeable": "Yes<br>(data in rats and rabbits;  no human data available)",
        "fetalDose": "Unknown<br>(increased plasma concentration in nursing rat pups)",
        "safetyData": "Inadequate human data<br>- use only when benefit outweighs risk<br>Animal data:<br>- no evidence of embryolethal effects in rats and rabbits<br>- increased incidence of common fetal skeletal findings in rats (at ~10x the human exposure at 10 mg/day)<br>- increased incidence of extra thoracic ribs in rabbits (at 150x the human exposure at 10 mg/day) <br>- combination with statins in rats and rabbits during organogenesis results in higher ezetimibe and statin exposure"
    },
    {
        "drugName": "Fenofibrate",
        "classification": "Lipid-lowering drug",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes ",
        "safetyData": "Inadequate human data<br>- use only when benefit outweighs risk<br>Animal data: <br>- embryocidal and teratogenic in rats (7–10x MRHD) and embryocidal in rabbits (9x MRHD)<br>- in rats (9x MRHD before and throughout gestation): delayed delivery, increased post-implantation loss, decreased litter size, decreased birth weight, 40% survival of pups at birth, 4% survival of pups as neonates, 0% survival of pups to weaning, increase in spina bifida<br>- increase in fetal gross, visceral and skeletal findings in rats (10x MRHD on day 6–15 of gestation)<br>- delayed delivery, 40% decrease in live births, 75% decrease in neonatal survival, decreased pup weight in rats (7x MRHD from day 15 of gestation through weaning)<br>- abortions in 10–25% of dams (9–18x MRHD), death in 7% of fetuses (18x MRHD)."
    },
    {
        "drugName": "Flecainide",
        "classification": "Antiarrhythmic  (class IC)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Inadequate human data<br>Animal data:<br>- teratogenic effects (e.g. club paws, sternebral and vertebral abnormalities, pale hearts with contracted ventricular septa) and an embryotoxic effect (e.g. increased resorptions) in one breed of rabbit (New Zealand White) but not in another (Dutch Belted) (4x MRHD) <br>- no teratogenic effects in rats or mice (at 50 and 80 mg/kg/day, respectively), but delayed sternebral and vertebral ossification at high dose in rats "
    },
    {
        "drugName": "Fondaparinux",
        "classification": "Anticoagulant",
        "fdaCategory": "-",
        "permeable": "Yes<br>(max 10%) ",
        "fetalDose": "Yes<br>(excreted in rat milk)",
        "safetyData": "Inadequate human data<br>- use only when benefit outweighs risk<br>Animal data:<br>- studies in rats/rabbits: subcutaneous doses up to 10 mg/kg/day in rats (about 32x RHD based on body surface area) and at subcutaneous doses up to 10 mg/kg/day in rabbits (about 65x RHD based on body surface area) revealed no evidence of impaired fertility or harm to the fetus<br>- should not be prescribed to pregnant women unless clearly necessary (<a href=\"https://academic.oup.com/eurheartj/article-lookup/doi/10.1093/eurheartj/ehy340\">see also discussion chapter 11</a>)"
    },
    {
        "drugName": "Furosemide",
        "classification": "Diuretic (loop)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Well tolerated; milk production can be reduced",
        "safetyData": "Oligohydramnios<br>- inadequate human data<br>- use only when benefit outweighs risk<br>- monitoring of fetal growth is recommended<br>Animal data:<br>- unexplained maternal deaths and abortions in rabbits (2, 4 and 8x MRHD) <br>- increased incidence and severity of hydronephrosis in mice and rabbits "
    },
    {
        "drugName": "Gemfibrozil",
        "classification": "Lipid-lowering drug",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Unknown",
        "safetyData": "- inadequate human data<br>Animal data:<br>- rats: increase in stillborns, slight reduction in pup weight, increased skeletal variations and rarely anophthalmia (0.6 and 2x RHD).<br>- rabbits: decreased litter size (1 and 3x RHD) and increased incidence of parietal bone variations (3x RHD) "
    },
    {
        "drugName": "Glyceryl trinitrate",
        "classification": "Nitrate",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Bradycardia, tocolytic<br>Animal data:<br>-  rats and rabbits (with nitroglycerin ointment): no teratogenic effects"
    },
    {
        "drugName": "Heparin (low molecular weight)",
        "classification": "Anticoagulant",
        "fdaCategory": "B",
        "permeable": "No",
        "fetalDose": "No",
        "safetyData": "Long-term use: less osteoporosis and thrombocytopenia than UFH, increased risk of maternal bleeding (<a href=\"https://academic.oup.com/eurheartj/article-lookup/doi/10.1093/eurheartj/ehy340\">see discussion in chapter 3 for use during pregnancy</a>)<br>Human data: retrospective cohort study with 693 live births: no increased risk of major developmental abnormalities<br>Animal data:<br>- rats/rabbits: no evidence of teratogenic effects or fetotoxicity "
    },
    {
        "drugName": "Heparin (unfractionated)",
        "classification": "Anticoagulant",
        "fdaCategory": "B",
        "permeable": "No",
        "fetalDose": "No",
        "safetyData": "- long-term use: less osteoporosis and thrombocytopenia than UFH, increased risk of maternal bleeding (<a href=\"https://academic.oup.com/eurheartj/article-lookup/doi/10.1093/eurheartj/ehy340\">see further discussion in chapter 3 for use during pregnancy</a>)"
    },
    {
        "drugName": "Hydralazine",
        "classification": "Vasodilator",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes (1%)<sup>b</sup>",
        "safetyData": "- maternal side effect: lupus-like symptoms, fetal tachyarrhythmia<br>- <a href=\"https://academic.oup.com/eurheartj/article-lookup/doi/10.1093/eurheartj/ehy340\">see also chapter 10 on hypertensive disorders</a><br>Animal data:<br>- teratogenic in mice (20–30x MRHD) and rabbits (10–15x MRHD): cleft palate, malformations of facial and cranial bones<br>- no teratogenicity in rats"
    },
    {
        "drugName": "Hydrochlorothiazide",
        "classification": "Diuretic (thiazide)",
        "fdaCategory": "B",
        "permeable": "Yes",
        "fetalDose": "Yes; milk production can be reduced",
        "safetyData": "Oligohydramnios<br>- impaired fetal-placental perfusion, fetal and neonatal effects like icterus, disturbance of electrolyte balance and thrombocytopenia "
    },
    {
        "drugName": "Iloprost",
        "classification": "Prostacyclin analogue",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>- use only when benefit outweighs risk<br>Animal data:<br>- rats: shortened digits of the thoracic extremity in fetuses and pups at a dosage of 0.01 mg/kg/day in Han-Wistar rats. These alterations are considered to be haemodynamic alterations in the fetoplacental unit and not teratogenic.<br>No such digital anomalies or other gross structural abnormalities in Sprague-Dawley rats or monkeys. In Sprague-Dawley rats, iloprost clathrate (13% iloprost) significantly increased the number of non-viable fetuses at a maternally toxic oral dosage of 250 mg/kg/day, and in Han-Wistar rats it was found to be embryolethal in 15 of 44 litters at an i.v. dosage of 1 mg/kg/day "
    },
    {
        "drugName": "Indapamide",
        "classification": "Diuretic (thiazide)",
        "fdaCategory": "B",
        "permeable": "Yes",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>- use only when benefit outweighs risk<br>Animal data:<br>-no evidence of impaired fertility or fetal harm in rats, mice, rabbits (6.25x RHD) and unaffected postnatal development in rats and mice "
    },
    {
        "drugName": "Isosorbide dinitrate",
        "classification": "Nitrate",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Bradycardia<br>Animal data:<br>- dose-related increase in embryotoxicity (excess mummified pups) in rabbits at 70 mg/kg (12x MRHD)"
    },
    {
        "drugName": "Isradipine",
        "classification": "Calcium-channel blocker",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>- potential synergism with magnesium sulfate may induce hypotension<br>Animal data:<br>- in rats and rabbits significant reduction in maternal weight gain. No teratogenicity (up to 150x MRHD)"
    },
    {
        "drugName": "Ivabradine",
        "classification": "I<sub>f</sub> - channel blocker",
        "fdaCategory": "- ",
        "permeable": "Yes<br>(transferred to placenta in rats)",
        "fetalDose": "Yes<br>(animal studies show excretion in breast milk; contra-indicated in breastfeeding) ",
        "safetyData": "Inadequate human data<br>- contra-indicated<br>Animal data:<br>- exposure close to therapeutic doses showed a higher incidence of fetal cardiac defects in the rat and a small number of fetuses with ectrodactyly in the rabbit"
    },
    {
        "drugName": "Labetalol",
        "classification": "&#945/&#946-blocker",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "- drug of choice for hypertension<br>- intrauterine growth retardation (2nd,3rd trimester), neonatal bradycardia and hypotension (used near term), hypoglycaemia<br>Animal data:<br>- rats and rabbits (4x or 6x MRHD): no fetal malformations"
    },
    {
        "drugName": "Levosimendan",
        "classification": "Calcium sensitizer",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Yes<br>(animal studies show excretion in breast milk)",
        "safetyData": "Inadequate human data<br>Animal data:<br>- generalized reduction in the degree of ossification in rat and rabbit fetuses with anomalous development of the supraoccipital bone in the rabbit<br>- administration before and during early pregnancy decreased the number of corpora lutea, implantations and pups per litter and increased the number of early resorptions and post-implantation losses in the female rat (effects were seen at clinical exposure levels)"
    },
    {
        "drugName": "Lidocaine",
        "classification": "Antiarrhythmic  (class IB)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Fetal bradycardia, acidosis, central nervous system toxicity<br>Animal data:<br>- reproduction studies in rats (6x RHD): no evidence of harm to the fetus"
    },
    {
        "drugName": "Macitentan",
        "classification": "Endothelin receptor antagonist",
        "fdaCategory": "X",
        "permeable": "Unknown",
        "fetalDose": "Yes<br>(animal studies show excretion in breast milk)",
        "safetyData": "Contra-indicated<br>- no human data<br>Animal data:<br>- teratogenic in rabbits and rats at all doses tested, cardiovascular and mandibular arch fusion abnormalities<br>- reduced pup survival and impairment of reproductive capability of offspring (6x RHD during late pregnancy/lactation)"
    },
    {
        "drugName": "Methyldopa",
        "classification": "Central &#945-agonist",
        "fdaCategory": "B",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Mild neonatal hypotension<br>- no teratogenic effects in recently published prospective observational cohort study (1st trimester exposure, <i>n</i> = 261), but higher risk of preterm birth<sup>389</sup><br>Animal data<br>- mice (16.6x MRHD), rats (1.7x MRHD), rabbits (3.3x MRHD): no evidence of fetal harm"
    },
    {
        "drugName": "Metolazone",
        "classification": "Diuretic (thiazide)",
        "fdaCategory": "B",
        "permeable": "Yes",
        "fetalDose": "Yes",
        "safetyData": "Inadequate human data<br>- use only if clearly needed<br>Animal data:<br>- treatment of male rats prior to mating with untreated females: birth weight of offspring was decreased and the pregnancy rate was reduced in dams mated with males from the 10 and 50 mg/kg groups"
    },
    {
        "drugName": "Metoprolol",
        "classification": "&#946-blocker (class II)",
        "fdaCategory": "C ",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Bradycardia and hypoglycaemia in fetus<br>Animal data:<br>- rats: no evidence of teratogenicity"
    },
    {
        "drugName": "Mexiletine",
        "classification": "Antiarrhythmic  (class IB)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Inadequate human data <br>- fetal bradycardia<br>- use only when benefit outweighs risk<br>Animal data:<br>- rats, mice, rabbits (4x MRHD): no evidence of teratogenicity or impaired fertility but increase in fetal resorption"
    },
    {
        "drugName": "Milrinone",
        "classification": "Phosphodiesterase inhibitor",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>Animal data <br>- in rats/rabbits no teratogenicity after oral or i.v. application"
    },
    {
        "drugName": "Nadolol",
        "classification": "&#946-blocker (class II)",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Yes",
        "safetyData": "Fetal bradycardia and hypoglycaemia<br>Animal data:<br>- evidence of embryo- and fetotoxicity was found in rabbits, but not in rats or hamsters, at doses 5–10x MRHD.<br>No teratogenic potential was observed in any of these species"
    },
    {
        "drugName": "Nesiritide",
        "classification": "Recombinant B-type natriuretic peptide",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>- use only when benefit outweighs risk<br>Animal data:<br>- rabbits (70x RHD): no adverse effects on live births or fetal development"
    },
    {
        "drugName": "Nifedipine",
        "classification": "Calcium-channel blocker",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup> (max 1.8%)",
        "safetyData": "Tocolytic; sublingual application and potential synergism with magnesium sulfate may induce hypotension (mother) and fetal hypoxia<br>- clinical studies: 1st trimester: (<i>n</i> = 34 and <i>n</i> = 76): no teratogenic effects<sup>433, 434</sup> <br>- however, increased perinatal asphyxia, caesarean delivery, prematurity and intrauterine growth retardation<br>Animal data:<br>- rodents, rabbits and monkeys: embryotoxic, placentotoxic, teratogenic and fetotoxic effects: stunted fetuses (rats, mice and rabbits), digital anomalies (rats and rabbits), rib deformities (mice), cleft palate (mice), small placentas and underdeveloped chorionic villi (monkeys), embryonic and fetal deaths (rats, mice and rabbits), prolonged pregnancy (rats; not evaluated in other species), and decreased neonatal survival (rats; not evaluated in other species) "
    },
    {
        "drugName": "Nitroprusside",
        "classification": "Vasodilator",
        "fdaCategory": "C",
        "permeable": "Yes (animal studies in ewes, crosses the placental barrier)",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>- use only if needed<br>Animal data:<br>- no adequate, well-controlled studies <br>- fetal cyanide levels were shown to be dose-related to maternal levels of nitroprusside. In pregnant ewes metabolic transformation led to fatal levels of cyanide in the fetuses. Infusion of 25 µg/kg/min for 1 hour in pregnant ewes resulted in the death of all fetuses, infusion with 1 µg/kg/min for 1 hour delivered normal lambs<br>- effects of administering sodium thiosulfate in pregnancy, either alone or in combination with sodium nitroprusside, are unknown"
    },
    {
        "drugName": "Phenprocoumon ",
        "classification": "Vitamin K antagonist",
        "fdaCategory": " D ",
        "permeable": "Yes",
        "fetalDose": "Yes (max 10%), well tolerated as inactive metabolite",
        "safetyData": "Coumarin embryopathy, bleeding (<a href=\"https://academic.oup.com/eurheartj/article-lookup/doi/10.1093/eurheartj/ehy340\">see discussion in chapter 3 and 5</a>) "
    },
    {
        "drugName": "Prasugrel",
        "classification": "Antiplatelet drug",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Yes (studies in rats have shown excretion in breast milk)",
        "safetyData": "Inadequate human data<br>Animal data:<br>- no malformations in rats and rabbits<br>- at very high dose (> 240x RHD), effects on maternal body weight and/or food consumption, and a slight decrease in offspring body weight (relative to controls) was documented<br>- in pre- and post-natal rat studies (240x RHD), maternal treatment had no effect on the behavioural or reproductive development of the offspring "
    },
    {
        "drugName": "Procainamide",
        "classification": "Antiarrhythmic (class IA)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes",
        "safetyData": "Unknown (limited experience)<br>No animal data"
    },
    {
        "drugName": "Propafenone",
        "classification": "Antiarrhythmic (class IC)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Unknown",
        "safetyData": "Unknown (limited experience)<br>Animal data:<br>- rabbits (3x MRHD) and rats (6x MRHD): embryotoxic (decreased survival)<br>- rats (1x MRHD) increases in maternal deaths, and at 4x MRHD reductions in neonatal survival, body weight gain and physiological development"
    },
    {
        "drugName": "Propranolol",
        "classification": "β-blocker (class II)",
        "fdaCategory": "C ",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Bradycardia and hypoglycaemia in fetus<br>Animal data:<br>- rats (1x MRHD): embryotoxicity (reduced litter size, increased<br>resorption rates) and toxicity (deaths) <br>- rabbits (5x MRHD): no embryo or neonatal toxicity"
    },
    {
        "drugName": "Quinidine",
        "classification": "Antiarrhythmic (class IA)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Thrombocytopenia, premature birth, eighth nerve toxicity"
    },
    {
        "drugName": "Ranolazine",
        "classification": "I<sub>Na</sub>-channel blocker",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>Animal data:<br>- signs of embryonal and maternal toxicity at dose up to 400 mg/kg/day (2–2.7x MRHD) in rats and 150 mg/kg/day (1.5–2x MRHD) in rabbits, misshapen sternebrae and reduced ossification in offspring. These doses in rats and rabbits were associated with an increased maternal mortality rate"
    },
    {
        "drugName": "Riociguat",
        "classification": "Guanylate cyclase stimulator",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Yes (present in rat milk)",
        "safetyData": "Contraindicated<br>Animal data:<br>-rats: teratogenic and embryotoxic, increased rate of cardiac ventricular septal defect at 8x MRHD, increased post-implantation loss at 2x MRHD;<br>rabbits: increased abortions (4x MRHD) and fetal toxicity (13x MRHD) "
    },
    {
        "drugName": "Rivaroxaban",
        "classification": "Anticoagulant",
        "fdaCategory": "-",
        "permeable": "Yes",
        "fetalDose": "Yes (data from animals indicate secretion in milk)",
        "safetyData": "Inadequate human data<br>- contra-indicated<br>Animal data:<br>- in rats: embryofetal toxicity (post-implantation loss, retarded/ progressed ossification, hepatic multiple light coloured spots), increased incidence of common malformations, and placental changes observed at clinically relevant concentrations; maternal haemorrhagic complications<br>- in rabbits: increased incidence of post-implantation pregnancy loss, decreased number of live fetuses, decreased fetal body weight (doses: 4x human exposure of unbound drug)<br>- in pre/postnatal rat studies reduced viability of the offspring at doses toxic to the dams was documented<br>- intrinsic risk of bleeding"
    },
    {
        "drugName": "Sacubitril/valsartan",
        "classification": "Angiotensin receptor neprilysin inhibitor",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Yes (excreted in the milk of lactating rats)",
        "safetyData": "Contra-indicated<br>- can cause fetal harm<br>- sacubitril: inadequate human data<br>Animal data:<br>- rabbits: decreased fetal body weight and skeletal malformations (5.7x MRHD)<br>- rats: no embryofetal toxicity or teratogenicity at 2.2x MRHD<br>- valsartan: renal or tubular dysplasia, oligohydramnion, growth retardation, ossification disorders of skull, lung hypoplasia, contractures, large joints, anaemia, intrauterine fetal death<br>- sacubitril/valsartan: rats/rabbits: increased embryofetal toxicity, low incidence of fetal hydrocephaly with maternally toxic doses, cardiomegaly (rabbits) at maternally non-toxic doses, fetal skeletal variations (rabbits)<br>- adverse embryofetal effects are attributed to ARB"
    },
    {
        "drugName": "Selexipag",
        "classification": "IP-receptor agonist",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>Animal data:<br>- rats: no adverse developmental effects in the fetus up to 47x MRHD. Slight reduction in fetal and maternal body weight at the high dose<br>- rabbits: no adverse developmental effects in the fetus up to 50x MRHD "
    },
    {
        "drugName": "Sildenafil",
        "classification": "Phosphodiesterase type 5 inhibitor",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>Animal data:<br>- no teratogenicity, embryotoxicity or fetotoxicity in rats (20x MRHD) and rabbits (40x MRHD) during organogenesis "
    },
    {
        "drugName": "Sotalol",
        "classification": "Antiarrhythmic (class III)",
        "fdaCategory": "B",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Bradycardia and hypoglycaemia<br>Animal data:<br>no teratogenic potential in rats (9x MRHD) and rabbits (7x MRHD)<br>- rabbits: a high dose of sotalol hydrochloride (6x MRHD) produced a slight increase in fetal death likely due to maternal toxicity<br>- rats (18x MRHD): increased number of early resorptions"
    },
    {
        "drugName": "Spironolactone",
        "classification": "Aldosterone antagonist",
        "fdaCategory": "D",
        "permeable": "Yes",
        "fetalDose": "Yes (1.2%); milk production can be reduced",
        "safetyData": "Antiandrogenic effects, oral clefts (1st trimester)<br>- inadequate human data<br>Animal data:<br>- mice (dose below the MRHD): no teratogenic or other embryotoxic effects<br>- rabbits (dose approximately MRHD): increased rate of resorption and lower number of live fetuses <br>- rats (200 mg/kg/day): feminization of male fetuses. Exposition during late pregnancy (50/100 mg/kg/day) led to dose-dependent decreases in ventral prostate and seminal vesicle weights in males, enlarged ovaries and uteri in females "
    },
    {
        "drugName": "Statinsᶠ",
        "classification": "Lipid-lowering drugName",
        "fdaCategory": "X",
        "permeable": "Yes",
        "fetalDose": "Unknown",
        "safetyData": "Congenital anomalies"
    },
    {
        "drugName": "Tadalafil ",
        "classification": "Phosphodiesterase type 5 inhibitor",
        "fdaCategory": "B",
        "permeable": "Yes (in rats)",
        "fetalDose": "Yes (in rats)",
        "safetyData": "- inadequate human data<br>Animal data:<br>- rats and mice (up to 11x MRHD): no teratogenicity, embryotoxicity or fetotoxicity. One of two studies in rats showed decreased postnatal pup survival (at doses > 10x MRHD)"
    },
    {
        "drugName": "Ticagrelor",
        "classification": "Antiplatelet drug",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Yes (excretion shown in rat milk) ",
        "safetyData": "Inadequate human data<br>- not recommended during pregnancy<br>Animal data:<br>- rats: minor developmental anomalies at maternal toxic doses; rabbits: slight delay in hepatic maturity and skeletal development at maternal non-toxic doses<br>- rats/rabbits: slightly reduced maternal body weight, reduced neonatal viability and birth weight with delayed growth "
    },
    {
        "drugName": "Ticlopidine",
        "classification": "Antiplatelet",
        "fdaCategory": "C",
        "permeable": "Unknown",
        "fetalDose": "Yes (in rats)",
        "safetyData": "- inadequate human data<br>Animal data:<br>- mice (200 mg/kg/day), rats (400 mg/kg/day), and rabbits (up to 100 mg/kg/day): no teratogenic potential"
    },
    {
        "drugName": "Torasemide",
        "classification": "Diuretic (loop)",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>- contraindicated<br>Animal data:<br>- no fetotoxicity or teratogenicity in rats (at 15x human dose of 20 mg/day) or rabbits (at 5x humans dose of 20 mg/day); decrease in average body weight, increase in fetal resorption, delayed fetal ossification at 4x (rabbits) and 5x (rats) higher doses"
    },
    {
        "drugName": "Treprostinil",
        "classification": "Prostacyclin analogue",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>- use only if needed<br>Animal data:<br>- rabbits (subcutaneous) at dose higher than RHD: increased incidence of fetal skeletal variations"
    },
    {
        "drugName": "Triamterene",
        "classification": "Diuretic (potassium-sparing)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes (excretion shown in animal milk)",
        "safetyData": "Inadequate human data<br>Animal data<br>- no fetal harm in rats (at 6x MRHD)"
    },
    {
        "drugName": "Urapidil",
        "classification": "&#945-1 blocker/ 5-HT1A agonist",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data"
    },
    {
        "drugName": "Vardenafil",
        "classification": "Phosphodiesterase type 5 inhibitor",
        "fdaCategory": "B",
        "permeable": "Unknown",
        "fetalDose": "Yes (in rats)",
        "safetyData": "- inadequate human data<br>Animal data:<br>- rats (100x MRHD) and rabbits (20x MRHD): no teratogenicity, embryotoxicity or fetotoxicity. Retarded physical development of pups in rats at 1 (= MRHD) and 8 mg/kg/day"
    },
    {
        "drugName": "Verapamil oral",
        "classification": "Calcium-channel blocker (class IV)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "Well tolerated<br>Animal data:<br>- rabbits (oral, 1.5x RHD): no teratogenicity; rat (oral, 6x RHD): no teratogenicity, but embryocidal, retarded fetal growth and development, and hypotension "
    },
    {
        "drugName": "Verapamil i.v.",
        "classification": "Calcium-channel blocker (class IV)",
        "fdaCategory": "C",
        "permeable": "Yes",
        "fetalDose": "Yes<sup>b</sup>",
        "safetyData": "i.v. use is associated with a greater risk of hypotension and subsequent fetal hypoperfusion<br>- see verapamil oral"
    },
    {
        "drugName": "Vernakalant",
        "classification": "Antiarrhythmic",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Unknown",
        "safetyData": "Inadequate human data<br>Animal data:<br>- rats: malformations (misshapen/absent/fused skull bones including cleft palates, bent radius, bent/misshapen scapula, constricted trachea, absent thyroid, undescended testes) and increased embryofetal lethality at exposure level higher that the single i.v. dose in humans<br>- rabbits: increased number of fused and/or additional sternebrae (at the highest tested dose)"
    },
    {
        "drugName": "Vorapaxar",
        "classification": "Antiplatelet drug",
        "fdaCategory": "-",
        "permeable": "Unknown",
        "fetalDose": "Yes (excretion shown in rat milk)",
        "safetyData": "Inadequate human data<br>Animal data:<br>- rats/rabbits: no defects in embryofetal development (rats: 56x RHD; rabbits 26x RHD)<br>- transient effects on sensory function and neurobehavioural development in pups at 67x RHD<br>- decreased memory in female pups at 31x RHD <br>- pre- and postnatal studies: rat pups had decreased survival and body weight gain (at 67x RHD)"
    },
    {
        "drugName": "Warfarin",
        "classification": "Vitamin K antagonist",
        "fdaCategory": " D ",
        "permeable": "Yes",
        "fetalDose": "Yes (max 10%), well tolerated as inactive metabolite",
        "safetyData": "Coumarin embryopathy, bleeding (see discussion in chapter 3 and 5 for use during pregnancy)"
    }
];