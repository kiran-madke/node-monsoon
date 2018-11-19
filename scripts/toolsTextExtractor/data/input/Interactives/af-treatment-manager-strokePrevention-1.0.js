/**
 *  ObjeCt maintaining the status of the Stroke prevention therapy section
 */
var strokePrevStatus;

$(document).ready(function ()
{

    // initialization
    init();

    // get the rateControlStatus history
    var mStrokePrevStatus = localStorage.getItem("strokePrevention");

    if (typeof (mStrokePrevStatus) !== 'undefined' && mStrokePrevStatus !== null)
    {
        strokePrevStatus.strokePrevStrokeHistory = JSON.parse(mStrokePrevStatus).strokePrevStrokeHistory;
        strokePrevStatus.serumCreatnine = JSON.parse(mStrokePrevStatus).serumCreatnine;
        strokePrevStatus.mitralValveStatus = JSON.parse(mStrokePrevStatus).mitralValveStatus;

        console.log("strokePrevStatus history: " + JSON.stringify(strokePrevStatus));
    }

    loadStrokePrevDataFile();

    $("body").on("click", "td", function ()
    {
        // id of the currently clicked table cell item
        var cellId = $(this).attr("id");

        // class of the currently clicked table cell item
        var cellClass = $(this).attr("class");
        // index of the row in the table
        var rowIndex = $(this).closest("tr").index();
        // index of the cell in the row
        var cellIndex = $(this).closest("td").index();


        if (cellClass === "option-cell-sp")
        {
            // creating the array of buttons in table row
            var tableRow = document.getElementById(cellId).parentNode.childNodes;

            // toggling the button click background effects
            toggleScoreDecisionBtn(cellId);
            // make changes in the strokePrevStatus.strokePrevStrokeHistory
            amendStrokePrevHistory(rowIndex, cellIndex, cellId);

            if (cellId === "sprow2_cell0" || cellId === "sprow3_cell0")
                toggleHypertensionDecisionBtn(cellId);

            // getting the object at that index in data
            var object = strokePrevText[Number(rowIndex) + 1];

            // if the clicked button is Yes, then only show result
            if (object.options[Number(cellIndex) - 1].text === "Yes")
                showCategories(rowIndex + 1, cellIndex);
            else
            {
                removeListItem(strokePrevText[Number(rowIndex) + 1].infoText,
                    strokePrevText[Number(rowIndex) + 1].category);
                var catDivText = document.getElementById("catDivText");
                catDivText.style.display = "block";
                if (!isElementAvailable("catDiv0") && !isElementAvailable("catDiv1"))
                {
                    catDivText.innerHTML = "Bleeding risk: none";
                } else
                {
                    catDivText.innerHTML = "Bleeding risk";
                }
            }

            showResultMv();
        } else if (cellClass === "option-cell-mv")
        {
            // creating the array of buttons in table row
            var tableRow = document.getElementById(cellId).parentNode.childNodes;

            // toggling the button click background effects
            toggleSpDecisionBtn(cellId);

            var resultTextMv = document.getElementById("resultTextMv");

            if (cellId === "mitralValveYes")
            {
                strokePrevStatus.mitralValveStatus = "0";
                if (getClickStatus(strokePrevStatus.strokePrevStrokeHistory) && chadVascSum !== "")
                    resultTextMv.innerHTML = "Oral anticoagulation with VKA is recommended, correct reversible bleeding risk factors, assess for contraindications.";
            } else
            {
                strokePrevStatus.mitralValveStatus = "1";
                showResultMv();
            }
            // saving the stroke prevention status in the local web storage
            //saveResult("strokePrevention", strokePrevStatus);
        }
    });

    $("body").on("keyup", "#inputAge", function ()
    {
        var age = Number($("#inputAge").val());
        if (isAgeValid(age))
        {
            amendStrokePrevHistory(3, 1, "inputAge");
        } else
        {
            amendStrokePrevHistory(3, -1, "inputAge");
        }

        // if the age is greater than 65, show result in non-modifiable category
        if (isAgeValid(age) && Number(age) > 65)
            showCategories(4, 0);
        else
        {
            document.getElementById("catDivText").innerHTML = "Bleeding risk: none";
            removeListItem(strokePrevText[4].infoText, strokePrevText[4].category);
        }
    });

    $("body").on("keyup", "#inputSerumCreatnine", function ()
    {
        if (isSerumCreatinineValid(Number($("#inputSerumCreatnine").val())))
        {
            strokePrevStatus.serumCreatnine = $("#inputSerumCreatnine").val();
            calculateEgfrMdrd();
        } else
        {
            strokePrevStatus.serumCreatnine = "";
        }
        // showing the results of Mitral stenosis
        showResultMv();
        console.log(JSON.stringify(strokePrevStatus));
    });

    $("body").on("blur", "#inputSerumCreatnine", function ()
    {

        if (isSerumCreatinineValid(Number($("#inputSerumCreatnine").val())))
        {
            strokePrevStatus.serumCreatnine = $("#inputSerumCreatnine").val();
            calculateEgfrMdrd();
        } else
        {
            strokePrevStatus.serumCreatnine = "";
        }
        // showing the results of Mitral stenosis
        showResultMv();
        console.log(JSON.stringify(strokePrevStatus));
    });

    $("body").on("keyup", "#inputWeight", function ()
    {
        if (isweightValid(Number($("#inputWeight").val())))
        {
            strokePrevStatus.weight = $("#inputWeight").val();
        } else
        {
            strokePrevStatus.weight = "";
        }
        // showing the results of Mitral stenosis
        showResultMv();
        console.log(JSON.stringify(strokePrevStatus));
    });

    $("body").on("blur", "#inputWeight", function ()
    {

        if (isweightValid(Number($("#inputWeight").val())))
        {
            strokePrevStatus.weight = $("#inputWeight").val();
        } else
        {
            strokePrevStatus.weight = "";
        }
        // showing the results of Mitral stenosis
        showResultMv();
        console.log(JSON.stringify(strokePrevStatus));
    });

    $("body").on("change", "#serumUnit", function ()
    {
        var unit = document.getElementById("serumUnit").selectedIndex;
        var inSerumCreat = document.getElementById("inputSerumCreatnine");

        if (unit === 0)
            strokePrevStatus.serumCreatnine = (Number(strokePrevStatus.serumCreatnine) * 88.40).toFixed(2);
        else
            strokePrevStatus.serumCreatnine = (Number(strokePrevStatus.serumCreatnine) / 88.40).toFixed(2);

        // changing the serum creatinine input value
        document.getElementById("inputSerumCreatnine").value = strokePrevStatus.serumCreatnine;
        // calculating the eGFR
        calculateEgfrMdrd();
        // showing the results of Mitral stenosis
        showResultMv();

        // saving the stroke prevention status in the local web storage
        //saveResult("strokePrevention", strokePrevStatus);
    });

    // declaring and initializing stroke prevention status object
    function init()
    {
        strokePrevStatus = new Object();

        strokePrevStatus.strokePrevStrokeHistory = [];
        strokePrevStatus.serumCreatnine = "";
        strokePrevStatus.mitralValveStatus = "";


        // pushing row number, option number and status to scoreHistory array
        var dataLength = strokePrevText.length;
        for (var i = 1; i < dataLength - 3; i++)
        {
            strokePrevStatus.strokePrevStrokeHistory.push({
                "rowIndex": i.toString(),
                "cellIndex": "",
                "status": "false"
            });
        }
    }
});

/**
 * function validating the age for empty, zero, negative and NaN.
 */
function isAgeValid(age)
{
    var isValid = false;
    if (typeof (age) !== "undefined")
    {
        if (age !== "" && Number(age) > 0 && Number(age) < 150 && !isNaN(age))
        {
            isValid = true;
        }
    }

    return isValid;
}
/**
 * function validating the weight for empty, zero, negative and NaN
 * @param   {number}  weight of the person
 * @returns {boolean} true, if weight is valid and false, if weight is not valid 
 */
