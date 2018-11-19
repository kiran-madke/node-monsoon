/**
 * function indicating the change in the background color of the clicked button
 * @param clickedButton, the clicked button
 * @param allButtons, the un-clicked normal button
 * @param status, the status of the clicked button
 */
function toggleDecisionBtn(clickedButton, allButtons, status)
{
    var btnLength = allButtons.length;

    // looping through all the buttons and neutralizing them back to normal button
    for (var m = 0; m < btnLength; m++)
    {
        // setting style to all the center buttons
        $("#" + allButtons[m].id).change(DecisionButtonStyles.CENTER_BUTTON_STYLE);
        var unClickedCell = document.getElementById(allButtons[m].id);
        if (typeof (unClickedCell) !== 'undefined' && unClickedCell !== null)
        {
            var para = unClickedCell.childNodes[0];
            var nodeLength = para.childNodes.length;
            if (nodeLength > 0)
            {
                var pStyle = para.style;
                pStyle.background = "#ffffff";
                pStyle.border = "1px solid #e0e0e0";
                pStyle.color = "#acaeaf";
            }
        }
    }

    // setting style to the clicked button
    var clickedCell = document.getElementById(clickedButton);
    if (typeof (clickedCell) !== 'undefined' && clickedCell !== null)
    {
        var para = clickedCell.childNodes[0];
        var nodeLength = para.childNodes.length;
        if (nodeLength > 0)
        {
            var pStyle = para.style;
            pStyle.background = "#3d6ccc";
            pStyle.border = "1px solid #3d6ccc";
            pStyle.color = "#ffffff";
        }
    }
}


/**
 * returns the box object, containing the box information, based on the boxId
 */
function getBoxInfo(id)
{
    var tempBoxInfo = "";
    var dataLength = text.length;
    for (var m = 0; m < text.length; m++)
    {
        if (text[m].boxId === id)
        {
            tempBoxInfo = text[m];
            break;
        }
    }
    return tempBoxInfo;
}

/**
 * information about the score. This information is first object in the data javascript file
 */
var metaInfo;

/**
 * colspan value to assign to table cells, if the button structure is BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED
 */
var colspanFactor;

function Score(toolType, boxStructure, buttonStructure, header)
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
var scoreHistory = [];

/**
 * Function loading the data file in the HTML. This function is called at the very beginning
 *
 * @param fileName, data file to be loaded in the HTML
 */
