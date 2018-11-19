/**
 * Object for maintaining the tools result
 */
var resultArray = {};

function getToolResult() {
    // initialize the interactiveName
    resultArray.interactive_name = "";
    // initialize the inputArray
    resultArray.input = [];
    // initialize the outputArray
    resultArray.output = [];

    if (document.getElementById("r1_28").checked == true) {
        resultArray.input.push("BP (mmHg): DBP");
    } else if (document.getElementById("r1_27").checked == true) {
        resultArray.input.push("BP (mmHg): SBP");
    } else {
        resultArray.input.push("BP (mmHg): -");
    }

    if (document.getElementById("r1_28").checked == true) {
        var drop = document.getElementById("gc1");
        resultArray.input.push("BP (mmHg): " + drop.options[drop.selectedIndex].innerText);
    }

    if (document.getElementById("r1_27").checked == true) {
        var drop1 = document.getElementById("gc");
        resultArray.input.push("BP (mmHg): " + drop1.options[drop1.selectedIndex].innerText);
    }

    if (document.getElementById("r1_1").checked == true) {
        resultArray.input.push("Gender: Female");
    } else if (document.getElementById("r1_2").checked == true) {
        resultArray.input.push("Gender: Male");
    } else {
        resultArray.input.push("Gender: -");
    }

    if (document.getElementById("r2_1").checked == true) {
        resultArray.input.push("Age (men &ge;55 years; women &ge;65 years): Yes");
    } else if (document.getElementById("r2_2").checked == true) {
        resultArray.input.push("Age (men &ge;55 years; women &ge;65 years): No");
    } else {
        resultArray.input.push("Age (men &ge;55 years; women &ge;65 years): -");
    }

    if (document.getElementById("r3_1").checked == true) {
        resultArray.input.push("Smoking: Yes");
    } else if (document.getElementById("r3_2").checked == true) {
        resultArray.input.push("Smoking: No");
    } else {
        resultArray.input.push("Smoking: -");
    }

    if (document.getElementById("r4_1").checked == true) {
        resultArray.input.push("Dyslipidaemia<sup>a</sup>: Yes");
    } else if (document.getElementById("r4_2").checked == true) {
        resultArray.input.push("Dyslipidaemia<sup>a</sup>: No");
    } else {
        resultArray.input.push("Dyslipidaemia<sup>a</sup>: -");
    }

    if (document.getElementById("r7_1").checked == true) {
        resultArray.input.push("Obesity [BMI &ge;30 kg/m<sup>2</sup> (height<sup>2</sup>)]: Yes");
    } else if (document.getElementById("r7_2").checked == true) {
        resultArray.input.push("Obesity [BMI &ge;30 kg/m<sup>2</sup> (height<sup>2</sup>)]: No");
    } else {
        resultArray.input.push("Obesity [BMI &ge;30 kg/m<sup>2</sup> (height<sup>2</sup>)]: -");
    }

    if (document.getElementById("r8_1").checked == true) {
        resultArray.input.push("Abdominal obesity (Waist circumference: men &ge;102 cm; women &ge;88 cm) (in Caucasians): Yes");
    } else if (document.getElementById("r8_2").checked == true) {
        resultArray.input.push("Abdominal obesity (Waist circumference: men &ge;102 cm; women &ge;88 cm) (in Caucasians): No");
    } else {
        resultArray.input.push("Abdominal obesity (Waist circumference: men &ge;102 cm; women &ge;88 cm) (in Caucasians): -");
    }

    if (document.getElementById("r9_1").checked == true) {
        resultArray.input.push("Family history of premature CVD (men aged &lt;55 years; women aged &lt;65 years): Yes");
    } else if (document.getElementById("r9_2").checked == true) {
        resultArray.input.push("Family history of premature CVD (men aged &lt;55 years; women aged &lt;65 years): No");
    } else {
        resultArray.input.push("Family history of premature CVD (men aged &lt;55 years; women aged &lt;65 years): -");
    }

    if (document.getElementById("b1_1").checked == true) {
        resultArray.input.push("Asymptomatic organ damage: Yes");

        if (document.getElementById("r10_1").checked == true) {
            resultArray.input.push("Pulse pressure ≥60 mmHg (in the elderly): Yes");
        } else if (document.getElementById("r10_2").checked == true) {
            resultArray.input.push("Pulse pressure ≥60 mmHg (in the elderly): No");
        } else {
            resultArray.input.push("Pulse pressure ≥60 mmHg (in the elderly): -");
        }

        if (document.getElementById("r11_1").checked == true) {
            resultArray.input.push("Electrocardiographic LVH (Sokolow-Lyon index >3.5 mV; RaVL >1.1 mV; Cornell voltage duration product >244 mV<sup>*</sup>ms): Yes");
        } else if (document.getElementById("r11_2").checked == true) {
            resultArray.input.push("Electrocardiographic LVH (Sokolow-Lyon index >3.5 mV; RaVL >1.1 mV; Cornell voltage duration product >244 mV<sup>*</sup>ms): No/Unknown");
        } else {
            resultArray.input.push("Electrocardiographic LVH (Sokolow-Lyon index >3.5 mV; RaVL >1.1 mV; Cornell voltage duration product >244 mV<sup>*</sup>ms): -");
        }

        if (document.getElementById("r12_1").checked == true) {
            resultArray.input.push("Echocardiographic LVH [LVM index: men >115 g/m<sup>2</sup> ; women >95 g/m<sup>2</sup> (BSA)]: Yes");
        } else if (document.getElementById("r12_2").checked == true) {
            resultArray.input.push("Echocardiographic LVH [LVM index: men >115 g/m<sup>2</sup> ; women >95 g/m<sup>2</sup> (BSA)]: No/Unknown");
        } else {
            resultArray.input.push("Echocardiographic LVH [LVM index: men >115 g/m<sup>2</sup> ; women >95 g/m<sup>2</sup> (BSA)]: -");
        }

        if (document.getElementById("r13_1").checked == true) {
            resultArray.input.push("Carotid wall thickening (IMT >0.9 mm) or plaque: Yes");
        } else if (document.getElementById("r13_2").checked == true) {
            resultArray.input.push("Carotid wall thickening (IMT >0.9 mm) or plaque: No/Unknown");
        } else {
            resultArray.input.push("Carotid wall thickening (IMT >0.9 mm) or plaque: -");
        }

        if (document.getElementById("r14_1").checked == true) {
            resultArray.input.push("Carotid-femoral PWV >10 m/s: Yes");
        } else if (document.getElementById("r14_2").checked == true) {
            resultArray.input.push("Carotid-femoral PWV >10 m/s: No/unknown");
        } else {
            resultArray.input.push("Carotid-femoral PWV >10 m/s: -");
        }

        if (document.getElementById("r15_1").checked == true) {
            resultArray.input.push("Ankle-brachial index <0.9: Yes");
        } else if (document.getElementById("r15_2").checked == true) {
            resultArray.input.push("Ankle-brachial index <0.9: No/Unknown");
        } else {
            resultArray.input.push("Ankle-brachial index <0.9: -");
        }

        if (document.getElementById("r16_1").checked == true) {
            resultArray.input.push("CKD with eGFR 30-60 mL/min/1.73 m<sup>2</sup> (BSA): Yes");
        } else if (document.getElementById("r16_2").checked == true) {
            resultArray.input.push("CKD with eGFR 30-60 mL/min/1.73 m<sup>2</sup> (BSA): No");
        } else {
            resultArray.input.push("CKD with eGFR 30-60 mL/min/1.73 m<sup>2</sup> (BSA): -");
        }

        if (document.getElementById("r17_1").checked == true) {
            resultArray.input.push("Microalbuminuria (30-300 mg/24 h), or albumin creatinine ratio (30-300 mg/g; 3.4-34 mg/mmol) (preferentially on morning spot urine): Yes");
        } else if (document.getElementById("r17_2").checked == true) {
            resultArray.input.push("Microalbuminuria (30-300 mg/24 h), or albumin creatinine ratio (30-300 mg/g; 3.4-34 mg/mmol) (preferentially on morning spot urine): No");
        } else {
            resultArray.input.push("Microalbuminuria (30-300 mg/24 h), or albumin creatinine ratio (30-300 mg/g; 3.4-34 mg/mmol) (preferentially on morning spot urine): -");
        }

    } else if (document.getElementById("b1_2").checked == true) {
        resultArray.input.push("Asymptomatic organ damage: No");
    } else {
        resultArray.input.push("Asymptomatic organ damage: -");
    }

    if (document.getElementById("r5_1").checked == true) {
        resultArray.input.push("Fasting plasma glucose 5.6-6.9 mmol/L (102-125 mg/dL): Yes");
    } else if (document.getElementById("r5_2").checked == true) {
        resultArray.input.push("Fasting plasma glucose 5.6-6.9 mmol/L (102-125 mg/dL): No");
    } else {
        resultArray.input.push("Fasting plasma glucose 5.6-6.9 mmol/L (102-125 mg/dL): -");
    }

    if (document.getElementById("r6_1").checked == true) {
        resultArray.input.push("Abnormal glucose tolerance test: Yes");
    } else if (document.getElementById("r6_2").checked == true) {
        resultArray.input.push("Abnormal glucose tolerance test: No/Unknown");
    } else {
        resultArray.input.push("Abnormal glucose tolerance test: -");
    }

    if (document.getElementById("r18_1").checked == true) {
        resultArray.input.push("Fasting plasma glucose &ge;7.0 mmol/L (126 mg/dL) on two repeated measurements: Yes");
    } else if (document.getElementById("r18_2").checked == true) {
        resultArray.input.push("Fasting plasma glucose &ge;7.0 mmol/L (126 mg/dL) on two repeated measurements: No");
    } else {
        resultArray.input.push("Fasting plasma glucose &ge;7.0 mmol/L (126 mg/dL) on two repeated measurements: -");
    }

    if (document.getElementById("r19_1").checked == true) {
        resultArray.input.push("HbA<sub>1c</sub> >7% (53 mmol/mol): Yes");
    } else if (document.getElementById("r19_2").checked == true) {
        resultArray.input.push("HbA<sub>1c</sub> >7% (53 mmol/mol): No");
    } else {
        resultArray.input.push("HbA<sub>1c</sub> >7% (53 mmol/mol): -");
    }

    if (document.getElementById("r20_1").checked == true) {
        resultArray.input.push("Post-load plasma glucose >11.0 mmol/L (198 mg/dL): Yes");
    } else if (document.getElementById("r20_2").checked == true) {
        resultArray.input.push("Post-load plasma glucose >11.0 mmol/L (198 mg/dL): No");
    } else {
        resultArray.input.push("Post-load plasma glucose >11.0 mmol/L (198 mg/dL): -");
    }

    if (document.getElementById("r21_1").checked == true) {
        resultArray.input.push("Cerebrovascular disease: ischaemic stroke; cerebral haemorrhage; transient ischaemic attack: Yes");
    } else if (document.getElementById("r21_2").checked == true) {
        resultArray.input.push("Cerebrovascular disease: ischaemic stroke; cerebral haemorrhage; transient ischaemic attack: No");
    } else {
        resultArray.input.push("Cerebrovascular disease: ischaemic stroke; cerebral haemorrhage; transient ischaemic attack: -");
    }

    if (document.getElementById("r22_1").checked == true) {
        resultArray.input.push("CHD: myocardial infarction; angina; myocardial revascularization with PCI or CABG: Yes");
    } else if (document.getElementById("r22_2").checked == true) {
        resultArray.input.push("CHD: myocardial infarction; angina; myocardial revascularization with PCI or CABG: No");
    } else {
        resultArray.input.push("CHD: myocardial infarction; angina; myocardial revascularization with PCI or CABG: -");
    }

    if (document.getElementById("r23_1").checked == true) {
        resultArray.input.push("Heart failure, including heart failure with preserved EF: Yes");
    } else if (document.getElementById("r23_2").checked == true) {
        resultArray.input.push("Heart failure, including heart failure with preserved EF: No");
    } else {
        resultArray.input.push("Heart failure, including heart failure with preserved EF: -");
    }

    if (document.getElementById("r24_1").checked == true) {
        resultArray.input.push("Symptomatic lower extremities peripheral artery disease: Yes");
    } else if (document.getElementById("r24_2").checked == true) {
        resultArray.input.push("Symptomatic lower extremities peripheral artery disease: No");
    } else {
        resultArray.input.push("Symptomatic lower extremities peripheral artery disease: -");
    }

    if (document.getElementById("r25_1").checked == true) {
        resultArray.input.push("CKD with eGFR <30 mL/min/1.73m<sup>2</sup> (BSA); proteinuria (>300 mg/24 h): Yes");
    } else if (document.getElementById("r25_2").checked == true) {
        resultArray.input.push("CKD with eGFR <30 mL/min/1.73m<sup>2</sup> (BSA); proteinuria (>300 mg/24 h): No");
    } else {
        resultArray.input.push("CKD with eGFR <30 mL/min/1.73m<sup>2</sup> (BSA); proteinuria (>300 mg/24 h): -");
    }

    if (document.getElementById("r26_1").checked == true) {
        resultArray.input.push("Advanced retinopathy: haemorrhages or exudates, papilloedema: Yes");
    } else if (document.getElementById("r26_2").checked == true) {
        resultArray.input.push("Advanced retinopathy: haemorrhages or exudates, papilloedema: No");
    } else {
        resultArray.input.push("Advanced retinopathy: haemorrhages or exudates, papilloedema: -");
    }

    var outputVal = document.getElementsByName("txtresult_text")[0].value;
    if (outputVal === "" || typeof(outputVal) === "undefined" || outputVal === null)
        outputVal = "Total CV Risk: -";
    resultArray.output.push("Total CV Risk: ".concat(outputVal));

    var outputRecm = document.getElementsByName("txtresult_text_guide")[0].value;
    if (outputRecm === "" || typeof(outputRecm) === "undefined" || outputRecm === null)
        resultArray.output.push("Treatment recommendation: -");
    else
        resultArray.output.push("Treatment recommendation: ".concat(outputRecm));

    //console.log(JSON.stringify(resultArray, null, 4));
    return JSON.stringify(resultArray);
}

/**
 * function sending the tool results for Android app
 * @returns {object}
 */
function getAndroidToolResult() {
    Android.getToolResultData(getToolResult());
}