function isweightValid(weight)
{
    var isValid = false;
    if (typeof (weight) !== "undefined")
    {
        if (weight !== "" && Number(weight) > 0 && !isNaN(weight))
        {
            isValid = true;
        }
    }
    
    return isValid;
}

/**
 * function validating serum creatinine for empty, negative and NaN.
 */
function isSerumCreatinineValid(serum)
{
    var isValid = false;
    if (typeof (serum) !== "undefined")
    {
        if (serum !== "" && Number(serum) > 0 && !isNaN(serum))
        {
            isValid = true;
        }
    }
    return isValid;
}

/**
 * function showing the results when clicked or Mitral stenosis or valve replacement score
 */
function showResultMv()
{
    var resultTextMv = document.getElementById("resultTextMv");

    if (strokePrevStatus.mitralValveStatus !== "" && isSerumCreatinineValid(Number(strokePrevStatus.serumCreatnine)) && isweightValid(Number(strokePrevStatus.weight)) && isAgeValid(Number(strokePrevStatus.strokePrevStrokeHistory[3].value)))
    {
        if (strokePrevStatus.mitralValveStatus === "0")
        {
            resultTextMv.innerHTML = "Oral anticoagulation with VKA is recommended, correct reversible bleeding risk factors, assess for contraindications.";
        } else
        {
            // converting serum creatinine value to mg/dl
            // unit of serumCreatnine, whether umol or mg/dl
            var unit = document.getElementById("serumUnit").selectedIndex;
            // serumCreatnine value
            var serum = 0;
            if (unit === 0)
                serum = (Number(strokePrevStatus.serumCreatnine) / 88.40).toFixed(2);
            else
                serum = Number(strokePrevStatus.serumCreatnine);

            // Age of patient
            var age = Number(strokePrevStatus.strokePrevStrokeHistory[3].value);
            // gender, male or female
            var gender = Number(strokePrevStatus.strokePrevStrokeHistory[7].cellIndex);
            // weight
            var weight = Number(strokePrevStatus.weight);

            // chadVascSum is 0 and gender is male OR chadVascSum is 1 and gender is female
            if ((Number(chadVascSum) === 0 && gender === Gender.MALE) || (Number(chadVascSum) === 1 && gender === Gender.FEMALE))
            {
                if (!isElementAvailable("catDiv0") && !isElementAvailable("catDiv1"))
                { // without bleeding risk
                    resultTextMv.innerHTML = "No anticoagulation or antiplatelet therapy is recommended (IIIB)";
                } else
                { // with bleeding risk
                    resultTextMv.innerHTML = "No anticoagulation or antiplatelet therapy is recommended (IIIB), correct reversible bleeding risk factors.";
                } // chadVascSum is 1 and gender is male OR chadVascSum is 2 and gender is female
            } else if ((Number(chadVascSum) === 1 && gender === Gender.MALE) || (Number(chadVascSum) === 2 && gender === Gender.FEMALE))
            {
                if (!isElementAvailable("catDiv0") && !isElementAvailable("catDiv1"))
                { // without bleeding risk
                    if (strokePrevStatus.egfr > 50)
                    { // eGfr is greater than 50
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } // eGfr is greater than 30 and less than 50 
                    } else if (strokePrevStatus.egfr < 50 && strokePrevStatus.egfr > 30)
                    { // eGfr is less than 50 and greater than 30
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        }
                    } else
                    { // eGfr is less than 30
                        resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using VKA";
                    }
                } else
                { // with bleeding risks
                    if (strokePrevStatus.egfr > 50)
                    { // eGfr is greater than 50
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } // eGfr is greater than 30 and less than 50 
                    } else if (strokePrevStatus.egfr < 50 && strokePrevStatus.egfr > 30)
                    { // eGfr is less than 50 and greater than 30
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        }
                    } else
                    { // eGfr is less than 30
                        resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using VKA, <br/>Correct reversible bleeding risk factors";
                    }
                } // chadVascSum is 2 and gender is male OR chadVascSum is 3 and gender is female
            } else if ((Number(chadVascSum) >= 2 && gender === Gender.MALE) || (Number(chadVascSum) >= 3 && gender === Gender.FEMALE))
            {
                if (!isElementAvailable("catDiv0") && !isElementAvailable("catDiv1"))
                { // without bleeding risk
                    if (strokePrevStatus.egfr > 50)
                    { // eGfr is greater than 50
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul>";
                        } // eGfr is greater than 30 and less than 50 
                    } else if (strokePrevStatus.egfr < 50 && strokePrevStatus.egfr > 30)
                    { // eGfr is less than 50 and greater than 30
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul>";
                        }
                    } else
                    { // eGfr is less than 30
                        resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using VKA";
                    }
                } else
                { // with bleeding risks
                    if (strokePrevStatus.egfr > 50)
                    { // eGfr is greater than 50
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 60 mg OD (or 30 mg OD)</li><li>Rivaroxaban 20 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } // eGfr is greater than 30 and less than 50 
                    } else if (strokePrevStatus.egfr < 50 && strokePrevStatus.egfr > 30)
                    { // eGfr is less than 50 and greater than 30
                        if (serum >= 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum >= 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 2.5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily for those at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight <= 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age >= 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age <= 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily at high bleeding risk)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        } else if (serum < 1.50 && age < 80 && weight > 60 && age > 75)
                        {
                            resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism is recommended (IA) using:<br><ul><li>Apixaban 5 mg BD</li><li>Dabigatran 150 mg twice daily (110 mg twice daily may be considered to reduce the risk of bleeding; IIbB)</li><li>Edoxaban 30 mg OD (or 15 mg OD)</li><li>Rivaroxaban 15 mg OD, or</li><li>VKA</li></ul><br/>Correct reversible bleeding risk factors";
                        }
                    } else
                    { // eGfr is less than 30
                        resultTextMv.innerHTML = "Oral anticoagulation therapy to prevent thromboembolism should be considered (IIaB) using VKA<br/>Correct reversible bleeding risk factors";
                    }
                }
            } else if (Number(chadVascSum) >= 2 && Number(strokePrevStatus.strokePrevStrokeHistory[7].cellIndex) === 1)
            {
                if (!isElementAvailable("catDiv0") && !isElementAvailable("catDiv1"))
                {

                } else
                {

                }
            } else if (Number(chadVascSum) >= 3 && Number(strokePrevStatus.strokePrevStrokeHistory[7].cellIndex) === 0)
            {
                if (!isElementAvailable("catDiv0") && !isElementAvailable("catDiv1"))
                {

                } else
                {

                }
            }
        }
    } else
    {
        resultTextMv.innerHTML = "";
    }

    // saving the stroke prevention status in the local web storage
    //saveResult("strokePrevention", strokePrevStatus);
}

/**
 * function toggling between the status of Hypertension (controlled) and Hypertension (uncontrolled)
 * @param cellId
 */
function toggleHypertensionDecisionBtn(cellId)
{
    if (cellId === "sprow2_cell0")
    {
        toggleScoreDecisionBtn("sprow3_cell1");
        amendStrokePrevHistory(2, 2, "sprow3_cell1");
    } else if (cellId === "sprow3_cell0")
    {
        //toggleScoreDecisionBtn("sprow2_cell1", document.getElementById("sprow2_cell1").parentNode.childNodes, 0);
        toggleScoreDecisionBtn("sprow2_cell1");
        amendStrokePrevHistory(1, 2, "sprow2_cell1");
    }
}

/**
 * function indicating the change in the background color of the clicked button
 * @param clickedButton, the clicked button
 * @param allButtons, the un-clicked normal button
 * @param status, the status of the clicked button
 */