function loadScoreDataFile(history)
{
    // Initializing the mainDiv
    var mainDiv = document.getElementById("mainDiv");

    // followUpBoxInfo is the information of the box
    var followUpBoxInfo;


    var ctr = 0;
    if (ctr === 0)
    {
        try
        {
            followUpBoxInfo = text[ctr];
            metaInfo = new Score(followUpBoxInfo.toolType, followUpBoxInfo.boxStructure,
				followUpBoxInfo.buttonStructure, followUpBoxInfo.header);
            ctr++;

            if (history === "")
            {
                scoreHistory = [];
            }
        }
        catch (e)
        {
            var temp = new exception("Score Data file not found", e);
            temp.displayMessage();
        }
    }

    // appending the score to the html body
    mainDiv.appendChild(getScore(metaInfo));

    // recreating the history of the score
    if (history !== "")
    {
        loadHistory(history);
    }

    // Adding footer div below
    addFooter();

    return true;
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
 * @param metaInfo
 * @returns {Element}
 */
function getScore(metaInfo)
{
    colspanFactor = getColspanFactor();
    // questionDiv holds all the headers, questions table, and their options
    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("class", "question-div");

    // appending the header to the questionDiv
    questionDiv.appendChild(getHeader(metaInfo.header));

    // appending the score table to the question div
    questionDiv.appendChild(getScoreTable());
    //appending the result table to the question div
    if (metaInfo.toolType === ToolType.RESULT_SCORE || metaInfo.toolType === ToolType.RESULT_CATEGORIES_SCORE)
    {
        // appending the result table to main score at bottom
        questionDiv.appendChild(getResultTable(getBoxInfo("997")));
    }

    return questionDiv;
}

/**
 * function loading the history of the score
 * @param history
 */
function loadHistory(history)
{
    try
    {
        scoreHistory = JSON.parse(history);
        console.log("loadHistory : " + JSON.stringify(scoreHistory));

        var scoreLength = scoreHistory.length;
        for (var ofRow = 0; ofRow < scoreLength; ofRow++)
        {
            var clickedCell = document.getElementById("row" + scoreHistory[ofRow].rowIndex + "_cell" +
			                                          scoreHistory[ofRow].cellIndex);

            if (clickedCell !== null)
            {
                var para = clickedCell.childNodes[0];
                var nodeLength = para.childNodes.length;
                if (nodeLength > 0 && scoreHistory[ofRow].cellIndex !== "")
                {
                    var pStyle = para.style;
                    pStyle.background = "#3d6ccc";
                    pStyle.border = "1px solid #3d6ccc";
                    pStyle.color = "#ffffff";
                }
            }
        }

        // If the tool type is not about categories, please generate result otherwise show categories
        if (metaInfo.toolType !== ToolType.RESULT_CATEGORIES_SCORE)
            generateResult();
        else
            restoreCategoriesResult();
    }
    catch (e)
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
function getResultTable(resultTabInfo)
{
    var resultBoxType = resultTabInfo.boxType;

    var resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "result-div");

    if (resultBoxType === ResultBoxTypes.RESULT_BOX)
    {
        if (resultTabInfo.extraInformation !== "")
        {
            resultDiv.appendChild(getExtraInformation(resultTabInfo));
        }
        resultDiv.appendChild(getInferenceDiv(resultTabInfo));
    }
    else if (resultBoxType === ResultBoxTypes.RESULT_SCORE_BOX)
    {
        resultDiv.appendChild(getScoreDiv(resultTabInfo));
        if (resultTabInfo.extraInformation !== "")
        {
            resultDiv.appendChild(getExtraInformation(resultTabInfo));
        }
        resultDiv.appendChild(getInferenceDiv(resultTabInfo));
    }
    else if (resultBoxType === ResultBoxTypes.SCORE_BOX)
    {
        resultDiv.appendChild(getScoreDiv(resultTabInfo));
        if (resultTabInfo.extraInformation !== "")
        {
            resultDiv.appendChild(getExtraInformation(resultTabInfo));
        }
    }
    else if (resultBoxType === ResultBoxTypes.RESULT_CATEGORIES)
    {
        for (var cat = 0; cat < resultTabInfo.categories.length; cat++)
        {
            resultDiv.appendChild(getCategoriesResultDiv(resultTabInfo, cat));
        }

        if (resultTabInfo.extraInformation !== "")
        {
            resultDiv.appendChild(getExtraInformation(resultTabInfo));
        }
    }
    else if (resultBoxType === ResultBoxTypes.RESULT_SCORE_PERCENTAGE_BOX)
    {
        resultDiv.appendChild(getScoreDiv(resultTabInfo));
        resultDiv.appendChild(getPercentageInfoDiv(resultTabInfo));
        resultDiv.appendChild(getInferenceDiv(resultTabInfo));
    }

    return resultDiv;
}

function getExtraInformation(resultTabInfo)
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
function getScoreDiv(resultTabInfo)
{
    // creating score div
    var scoreDiv = document.createElement("table");
    // setting style class to score div
    scoreDiv.setAttribute("class", "result-div");

    var row = document.createElement("tr");

    // scoreInfoText is text to left of score box, showing some message
    var scoreInfoText = document.createElement("p");
    scoreInfoText.setAttribute("class", "score-info-text");
    scoreInfoText.appendChild(document.createTextNode("Score"));

    var firstCell = document.createElement("td");
    firstCell.appendChild(scoreInfoText);
    firstCell.setAttribute("colspan", "1");

    // scoreText displays the score in the result box
    var scoreText = document.createElement("p");
    scoreText.setAttribute("id", "scoreText");

    var secondCell = document.createElement("td");
    secondCell.setAttribute("class", "score-text");
    firstCell.setAttribute("colspan", "1");
    secondCell.appendChild(scoreText);

    row.appendChild(firstCell);
    row.appendChild(secondCell);
    scoreDiv.appendChild(row);

    return scoreDiv;
}

/**
 * function creating and returning the result inference div
 * @param resultTabInfo
 */
function getInferenceDiv(resultTabInfo)
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
    }
    else
    {
        resultInfoText.innerHTML = document.createTextNode("");
    }

    // resultText displays the inference in the result box
    var resultText = document.createElement("p");
    resultText.setAttribute("class", "result-text");
    resultText.setAttribute("id", "resultText");

    resultDiv.appendChild(resultInfoText);
    resultDiv.appendChild(resultText);

    return resultDiv;
}

