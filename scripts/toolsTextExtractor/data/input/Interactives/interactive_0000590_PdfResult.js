var buttonIds; // Used when there are any buttons or radio buttons available


function getToolResult() {

    var string = "{  \"interactive_name\": \"\", \"input\": [ \"\"], \"output\": [ \"\" ]}"; // Used to set the format of the required json.
    var ResultJson = JSON.parse(string); // Used to parse the set string into JSON object.
    var text; // Variable to store the text of Input.

    for (var i = 0; i < Data_For_PDF.input.length; i++) { // Function used to store data into input object.

        var type = Data_For_PDF.input[i].type;
        var unit = " " + Data_For_PDF.input[i].unit;
        var units = unit.split(" ");
        var text = Data_For_PDF.input[i].text;

        if (unit == " ")
            unit = "";

        else if (unit == " dropdown")
            unit = " " + getDataFromOptionsId(Data_For_PDF.input[i].unitId); // Checks if the unit is dropdown then from unitId the value of Unit is stored.

        if (text == "id") {
            text = getDataById_innerHTML(Data_For_PDF.input[i].text_id); // Checks if the text is id then from text_id the value of text is stored.
        }

        if (type == "dropdown") // Checks if the type of input field is dropdown then by calling getDataFromOptionsId() function the required value is stored and appended with in the input object.
            ResultJson.input[i] = text + ": " + getDataFromOptionsId(Data_For_PDF.input[i].id) + unit;

        else if (type == "input") // Checks if the type of input field is input then by calling getDataById() function the required value is stored and appended with in the input object.
            ResultJson.input[i] = text + ": " + getDataById(Data_For_PDF.input[i].id) + unit;

        else if (type == "button") // Checks if the type of input field is input then by calling getDataById() function the required value is stored and appended with in the input object.
            ResultJson.input[i] = text + ": " + getDataById(buttonIds) + unit;

    }



    for (var i = 0; i < Data_For_PDF.output.length; i++) { // Function used to store data into output object.

        var type = Data_For_PDF.output[i].type;
        var unit = " " + Data_For_PDF.output[i].unit;
        if (unit == " ")
            unit = "";
        else if (unit == " id") // Check if the unit of output field is dynamic and it has id.
        {
            unit = " " + getDataById_innerHTML(Data_For_PDF.output[i].unitId);
        }

        if (type == "textarea") // Checks if the type of input field is textarea then by calling getDataFromTextBoxId() function the required value is stored and appended with in the output object.
            ResultJson.output[i] = Data_For_PDF.output[i].text + ": " + getDataFromTextBoxId(Data_For_PDF.output[i].id) + unit;

        else if (type == "input") // Checks if the type of input field is input then by calling getDataById() function the required value is stored and appended with in the output object.
            ResultJson.output[i] = Data_For_PDF.output[i].text + ": " + getDataById(Data_For_PDF.output[i].id) + unit;

        else if (type == "div") // Checks if the type of input field is div then by calling getDataById_innerHTML() function the required value is stored and appended with in the output object.
            ResultJson.output[i] = Data_For_PDF.output[i].text + ": " + getDataById_innerHTML(Data_For_PDF.output[i].id) + unit;
    }

    var FinalData = JSON.stringify(ResultJson, null, 4); // Now final data is stored in this variable in string form.

    ////console.log(FinalData);

    return FinalData; // Return the Final required Data.

}

function getDataFromOptionsId(id) { // Function used to get text from dropdown element's option.

    var data = document.getElementById(id);
    var dataTo = data.options[data.selectedIndex].text;

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

    dataTo = dataTo.replace("<", "&lt;");

    return dataTo;
}


$(document).ready(function() {
    $("input").click(function() {
        buttonIds = this.id; // sets the id which is used to take the text from that radio buttons
    });
});


function getAndroidToolResult() { // Function used to send the stored data for android OS.
    Android.getToolResultData(getToolResult());
}