function toggleScoreDecisionBtn(clickedButton)
{

    var thisElement = document.getElementById(clickedButton);

    thisElement.children[0].style.background = "#3d6ccc";
    thisElement.children[0].style.border = "1px solid #3d6ccc";
    thisElement.children[0].style.color = "#ffffff";

    var splitter = clickedButton.split("_");
    var toggleCell = "";
    if (splitter[1] === "cell0")
        toggleCell = document.getElementById(splitter[0].concat("_").concat("cell1"));
    else
        toggleCell = document.getElementById(splitter[0].concat("_").concat("cell0"));

    toggleCell.children[0].style.background = "#ffffff";
    toggleCell.children[0].style.border = "1px solid #e0e0e0";
    toggleCell.children[0].style.color = "#acaeaf";
}


/**
 * returns the box object, containing the box information, based on the boxId
 */
function getStrokePrevBoxInfo(id)
{
    var tempBoxInfo = "";
    var dataLength = strokePrevText.length;
    for (var m = 0; m < strokePrevText.length; m++)
    {
        if (strokePrevText[m].boxId === id)
        {
            tempBoxInfo = strokePrevText[m];
            break;
        }
    }
    return tempBoxInfo;
}

/**
 * information about the score. This information is first object in the data javascript file
 */
var spMetaInfo;

/**
 * colspan value to assign to table cells, if the button structure is BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED
 */
var colspanFactor;

function StrokePrevScore(toolType, boxStructure, buttonStructure, header)
{
    var myScore = new Object();
    myScore.toolType = toolType;
    myScore.boxStructure = boxStructure;
    myScore.buttonStructure = buttonStructure;
    myScore.header = header;

    return myScore;
}

/**
 * Array for maintaining the history of the activities, performed on the score
 * @type {Array}
 */
//var strokePrevStatus.strokePrevStrokeHistory = [];


/**
 * Function loading the data file in the HTML. This function is called at the very beginning
 *
 * @param fileName, data file to be loaded in the HTML
 */
function loadStrokePrevDataFile()
{
    // Initializing the strokePrevDiv
    var strokePrevDiv = document.getElementById("strokePrevDiv");

    // followUpBoxInfo is the information of the box
    var followUpBoxInfo;

    var ctr = 0;
    if (ctr === 0)
    {
        try
        {
            followUpBoxInfo = strokePrevText[ctr];
            spMetaInfo = new StrokePrevScore(followUpBoxInfo.toolType, followUpBoxInfo.boxStructure,
                followUpBoxInfo.buttonStructure, followUpBoxInfo.header);
            ctr++;

        } catch (e)
        {
            var temp = new exception("Score Data file not found", e);
            temp.displayMessage();
        }
    }

    // appending the score to the html body
    strokePrevDiv.appendChild(getStrokePrevScore(spMetaInfo));

    // recreating the history of the score
    if (typeof (strokePrevStatus.strokePrevStrokeHistory) !== "undefined")
    {
        loadStrokePrevHistory(strokePrevStatus.strokePrevStrokeHistory);
    }

    if (typeof (strokePrevStatus.serumCreatnine) !== "undefined")
    {
        document.getElementById("inputSerumCreatnine").value = strokePrevStatus.serumCreatnine;
    }

    if (typeof (strokePrevStatus.mitralValveStatus) !== "undefined")
    {
        if (strokePrevStatus.mitralValveStatus === "0")
            toggleSpDecisionBtn("mitralValveYes");
        else if (strokePrevStatus.mitralValveStatus === "1")
            toggleSpDecisionBtn("mitralValveNo");
    }

    // Adding footer div below
    // addFooter();
}

function isFooterExists()
{
    var isExists = false;
    var footer = document.getElementsByClassName("footer");
    var extraButtons = document.getElementsByClassName("extra-buttons-div");

    if (typeof (footer) !== 'undefined' && typeof (extraButtons) !== 'undefined')
    {
        isExists = true;
    }
    return isExists;
}

/**
 * returns the div with score table (with options) and footer at bottom
 * @param spMetaInfo
 * @returns {Element}
 */
function getStrokePrevScore(spMetaInfo)
{
    colspanFactor = getStrokePrevColspanFactor();
    // questionDiv holds all the headers, questions table, and their options
    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("class", "question-div");

    // appending the header to the questionDiv
    if (spMetaInfo.header.headerText !== "")
        questionDiv.appendChild(getStrokePrevHeader(spMetaInfo.header));

    // appending the score table to the question div
    questionDiv.appendChild(getStrokePrevScoreTable());
    //appending the result table to the question div
    if (spMetaInfo.toolType === StrokePrevToolType.RESULT_SCORE || spMetaInfo.toolType === StrokePrevToolType.RESULT_CATEGORIES_SCORE)
    {
        // appending the result table to main score at bottom
        questionDiv.appendChild(getStrokePrevResultTable(getStrokePrevBoxInfo("1997")));
    }

    return questionDiv;
}

/**
 * function loading the history of the score
 * @param history
 */
function loadStrokePrevHistory(history)
{
    try
    {
        // calculate the length of the stroke Prev score.
        var scoreLength = history.length;

        for (var ofRow = 0; ofRow < scoreLength; ofRow++)
        {
            if (ofRow === 3)
            {
                if (typeof (strokePrevStatus.strokePrevStrokeHistory[3].value) !== "undefined")
                    document.getElementById("inputAge").value = strokePrevStatus.strokePrevStrokeHistory[3].value;
            } else
            {
                var clickedCell = document.getElementById("sprow" + history[ofRow].rowIndex + "_cell" +
                    strokePrevStatus.strokePrevStrokeHistory[ofRow].cellIndex);
                if (clickedCell !== null)
                {
                    var para = clickedCell.childNodes[0];
                    var nodeLength = para.childNodes.length;
                    if (nodeLength > 0 && strokePrevStatus.strokePrevStrokeHistory[ofRow].cellIndex !== "")
                    {
                        var pStyle = para.style;
                        pStyle.background = "#3d6ccc";
                        pStyle.border = "1px solid #3d6ccc";
                        pStyle.color = "#ffffff";
                    }
                }
            }

            // show the categories
            if (ofRow === 3)
            {
                if (Number(history[3].value) > 65)
                {
                    showCategories(history[ofRow].rowIndex, history[ofRow].cellIndex);
                }
            } else
            {
                if (history[ofRow].cellIndex === "0")
                    showCategories(history[ofRow].rowIndex, history[ofRow].cellIndex);
            }
        }

        generateStrokePrevResult();
    } catch (e)
    {
        var temp = new exception("Score history string parsing exception", e);
        temp.displayMessage();
    }
}

/**
 * creates and returns the result table, which is appended in the footer section
 * @param resultTabInfo
 * @returns {Element}
 * if boxType = result-box, only interpretation box is shown.
 * else if boxType = score-box, only score is displayed,
 * else if boxType = result-score-box, both score and interpretation are shown.
 */
function getStrokePrevResultTable(resultTabInfo)
{
    var resultBoxType = resultTabInfo.boxType;

    var resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "result-div");

    resultDiv.appendChild(getStrokePrevScoreDiv(resultTabInfo));
    if (resultTabInfo.extraInformation !== "")
    {
        resultDiv.appendChild(getStrokePrevExtraInformation(resultTabInfo));
    }

    return resultDiv;
}

function getStrokePrevExtraInformation(resultTabInfo)
{
    var extraInfoDiv = document.createElement("div");

    var extraInfoText = document.createElement("p");
    extraInfoText.setAttribute("class", "extra-info-text");
    extraInfoText.innerHTML = document.createTextNode(resultTabInfo.extraInformation).data;
    extraInfoDiv.appendChild(extraInfoText);

    return extraInfoDiv;
}

/**
 * function creating and returning the result score div
 * @param resultTabInfo
 */
function getStrokePrevScoreDiv(resultTabInfo)
{
    // creating score div
    var scoreDiv = document.createElement("div");
    // setting style class to score div
    scoreDiv.setAttribute("class", "result-div");

    // scoreText displays the score in the result box
    var scoreText = document.createElement("p");
    scoreText.setAttribute("id", "scoreText");
    scoreText.setAttribute("class", "score-text");

    scoreDiv.appendChild(scoreText);

    return scoreDiv;
}