/**
 * function creating and returning the result percentage div
 * @param resultTabInfo
 */
function getPercentageInfoDiv(resultTabInfo)
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
    }
    else
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
function getCategoriesResultDiv(resultTabInfo, index)
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
    }
    else
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
function getScoreTable()
{
    // creating the questions table
    var scoreTable = document.createElement("table");
    scoreTable.setAttribute("class", "score-table");

    var dataLength = text.length;
    for (var i = 1; i < dataLength - 3; i++)
    {
        var node = text[i];
        // appending the score row to the table
        scoreTable.appendChild(getScoreRow(node, i));

        // pushing row number, option number and status to scoreHistory array
        scoreHistory.push({
            "rowIndex": i.toString(),
            "cellIndex": "",
            "status": "false"
        });
    }
    return scoreTable;
}

/**
 * Returns the score rows.
 * Each row contains questions and options
 * @param node
 * @returns {Element}
 */
function getScoreRow(node, rowIndex)
{
    // creating the score row
    var scoreRow = document.createElement("tr");

    scoreRow.setAttribute("id", rowIndex);
    // setting the class attribute
    scoreRow.setAttribute("class", "score-row");


    // appending the question text to the row
    scoreRow.appendChild(getQuestionCell(node.infoText));

    // get the max. number of options in the score
    if (metaInfo.buttonStructure === ButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED)
    {
        var optionsLength = node.options.length;
    }
    else
        optionsLength = getMaxButtons();

    for (var index = 0; index < optionsLength; index++)
    {
        var optionCell = document.createElement("td");
        optionCell.setAttribute("class", "option-cell");
        optionCell.setAttribute("colspan", (colspanFactor / optionsLength).toString());

        var optionText = document.createElement("p");

        if (typeof (node.options[index]) !== 'undefined')
        {
            optionCell.setAttribute("id", "row" + rowIndex + "_cell" + index);
            optionText.innerHTML = document.createTextNode(node.options[index].text).data;
            if (metaInfo.buttonStructure === ButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED &&
				optionsLength < getMaxButtons())
            {
                optionText.setAttribute("class", "option-cell-text-spanned");
            }
            else
            {
                optionText.setAttribute("class", "option-cell-text");
            }
        }
        else
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
function getQuestionCell(quesText)
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
function getHeader(header)
{
    // if header object is defined, create header row
    if (typeof (header !== 'undefined'))
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

                if (metaInfo.buttonStructure === ButtonStructure.BUTTON_SINGLE_LINE_NON_TABULAR_SPANNED)
                {
                    headerText.setAttribute("class", "header-cell-text-spanned");
                    headerCell.setAttribute("colspan", (colspanFactor / options.length).toString());
                }
                else
                {
                    headerText.setAttribute("class", "header-cell-text");
                }


                headerCell.appendChild(headerText);
                row.appendChild(headerCell);
            }
        }
        headerTable.appendChild(row);
        return headerTable;
    }
}

/**
 * returns the maximum number of buttons in the algorithm
 * @param data, complete algorithm string
 * @returns {number}
 */
