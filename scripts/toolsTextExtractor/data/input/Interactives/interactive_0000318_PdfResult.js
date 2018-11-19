var buttonIds = []; // Used when there are any buttons or radio buttons available


function getToolResult() {

    var string = "{  \"interactive_name\": \"\", \"input\": [ \"\"], \"output\": [ \"\" ]}"; // Used to set the format of the required json.
    var ResultJson = JSON.parse(string); // Used to parse the set string into JSON object.
    var text; // Variable to store the text of Input.

    for (var i = 0; i < Data_For_PDF.input.length; i++) { // Function used to store data into input object.
        ResultJson.input[i] = Data_For_PDF.input[i].text + ": " + getDataById(buttonIds[i + 1]);
    }

    for (var i = 0; i < Data_For_PDF.output.length; i++) { // Function used to store data into output object.
        ResultJson.output[i] = Data_For_PDF.output[i].text + ": " + getDataByName(Data_For_PDF.output[i].name);
    }


    var FinalData = JSON.stringify(ResultJson, null, 4); // Now final data is stored in this variable in string form.

    ////console.log(FinalData);

    return FinalData; // Return the Final required Data.

}



function getDataById(id) { // Function used to simply get text from id other then Div or having innerHTML.

    var dataTo = document.getElementById(id).value;

    return dataTo;
}



function getDataById_innerHTML(id) { // Function used to simply get text from id having innerHTML.

    var dataTo = document.getElementById(id).innerHTML;

    return dataTo;
}


function getDataByName(name) { // Function used to simply get text from id having innerHTML.

    var dataTo = document.getElementsByName(name)[0].value;

    return dataTo;
}


$(document).ready(function() {
    $(":radio").click(function() {
        setButtonClicked(this.name, this.id);
    });
});


function setButtonClicked(name, id) {

    if (id == "orgVer")
        return;
    else if (id == "simVer")
        return;

    var buttonIndex = name.split("")[1];

    if (buttonIndex == 2 && id == "radio3") {
        buttonIds[3] = "radio6";
    }
    if (buttonIndex == 2 && id == "radio4") {
        buttonIds[3] = "radio5";
    }
    buttonIds[buttonIndex] = id;

    return;

}



function getAndroidToolResult() { // Function used to send the stored data for android OS.
    Android.getToolResultData(getToolResult());
}