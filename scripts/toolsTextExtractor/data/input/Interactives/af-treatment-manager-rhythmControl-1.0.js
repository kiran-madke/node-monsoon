/**
 * variable maintaining the status of Rate Control section
 */
var rhythmTherapy;

$(document).ready(function () {

    rhythmTherapy = new Object();

    function initialize() {
        //initializing the rhythmTherapyStatus
        rhythmTherapy = new Object();

        rhythmTherapy.mRTEhraScoreHistory = [];
        rhythmTherapy.signStructHeartIndex = "";
        rhythmTherapy.drugScoreHistory = [];

        // Initializing the rhythmTherapy array
        for (var ctr = 0; ctr < 6; ctr++) {
            rhythmTherapy.drugScoreHistory.push({
                "rowIndex": ctr.toString(),
                "cellIndex": "",
                "status": "false"
            });
        }

        var dataLength = text.length;
        for (var i = 1; i < dataLength - 3; i++) {
            rhythmTherapy.mRTEhraScoreHistory.push({
                "rowIndex": i.toString(),
                "cellIndex": "",
                "status": "false"
            });
        }
    }

    // initialize the rhythmTherapy object
    initialize();


    // get the rhythmTherapyStatus history
    var mRhythmControlStatus = localStorage.getItem("rhythmTherapy");

    if (typeof (mRhythmControlStatus) !== 'undefined' && mRhythmControlStatus !== null) {
        rhythmTherapy.mRTEhraScoreHistory = JSON.parse(mRhythmControlStatus).mRTEhraScoreHistory;
        rhythmTherapy.drugScoreHistory = JSON.parse(mRhythmControlStatus).drugScoreHistory;
        rhythmTherapy.signStructHeartIndex = JSON.parse(mRhythmControlStatus).signStructHeartIndex;
    }

    // loads the mEHRA score with history
    loadRTMEhraDataFile();
    // generate the results based on drugs
    generateRTDrugsResult();

    //console.log(JSON.stringify(rhythmTherapy));


    $("body").on("click", "td", function () {
        // id of the currently clicked table cell item
        var cellId = $(this).attr("id");

        // class of the currently clicked table cell item
        var cellClass = $(this).attr("class");

        var rowIndex = $(this).closest("tr").index();
        var cellIndex = $(this).closest("td").index();


        if (cellClass === "option-cell-rtehra") {
            var thisElement = document.getElementById(cellId);

            // creating the array of buttons in table row
            var tableRow = document.getElementById(cellId).parentNode.childNodes;

            // toggling the Rhythm Control button click background effects
            toggleRtDecisionBtn(cellId);
            amendRTHistory(rowIndex, cellIndex, cellId);

            var mCellId = cellId.substring(2);
            // toggling the Rate control button click background effects
            toggleDecisionBtn(mCellId);
            amendHistory(rowIndex, cellIndex, mCellId);
        } else if (cellClass === "option-cell-rtdrug") {
            var thisElement = document.getElementById(cellId);

            // creating the array of buttons in table row
            var tableRow = document.getElementById(cellId).parentNode.childNodes;

            // toggling the button click background effects
            toggleRtDecisionBtn(cellId);
            // making changes in the rhythmTherapy.drugScoreHistory status
            amendRtDrugHistory(rowIndex, cellIndex, cellId);
            // saving the rhythmTherapy object in the web storage
            //saveResult("rhythmTherapy", rhythmTherapy);
        }
    });

    $("input[name='rtSignRadioGroup']:radio").click(function () {
        signStructHeartIndex = $("input[name='rtSignRadioGroup']:radio").index(this);
        rhythmTherapy.signStructHeartIndex = signStructHeartIndex.toString();
        ////console.log(JSON.stringify(rhythmTherapy));

        // showing the results based on selection of drugs
        generateRTDrugsResult();
        // saving the rhythmTherapy current status object in the web storage 
        //saveResult("rhythmTherapy", rhythmTherapy);

        // showing the signs of structural heart disease and appending the AAD drug options
        //showSignStructHeartResult(signStructHeartIndex, loading.NORMAL);
    });
});

/**
 * function returning true, if all the questions are attempted, else false
 * @param statusArray
 * @returns {boolean}
 */
function getClickStatus(statusArray) {
    /**
     * Boolean maintaining whether all the options in the scores are clicked or not
     * @type {boolean}
     */
    var areAllCellsClicked = false;

    var hisLength = statusArray.length;
    for (var item = 0; item < hisLength; item++) {
        if (JSON.parse(statusArray[item].status)) {
            areAllCellsClicked = true;
        } else {
            areAllCellsClicked = false;
            break;
        }
    }

    return areAllCellsClicked;
}


var rhythmTherapyValues = [
    [
        ["First line rate control agent should be smallest dose of betablocker to achieve rate control (amiodarone is an option in haemodynamic instability or severely reduced LVEF, initial resting heart rate target < 110), add digoxin therapy if ongoing symptoms", "Avoid bradycardia"],
        ["First line rate control agent should be betablocker or diltiazem/verapamil (initial resting heart rate target < 110), add digoxin therapy if ongoing symptoms or to achieve target heart rate", "Avoid bradycardia"],
        ["First line rate control agent should be smallest dose of betablocker to achieve rate control (amiodarone is an option in haemodynamic instability or severely reduced LVEF, initial resting heart rate target < 110), add digoxin therapy if ongoing symptoms", "Avoid bradycardia", "Perform echocardiogram to determine further management / choice of maintenance therapy"]
    ],
    [
        ["Choose initial rate control therapy (I B) and combination therapy if required (IIaC)", "Target initial resting heart rate <110 beats/minute (IIaB), avoiding bradycardia", "Give beta-blocker or digoxin", "Consider early low-dose combination therapy", "In case of beta-blocker add digoxin, in case of digoxin add beta-blocker"],
        ["Choose initial rate control therapy (I B) and combination therapy if required (IIaC)", " Target initial resting heart rate <110 beats/minute (IIaB), avoiding bradycardia", "Give diltiazem/verapamil or beta-blocker or digoxin", "Add therapy to achieve target heart rate or if ongoing symptoms", "In case of diltiazem/verapamil or beta-blocker add digoxin, in case of digoxin add diltiazem/verapamil or beta-blocker"],
        ["Perform echocardiogram (I C)", "Choose initial rate control therapy (I B) and combination therapy if required (IIaC)", "Target initial resting heart rate <110 beats/minute (IIaB), avoiding bradycardia", "Give beta-blocker or digoxin", "Consider early low-dose combination therapy", "In case of beta-blocker add digoxin, in case of digoxin add beta-blocker"]
    ]
];