/**
 * function creating and returning the result inference div
 * @param resultTabInfo
 */
function getStrokePrevInferenceDiv(resultTabInfo)
{
    // creating result div
    var resultDiv = document.createElement("div");
    // setting style class to result div
    resultDiv.setAttribute("class", "result-div");

    // resultInfoText is text above result box, showing some message
    var resultInfoText = document.createElement("p");
    resultInfoText.setAttribute("class", "result-info-text");
    if (typeof (resultTabInfo.resultInfoText) !== 'undefined')
    {
        resultInfoText.innerHTML = document.createTextNode(resultTabInfo.resultInfoText).data;
    } else
    {
        resultInfoText.innerHTML = document.createTextNode("");
    }

    // resultText displays the inference in the result box
    var resultText = document.createElement("p");
    resultText.setAttribute("class", "result-text");
    resultText.setAttribute("id", "resultTextRt");

    resultDiv.appendChild(resultInfoText);
    resultDiv.appendChild(resultText);

    return resultDiv;
}

/**
 * function creating and returning the result percentage div
 * @param resultTabInfo
 */
function getStrokePrevPercentageInfoDiv(resultTabInfo)
{
    // creating result div
    var percentDiv = document.createElement("div");
    // setting style class to result div
    percentDiv.setAttribute("class", "result-div");

    // resultInfoText is text above result box, showing some message
    var perInfoText = document.createElement("p");
    perInfoText.setAttribute("class", "result-info-text");
    if (typeof (resultTabInfo.resultInfoText) !== 'undefined')
    {
        perInfoText.innerHTML = document.createTextNode(resultTabInfo.percentageInfoText).data;
    } else
    {
        perInfoText.innerHTML = document.createTextNode("");
    }

    // resultText displays the inference in the result box
    var percentText = document.createElement("p");
    percentText.setAttribute("class", "result-text");
    percentText.setAttribute("id", "percentText");

    percentDiv.appendChild(perInfoText);
    percentDiv.appendChild(percentText);

    return percentDiv;
}

/**
 * function creating and returning the result inference div
 * @param resultTabInfo
 */
function getStrokePrevCategoriesResultDiv(resultTabInfo, index)
{
    var categories = resultTabInfo.categories;

    // creating result div
    var resultDiv = document.createElement("div");
    // setting style class to result div
    resultDiv.setAttribute("class", "result-div");

    // resultInfoText is text above result box, showing some message
    var resultInfoText = document.createElement("p");
    resultInfoText.setAttribute("class", "result-info-text");
    if (typeof (categories[index]) !== 'undefined')
    {
        resultInfoText.innerHTML = document.createTextNode(categories[index]).data;
    } else
    {
        resultInfoText.innerHTML = document.createTextNode("");
    }

    // resultText displays the inference in the result box
    var resultText = document.createElement("p");
    resultText.setAttribute("class", "result-text");
    resultText.setAttribute("id", "category" + index);

    resultDiv.appendChild(resultInfoText);
    resultDiv.appendChild(resultText);

    return resultDiv;
}

/**
 * creates and returns the Score Table
 * @returns {Element}
 */
function getStrokePrevScoreTable()
{
    // creating the questions table
    var scoreTable = document.createElement("table");
    scoreTable.setAttribute("class", "score-table");

    var dataLength = strokePrevText.length;
    for (var i = 1; i < dataLength - 3; i++)
    {
        var node = strokePrevText[i];
        // appending the score row to the table
        scoreTable.appendChild(getStrokePrevScoreRow(node, i));
    }
    return scoreTable;
}

/**
 * Returns the score rows.
 * Each row contains questions and options
 * @param node
 * @returns {Element}
 */
function getStrokePrevScoreRow(node, rowIndex)
{
    // creating the score row
    var scoreRow = document.createElement("tr");

    scoreRow.setAttribute("id", "sp".concat(rowIndex));
    // setting the class attribute
    scoreRow.setAttribute("class", "score-row");


    // appending the question text to the row
    scoreRow.appendChild(getStrokePrevQuestionCell(node.infoText));

    // get the max. number of options in the score
    if (spMetaInfo.buttonStructure === StrokePrevButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED)
    {
        var optionsLength = node.options.length;
    } else
        optionsLength = getStrokePrevMaxButtons();

    for (var index = 0; index < optionsLength; index++)
    {
        var optionCell = document.createElement("td");

        var optionText;
        if (node.options[index].type === "button")
        {
            optionText = document.createElement("p");
            optionCell.setAttribute("class", "option-cell-sp");
        } else
        {
            optionText = document.createElement("input");
            optionCell.setAttribute("class", "option-cell-input");
        }

        optionCell.setAttribute("colspan", (colspanFactor / optionsLength).toString());

        if (typeof (node.options[index]) !== 'undefined')
        {
            optionCell.setAttribute("id", "sprow" + rowIndex + "_cell" + index);
            optionText.innerHTML = document.createTextNode(node.options[index].text).data;
            if (spMetaInfo.buttonStructure === StrokePrevButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED &&
                optionsLength < getMaxButtons())
            {
                if (node.options[index].type === "button")
                    optionText.setAttribute("class", "option-cell-text-spanned");
                else
                {
                    optionText.setAttribute("class", "input-cell-spanned");
                    optionText.setAttribute("id", "inputAge");
                    optionText.setAttribute("type", "number");
                }
            } else
            {
                optionText.setAttribute("class", "option-cell-text");
            }
        } else
        {
            optionText.innerHTML = document.createTextNode("").data;
            optionText.setAttribute("class", "option-cell-empty");
        }
        optionCell.appendChild(optionText);
        scoreRow.appendChild(optionCell);
    }
    return scoreRow;
}

/**
 * returns an table cell to the table row. Table cell contains the question text.
 * @param quesText
 * @returns {Element}
 */
function getStrokePrevQuestionCell(quesText)
{
    // creating the question text cell
    var questionCell = document.createElement("td");
    questionCell.setAttribute("class", "question-cell");
    // creating the paragraph text for the question text
    var para = document.createElement("p");
    para.setAttribute("class", "bold-text");

    para.innerHTML = document.createTextNode(quesText).data;
    questionCell.appendChild(para);

    return questionCell;
}

/**
 * creates and returns an div containing the header text.
 * @param headerText
 * @returns {Element}
 */
function getStrokePrevHeader(header)
{
    // if header object is defined, create header row
    if (typeof (header !== 'undefined') && header.headerText !== "")
    {
        // create a table
        var headerTable = document.createElement("table");
        headerTable.setAttribute("class", "header-div");

        // creating the row
        var row = document.createElement("tr");
        // table cell to hold the header text
        var text = document.createElement("td");
        text.setAttribute("class", "question-cell")

        var para = document.createElement("p");
        para.setAttribute("class", "bold-text");
        para.innerHTML = document.createTextNode(header.headerText).data;

        text.appendChild(para);
        row.appendChild(text);

        var options = header.options;
        if (typeof (options) !== 'undefined')
        {
            for (var detail = 0; detail < options.length; detail++)
            {
                var headerCell = document.createElement("td");
                headerCell.setAttribute("class", "option-cell");

                var headerText = document.createElement("p");
                headerText.innerHTML = document.createTextNode(options[detail].text).data;

                if (spMetaInfo.buttonStructure === StrokePrevButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED)
                {
                    headerText.setAttribute("class", "header-cell-text-spanned");
                    headerCell.setAttribute("colspan", (colspanFactor / options.length).toString());
                } else
                {
                    headerText.setAttribute("class", "header-cell-text");
                }

                headerCell.appendChild(headerText);
                row.appendChild(headerCell);
            }
        }
        headerTable.appendChild(row);
        return headerTable;
    } else
        return false;
}

/**
 * returns the maximum number of buttons in the algorithm
 * @param data, complete algorithm string
 * @returns {number}
 */
