var buttonIds = []; // Used when there are any buttons or radio buttons available


function getToolResult() {

    var string = "{  \"interactive_name\": \"\", \"input\": [ \"\"], \"output\": [ \"\" ]}"; // Used to set the format of the required json.
    var ResultJson = JSON.parse(string); // Used to parse the set string into JSON object.
    var text; // Variable to store the text of Input.



    if (getDataFromOptionsId("age") == "Younger") {
        ResultJson.input.length = 3;
        ResultJson.input[0] = Data_For_PDF.input[0].text + ": -";
        ResultJson.input[1] = Data_For_PDF.input[1].text + ": -";
        ResultJson.input[2] = Data_For_PDF.input[2].text + ": Younger";
        ResultJson.input[3] = Data_For_PDF.input[3].text + ": -";



        ResultJson.output[0] = getDataById_innerHTML("YoungerTDData");
        ResultJson.output[1] = "PATH_" + getImageName("imageTag2");
        ResultJson.output[2] = getDataById_innerHTML("YoungerResult");




        var FinalData = JSON.stringify(ResultJson, null, 4);

        return FinalData;

    }




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

        else if (type == "button1") // Checks if the type of input field is input then by calling getDataById() function the required value is stored and appended with in the input object.
            ResultJson.input[i] = text + ": " + buttonIds[0] + unit;

        else if (type == "button2") // Checks if the type of input field is input then by calling getDataById() function the required value is stored and appended with in the input object.
            ResultJson.input[i] = text + ": " + buttonIds[1] + unit;

        else if (type == "button3") // Checks if the type of input field is input then by calling getDataById() function the required value is stored and appended with in the input object.
        {
            if (buttonIds[2] == "Yes") {
                ResultJson.input[i] = text + ": " + buttonIds[2] + unit;
            } else {
                ResultJson.input[i] = text + ": " + buttonIds[2] + unit;
                i++;
            }
        }

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

        else if (type == "img") // Checks if the type of input field is div then by calling getDataById_innerHTML() function the required value is stored and appended with in the output object.
        {
            ResultJson.output[i] = "PATH_" + getImageName("image");
            ResultJson.output[i + 1] = getDataById_innerHTML(Data_For_PDF.output[i].id) + unit;
        }
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


function getImageName(id) { // Function used to simply get text from id other then Div or having innerHTML.

    var dataTo = document.getElementById(id).getAttribute("src");

    return dataTo;
}


function getDataById_innerHTML(id) { // Function used to simply get text from id having innerHTML.

    var dataTo = document.getElementById(id).innerHTML;

    return dataTo;
}

/*

$(document).ready(function(){
    $("input").click(function(){
        buttonIds = this.id; // sets the id which is used to take the text from that radio buttons
    });
});


*/


function setButtonClicked(count, id) {

    if (count == 1) {

        if (id.id == "r1_1")
            buttonIds[0] = "High";
        else
            buttonIds[0] = "Low";
    } else if (count == 2) {
        if (id.id == "r2_2")
            buttonIds[1] = "Male";
        else
            buttonIds[1] = "Female";

    } else if (count == 3) {
        if (id.id == "r3_2")
            buttonIds[2] = "No";
        else
            buttonIds[2] = "Yes";

    }
    //console.log(id.id);

}

function getAndroidToolResult() { // Function used to send the stored data for android OS.
    Android.getToolResultData(getToolResult());
}