function getMaxButtons()
{
    var sizeArray = [];
    var dataLength = text.length;
    for (var ofBox = 1; ofBox < dataLength - 3; ofBox++)
    {
        var node = text[ofBox];
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
            exceptionPara.setAttribute("class", StyleClass.EXCEPTION_MESSAGE);
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
function amendHistory(rowIndex, cellIndex)
{
    if (cellIndex !== 0 || cellIndex < 0)
    {
        var scoreRow = getBoxInfo((Number(rowIndex) + 1).toString());

        var mCellIndex = (Number(cellIndex) - 1);
        scoreHistory[rowIndex]["cellIndex"] = mCellIndex.toString();

        var hisLength = scoreHistory.length;
        for (var item = 0; item < hisLength; item++)
        {
            var mIndex = scoreHistory[item].cellIndex;
            if (mIndex !== "")
            {
                if (item === Number(rowIndex))
                {
                    var scoreRowOptionIndex = scoreRow.options[Number(mIndex)];
                    if (typeof (scoreRowOptionIndex) !== 'undefined' && scoreRowOptionIndex.value !== "-1")
                    {
                        scoreHistory[rowIndex]["status"] = "true";
                    }
                    else
                    {
                        scoreHistory[rowIndex]["status"] = "false";
                    }
                }
            }
        }
        console.log("amendHistory : " + JSON.stringify(scoreHistory));

        if (metaInfo.toolType !== ToolType.RESULT_CATEGORIES_SCORE)
            generateResult();
        else
            generateCategoriesResult(rowIndex, cellIndex);
    }
}

/**
 * function restoring the categories score result with history
 * @param rowIndex
 * @param cellIndex
 */
function restoreCategoriesResult()
{
    var scoreLength = scoreHistory.length;
    for (var position = 0; position < scoreLength; position++)
    {
        var object = scoreHistory[position];
        if (object.cellIndex === "0")
        {
            var resultBoxId = document.getElementById("category" + text[position + 1].category);
            var resBoxNodes = resultBoxId.childNodes;
            if (resBoxNodes.length === 0)
            {
                var list = document.createElement("ul");
                list.setAttribute("id", "list" + text[position + 1].category);
                resultBoxId.appendChild(list);
            }
            else
            {
                // getting the list by id
                list = document.getElementById("list" + text[position + 1].category);
            }

            //creating a new list item
            var item = document.createElement("li");
            item.innerHTML = document.createTextNode(text[position + 1].infoText).data;

            //appending the list item to the list
            list.appendChild(item);
        }
    }
}


/**
 * function generating the categories and assigning it to resultBoxes
 */
function generateCategoriesResult(rowIndex, cellIndex)
{
    console.log(rowIndex + " / " + cellIndex);
    console.log(JSON.stringify(scoreHistory));

    // getting the object at that index in data
    var object = text[Number(rowIndex) + 1];

    // getting the category of the clicked cell
    var category = text[Number(rowIndex) + 1].category;
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
        }
        else
        {
            // getting the list by id
            list = document.getElementById("list" + category);
        }

        //removing the list item before appending the new list item
        removeListItem(resBoxNodes, object.infoText, category);

        //creating a new list item
        var item = document.createElement("li");
        item.innerHTML = document.createTextNode(object.infoText).data;

        //appending the list item to the list
        list.appendChild(item);
    }
    else
    {
        // removing the list item, if clicked on NO button
        removeListItem(resBoxNodes, object.infoText, category);
    }
}

/**
 * Function removing the duplicate list item from the result list
 * @param resBoxNodes
 * @param text
 * @param category
 */
function removeListItem(resBoxNodes, text, category)
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

/**
 * function generating the inference and assigning it to resultBox,
 * if all the options in the score are clicked.
 */