function getStrokePrevMaxButtons()
{
    var sizeArray = [];
    var dataLength = strokePrevText.length;
    for (var ofBox = 1; ofBox < dataLength - 3; ofBox++)
    {
        var node = strokePrevText[ofBox];
        sizeArray.push(node.options.length);
    }

    return Math.max.apply(Math, sizeArray);
}

/**
 * Exception class
 */
var exception = function (userMessage, systemMessage)
{
    return {
        displayMessage: function ()
        {
            var exceptionMessage = document.createTextNode(userMessage + "<br/>" + systemMessage.toString());
            var exceptionPara = document.createElement("p");
            exceptionPara.setAttribute("class", StrokePrevStyleClass.EXCEPTION_MESSAGE);
            exceptionPara.innerHTML = exceptionMessage.data;

            // displaying the message in the body tag
            document.getElementsByTagName("body")[0].appendChild(exceptionPara);
        }
    }
};

/**
 * function updating the scoreHistory string, whenever a score option is clicked.
 *
 * @param rowIndex
 * @param cellIndex
 */
function amendStrokePrevHistory(rowIndex, cellIndex, cellId)
{
    if (cellIndex !== 0 || cellIndex < 0)
    {
        var scoreRow = getStrokePrevBoxInfo((Number(rowIndex) + 1).toString());

        var mCellIndex = (Number(cellIndex) - 1);
        strokePrevStatus.strokePrevStrokeHistory[rowIndex].cellIndex = mCellIndex.toString();

        var hisLength = strokePrevStatus.strokePrevStrokeHistory.length;
        for (var item = 0; item < hisLength; item++)
        {
            var mIndex = strokePrevStatus.strokePrevStrokeHistory[item].cellIndex;
            if (mIndex !== "")
            {
                if (item === Number(rowIndex))
                {
                    var scoreRowOptionIndex = scoreRow.options[Number(mIndex)];
                    if (typeof (scoreRowOptionIndex) !== 'undefined' && scoreRowOptionIndex.value !== "-1")
                    {
                        strokePrevStatus.strokePrevStrokeHistory[rowIndex]["status"] = "true";
                    } else
                    {
                        strokePrevStatus.strokePrevStrokeHistory[rowIndex]["status"] = "false";
                    }
                }
            }
        }
        if (cellId === "inputAge")
        {
            var age = document.getElementById("inputAge").value;
            if (isAgeValid(Number(age)))
                strokePrevStatus.strokePrevStrokeHistory[rowIndex].value = age;
            else
                delete strokePrevStatus.strokePrevStrokeHistory[rowIndex].value;
        }
        console.log(JSON.stringify(strokePrevStatus));
        generateStrokePrevResult();
    }
}

/**
 * function restoring the categories score result with history
 * @param rowIndex
 * @param cellIndex
 */
function restoreStrokePrevCategoriesResult()
{
    var scoreLength = strokePrevStatus.strokePrevStrokeHistory.length;
    for (var position = 0; position < scoreLength; position++)
    {
        var object = strokePrevStatus.strokePrevStrokeHistory[position];
        if (object.cellIndex === "0")
        {
            var resultBoxId = document.getElementById("category" + strokePrevText[position + 1].category);
            var resBoxNodes = resultBoxId.childNodes;
            if (resBoxNodes.length === 0)
            {
                var list = document.createElement("ul");
                list.setAttribute("id", "list" + strokePrevText[position + 1].category);
                resultBoxId.appendChild(list);
            } else
            {
                // getting the list by id
                list = document.getElementById("list" + strokePrevText[position + 1].category);
            }

            //creating a new list item
            var item = document.createElement("li");
            item.innerHTML = document.createTextNode(strokePrevText[position + 1].infoText).data;

            //appending the list item to the list
            list.appendChild(item);
        }
    }
}


/**
 * function generating the categories and assigning it to resultBoxes
 */
function generateStrokePrevCategoriesResult(rowIndex, cellIndex)
{
    console.log(JSON.stringify(strokePrevStatus));

    // getting the object at that index in data
    var object = strokePrevText[Number(rowIndex) + 1];

    // getting the category of the clicked cell
    var category = strokePrevText[Number(rowIndex) + 1].category;
    // getting the corresponding category result box
    var resultBoxId = document.getElementById("category" + category);
    // getting the result box child nodes
    var resBoxNodes = resultBoxId.childNodes;

    // if the clicked button is Yes, then only show result
    if (object.options[Number(cellIndex) - 1].text === "Yes")
    {
        if (resBoxNodes.length === 0)
        {
            var list = document.createElement("ul");
            list.setAttribute("id", "list" + category);
            resultBoxId.appendChild(list);
        } else
        {
            // getting the list by id
            list = document.getElementById("list" + category);
        }

        //removing the list item before appending the new list item
        removeStrokePrevListItem(resBoxNodes, object.infoText, category);

        //creating a new list item
        var item = document.createElement("li");
        item.innerHTML = document.createTextNode(object.infoText).data;

        //appending the list item to the list
        list.appendChild(item);
    } else
    {
        // removing the list item, if clicked on NO button
        removeStrokePrevListItem(resBoxNodes, object.infoText, category);
    }
}

/**
 * Function removing the duplicate list item from the result list
 * @param resBoxNodes
 * @param text
 * @param category
 */
function removeStrokePrevListItem(resBoxNodes, text, category)
{
    if (resBoxNodes.length > 0)
    {
        if (resBoxNodes[0].childNodes.length > 0)
        {
            var itemNodes = resBoxNodes[0].childNodes;
            for (var item = 0; item < itemNodes.length; item++)
            {
                var txt = new DOMParser().parseFromString(text, "text/html");

                if (itemNodes[item].innerHTML === txt.body.innerHTML)
                {
                    document.getElementById("list" + category).removeChild(itemNodes[item]);
                    break;
                }
            }
        }
    }
}

var chadVascSum;

/**
 * function generating the inference and assigning it to resultBox,
 * if all the options in the score are clicked.
 */
function generateStrokePrevResult()
{
    /**
     * Boolean maintaining whether all the options in the scores are clicked or not
     * @type {boolean}
     */
    var areAllCellsClicked = getStrokePrevClickStatus(strokePrevStatus.strokePrevStrokeHistory);

    var resultType = getStrokePrevBoxInfo("1997").boxType;
    if (areAllCellsClicked)
    {
        console.log("areAllCellsClicked: " + areAllCellsClicked);
        var result = getStrokePrevInference(areAllCellsClicked, resultType);

        var sumText = document.getElementById("scoreText");
        sumText.innerHTML = "Stroke Risk: " + result[0].scoreSum;

        chadVascSum = result[0].scoreSum;
    } else
    {
        document.getElementById("scoreText").innerHTML = "";
        chadVascSum = "";
    }

    // calculating the eGFR (MDRD)
    calculateEgfrMdrd();

    // call the showResultmv
    showResultMv();
}


/**
 * function deciding the inference and returning the conclusion
 * @param areAllCellsClicked
 * @returns {Array}
 */
function getStrokePrevInference(areAllCellsClicked, resultType)
{
    var scoreResult = [];
    if (areAllCellsClicked)
    {
        var sum = 0;
        var hisLength = strokePrevStatus.strokePrevStrokeHistory.length;

        for (var x = 0; x < hisLength; x++)
        {
            if (strokePrevText[x + 1].calculable)
            {
                var rowIndex = Number(strokePrevStatus.strokePrevStrokeHistory[x].rowIndex);
                var scoreRow = getStrokePrevBoxInfo(rowIndex.toString());

                var cellIndex;
                var value;

                if (rowIndex === 4)
                {
                    var age = Number(strokePrevStatus.strokePrevStrokeHistory[x].value);
                    if (age <= 64)
                        value = 0;
                    else if (age >= 65 && age <= 74)
                        value = 1;
                    else
                        value = 2;
                } else
                {
                    cellIndex = Number(strokePrevStatus.strokePrevStrokeHistory[x].cellIndex);
                    value = Number(scoreRow.options[cellIndex].value);
                }
                sum = sum + value;
            }
        }

        scoreResult.push({
            scoreSum: sum
        });
    }
    return scoreResult;
}

