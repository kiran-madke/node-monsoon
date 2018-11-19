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

    if (document.getElementById("radio2").checked == true) {
        resultArray.input.push("Marfan syndrome  (or other connective tissue  diseases): Yes");
    } else if (document.getElementById("radio1").checked == true) {
        resultArray.input.push("Marfan syndrome  (or other connective tissue  diseases): No");
    } else {
        resultArray.input.push("Marfan syndrome  (or other connective tissue  diseases): -");
    }

    if (document.getElementById("radio4").checked == true) {
        resultArray.input.push("Family history of aortic  disease: Yes");
    } else if (document.getElementById("radio3").checked == true) {
        resultArray.input.push("Family history of aortic  disease: No");
    } else {
        resultArray.input.push("Family history of aortic  disease: -");
    }

    if (document.getElementById("radio6").checked == true) {
        resultArray.input.push("Known aortic valve disease: Yes");
    } else if (document.getElementById("radio5").checked == true) {
        resultArray.input.push("Known aortic valve disease: No");
    } else {
        resultArray.input.push("Known aortic valve disease: -");
    }

    if (document.getElementById("radio8").checked == true) {
        resultArray.input.push("Known thoracic aortic  aneurysm: Yes");
    } else if (document.getElementById("radio7").checked == true) {
        resultArray.input.push("Known thoracic aortic  aneurysm: No");
    } else {
        resultArray.input.push("Known thoracic aortic  aneurysm: -");
    }

    if (document.getElementById("radio10").checked == true) {
        resultArray.input.push("Previous aortic  manipulation (including  cardiac surgery): Yes");
    } else if (document.getElementById("radio9").checked == true) {
        resultArray.input.push("Previous aortic  manipulation (including  cardiac surgery): No");
    } else {
        resultArray.input.push("Previous aortic  manipulation (including  cardiac surgery): -");
    }

    if (document.getElementById("radio12").checked == true) {
        resultArray.input.push("Abrupt onset: Yes");
    } else if (document.getElementById("radio11").checked == true) {
        resultArray.input.push("Abrupt onset: No");
    } else {
        resultArray.input.push("Abrupt onset: -");
    }

    if (document.getElementById("radio14").checked == true) {
        resultArray.input.push("Severe intensity: Yes");
    } else if (document.getElementById("radio13").checked == true) {
        resultArray.input.push("Severe intensity: No");
    } else {
        resultArray.input.push("Severe intensity: -");
    }

    if (document.getElementById("radio16").checked == true) {
        resultArray.input.push("Ripping or tearing: Yes");
    } else if (document.getElementById("radio15").checked == true) {
        resultArray.input.push("Ripping or tearing: No");
    } else {
        resultArray.input.push("Ripping or tearing: -");
    }

    if (document.getElementById("radio24").checked == true) {
        resultArray.input.push("Aortic diastolic murmur : Yes");
    } else if (document.getElementById("radio23").checked == true) {
        resultArray.input.push("Aortic diastolic murmur : No");
    } else {
        resultArray.input.push("Aortic diastolic murmur : -");
    }

    if (document.getElementById("radio26").checked == true) {
        resultArray.input.push("Hypotension or shock: Yes");
    } else if (document.getElementById("radio25").checked == true) {
        resultArray.input.push("Hypotension or shock: No");
    } else {
        resultArray.input.push("Hypotension or shock: -");
    }

    if (document.getElementById("radio18").checked == true) {
        resultArray.input.push("Pulse deficit: Yes");
    } else if (document.getElementById("radio17").checked == true) {
        resultArray.input.push("Pulse deficit: No");
    } else {
        resultArray.input.push("Pulse deficit: -");
    }

    if (document.getElementById("radio20").checked == true) {
        resultArray.input.push("Systolic blood pressure  difference: Yes");
    } else if (document.getElementById("radio19").checked == true) {
        resultArray.input.push("Systolic blood pressure difference: No");
    } else {
        resultArray.input.push("Systolic blood pressure difference: -");
    }

    if (document.getElementById("radio22").checked == true) {
        resultArray.input.push("Focal neurological deficit (in conjunction with pain): Yes");
    } else if (document.getElementById("radio21").checked == true) {
        resultArray.input.push("Focal neurological deficit (in conjunction with pain): No");
    } else {
        resultArray.input.push("Focal neurological deficit (in conjunction with pain): -");
    }

    var outputVal = document.getElementsByName("txtresult")[0].value;
    if (outputVal === "" || typeof(outputVal) === "undefined" || outputVal === null)
        outputVal = "-";
    resultArray.output.push("Score: ".concat(outputVal));

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