function generateResult()
{
    /**
	 * Boolean maintaining whether all the options in the scores are clicked or not
	 * @type {boolean}
	 */
    var areAllCellsClicked = false;

    var hisLength = scoreHistory.length;
    for (var item = 0; item < hisLength; item++)
    {
        if (JSON.parse(scoreHistory[item].status))
        {
            areAllCellsClicked = true;
        }
        else
        {
            areAllCellsClicked = false;
            break;
        }
    }

    var resultType = getBoxInfo("997").boxType;
    if (areAllCellsClicked)
    {
        var result = getInference(areAllCellsClicked, resultType);

        if (resultType === ResultBoxTypes.RESULT_SCORE_BOX)
        {
            var infText = document.getElementById("resultText");
            infText.innerHTML = result[0]["inferenceText"];
            var sumText = document.getElementById("scoreText");
            sumText.innerHTML = result[0]["scoreSum"];
        }
        else if (resultType === ResultBoxTypes.RESULT_BOX)
        {
            var infText = document.getElementById("resultText");
            if (result[0]["scoreSum"] === 1 && scoreHistory[6].cellIndex === "1")
            {
                infText.innerHTML = "No antiplatelet or anticoagulant treatment (IIIB)";
            }
            else
            {
                infText.innerHTML = result[0]["inferenceText"];
            }
        }
        else if (resultType === ResultBoxTypes.SCORE_BOX)
        {
            var sumText = document.getElementById("scoreText");
            sumText.innerHTML = result[0]["scoreSum"];
        }
        else if (resultType === ResultBoxTypes.RESULT_SCORE_PERCENTAGE_BOX)
        {
            var infText = document.getElementById("resultText");
            var sumText = document.getElementById("scoreText");
            sumText.innerHTML = result[0]["scoreSum"];
            var percentText = document.getElementById("percentText");
            percentText.innerHTML = getPercentage(result[0]["scoreSum"]);

            if (result[0]["scoreSum"] === 1 && scoreHistory[6].cellIndex === "1")
            {
                infText.innerHTML = "No anticoagulation or antiplatelet therapy is recommended (IIIB)*";
            }
            else if (result[0]["scoreSum"] === 0 && scoreHistory[6].cellIndex === "0")
            {
                infText.innerHTML = "No anticoagulation or antiplatelet therapy is recommended (IIIB)*";
            }
            else if (result[0]["scoreSum"] === 2 && scoreHistory[6].cellIndex === "1")
            {
                infText.innerHTML = "Oral anticoagulation with NOAC<sup>**</sup> or VKA<sup>**, ***</sup> should be considered to prevent thromboembolism (class IIa, level of evidence B)";
            }
            else if (result[0]["scoreSum"] === 1 && scoreHistory[6].cellIndex === "0")
            {
                infText.innerHTML = "Oral anticoagulation with NOAC<sup>**</sup> or VKA<sup>**, ***</sup> should be considered to prevent thromboembolism (class IIa, level of evidence B)";
            }
            else if (result[0]["scoreSum"] >=3 && scoreHistory[6].cellIndex === "1")
            {
                infText.innerHTML = "Oral anticoagulation with NOAC<sup>**</sup> or VKA<sup>**, ***</sup> to prevent thromboembolism is recommended (class I, level of evidence A)";
            }
            else if (result[0]["scoreSum"] === 2 && scoreHistory[6].cellIndex === "0")
            {
                infText.innerHTML = "Oral anticoagulation with NOAC<sup>**</sup> or VKA<sup>**, ***</sup> to prevent thromboembolism is recommended (class I, level of evidence A)";
            }
            else
            {
                infText.innerHTML = result[0]["inferenceText"];
            }
        }
    }
    else
    {
        if (resultType === ResultBoxTypes.RESULT_SCORE_BOX)
        {
            document.getElementById("resultText").innerHTML = "";
            document.getElementById("scoreText").innerHTML = "";
        }
        else if (resultType === ResultBoxTypes.RESULT_BOX)
        {
            document.getElementById("resultText").innerHTML = "";
        }
        else if (resultType === ResultBoxTypes.SCORE_BOX)
        {
            document.getElementById("scoreText").innerHTML = "";
        }
        else if (resultType === ResultBoxTypes.RESULT_SCORE_PERCENTAGE_BOX)
        {
            document.getElementById("resultText").innerHTML = "";
            document.getElementById("scoreText").innerHTML = "";
            document.getElementById("percentText").innerHTML = "";
        }
    }
}

/**
 * function deciding the inference and returning the conclusion
 * @param areAllCellsClicked
 * @returns {Array}
 */
function getInference(areAllCellsClicked, resultType)
{
    var scoreResult = [];
    if (areAllCellsClicked)
    {
        var sum = 0;
        var hisLength = scoreHistory.length;

        for (var x = 0; x < hisLength; x++)
        {
            var rowIndex = Number(scoreHistory[x].rowIndex);
            var scoreRow = getBoxInfo(rowIndex.toString());

            var cellIndex = Number(scoreHistory[x].cellIndex);
            var value = Number(scoreRow.options[cellIndex].value);
            sum = sum + value;
        }

        if (resultType === ResultBoxTypes.RESULT_SCORE_BOX || resultType === ResultBoxTypes.RESULT_SCORE_PERCENTAGE_BOX)
        {
            scoreResult.push({
                inferenceText: analyzeInference(sum),
                scoreSum: sum
            });
        }
        else if (resultType === ResultBoxTypes.RESULT_BOX)
        {
            scoreResult.push({
                inferenceText: analyzeInference(sum),
                scoreSum: sum
            });
        }
        else if (resultType === ResultBoxTypes.SCORE_BOX)
        {
            scoreResult.push({
                scoreSum: sum
            });
        }
    }
    return scoreResult;
}