/**
 * function indicating the change in the background color of the clicked button
 * @param clickedButton, the clicked button
 * @param allButtons, the un-clicked normal button
 * @param status, the status of the clicked button
 */
function toggleRtDecisionBtn(clickedButton) {
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
function getRTBoxInfo(id) {
    var tempBoxInfo = "";
    var dataLength = text.length;
    for (var m = 0; m < text.length; m++) {
        if (text[m].boxId === id) {
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

function RTScore(toolType, boxStructure, buttonStructure, header) {
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
var mRTEhraScoreHistory = [];

/**
 * Array maintaining the status of rate control
 */
var rhythmTherapyStatus;

/**
 * Function loading the data file in the HTML. This function is called at the very beginning
 *
 * @param fileName, data file to be loaded in the HTML
 */
function loadRTMEhraDataFile() {
    // Initializing the mEhraDiv
    var rtMehraDiv = document.getElementById("rtMehraDiv");

    // followUpBoxInfo is the information of the box
    var followUpBoxInfo;

    var ctr = 0;
    if (ctr === 0) {
        try {
            followUpBoxInfo = text[ctr];
            metaInfo = new RTScore(followUpBoxInfo.toolType, followUpBoxInfo.boxStructure,
                followUpBoxInfo.buttonStructure, followUpBoxInfo.header);
            ctr++;
        } catch (e) {
            var temp = new exception("Score Data file not found", e);
            temp.displayMessage();
        }
    }

    // appending the score to the html body
    rtMehraDiv.appendChild(getRTScore(metaInfo));

    // recreating the history of the score
    if (typeof (rhythmTherapy.mRTEhraScoreHistory) !== "undefined") {
        loadRTHistory(rhythmTherapy.mRTEhraScoreHistory);
    }

    // Adding footer div below
    //addFooter();
}

function isFooterExists() {
    var isExists = false;
    var footer = document.getElementsByClassName("footer");
    var extraButtons = document.getElementsByClassName("extra-buttons-div");

    if (typeof (footer) !== 'undefined' && typeof (extraButtons) !== 'undefined') {
        isExists = true;
    }
    return isExists;
}

/**
 * returns the div with score table (with options) and footer at bottom
 * @param metaInfo
 * @returns {Element}
 */
function getRTScore(metaInfo) {
    // questionDiv holds all the headers, questions table, and their options
    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("class", "question-div");

    // appending the header to the questionDiv
    if (metaInfo.header.headerText !== "")
        questionDiv.appendChild(getRTHeader(metaInfo.header));

    // appending the score table to the question div
    questionDiv.appendChild(getRTScoreTable());
    //appending the result table to the question div
    if (metaInfo.toolType === ToolType.RESULT_SCORE || metaInfo.toolType === ToolType.RESULT_CATEGORIES_SCORE ||
        metaInfo.toolType === ToolType.RESULT_BOX_MEHRA) {
        // appending the result table to main score at bottom
        questionDiv.appendChild(getRTResultTable(getBoxInfo("997")));
        ////console.log(metaInfo.toolType);
    }

    return questionDiv;
}

/**
 * function loading the history of the score
 * @param history
 */
function loadRTHistory(history) {
    try {
        //mRTEhraScoreHistory = JSON.parse(history);
        mRTEhraScoreHistory = history;
        //console.log("loadHistory : " + JSON.stringify(mRTEhraScoreHistory));

        var scoreLength = mRTEhraScoreHistory.length;
        for (var ofRow = 0; ofRow < scoreLength; ofRow++) {
            var clickedCell = document.getElementById("rtrow" + mRTEhraScoreHistory[ofRow].rowIndex + "_cell" +
                mRTEhraScoreHistory[ofRow].cellIndex);

            if (clickedCell !== null) {
                var para = clickedCell.childNodes[0];
                var nodeLength = para.childNodes.length;
                if (nodeLength > 0 && mRTEhraScoreHistory[ofRow].cellIndex !== "") {
                    var pStyle = para.style;
                    pStyle.background = "#3d6ccc";
                    pStyle.border = "1px solid #3d6ccc";
                    pStyle.color = "#ffffff";
                }
            }

            if (metaInfo.toolType === ToolType.RESULT_BOX_MEHRA) {
                generateRTMehraResult(mRTEhraScoreHistory[ofRow].rowIndex,
                    Number(mRTEhraScoreHistory[ofRow].cellIndex) + 1,
                    "rtrow".concat(mRTEhraScoreHistory[ofRow].rowIndex).concat("_cell")
                    .concat(mRTEhraScoreHistory[ofRow].cellIndex), true);
                if (mRTEhraScoreHistory[ofRow].cellIndex === "1") {
                    break;
                }
            }
        }

        // setting the sign struct heart index radio button
        if (typeof (rhythmTherapy.signStructHeartIndex) !== "undefined" && rhythmTherapy.signStructHeartIndex !== "") {
            // setting the selected index for rtSignRadioGroup
            document.getElementById($("input[name='rtSignRadioGroup']:radio")[Number(rhythmTherapy.signStructHeartIndex)].id).checked = true;
        }

        // setting the drugs score history
        var mDrugsHistory = rhythmTherapy.drugScoreHistory;
        for (var drugs = 0; drugs < mDrugsHistory.length; drugs++) {
            if (mDrugsHistory[drugs].status && mDrugsHistory[drugs].cellIndex !== "") {
                toggleRtDecisionBtn("rtdrug".concat(drugs + 1).concat("_").concat("cell").concat(mDrugsHistory[drugs].cellIndex));
            }
        }

        // If the tool type is not about categories, please generate result otherwise show categories
        if (metaInfo.toolType !== ToolType.RESULT_CATEGORIES_SCORE && metaInfo.toolType !== ToolType.RESULT_BOX_MEHRA)
            generateResult();
        else if (metaInfo.toolType === ToolType.RESULT_BOX_MEHRA) {

        } else
            restoreCategoriesResult();
    } catch (e) {
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
function getRTResultTable(resultTabInfo) {
    var resultBoxType = resultTabInfo.boxType;

    var resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "result-div");

    if (resultBoxType === ResultBoxTypes.RESULT_BOX) {
        if (resultTabInfo.extraInformation !== "") {
            resultDiv.appendChild(getRtExtraInformation(resultTabInfo));
        }
        resultDiv.appendChild(getRtInferenceDiv(resultTabInfo));
    } else if (resultBoxType === ResultBoxTypes.RESULT_SCORE_BOX) {
        resultDiv.appendChild(getScoreDiv(resultTabInfo));
        if (resultTabInfo.extraInformation !== "") {
            resultDiv.appendChild(getRtExtraInformation(resultTabInfo));
        }
        resultDiv.appendChild(getRtInferenceDiv(resultTabInfo));
    } else if (resultBoxType === ResultBoxTypes.SCORE_BOX) {
        resultDiv.appendChild(getRtScoreDiv(resultTabInfo));
        if (resultTabInfo.extraInformation !== "") {
            resultDiv.appendChild(getRtExtraInformation(resultTabInfo));
        }
    } else if (resultBoxType === ResultBoxTypes.RESULT_CATEGORIES) {
        for (var cat = 0; cat < resultTabInfo.categories.length; cat++) {
            resultDiv.appendChild(getRtCategoriesResultDiv(resultTabInfo, cat));
        }

        if (resultTabInfo.extraInformation !== "") {
            resultDiv.appendChild(getRtExtraInformation(resultTabInfo));
        }
    }

    return resultDiv;
}

function getRtExtraInformation(resultTabInfo) {

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
function getRTScoreDiv(resultTabInfo) {
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
    scoreText.setAttribute("id", "scoreTextRt");

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
function getRtInferenceDiv(resultTabInfo) {
    // creating result div
    var resultDiv = document.createElement("div");
    // setting style class to result div
    resultDiv.setAttribute("class", "result-div");

    // resultInfoText is text above result box, showing some message
    var resultInfoText = document.createElement("p");
    resultInfoText.setAttribute("class", "result-info-text");
    if (typeof (resultTabInfo.resultInfoText) !== 'undefined') {
        resultInfoText.innerHTML = document.createTextNode(resultTabInfo.resultInfoText).data;
    } else {
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
 * function creating and returning the result inference div
 * @param resultTabInfo
 */
function getRTCategoriesResultDiv(resultTabInfo, index) {
    var categories = resultTabInfo.categories;

    // creating result div
    var resultDiv = document.createElement("div");
    // setting style class to result div
    resultDiv.setAttribute("class", "result-div");

    // resultInfoText is text above result box, showing some message
    var resultInfoText = document.createElement("p");
    resultInfoText.setAttribute("class", "result-info-text");
    if (typeof (categories[index]) !== 'undefined') {
        resultInfoText.innerHTML = document.createTextNode(categories[index]).data;
    } else {
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
function getRTScoreTable() {
    // creating the questions table
    var scoreTable = document.createElement("table");
    scoreTable.setAttribute("class", "score-table");

    var dataLength = text.length;
    for (var i = 1; i < dataLength - 3; i++) {
        var node = text[i];
        // appending the score row to the table
        scoreTable.appendChild(getRTScoreRow(node, i));
    }
    return scoreTable;
}

/**
 * Returns the score rows.
 * Each row contains questions and options
 * @param node
 * @returns {Element}
 */
function getRTScoreRow(node, rowIndex) {
    // creating the score row
    var scoreRow = document.createElement("tr");

    scoreRow.setAttribute("id", "rt" + rowIndex);
    // setting the class attribute
    scoreRow.setAttribute("class", "score-row");


    // appending the question text to the row
    scoreRow.appendChild(getQuestionCell(node.infoText));

    // get the max. number of options in the score
    var optionsLength = getMaxButtons();

    for (var index = 0; index < optionsLength; index++) {
        var optionCell = document.createElement("td");
        optionCell.setAttribute("class", "option-cell-rtehra");
        optionCell.setAttribute("id", "rtrow" + rowIndex + "_cell" + index);

        var optionText = document.createElement("p");

        if (typeof (node.options[index]) !== 'undefined') {
            optionText.innerHTML = document.createTextNode(node.options[index].text).data;
            optionText.setAttribute("class", "option-cell-text");
        } else {
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
function getRTQuestionCell(quesText) {
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
function getRTHeader(header) {
    // if header object is defined, create header row
    if (typeof (header !== 'undefined')) {
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
        if (typeof (options) !== 'undefined') {
            for (var detail = 0; detail < options.length; detail++) {
                var headerCell = document.createElement("td");
                headerCell.setAttribute("class", "option-cell");

                var headerText = document.createElement("p");
                headerText.innerHTML = document.createTextNode(options[detail].text).data;
                headerText.setAttribute("class", "header-cell-text");

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
function getRTMaxButtons() {
    var sizeArray = [];
    var dataLength = text.length;
    for (var ofBox = 1; ofBox < dataLength - 3; ofBox++) {
        var node = text[ofBox];
        sizeArray.push(node.options.length);
    }

    return Math.max.apply(Math, sizeArray);
}

/**
 * Exception class
 */
var exception = function (userMessage, systemMessage) {
    return {
        displayMessage: function () {
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
 * function updating the mRTEhraScoreHistory string, whenever a score option is clicked.
 *
 * @param rowIndex
 * @param cellIndex
 */
function amendRTHistory(rowIndex, cellIndex, cellId) {
    if (cellIndex !== 0 || cellIndex < 0) {
        var scoreRow = getBoxInfo((Number(rowIndex) + 1).toString());

        var mCellIndex = (Number(cellIndex) - 1);
        rhythmTherapy.mRTEhraScoreHistory[rowIndex]["cellIndex"] = mCellIndex.toString();

        var hisLength = rhythmTherapy.mRTEhraScoreHistory.length;
        for (var item = 0; item < hisLength; item++) {
            var mIndex = rhythmTherapy.mRTEhraScoreHistory[item].cellIndex;
            if (mIndex !== "") {
                if (item === Number(rowIndex)) {
                    var scoreRowOptionIndex = scoreRow.options[Number(mIndex)];
                    if (typeof (scoreRowOptionIndex) !== 'undefined' && scoreRowOptionIndex.value !== "-1") {
                        rhythmTherapy.mRTEhraScoreHistory[rowIndex]["status"] = "true";
                    } else {
                        rhythmTherapy.mRTEhraScoreHistory[rowIndex]["status"] = "false";
                    }
                }
            }
        }
        //console.log("amendHistory : " + JSON.stringify(rhythmTherapy));

        if (metaInfo.toolType !== ToolType.RESULT_CATEGORIES_SCORE && metaInfo.toolType !== ToolType.RESULT_BOX_MEHRA)
            generateResult();
        else if (metaInfo.toolType === ToolType.RESULT_BOX_MEHRA)
            generateRTMehraResult(rowIndex, cellIndex, cellId, false);
        else
            generateCategoriesResult(rowIndex, cellIndex);
    }
}

/**
 * function updating the scoreHistory string, whenever a score option is clicked.
 *
 * @param rowIndex
 * @param cellIndex
 */
function amendRtDrugHistory(rowIndex, cellIndex, cellId) {
    if (cellIndex !== 0 || cellIndex < 0) {

        if (cellIndex === 2) {
            rhythmTherapy.drugScoreHistory[rowIndex].cellIndex = "1";
            rhythmTherapy.drugScoreHistory[rowIndex].status = "true";
        } else {
            var mCellIndex = Number(cellIndex) - 1;
            rhythmTherapy.drugScoreHistory[rowIndex].cellIndex = mCellIndex.toString();
            rhythmTherapy.drugScoreHistory[rowIndex].status = "true";
        }
        //console.log("amendRtDrugHistory : " + JSON.stringify(rhythmTherapy));

        // generate the results after user clicks completes the drug selection
        generateRTDrugsResult();
    }
}

/**
 * function showing the results after user selects any of the drugs from the list
 */
function generateRTDrugsResult() {
    if (getClickStatus(rhythmTherapy.mRTEhraScoreHistory)) {

        var resultTextDrugsRt = document.getElementById("resultTextDrugsRt");
        var drugsHistory = rhythmTherapy.drugScoreHistory;

        if (getClickStatus(rhythmTherapy.drugScoreHistory)) {

            // getting the numbers of the positive buttons clicked
            var noOfPositives = getPositiveCtr();

            if (rhythmTherapy.mRTEhraScoreHistory[0].cellIndex === "1" && rhythmTherapy.signStructHeartIndex === "0") {
                resultTextDrugsRt.innerHTML = "Rhythm control therapy is not needed in this patient";
            } else if (rhythmTherapy.mRTEhraScoreHistory[0].cellIndex !== "1" && rhythmTherapy.signStructHeartIndex === "0") {
                if (noOfPositives === 0) {
                    resultTextDrugsRt.innerHTML = "Inform the patient about the possibility of a catheter ablation which should target isolation of the pulmonary veins and can be performed using radiofrequency catheters or cryoballoons (IIaB).<br/>First line rhythm control agents would be dronedarone (IA), flecainide (IA), propafenone (IA) and sotalol (which requires careful evaluation of proarrhythmic risk).";
                } else if (noOfPositives === 1) {
                    if (drugsHistory[0].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF) or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                    } else if (drugsHistory[1].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[2].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[3].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[4].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[5].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery) or repeat ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF) or AAD.";
                    } else {
                        resultTextDrugsRt.innerHTML = "";
                    }
                } else if (noOfPositives > 1 && noOfPositives === 4 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used drug therapy already in place and seems to fail.<br/>Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                } else if (noOfPositives > 1 && noOfPositives < 4 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail. Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                } else if (noOfPositives > 1 && noOfPositives < 5 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail. Consider another AAD, catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery).";
                } else if (noOfPositives > 1 && noOfPositives === 5 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail.<br/>Consider hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery).";
                } else if (noOfPositives > 1 && noOfPositives < 5 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, amiodarone or repeat ablation.";
                } else if (noOfPositives === 5 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail. Consider amiodarone.";
                } else if (noOfPositives === 2 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD or repeat ablation";
                } else if (noOfPositives > 2 && noOfPositives < 6 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail. Consider another AAD, hybrid therapy or repeat ablation";
                } else if (noOfPositives === 6) {
                    resultTextDrugsRt.innerHTML = "Failure of both therapy options.<br/>Consider hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else {
                    resultTextDrugsRt.innerHTML = "";
                }
            } else if (rhythmTherapy.signStructHeartIndex === "1") {
                if (noOfPositives === 0) {
                    resultTextDrugsRt.innerHTML = "Inform the patient about the possibility of a catheter ablation which should target isolation of the pulmonary veins and can be performed using radiofrequency catheters or cryoballoons (IIaB).<br/>First line rhythm control agents would be dronedarone (IA), sotalol (IA, which requires careful evaluation of proarrhythmic risk). Amiodarone is a second choice therapy in many patients due to its extracardiac side effects (IA).";
                } else if (noOfPositives === 1) {
                    if (drugsHistory[0].cellIndex === "0")
                        resultTextDrugsRt.innerHTML = "Consider catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF) or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                    else if (drugsHistory[1].cellIndex === "0")
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    else if (drugsHistory[2].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[3].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[4].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[5].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery) or repeat ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF) or AAD.";
                    } else {
                        resultTextDrugsRt.innerHTML = "";
                    }
                } else if (noOfPositives > 1 && noOfPositives === 4 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used drug therapy already in place and seems to fail.<br/>Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF)."
                } else if (noOfPositives > 1 && noOfPositives < 4 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail. Consider amiodarone, another AAD or catheter ablation.";
                } else if (noOfPositives > 1 && noOfPositives < 5 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, amiodarone or repeat ablation.";
                } else if (noOfPositives > 4 && noOfPositives < 6 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail.<br/>Consider amiodarone, repeat ablation or hybrid therapy.";
                } else if (noOfPositives > 1 && noOfPositives === 2 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives > 4 && noOfPositives < 6 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Consider catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives > 2 && noOfPositives < 5 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail.<br/>Consider another AAD, catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives === 2 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD or repeat ablation";
                } else if (noOfPositives > 1 && noOfPositives === 3 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, repeat ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives > 3 && noOfPositives < 6 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery) or repeat cathether ablation";
                } else if (noOfPositives === 6) {
                    resultTextDrugsRt.innerHTML = "Consider hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else {
                    resultTextDrugsRt.innerHTML = "";
                }
            } else if (rhythmTherapy.signStructHeartIndex === "2") {
                if (noOfPositives === 0) {
                    resultTextDrugsRt.innerHTML = "First line rhythm control agent would be amiodarone (IA). Inform the patient also about the possibility of a catheter ablation which should target isolation of the pulmonary veins and can be performed using radiofrequency catheters or cryoballoons (IIaB).";
                } else if (noOfPositives === 1) {
                    if (drugsHistory[0].cellIndex === "0")
                        resultTextDrugsRt.innerHTML = "Consider catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF) or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                    else if (drugsHistory[1].cellIndex === "0")
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    else if (drugsHistory[2].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[3].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[4].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                    } else if (drugsHistory[5].cellIndex === "0") {
                        resultTextDrugsRt.innerHTML = "Consider hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery) or repeat ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF) or AAD.";
                    } else {
                        resultTextDrugsRt.innerHTML = "";
                    }
                } else if (noOfPositives > 1 && noOfPositives < 4 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail.<br/>Consider amiodarone, another AAD or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                } else if (noOfPositives > 1 && noOfPositives === 4 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Consider amiodarone or catheter ablation (should target PVI; IB for paroxysmal AF and IIaB for persistent AF).";
                } else if (noOfPositives > 1 && noOfPositives === 2 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives > 2 && noOfPositives < 5 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail.<br/>Consider another AAD, catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives > 1 && noOfPositives === 5 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "1") {
                    resultTextDrugsRt.innerHTML = "Consider catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives > 1 && noOfPositives < 5 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, amiodarone or repeat ablation.";
                } else if (noOfPositives > 4 && noOfPositives < 6 && drugsHistory[0].cellIndex === "1" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Used therapy already in place and seems to fail.<br/>Consider amiodarone, repeat catheter ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery).";
                } else if (noOfPositives === 2 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD or repeat ablation";
                } else if (noOfPositives > 1 && noOfPositives === 3 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, repeat ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives > 3 && noOfPositives < 6 && drugsHistory[0].cellIndex === "0" && drugsHistory[5].cellIndex === "0") {
                    resultTextDrugsRt.innerHTML = "Consider another AAD, repeat ablation or hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else if (noOfPositives === 6) {
                    resultTextDrugsRt.innerHTML = "Consider hybrid therapy (involves combination of antiarrhythmic drugs, catheter ablation, and/or AF surgery)";
                } else {
                    resultTextDrugsRt.innerHTML = "";
                }
            } else {
                resultTextDrugsRt.innerHTML = "";
            }
        } else {
            resultTextDrugsRt.innerHTML = "";
        }
    }
}

/**
 * function returning the number of positives in the history array
 */
function getPositiveCtr() {
    var drugsHistory = rhythmTherapy.drugScoreHistory;
    var sum = 0;
    for (var x = 0; x < drugsHistory.length; x++) {
        if (drugsHistory[x].cellIndex === "0") {
            sum = sum + 1;
        }
    }
    return sum;
}

var tempvalue;

function generateRTMehraResult(rowIndex, cellIndex, cellId, isHistory) {
    if (cellId == "rtrow1_cell1") {
        var child = document.getElementById('rtrow2_cell1').firstChild;
        child.removeAttribute("style");

        document.getElementById('rtrow2_cell1').firstChild.className = "default-selected";
        document.getElementById('rtrow3_cell1').firstChild.className = "default-selected";
        document.getElementById('rtrow4_cell1').firstChild.className = "default-selected";

        document.getElementById('rtrow2_cell1').firstChild.removeAttribute("style");
        document.getElementById('rtrow3_cell1').firstChild.removeAttribute("style");
        document.getElementById('rtrow4_cell1').firstChild.removeAttribute("style");
        document.getElementById('rtrow2_cell0').firstChild.removeAttribute("style");
        document.getElementById('rtrow3_cell0').firstChild.removeAttribute("style");
        document.getElementById('rtrow4_cell0').firstChild.removeAttribute("style");


        document.getElementById("resultTextRt").innerHTML =
            "No symptoms, AF does not cause any symptoms (mEHRA Score 1)";
        document.getElementById('rt2').style.pointerEvents = 'none';
        document.getElementById('rt3').style.pointerEvents = 'none';
        document.getElementById('rt4').style.pointerEvents = 'none';

        if (!isHistory) {
            for (var his = 1; his < 4; his++) {
                rhythmTherapy.mRTEhraScoreHistory[his]["cellIndex"] = "1";
                rhythmTherapy.mRTEhraScoreHistory[his]["status"] = "true";
            }
        }

    } else if (cellId == "rtrow1_cell0") {
        document.getElementById('rt2').style.pointerEvents = 'auto';
        document.getElementById("resultTextRt").innerHTML = "";
        document.getElementById('rtrow2_cell1').firstChild.className = "option-cell-text";
        document.getElementById('rtrow3_cell1').firstChild.className = "option-cell-text";
        document.getElementById('rtrow4_cell1').firstChild.className = "option-cell-text";

        if (!isHistory) {
            for (var his = 1; his < 4; his++) {
                rhythmTherapy.mRTEhraScoreHistory[his]["cellIndex"] = "";
                rhythmTherapy.mRTEhraScoreHistory[his]["status"] = "false";
            }
        }
    }

    if (cellId == "rtrow2_cell0") {
        tempvalue = "2b";
        document.getElementById('rt3').style.pointerEvents = 'auto';
        document.getElementById("resultTextRt").innerHTML = "";
        document.getElementById('rtrow3_cell1').firstChild.className = "option-cell-text";
        document.getElementById('rtrow4_cell1').firstChild.className = "option-cell-text";

        if (!isHistory) {
            for (var his = 2; his < 4; his++) {
                rhythmTherapy.mRTEhraScoreHistory[his]["cellIndex"] = "";
                rhythmTherapy.mRTEhraScoreHistory[his]["status"] = "false";
            }
        }
    } else if (cellId == "rtrow2_cell1") {
        document.getElementById("resultTextRt").innerHTML =
            "Mild symptoms, normal daily activity not affected by symptoms related to AF (mEHRA Score 2a)";
        document.getElementById('rt3').style.pointerEvents = 'none';
        document.getElementById('rt4').style.pointerEvents = 'none';


        document.getElementById('rtrow3_cell1').firstChild.className = "default-selected";
        document.getElementById('rtrow4_cell1').firstChild.className = "default-selected";

        document.getElementById('rtrow3_cell1').firstChild.removeAttribute("style");
        document.getElementById('rtrow4_cell1').firstChild.removeAttribute("style");

        document.getElementById('rtrow3_cell0').firstChild.removeAttribute("style");
        document.getElementById('rtrow4_cell0').firstChild.removeAttribute("style");

        if (!isHistory) {
            for (var his = 2; his < 4; his++) {
                rhythmTherapy.mRTEhraScoreHistory[his]["cellIndex"] = "1";
                rhythmTherapy.mRTEhraScoreHistory[his]["status"] = "true";
            }
        }
    }

    if (cellId == "rtrow3_cell0") {
        document.getElementById('rt4').style.pointerEvents = 'auto';
        document.getElementById("resultTextRt").innerHTML = "";
        document.getElementById('rtrow4_cell1').firstChild.className = "option-cell-text";

        if (!isHistory) {
            for (var his = 3; his < 4; his++) {
                rhythmTherapy.mRTEhraScoreHistory[his]["cellIndex"] = "";
                rhythmTherapy.mRTEhraScoreHistory[his]["status"] = "false";
            }
        }
    } else if (cellId == "rtrow3_cell1") {
        document.getElementById('rt4').style.pointerEvents = 'none';


        document.getElementById("resultTextRt").innerHTML =
            "Moderate symptoms, normal daily activity not affected by symptoms related to AF, but patient troubled by symptoms (mEHRA Score 2b)";
        document.getElementById('rtrow4_cell1').firstChild.className = "default-selected";
        document.getElementById('rtrow4_cell1').firstChild.removeAttribute("style");
        document.getElementById('rtrow4_cell0').firstChild.removeAttribute("style");

        if (!isHistory) {
            for (var his = 3; his < 4; his++) {
                rhythmTherapy.mRTEhraScoreHistory[his]["cellIndex"] = "1";
                rhythmTherapy.mRTEhraScoreHistory[his]["status"] = "true";
            }
        }
    }

    if (cellId == "rtrow4_cell0") {
        document.getElementById("resultTextRt").innerHTML =
            "Disabling symptoms, normal daily activity discontinued (mEHRA Score 4)";
    } else if (cellId == "rtrow4_cell1") {
        document.getElementById("resultTextRt").innerHTML =
            "Severe symptoms, normal daily activity affected by symptoms related to AF  (mEHRA Score 3)";
    }
    ////console.log(JSON.stringify(rhythmTherapy));
    // save the results in the local web storage
    //saveResult("rhythmTherapy", rhythmTherapy);
    // showing the results based on selection of drugs
    generateRTDrugsResult();
}

/**
 * function restoring the categories score result with history
 * @param rowIndex
 * @param cellIndex
 */
function restoreRTCategoriesResult() {
    var scoreLength = rhythmTherapy.mRTEhraScoreHistory.length;
    for (var position = 0; position < scoreLength; position++) {
        var object = rhythmTherapy.mRTEhraScoreHistory[position];
        if (object.cellIndex === "0") {
            var resultBoxId = document.getElementById("category" + text[position + 1].category);
            var resBoxNodes = resultBoxId.childNodes;
            if (resBoxNodes.length === 0) {
                var list = document.createElement("ul");
                list.setAttribute("id", "list" + text[position + 1].category);
                resultBoxId.appendChild(list);
            } else {
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
function generateRTCategoriesResult(rowIndex, cellIndex) {
    ////console.log(rowIndex + " / " + cellIndex);
    ////console.log(JSON.stringify(rhythmTherapy));

    // getting the object at that index in data
    var object = text[Number(rowIndex) + 1];

    // getting the category of the clicked cell
    var category = text[Number(rowIndex) + 1].category;
    // getting the corresponding category result box
    var resultBoxId = document.getElementById("category" + category);
    // getting the result box child nodes
    var resBoxNodes = resultBoxId.childNodes;

    // if the clicked button is Yes, then only show result
    if (object.options[Number(cellIndex) - 1].text === "Yes") {
        if (resBoxNodes.length === 0) {
            var list = document.createElement("ul");
            list.setAttribute("id", "list" + category);
            resultBoxId.appendChild(list);
        } else {
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
    } else {
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
function removeRTListItem(resBoxNodes, text, category) {
    if (resBoxNodes.length > 0) {
        if (resBoxNodes[0].childNodes.length > 0) {
            var itemNodes = resBoxNodes[0].childNodes;
            for (var item = 0; item < itemNodes.length; item++) {
                var txt = new DOMParser().parseFromString(text, "text/html");

                if (itemNodes[item].innerHTML === txt.body.innerHTML) {
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
function generateRTResult() {
    for (var position = 0; position < rhythmTherapy.mRTEhraScoreHistory.length; position++) {
        var object = rhythmTherapy.mRTEhraScoreHistory[position];
        if (JSON.parse(object.status) && position === 0) {
            if (object.cellIndex === "1") {
                for (var pos = 2; pos <= rhythmTherapy.mRTEhraScoreHistory.length; pos++) {
                    rhythmTherapy.mRTEhraScoreHistory[pos].status = "false";
                    for (var cell = 0; cell < 2; cell++) {
                        document.getElementById("rtrow" + pos + "_cell" + cell).setAttribute("disabled", true);
                    }
                }
            }
        }
    }

    ////console.log(JSON.stringify(rhythmTherapy));


    /**
     * Boolean maintaining whether all the options in the scores are clicked or not
     * @type {boolean}
     */
    var areAllCellsClicked = false;

    var hisLength = rhythmTherapy.mRTEhraScoreHistory.length;
    for (var item = 0; item < hisLength; item++) {
        if (JSON.parse(rhythmTherapy.mRTEhraScoreHistory[item].status)) {
            areAllCellsClicked = true;
        } else {
            areAllCellsClicked = false;
            break;
        }
    }

    var resultType = getBoxInfo("997").boxType;
    if (getClickStatus(rhythmTherapy.mRTEhraScoreHistory)) {
        var result = getInference(areAllCellsClicked, resultType);

        if (resultType === ResultBoxTypes.RESULT_SCORE_BOX) {
            var infText = document.getElementById("resultTextRt");
            infText.innerHTML = result[0]["inferenceText"];
            var sumText = document.getElementById("scoreText");
            sumText.innerHTML = result[0]["scoreSum"];
        } else if (resultType === ResultBoxTypes.RESULT_BOX) {
            var infText = document.getElementById("resultTextRt");
            infText.innerHTML = result[0]["inferenceText"];
        } else if (resultType === ResultBoxTypes.SCORE_BOX) {
            var sumText = document.getElementById("scoreText");
            sumText.innerHTML = result[0]["scoreSum"];
        }
    } else {
        if (resultType === ResultBoxTypes.RESULT_SCORE_BOX) {
            document.getElementById("resultTextRt").innerHTML = "";
            document.getElementById("scoreText").innerHTML = "";
        } else if (resultType === ResultBoxTypes.RESULT_BOX) {
            document.getElementById("resultTextRt").innerHTML = "";
        } else if (resultType === ResultBoxTypes.SCORE_BOX) {
            document.getElementById("scoreText").innerHTML = "";
        }
    }
}

/**
 * function deciding the inference and returning the conclusion
 * @param areAllCellsClicked
 * @returns {string}
 */
function getRTInference(areAllCellsClicked, resultType) {
    var scoreResult = [];
    if (areAllCellsClicked) {
        var sum = 0;
        var hisLength = rhythmTherapy.mRTEhraScoreHistory.length;

        for (var x = 0; x < hisLength; x++) {
            var rowIndex = Number(rhythmTherapy.mRTEhraScoreHistory[x].rowIndex);
            var scoreRow = getBoxInfo(rowIndex.toString());

            var cellIndex = Number(rhythmTherapy.mRTEhraScoreHistory[x].cellIndex);
            var value = Number(scoreRow.options[cellIndex].value);
            sum = sum + value;
        }

        if (resultType === ResultBoxTypes.RESULT_SCORE_BOX) {
            scoreResult.push({
                inferenceText: analyzeInference(sum),
                scoreSum: sum
            });
        } else if (resultType === ResultBoxTypes.RESULT_BOX) {
            scoreResult.push({
                inferenceText: analyzeInference(sum)
            });
        } else if (resultType === ResultBoxTypes.SCORE_BOX) {
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
function analyzeRTInference(sum) {
    //////console.log(sum);

    var conclusion = "";
    var range = getBoxInfo("999");
    var resultLength = range.result.length;

    for (var item = 0; item < resultLength; item++) {
        if (eval(sum + range.result[item].operator + range.result[item].value)) {
            conclusion = range.result[item].inference;
        }
    }
    return conclusion;
}

/**
 * function returning the history.
 * This mRTEhraScoreHistory array is the last status of an score.
 */
function saveRTHistory() {
    return JSON.stringify(rhythmTherapy);
}

/**
 * Sending the history json file to the Android for saving in the database
 */
function sendRTHistory() {
    // calling the saveData function in the Java class and
    // passing the current DOM structure of the algorithm
    Android.saveData(JSON.stringify(rhythmTherapy));
}

/**
 * This function creates and returns the footnote button to be appended in the footer section.
 * After clicking on the footnote button, the reference div is opened.
 */
function addRTFootnoteButton(footNode) {
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
function addRTMoreInfoButton(footNode) {
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
function addRTFlipPdfButton() {
    // creating the flip-pdf image element
    var pdfImage = document.createElement("img");

    // setting the style class to the image button
    pdfImage.setAttribute("src", "algo_pdf.png");
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
function addRTFooter() {
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
    if (footNode.hasPdfButton || footNode.hasFootnote || footNode.hasAbbreviation) {
        footerTable.appendChild(getFootNoteButtonRow(footNode));
    }
    if (footNode.hasFootnote) {
        footerTable.appendChild(getReferenceTextRow(footNode));
    }
    if (footNode.hasAbbreviation) {
        footerTable.appendChild(getAbbreviationTextRow(footNode));
    }
    if (footNode.hasMoreInfoButton) {
        footerTable.appendChild(getMoreInfoLinkButton(footNode));
    }

    // appending the Reset button to footerTable
    if (footNode.resetButtonText.trim() !== "")
        footerTable.appendChild(getResetButton(footNode));

    // appending the table to footerDiv
    footerDiv.appendChild(footerTable);
    // appending the footerDiv to the body

    body.appendChild(footerDiv);

    if (footNode.extraButtons.length > 0) {
        body.appendChild(addExtraButtons(footNode));
    }
}

/**
 * returns the table row containing footnote button cell and flip PDF button cell
 * @param footNode
 * @returns {Element}
 */
function getRTFootNoteButtonRow(footNode) {
    // creating the first row of the footNode
    var row = document.createElement("tr");
    var cell = document.createElement("td");

    // Adding flip pdf button
    if (footNode.hasPdfButton) {
        cell.appendChild(addFlipPdfButton());
    }

    // Adding footNode button
    if (footNode.hasFootnote || footNode.hasAbbreviation) {
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
function getRTReferenceTextRow(footNode) {
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
function getRTAbbreviationTextRow(footNode) {
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
function getRTMoreInfoLinkButton(footNode) {
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
function getRTResetButton(footNode) {
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
function addRTResetButton(footNode) {
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
function addRTExtraButtons(footNode) {
    var extraButtons = footNode.extraButtons;
    var extraButtonDiv = document.createElement("div");
    extraButtonDiv.setAttribute("class", "extra-buttons-div");
    extraButtonDiv.setAttribute("id", "extraButtons");

    for (var item = 0; item < extraButtons.length; item++) {
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
function getRTExtraButtonRow(extraButtons) {
    var row = document.createElement("tr");
    var btnArray = extraButtons["buttonRow"];

    var btnWidth = makeSizer(btnArray.length);
    for (var item = 0; item < btnArray.length; item++) {
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
function setRTParameters(paramList) {
    // parsing the parameter list in an array
    var params = JSON.parse(paramList);
    // getting the keys used in the array
    var keys = Object.keys(params[0]);

    for (var value = 0; value < keys.length; value++) {
        var keyNode = keys[value];
        //////console.log(keyNode + " : " + params[0][keyNode]);

        var mappedIndex = rhythmTherapy.mRTEhraScoreHistory[mapping[keyNode]];
        var mValue = params[0][keyNode];

        if (mValue !== "") {
            mappedIndex.cellIndex = getSelectedCellIndex(keyNode, mValue);
            mappedIndex.status = "true";
        }
    }

    // emptying the rtMehraDiv
    var rtMehraDiv = document.getElementById("rtMehraDiv");
    while (rtMehraDiv.hasChildNodes()) {
        rtMehraDiv.removeChild(rtMehraDiv.lastChild);
    }

    var footer = document.getElementById("998");
    if (typeof (footer) !== 'undefined')
        document.getElementsByTagName("body")[0].removeChild(footer);

    var extraButtons = document.getElementById("extraButtons");
    if (typeof (extraButtons) !== 'undefined')
        document.getElementsByTagName("body")[0].removeChild(extraButtons);

    loadRTMEhraDataFile(JSON.stringify(rhythmTherapy));
}

/**
 * Function calculates and returns the width of the buttons
 * @param numButtons, number of buttons in the decision box
 * @returns {string}
 */
function makeRTSizer(numButtons) {
    return ((100 / numButtons) + "%");
}


/**
 * function setting the button style in the history mode
 */
function setRTButtonStyle1(scoreHis) {
    var mCellId = "";
    for (var x = 0; x < scoreHis.length; x++) {
        if (x === 0) {
            if (scoreHis[x].cellIndex === "0") {
                mCellId = "rcKindAcute";
            } else if (scoreHis[x].cellIndex === "1") {
                mCellId = "rcKindLong";
            }
        } else {
            if (scoreHis[x].cellIndex === "0") {
                mCellId = "lvefYes";
            } else if (scoreHis[x].cellIndex === "1") {
                mCellId = "lvefNo";
            } else if (scoreHis[x].cellIndex === "2") {
                mCellId = "lvefUnknown";
            }
        }

        if (mCellId !== "") {
            // toggling the button click background effects
            toggleRtDecisionBtn(mCellId);
        }
    }
}

/**
 * constants for decision button styles
 * @type {{LEFT_BUTTON_STYLE: number, RIGHT_BUTTON_STYLE: number, CENTER_BUTTON_STYLE: number}}
 */
/*const DecisionButtonStyles = {
    LEFT_BUTTON_STYLE: 1,
    RIGHT_BUTTON_STYLE: 2,
    CENTER_BUTTON_STYLE: 3
};*/

/**
 * string constants for available box structures
 * @type {{BOX_MULTI_LINE_TABULAR: string, BOX_MULTI_LINE_NON_TABULAR: string, BOX_SINGLE_LINE_TABULAR: string,
 *     BOX_SINGLE_LINE_NON_TABULAR: string}}
 */
/*const BoxStructure = {
    BOX_MULTI_LINE_TABULAR: 'box-multi-line-tabular',
    BOX_MULTI_LINE_NON_TABULAR: 'box-multi-line-non-tabular',
    BOX_SINGLE_LINE_TABULAR: 'box-single-line-tabular',
    BOX_SINGLE_LINE_NON_TABULAR: 'box-single-line-non-tabular'
};*/

/**
 * string constants for available button structure
 * @type {{BUTTON_MULTI_LINE_TABULAR: string, BUTTON_MULTI_LINE_NON_TABULAR: string, BUTTON_SINGLE_LINE_TABULAR:
 *     string, BUTTON_SINGLE_LINE_NON_TABULAR: string}}
 */
/*const ButtonStructure = {
    BUTTON_MULTI_LINE_TABULAR: 'button-multi-line-tabular',
    BUTTON_MULTI_LINE_NON_TABULAR: 'button-multi-line-non-tabular',
    BUTTON_SINGLE_LINE_TABULAR: 'button-single-line-tabular',
    BUTTON_SINGLE_LINE_NON_TABULAR: 'button-single-line-non-tabular'
};*/

/**
 * string constants for available tool types
 * @type {{SCORE: string, INFORMATION_SCORE: string, SLIDING_SCORE: string}}
 */
/*const ToolType = {
    RESULT_SCORE: "result-score",
    NON_RESULT_INFORMATION_SCORE: "non-result-information-score",
    RESULT_SLIDING_SCORE: "result-sliding-score",
    RESULT_CATEGORIES_SCORE: "result-categories-score",
    RESULT_BOX_MEHRA: "result-box-mehra"
};*/

/**
 * String constants for types of Result boxes
 * @type {{RESULT_BOX: string, SCORE_BOX: string, RESULT_SCORE_BOX: string, FOOTER: string}}
 */
/*const ResultBoxTypes = {
    RESULT_BOX: 'result-box',
    SCORE_BOX: 'score-box',
    RESULT_SCORE_BOX: 'result-score-box',
    RESULT_CATEGORIES: 'result-categories',
    NONE: 'none',
    FOOTER: 'footer'
};*/

/**
 * string constants for available styles classes
 * @type {{MINFO_TEXT1: string, MINFO_TEXT_BOLD: string, ABB_BUTTON: string, PDF_IMAGE: string, REFERENCE_BOX: string,
 *     TEXT_LEFT: string, FOOTER: string, FLIP_PDF_BUTTON: string, EXCEPTION_MESSAGE: string}}
 */
/*const StyleClass = {
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
};*/

/**
 * Constants for length of time for scrolling the HTML page.
 */
/*const Scroll = {
    LENGTH_SHORT: 100,
    LENGTH_LONG: 700
};*/


/*
 * Author: Sambhaji Mane
 * Date: 08-03-2013
 *
 * 0, change in the background of the clicked box,
 * 1, no change in the background of the box, only border of left most box is changed
 * 2, no change in the background of the box, only border of center boxes are changed
 * 3, no change in the background of the box, only border of right most box is changed
 */
(function ($) {
    $.fn.change = function (action) {
        if (action === 0) {
            return this.each(function () {
                $(this).css({
                    background: "#3d6ccc",
                    color: "#ffffff",
                    boxShadow: "0 0 0 0 #ffffff"
                });
            });
        } else if (action === 1) {
            return this.each(function () {
                $(this).css({
                    background: "#ffffff",
                    color: "#999999",
                    boxShadow: "0 0 0 0 #ffffff"
                });
            });
        } else if (action === 2) {
            return this.each(function () {
                $(this).css({
                    background: "#ffffff",
                    color: "#999999",
                    boxShadow: "0 0 0 0 #ffffff"
                });
            });
        } else if (action === 3) {
            return this.each(function () {
                $(this).css({
                    background: "#ffffff",
                    color: "#999999",
                    boxShadow: "0 0 0 0 #ffffff"
                });
            });
        }

    };

    $.fn.scroll = function (interval) {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, interval);
        });
    };

    $.fn.slideUpBox = function () {
        return this.each(function () {
            $(this).slideUp("fast", function () {
                $(this).scroll();
            });
        });
    };

    $.fn.slideDownBox = function (interval) {
        return this.each(function () {
            $(this).slideDown("150", function () {
                $(this).scroll(interval);
            });
        });
    };
}(jQuery));