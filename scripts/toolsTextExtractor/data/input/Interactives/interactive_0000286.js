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

    if (document.getElementById("r1_1").checked == true) {
        resultArray.input.push("Past history of VTE<sup>1</sup>: Yes");
    } else if (document.getElementById("r1_2").checked == true) {
        resultArray.input.push("Past history of VTE<sup>1</sup>: No");
    } else {
        resultArray.input.push("Past history of VTE<sup>1</sup>: -");
    }

    if (document.getElementById("r4_1").checked == true) {
        resultArray.input.push("Family history of VTE: Yes");
    } else if (document.getElementById("r4_2").checked == true) {
        resultArray.input.push("Family history of VTE: No");
    } else {
        resultArray.input.push("Family history of VTE: -");
    }

    if (document.getElementById("r5_1").checked == true) {
        resultArray.input.push("Medical comorbidities: Yes");
    } else if (document.getElementById("r5_2").checked == true) {
        resultArray.input.push("Medical comorbidities: No");
    } else {
        resultArray.input.push("Medical comorbidities: -");
    }

    if (document.getElementById("r6_1").checked == true) {
        resultArray.input.push("Age >35 years: Yes");
    } else if (document.getElementById("r6_2").checked == true) {
        resultArray.input.push("Age >35 years: No");
    } else {
        resultArray.input.push("Age >35 years: -");
    }

    if (document.getElementById("r7_1").checked == true) {
        resultArray.input.push("Obesity (BMI >30kg/m<sup>2</sup>): Yes");
    } else if (document.getElementById("r7_2").checked == true) {
        resultArray.input.push("Obesity (BMI >30kg/m<sup>2</sup>): No");
    } else {
        resultArray.input.push("Obesity (BMI >30kg/m<sup>2</sup>): -");
    }

    if (document.getElementById("r8_1").checked == true) {
        resultArray.input.push("Smoking: Yes");
    } else if (document.getElementById("r8_2").checked == true) {
        resultArray.input.push("Smoking: No");
    } else {
        resultArray.input.push("Smoking: -");
    }

    if (document.getElementById("r9_1").checked == true) {
        resultArray.input.push("Gross varicose veins: Yes");
    } else if (document.getElementById("r9_2").checked == true) {
        resultArray.input.push("Gross varicose veins: No");
    } else {
        resultArray.input.push("Gross varicose veins: -");
    }

    if (document.getElementById("r10_1").checked == true) {
        resultArray.input.push("Pre-eclampsia: Yes");
    } else if (document.getElementById("r10_2").checked == true) {
        resultArray.input.push("Pre-eclampsia: No");
    } else {
        resultArray.input.push("Pre-eclampsia: -");
    }

    if (document.getElementById("r11_1").checked == true) {
        resultArray.input.push("OHSS<sup>2</sup>: Yes");
    } else if (document.getElementById("r11_2").checked == true) {
        resultArray.input.push("OHSS<sup>2</sup>: No");
    } else {
        resultArray.input.push("OHSS<sup>2</sup>: -");
    }

    if (document.getElementById("r12_1").checked == true) {
        resultArray.input.push("Multiple pregnancy: Yes");
    } else if (document.getElementById("r12_2").checked == true) {
        resultArray.input.push("Multiple pregnancy: No");
    } else {
        resultArray.input.push("Multiple pregnancy: -");
    }

    if (document.getElementById("r13_1").checked == true) {
        resultArray.input.push("Caesarean section<sup>3</sup>: Yes");
    } else if (document.getElementById("r13_2").checked == true) {
        resultArray.input.push("Caesarean section<sup>3</sup>: No");
    } else {
        resultArray.input.push("Caesarean section<sup>3</sup>: -");
    }

    if (document.getElementById("r14_1").checked == true) {
        resultArray.input.push("Prolonged labour<sup>4</sup>: Yes");
    } else if (document.getElementById("r14_2").checked == true) {
        resultArray.input.push("Prolonged labour<sup>4</sup>: No");
    } else {
        resultArray.input.push("Prolonged labour<sup>4</sup>: -");
    }

    if (document.getElementById("r15_1").checked == true) {
        resultArray.input.push("Peripartum haemorrhage<sup>5</sup>: Yes");
    } else if (document.getElementById("r15_2").checked == true) {
        resultArray.input.push("Peripartum haemorrhage<sup>5</sup>: No");
    } else {
        resultArray.input.push("Peripartum haemorrhage<sup>5</sup>: -");
    }

    if (document.getElementById("r16_1").checked == true) {
        resultArray.input.push("Current syst. infection: Yes");
    } else if (document.getElementById("r16_2").checked == true) {
        resultArray.input.push("Current syst. infection: No");
    } else {
        resultArray.input.push("Current syst. infection: -");
    }

    if (document.getElementById("r17_1").checked == true) {
        resultArray.input.push("Immobility: Yes");
    } else if (document.getElementById("r17_2").checked == true) {
        resultArray.input.push("Immobility: No");
    } else {
        resultArray.input.push("Immobility: -");
    }

    if (document.getElementById("r18_1").checked == true) {
        resultArray.input.push("Surgical Procedure: Yes");
    } else if (document.getElementById("r18_2").checked == true) {
        resultArray.input.push("Surgical Procedure: No");
    } else {
        resultArray.input.push("Surgical Procedure: -");
    }

    if (document.getElementById("r19_1").checked == true) {
        resultArray.input.push("<6 weeks post-partum: Yes");
    } else if (document.getElementById("r19_2").checked == true) {
        resultArray.input.push("<6 weeks post-partum: No");
    } else {
        resultArray.input.push("<6 weeks post-partum: -");
    }

    var outputVal = document.getElementsByName("txtresult_text")[0].value;
    if (outputVal === "" || typeof(outputVal) === "undefined" || outputVal === null)
        outputVal = "Interpretation: -";
    resultArray.output.push("Interpretation: ".concat(outputVal));

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