/**
 * function analyzing the sum and inference.
 * The list of conclusions is available in the data file with node id 1999.
 * @param sum
 */
function analyzeStrokePrevInference(sum)
{
    var conclusion = "";
    var range = getStrokePrevBoxInfo("1999");
    var resultLength = range.result.length;

    for (var item = 0; item < resultLength; item++)
    {
        if (eval(sum + range.result[item].operator + range.result[item].value))
        {
            conclusion = range.result[item].inference;
        }
    }
    return conclusion;
}

/**
 * function returning the history.
 * This scoreHistory array is the last status of an score.
 */
function saveStrokePrevHistory()
{
    return JSON.stringify(strokePrevStatus.strokePrevStrokeHistory);
}

/**
 * Sending the history json file to the Android for saving in the database
 */
function sendHistory()
{
    // calling the saveData function in the Java class and
    // passing the current DOM structure of the algorithm
    Android.saveData(JSON.stringify(strokePrevStatus.strokePrevStrokeHistory));
}

/**
 * This function creates and returns the footnote button to be appended in the footer section.
 * After clicking on the footnote button, the reference div is opened.
 */
function addStrokePrevFootnoteButton(footNode)
{
    // creating the reference button div element
    var refButton = document.createElement("button");

    // setting the style class to the reference button
    refButton.setAttribute("class", StrokePrevStyleClass.ABB_BUTTON);
    // assigning the id to the reference button
    refButton.setAttribute("id", "refButton");

    // setting the button text
    refButton.innerHTML = document.createTextNode(footNode.buttonText).data;

    return refButton;
}

/**
 * This function creates and returns the footnote button to be appended in the footer section.
 * After clicking on the footnote button, the reference div is opened.
 */
function addStrokePrevMoreInfoButton(footNode)
{
    var moreInfoDiv = document.createElement("div");
    // creating the reference button div element
    var moreInfoButton = document.createElement("button");

    // setting the style class to the reference button
    moreInfoButton.setAttribute("class", StrokePrevStyleClass.MORE_INFO_BUTTON);
    // assigning the id to the reference button
    moreInfoButton.setAttribute("id", "moreInfobutton");

    // creating the text node
    var moreInfoButtonText = document.createTextNode(footNode.moreInfotext);
    // setting the button text
    moreInfoButton.innerHTML = moreInfoButtonText.nodeValue;
    // appending the button to the div
    moreInfoDiv.appendChild(moreInfoButton);

    return moreInfoDiv;
}

/**
 * This function creates and returns the footnote button to be appended in the footer section.
 * After clicking on the footnote button, the reference div is opened.
 */
function addStrokePrevFlipPdfButton()
{
    // creating the flip-pdf image element
    var pdfImage = document.createElement("img");

    // setting the style class to the image button
    pdfImage.setAttribute("src", "algo_pdf.png");
    // assigning the id to the image button
    pdfImage.setAttribute("class", StrokePrevStyleClass.PDF_IMAGE);

    // creating the flip-pdf button, as container for the pdf image
    var pdfButton = document.createElement("button");
    // assigning the id to the flip-pdf button
    pdfButton.setAttribute("id", "pdfButton");
    // setting the style class to the flip-pdf button
    pdfButton.setAttribute("class", StrokePrevStyleClass.FLIP_PDF_BUTTON);

    // creating the anchor element
    var anchor = document.createElement("a");
    // setting the href attribute to the anchor tag
    anchor.setAttribute("href", "flipView");

    // appending flip-pdf-image and flip-pdf-button to the anchor element
    pdfButton.appendChild(pdfImage);
    anchor.appendChild(pdfButton);

    return anchor;
}

/**
 * function creating the div for footer.
 * footer div contains Footnote button, flip pdf button and Reference box
 */
function addStrokePrevFooter()
{
    var body = document.getElementsByTagName("body")[0];
    // creating the div element which will contain the footer
    var footerDiv = document.createElement("div");

    // Setting the style to the footer div
    footerDiv.setAttribute("class", StyleClass.FOOTER);
    footerDiv.setAttribute("id", "1998");
    var footNode = getStrokePrevBoxInfo("1998");

    // creating a new footer table
    var footerTable = document.createElement("table");

    // appending the first, second, third, fourth rows to footerTable
    if (footNode.hasPdfButton || footNode.hasFootnote || footNode.hasAbbreviation)
    {
        footerTable.appendChild(getStrokePrevFootNoteButtonRow(footNode));
    }
    if (footNode.hasFootnote)
    {
        footerTable.appendChild(getStrokePrevReferenceTextRow(footNode));
    }
    if (footNode.hasAbbreviation)
    {
        footerTable.appendChild(getStrokePrevAbbreviationTextRow(footNode));
    }
    if (footNode.hasMoreInfoButton)
    {
        footerTable.appendChild(getStrokePrevMoreInfoLinkButton(footNode));
    }

    // appending the Reset button to footerTable
    if (footNode.resetButtonText.trim() !== "")
        footerTable.appendChild(getStrokePrevResetButton(footNode));

    // appending the table to footerDiv
    footerDiv.appendChild(footerTable);
    // appending the footerDiv to the body

    body.appendChild(footerDiv);

    if (footNode.extraButtons.length > 0)
    {
        body.appendChild(addStrokePrevExtraButtons(footNode));
    }
}

/**
 * returns the table row containing footnote button cell and flip PDF button cell
 * @param footNode
 * @returns {Element}
 */
function getStrokePrevFootNoteButtonRow(footNode)
{
    // creating the first row of the footNode
    var row = document.createElement("tr");
    var cell = document.createElement("td");

    // Adding flip pdf button
    if (footNode.hasPdfButton)
    {
        cell.appendChild(addFlipPdfButton());
    }

    // Adding footNode button
    if (footNode.hasFootnote || footNode.hasAbbreviation)
    {
        cell.appendChild(addFootnoteButton(footNode));
    }

    // Adding table cell containing footnote button and flip pdf button
    row.appendChild(cell);
    return row;
}

/**
 * returns the table row containing reference text
 * @param footNode
 * @returns {Element}
 */
function getStrokePrevReferenceTextRow(footNode)
{
    // creating the second row of the footNode for holding the reference text
    var row = document.createElement("tr");

    var refPara = document.createElement("p");
    refPara.setAttribute("class", StrokePrevStyleClass.TEXT_LEFT);
    refPara.innerHTML = document.createTextNode(footNode.referenceText).data;

    var refDiv = document.createElement("div");
    refDiv.setAttribute("class", StrokePrevStyleClass.REFERENCE_BOX);
    refDiv.appendChild(refPara);

    var cell = document.createElement("td");
    cell.appendChild(refDiv);

    // Adding table cell containing reference text
    row.appendChild(cell);
    return row;
}

/**
 * returns the table row containing abbreviation text
 * @param footNode
 * @returns {Element}
 */
function getStrokePrevAbbreviationTextRow(footNode)
{
    // creating the third row of the footnode for holding the abbreviation text
    var row = document.createElement("tr");

    var abbText = document.createTextNode(footNode.abbreviationText);
    var abbPara = document.createElement("p");
    abbPara.setAttribute("class", StrokePrevStyleClass.TEXT_LEFT);
    abbPara.innerHTML = abbText.data;

    var abbDiv = document.createElement("div");
    abbDiv.setAttribute("class", StrokePrevStyleClass.REFERENCE_BOX);
    abbDiv.appendChild(abbPara);

    var cell = document.createElement("td");
    cell.appendChild(abbDiv);

    // Adding table cell containing abbreviation text
    row.appendChild(cell);
    return row;
}

/**
 * returns the table row containing more information link button
 * @param footNode
 * @returns {Element}
 */
