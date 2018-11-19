var SelectedId;

function setSelectedDropdown() {

    if (document.getElementById("v11").hidden)
        SelectedId = "v12";


    if (document.getElementById("v12").hidden)
        SelectedId = "v11";

}

function getToolResult() {

    var string = "{  \"interactive_name\": \"\", \"input\": [ \"\"], \"output\": [ \"\" ]}"; // Used to set the format of the required json.
    var ResultJson = JSON.parse(string); // Used to parse the set string into JSON object.

    ResultJson.input[0] = "LDL-C Levels: " + getDataFromOptionsId(SelectedId) + " " + getDataFromOptionsId("unit1");
    ResultJson.input[1] = "Total CV Risk (%): " + getDataFromOptionsId("v21");


    ResultJson.output[0] = "Intervention: " + getDataById_innerHTML("intervention");

    ResultJson.output[1] = "Class of recommendation/Level of evidence: " + getDataById_innerHTML("reccomend");


    var FinalData = JSON.stringify(ResultJson, null, 4); // Now final data is stored in this variable in string form.

    ////console.log(FinalData);

    return FinalData; // Return the Final required Data.

}

function getDataFromOptionsId(id) { // Function used to get text from dropdown element's option.

    var data = document.getElementById(id);
    var dataTo = data.options[data.selectedIndex].text;

    dataTo = dataTo.replace("<", "&lt;");

    return dataTo;
}


function getDataFromTextBoxId(id) { // Function used to get text from textarea element.

    var dataTo = document.getElementsByName(id)[0].value;

    return dataTo;
}


function getDataById(id) { // Function used to simply get text from id other then Div or having innerHTML.

    var dataTo = document.getElementById(id).value;

    return dataTo;
}



function getDataById_innerHTML(id) { // Function used to simply get text from id having innerHTML.

    var dataTo = document.getElementById(id).innerHTML;

    return dataTo;
}



function getAndroidToolResult() { // Function used to send the stored data for android OS.
    Android.getToolResultData(getToolResult());
}