/**
 * function analyzing the sum and inference.
 * The list of conclusions is available in the data file with node id 999.
 * @param sum
 */
function analyzeInference(sum)
{
    //console.log(sum);

    var conclusion = "";
    var range = getBoxInfo("999");
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
function saveHistory()
{
    return JSON.stringify(scoreHistory);
}

/**
 * Sending the history json file to the Android for saving in the database
 */
function sendHistory()
{
    // calling the saveData function in the Java class and
    // passing the current DOM structure of the algorithm
    Android.saveData(JSON.stringify(scoreHistory));
}

/**
 * This function creates and returns the footnote button to be appended in the footer section.
 * After clicking on the footnote button, the reference div is opened.
 */
function addFootnoteButton(footNode)
{
    // creating the reference button div element
    var refButton = document.createElement("button");

    // setting the style class to the reference button
    refButton.setAttribute("class", StyleClass.ABB_BUTTON);
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
function addMoreInfoButton(footNode)
{
    var moreInfoDiv = document.createElement("div");
    // creating the reference button div element
    var moreInfoButton = document.createElement("button");

    // setting the style class to the reference button
    moreInfoButton.setAttribute("class", StyleClass.MORE_INFO_BUTTON);
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
function addFlipPdfButton()
{
    // creating the flip-pdf image element
    var pdfImage = document.createElement("img");

    // setting the style class to the image button
    pdfImage.setAttribute("src", "algo_pdf_black.png");
    // assigning the id to the image button
    pdfImage.setAttribute("class", StyleClass.PDF_IMAGE);

    // creating the flip-pdf button, as container for the pdf image
    var pdfButton = document.createElement("button");
    // assigning the id to the flip-pdf button
    pdfButton.setAttribute("id", "pdfButton");
    // setting the style class to the flip-pdf button
    pdfButton.setAttribute("class", StyleClass.FLIP_PDF_BUTTON);

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
function addFooter()
{
    var body = document.getElementsByTagName("body")[0];
    // creating the div element which will contain the footer
    var footerDiv = document.createElement("div");

    // Setting the style to the footer div
    footerDiv.setAttribute("class", StyleClass.FOOTER);
    footerDiv.setAttribute("id", "998");
    var footNode = getBoxInfo("998");

    // creating a new footer table
    var footerTable = document.createElement("table");

    // appending the first, second, third, fourth rows to footerTable
    if (footNode.hasPdfButton || footNode.hasFootnote || footNode.hasAbbreviation)
    {
        footerTable.appendChild(getFootNoteButtonRow(footNode));
    }
    if (footNode.hasFootnote)
    {
        footerTable.appendChild(getReferenceTextRow(footNode));
    }
    if (footNode.hasAbbreviation)
    {
        footerTable.appendChild(getAbbreviationTextRow(footNode));
    }
    if (footNode.hasMoreInfoButton)
    {
        footerTable.appendChild(getMoreInfoLinkButton(footNode));
    }

    // appending the Reset button to footerTable
    if (footNode.resetButtonText.trim() !== "")
        footerTable.appendChild(getResetButton(footNode));

    // appending the table to footerDiv
    footerDiv.appendChild(footerTable);
    // appending the footerDiv to the body

    body.appendChild(footerDiv);

    if (footNode.extraButtons.length > 0)
    {
        body.appendChild(addExtraButtons(footNode));
    }
}

/**
 * returns the table row containing footnote button cell and flip PDF button cell
 * @param footNode
 * @returns {Element}
 */
function getFootNoteButtonRow(footNode)
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
function getReferenceTextRow(footNode)
{
    // creating the second row of the footNode for holding the reference text
    var row = document.createElement("tr");

    var refPara = document.createElement("p");
    refPara.setAttribute("class", StyleClass.TEXT_LEFT);
    refPara.innerHTML = document.createTextNode(footNode.referenceText).data;

    var refDiv = document.createElement("div");
    refDiv.setAttribute("class", StyleClass.REFERENCE_BOX);
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
function getAbbreviationTextRow(footNode)
{
    // creating the third row of the footnode for holding the abbreviation text
    var row = document.createElement("tr");

    var abbText = document.createTextNode(footNode.abbreviationText);
    var abbPara = document.createElement("p");
    abbPara.setAttribute("class", StyleClass.TEXT_LEFT);
    abbPara.innerHTML = abbText.data;

    var abbDiv = document.createElement("div");
    abbDiv.setAttribute("class", StyleClass.REFERENCE_BOX);
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
function getMoreInfoLinkButton(footNode)
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
function getResetButton(footNode)
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
function addResetButton(footNode)
{
    var resetDiv = document.createElement("div");
    // creating the reference button div element
    var resetButton = document.createElement("button");

    // setting the style class to the reference button
    resetButton.setAttribute("class", StyleClass.RESET_BUTTON);
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
function addExtraButtons(footNode)
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
function getExtraButtonRow(extraButtons)
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
function setParameters(paramList)
{
    // parsing the parameter list in an array
    var params = JSON.parse(paramList);
    // getting the keys used in the array
    var keys = Object.keys(params[0]);

    for (var value = 0; value < keys.length; value++)
    {
        var keyNode = keys[value];
        //console.log(keyNode + " : " + params[0][keyNode]);

        var mappedIndex = scoreHistory[mapping[keyNode]];
        var mValue = params[0][keyNode];

        if (mValue !== "")
        {
            mappedIndex.cellIndex = getSelectedCellIndex(keyNode, mValue);
            mappedIndex.status = "true"
        }
    }

    // emptying the mainDiv
    var mainDiv = document.getElementById("mainDiv");
    while (mainDiv.hasChildNodes())
    {
        mainDiv.removeChild(mainDiv.lastChild);
    }

    var footer = document.getElementById("998");
    if (typeof (footer) !== 'undefined')
        document.getElementsByTagName("body")[0].removeChild(footer);

    var extraButtons = document.getElementById("extraButtons");
    if (typeof (extraButtons) !== 'undefined')
        document.getElementsByTagName("body")[0].removeChild(extraButtons);

    loadScoreDataFile(JSON.stringify(scoreHistory));
}

/**
 * Function calculates and returns the width of the buttons
 * @param numButtons, number of buttons in the decision box
 * @returns {string}
 */
function makeSizer(numButtons)
{
    return ((100 / numButtons) + "%");
}

/**
 * function calculating the colspan to be assigned to each of the table cell
 */
function getColspanFactor()
{
    var colspanFactor = 1;
    var dataLength = text.length;
    for (var ofBox = 1; ofBox < dataLength - 3; ofBox++)
    {
        colspanFactor = colspanFactor * text[ofBox].options.length;
    }

    return colspanFactor;
}


/**
 * constants for decision button styles
 * @type {{LEFT_BUTTON_STYLE: number, RIGHT_BUTTON_STYLE: number, CENTER_BUTTON_STYLE: number}}
 */
const DecisionButtonStyles = {
    LEFT_BUTTON_STYLE: 1,
    RIGHT_BUTTON_STYLE: 2,
    CENTER_BUTTON_STYLE: 3
};

/**
 * string constants for available box structures
 * @type {{BOX_MULTI_LINE_TABULAR: string, BOX_MULTI_LINE_NON_TABULAR: string, BOX_SINGLE_LINE_TABULAR: string,
 *     BOX_SINGLE_LINE_NON_TABULAR: string}}
 */
const BoxStructure = {
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
const ButtonStructure = {
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
const ToolType = {
    RESULT_SCORE: "result-score",
    NON_RESULT_INFORMATION_SCORE: "non-result-information-score",
    RESULT_SLIDING_SCORE: "result-sliding-score",
    RESULT_CATEGORIES_SCORE: "result-categories-score"
};

/**
 * String constants for types of Result boxes
 * @type {{RESULT_BOX: string, SCORE_BOX: string, RESULT_SCORE_BOX: string, FOOTER: string}}
 */
const ResultBoxTypes = {
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
const StyleClass = {
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
const Scroll = {
    LENGTH_SHORT: 100,
    LENGTH_LONG: 700
};