function getStrokePrevMoreInfoLinkButton(footNode)
{
    // creating the fourth row of the footNode for holding 'For more information, see here' link button
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.appendChild(addMoreInfoButton(footNode));

    // Adding table cell containing more information link button
    row.appendChild(cell);
    return row;
}

/**
 * returns the table row containing Reset button
 * @param footNode
 * @returns {Element}
 */
function getStrokePrevResetButton(footNode)
{
    // creating the row for holding the Reset button
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.appendChild(addResetButton(footNode));

    // Adding table cell containing Reset button
    row.appendChild(cell);
    return row;
}

/**
 * makes the reset button and sends back to footer div
 * @param footNode
 * @returns {Element}
 */
function addStrokePrevResetButton(footNode)
{
    var resetDiv = document.createElement("div");
    // creating the reference button div element
    var resetButton = document.createElement("button");

    // setting the style class to the reference button
    resetButton.setAttribute("class", StrokePrevStyleClass.RESET_BUTTON);
    // assigning the id to the reference button
    resetButton.setAttribute("id", "resetButton");

    // creating the text node
    var resetButtonText = document.createTextNode(footNode.resetButtonText);
    // setting the button text
    resetButton.innerHTML = resetButtonText.nodeValue;
    // appending the button to the div
    resetDiv.appendChild(resetButton);

    return resetDiv;
}

/**
 * Function adding the extra buttons row at the bottom of the score
 * @param footNode
 * @returns {Element}
 */
function addStrokePrevExtraButtons(footNode)
{
    var extraButtons = footNode.extraButtons;
    var extraButtonDiv = document.createElement("div");
    extraButtonDiv.setAttribute("class", "extra-buttons-div");
    extraButtonDiv.setAttribute("id", "extraButtons");

    for (var item = 0; item < extraButtons.length; item++)
    {
        var btnTable = document.createElement("table");
        btnTable.appendChild(getExtraButtonRow(extraButtons[item]));
        extraButtonDiv.appendChild(btnTable);
    }

    return extraButtonDiv;
}

/**
 * function returning the extra button row
 * @param extraButtons
 * @returns {Element}
 */
function getStrokePrevExtraButtonRow(extraButtons)
{
    var row = document.createElement("tr");
    var btnArray = extraButtons["buttonRow"];

    var btnWidth = makeSizer(btnArray.length);
    for (var item = 0; item < btnArray.length; item++)
    {
        var btnCell = document.createElement("td");
        btnCell.setAttribute("class", "extra-button");
        btnCell.style.width = btnWidth;

        var mButton = document.createElement("button");
        mButton.setAttribute("class", "mextra-button");
        mButton.setAttribute("id", btnArray[item].buttonId);
        mButton.innerHTML = document.createTextNode(btnArray[item].text).data;

        btnCell.appendChild(mButton);
        row.appendChild(btnCell);
    }
    return row;
}

/**
 * function for setting the
 * @param paramList, associative array of keys and their values
 */
function setStrokePrevParameters(paramList)
{
    // parsing the parameter list in an array
    var params = JSON.parse(paramList);
    // getting the keys used in the array
    var keys = Object.keys(params[0]);

    for (var value = 0; value < keys.length; value++)
    {
        var keyNode = keys[value];

        var mappedIndex = strokePrevStatus.strokePrevStrokeHistory[mapping[keyNode]];
        var mValue = params[0][keyNode];

        if (mValue !== "")
        {
            mappedIndex.cellIndex = getStrokePrevSelectedCellIndex(keyNode, mValue);
            mappedIndex.status = "true"
        }
    }

    // emptying the strokePrevDiv
    var strokePrevDiv = document.getElementById("strokePrevDiv");
    while (strokePrevDiv.hasChildNodes())
    {
        strokePrevDiv.removeChild(strokePrevDiv.lastChild);
    }

    var footer = document.getElementById("1998");
    if (typeof (footer) !== 'undefined')
        document.getElementsByTagName("body")[0].removeChild(footer);

    var extraButtons = document.getElementById("extraButtons");
    if (typeof (extraButtons) !== 'undefined')
        document.getElementsByTagName("body")[0].removeChild(extraButtons);

    loadStrokePrevDataFile(JSON.stringify(strokePrevStatus.strokePrevStrokeHistory));
}

/**
 * Function calculates and returns the width of the buttons
 * @param numButtons, number of buttons in the decision box
 * @returns {string}
 */
function makeStrokePrevSizer(numButtons)
{
    return ((100 / numButtons) + "%");
}

/**
 * function calculating the colspan to be assigned to each of the table cell
 */
function getStrokePrevColspanFactor()
{
    var colspanFactor = 1;
    var dataLength = strokePrevText.length;
    for (var ofBox = 1; ofBox < dataLength - 3; ofBox++)
    {
        colspanFactor = colspanFactor * strokePrevText[ofBox].options.length;
    }

    return colspanFactor;
}

/**
 * function calculating the eGFR (MDRD)
 */
function calculateEgfrMdrd()
{
    var outputMdrd = document.getElementById("outputMdrd");

    if (JSON.parse(strokePrevStatus.strokePrevStrokeHistory[3].status) && JSON.parse(
            strokePrevStatus.strokePrevStrokeHistory[7].status) && isSerumCreatinineValid(Number(strokePrevStatus.serumCreatnine)))
    {
        var egfr = getEgfrSerumFactor() * Math.pow(Number(strokePrevStatus.serumCreatnine), -1.154) * Math.pow(Number(strokePrevStatus.strokePrevStrokeHistory[3].value), -0.203) * getEgfrGenderfactor()

        // updating the egfr value in the strokePrevStatus object
        strokePrevStatus.egfr = egfr.toFixed(2);

        if (egfr < 60)
            outputMdrd.value = egfr.toFixed(2);
        else
            outputMdrd.value = ">60";
    } else
    {
        outputMdrd.value = "";
    }
}


/**
 * returns the multiplication factor when calculating eGFR(MDRD)
 * @returns {186, if unit is mg/dl
 *           32788, if unit is umol/l}
 */
function getEgfrSerumFactor()
{
    var factor = [32788, 186];

    return factor[document.getElementById("serumUnit").selectedIndex];
}

/**
 * returns the gender multiplication factor
 *
 */
function getEgfrGenderfactor()
{
    return (strokePrevStatus.strokePrevStrokeHistory[7].cellIndex === "0") ? 0.742 : 1;
}

/**
 * function returning true, if all the questions are attempted, else false
 * @param statusArray
 * @returns {boolean}
 */
function getStrokePrevClickStatus(statusArray)
{
    /**
     * Boolean maintaining whether all the options in the scores are clicked or not
     * @type {boolean}
     */
    var areAllCellsClicked = false;

    //var hisLength = statusArray.length;
    var hisLength = 8;
    for (var item = 0; item < hisLength; item++)
    {
        if (typeof (strokePrevText[item].calculable) !== 'undefined')
        {
            if (JSON.parse(statusArray[item].status) && strokePrevText[item + 1].calculable)
            {
                areAllCellsClicked = true;
            } else
            {
                areAllCellsClicked = false;
                break;
            }
        } else
            continue;
    }

    return areAllCellsClicked;
}

/**
 * shows the appropriate category of bleeding risks
 * @param rowIndex
 * @param cellIndex
 */
function showCategories(rowIndex, cellIndex)
{

    var catDivText = document.getElementById("catDivText");

    // remove the category first and then show the category
    removeListItem(strokePrevText[Number(rowIndex)].infoText, strokePrevText[Number(rowIndex)].category);

    var category = getCategory(rowIndex);
    if (category !== "" && typeof (category) !== 'undefined')
    {

        // making the bleeding risk header visible
        catDivText.style.display = "block";
        catDivText.innerHTML = "Bleeding risk";
        if (!isElementAvailable("catDiv".concat(category)))
        {
            document.getElementById("categoryResultDiv").appendChild(makeCategory(category));
        }
        var listItem = document.createElement("li");
        listItem.innerHTML = strokePrevText[Number(rowIndex)].infoText;

        document.getElementById("catList".concat(category)).appendChild(listItem);
    } else
    {
        catDivText.style.display = "block";
        if (!isElementAvailable("catDiv0") && !isElementAvailable("catDiv1"))
        {
            catDivText.innerHTML = "Bleeding risk: none";
        } else
        {
            catDivText.innerHTML = "Bleeding risk";
        }
    }
}

/**
 * show or hide the bleeding risk header
 */
function displayBleedRiskHeader()
{
    // get the display status of the bleeding risk headersss

    if (isElementAvailable("catDiv0") || isElementAvailable("catDiv1"))
        document.getElementById("catDivText").style.display = "block";
    else
        document.getElementById("catDivText").style.display = "none";
}

/**
 * Function removing the duplicate list item from the result list
 * @param resBoxNodes
 * @param text
 * @param category
 */
function removeListItem(text, category)
{
    var list = document.getElementById("catList".concat(category));

    if (list !== null)
    {
        try
        {
            var itemNodes = list.childNodes;

            for (var item = 0; item < itemNodes.length; item++)
            {
                var txt = new DOMParser().parseFromString(text, "text/html");

                if (itemNodes[item].innerHTML === txt.body.innerHTML)
                {
                    document.getElementById("catList" + category).removeChild(itemNodes[item]);
                    if (itemNodes.length === 0)
                    {
                        document.getElementById("categoryResultDiv")
                            .removeChild(document.getElementById("catDiv".concat(category)));
                    }
                    break;
                }
            }
        } catch (e)
        {
            console.log("uncaught removeListItem exception");
        }
    }
}

/**
 * makes the <div> with one <p> tag and one <ul> showing the bleeding risks
 * @param id
 */
function makeCategory(category)
{
    var catDiv = document.createElement("div");
    catDiv.setAttribute("id", "catDiv".concat(category));

    var para = document.createElement("p");
    para.setAttribute("class", "category-bold-text");
    para.innerHTML = document.createTextNode(getStrokePrevBoxInfo("1997").categories[category]).data;

    var catList = document.createElement("ul");
    catList.setAttribute("id", "catList".concat(category));

    catDiv.appendChild(para);
    catDiv.appendChild(catList);

    return catDiv;
}

/**
 * returns whether the category is available or not
 * @param id
 * @returns {Element}
 */
function isElementAvailable(id)
{
    var isExists = false;
    var ele = document.getElementById(id);
    if (typeof (ele) !== 'undefined' && ele !== null)
        isExists = true;

    return isExists;
}

/**
 * function returning the category of the questions
 * @param rowIndex
 */
function getCategory(rowIndex)
{
    return strokePrevText[Number(rowIndex)].category;
}

/**
 * function indicating the change in the background color of the clicked button
 * @param clickedButton, the clicked button
 * @param allButtons, the un-clicked normal button
 * @param status, the status of the clicked button
 */
function toggleSpDecisionBtn(clickedButton)
{
    var thisElement = document.getElementById(clickedButton);

    thisElement.children[0].style.background = "#3d6ccc";
    thisElement.children[0].style.border = "1px solid #3d6ccc";
    thisElement.children[0].style.color = "#ffffff";

    if (clickedButton === "mitralValveYes")
        toggleCell = document.getElementById("mitralValveNo");
    else
        toggleCell = document.getElementById("mitralValveYes");

    toggleCell.children[0].style.background = "#ffffff";
    toggleCell.children[0].style.border = "1px solid #e0e0e0";
    toggleCell.children[0].style.color = "#acaeaf";
}

/* jshint esversion:6 */
/**
 * constants for decision button styles
 * @type {{LEFT_BUTTON_STYLE: number, RIGHT_BUTTON_STYLE: number, CENTER_BUTTON_STYLE: number}}
 */
const StrokePrevDecisionButtonStyles = {
    LEFT_BUTTON_STYLE: 1,
    RIGHT_BUTTON_STYLE: 2,
    CENTER_BUTTON_STYLE: 3
};

/**
 * string constants for available box structures
 * @type {{BOX_MULTI_LINE_TABULAR: string, BOX_MULTI_LINE_NON_TABULAR: string, BOX_SINGLE_LINE_TABULAR: string,
 *     BOX_SINGLE_LINE_NON_TABULAR: string}}
 */
const StrokePrevBoxStructure = {
    BOX_MULTI_LINE_TABULAR: 'box-multi-line-tabular',
    BOX_MULTI_LINE_NON_TABULAR: 'box-multi-line-non-tabular',
    BOX_SINGLE_LINE_TABULAR: 'box-single-line-tabular',
    BOX_SINGLE_LINE_NON_TABULAR: 'box-single-line-non-tabular'
};

/**
 * string constants for available button structure
 * @type {{BUTTON_MULTI_LINE_TABULAR: string, BUTTON_MULTI_LINE_NON_TABULAR: string, BUTTON_SINGLE_LINE_TABULAR:
 *     string, BUTTON_SINGLE_LINE_NON_TABULAR: string}}
 */
const StrokePrevButtonStructure = {
    BUTTON_MULTI_LINE_TABULAR: 'button-multi-line-tabular',
    BUTTON_MULTI_LINE_NON_TABULAR: 'button-multi-line-non-tabular',
    BUTTON_SINGLE_LINE_TABULAR: 'button-single-line-tabular',
    BUTTON_SINGLE_LINE_NON_TABULAR: 'button-single-line-non-tabular',
    BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED: 'button-single-line-non-tabular-spanned'
};

/**
 * string constants for available tool types
 * @type {{SCORE: string, INFORMATION_SCORE: string, SLIDING_SCORE: string}}
 */
const StrokePrevToolType = {
    RESULT_SCORE: "result-score",
    NON_RESULT_INFORMATION_SCORE: "non-result-information-score",
    RESULT_SLIDING_SCORE: "result-sliding-score",
    RESULT_CATEGORIES_SCORE: "result-categories-score"
};

/**
 * String constants for types of Result boxes
 * @type {{RESULT_BOX: string, SCORE_BOX: string, RESULT_SCORE_BOX: string, FOOTER: string}}
 */
const StrokePrevResultBoxTypes = {
    RESULT_BOX: 'result-box',
    SCORE_BOX: 'score-box',
    RESULT_SCORE_BOX: 'result-score-box',
    RESULT_CATEGORIES: 'result-categories',
    NONE: 'none',
    FOOTER: 'footer',
    RESULT_SCORE_PERCENTAGE_BOX: 'result-score-percentage-box'
};

/**
 * string constants for available styles classes
 * @type {{MINFO_TEXT1: string, MINFO_TEXT_BOLD: string, ABB_BUTTON: string, PDF_IMAGE: string, REFERENCE_BOX: string,
 *     TEXT_LEFT: string, FOOTER: string, FLIP_PDF_BUTTON: string, EXCEPTION_MESSAGE: string}}
 */
const StrokePrevStyleClass = {
    MINFO_TEXT1: 'minfo-text1',
    MINFO_TEXT_BOLD: 'minfo-text-bold',
    ABB_BUTTON: 'abb-button',
    PDF_IMAGE: 'pdf-image',
    REFERENCE_BOX: 'reference-box',
    TEXT_LEFT: 'text-left',
    FOOTER: 'footer',
    FLIP_PDF_BUTTON: 'flip-pdf-button',
    EXCEPTION_MESSAGE: 'exception-message',
    MORE_INFO_BUTTON: 'more-info-button',
    RESET_BUTTON: 'reset-button'
};

/**
 * Constants for length of time for scrolling the HTML page.
 */
const StrokePrevScroll = {
    LENGTH_SHORT: 100,
    LENGTH_LONG: 700
};

/**
 * constants for the gender
 */
const Gender = {
    MALE: 1,
    FEMALE: 0
};