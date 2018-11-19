$(document).ready(function() {
    $("#ref_button").click(function() {

        var t = $('#reference').css('display');

        if (t == 'none') {
            $('#reference').css('display', "block");
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 700);
        } else {
            $('#reference').css('display', "none");
            t = block;
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 700);
        }

    });
});
var pri_antiplatelet = ["Aspirin","Clopidogrel","Prasugrel","Ticagrelor","Abciximab","Eptifibatide","Tirofiban"];

var pri_anticoag =["UFH","Enoxaparin","Bivalirudin"];

var reper_antiplatelet = ["Aspirin","Clopidogrel"];

var reper_anticoag =["UFH","Enoxaparin","Fondaparinux"];

function option()
{
	var t = 1;
	//
	var patient = document.getElementById("patient_type").selectedIndex;
	var therapy = document.getElementById("therapy_type").selectedIndex;
	var drug = document.getElementById("drug");
	//chosing options based on selected index
	if(patient == "1")
	{	
		if(therapy == "1")
		{
			var selected_array = pri_antiplatelet;
		}
		if(therapy == "2")
		{
			var selected_array = pri_anticoag;
		}
	}
	if(patient == "2")
	{	
		if(therapy == "1")
		{
			var selected_array = reper_antiplatelet;
		}
		if(therapy == "2")
		{
			var selected_array = reper_anticoag;
		}
	}
	//creating options list
		resetList("drug");
		deactiveResultStyle();
		document.getElementById("result1").innerHTML = "";
		for (i = 0; i < selected_array.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(selected_array[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        drug.appendChild(option);
		}
	}
	

function result()
	{
	var patient = document.getElementById("patient_type").selectedIndex;
	var therapy = document.getElementById("therapy_type").selectedIndex;
	var drug = document.getElementById("drug").selectedIndex;
	if(patient == "1")
	{
	if(therapy == "1")
		{
		deactiveResultStyle();
		if(drug == "1")
		{
		document.getElementById("result1").innerHTML = "Loading dose of 150&ndash;300 mg orally or of 75&ndash;250 mg <i>i.v.</i> if oral ingestion is not possible, followed by a maintenance dose of 75&ndash;100 mg/day.";
		activeResultStyle();
		}
		else if(drug == "2")
		{
		document.getElementById("result1").innerHTML = "Loading dose of 600 mg orally, followed by a maintenance dose of 75 mg/day.";
		activeResultStyle();
		}
		else if(drug == "3")
		{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\">Loading dose of 60 mg orally, followed by a maintenance dose of 10 mg/day.</p><p class=\"list-level1\">In patients with body weight &le;60 kg, a maintenance dose of 5 mg/day is recommended. </p><p class=\"list-level1\">Prasugrel is contra-indicated in patients with previous stroke. In patients &ge;75 years, prasugrel is generally not recommended, but a dose of 5 mg/day should be used if treatment is deemed necessary.</p>";
		activeResultStyle();
		}		
		else if(drug == "4")
		{
		document.getElementById("result1").innerHTML = "Loading dose of 180 mg orally, followed by a maintenance dose of 90 mg <i>b.i.d.</i>";
		activeResultStyle();
		}
		else if(drug == "5")
		{
		document.getElementById("result1").innerHTML = "Bolus of 0.25 mg/kg <i>i.v.</i> and 0.125 &mu;g/kg/min infusion (maximum 10 &mu;g/min) for 12 hours.";
		activeResultStyle();
		}
		else if(drug == "6")
		{
		document.getElementById("result1").innerHTML = "Double bolus of 180 &mu;g/kg <i>i.v.</i> (given at a 10&ndash;min interval) followed by an infusion of 2.0 &mu;g/kg/min for up to 18 hours.";
		activeResultStyle();
		}
		else if(drug == "7")
		{
		document.getElementById("result1").innerHTML = "25 &mu;g/kg over 3 min <i>i.v.,</i> followed by a maintenance infusion of 0.15 &mu;g/kg/min for up to 18 hours.";
		activeResultStyle();
		}
		else if(drug=="0")
		{
        deactiveResultStyle();
        document.getElementById("result1").innerHTML = "";
	}
	}
	else if(therapy == "2")
		{
		deactiveResultStyle();
		if(drug == "1")
		{
		document.getElementById("result1").innerHTML = "70&ndash;100 IU/kg <i>i.v.</i> bolus when no GP IIb/IIIa inhibitor is planned <br/>50&ndash;70 IU/kg <i>i.v.</i> bolus with GP IIb/IIIa inhibitors.";
		activeResultStyle();
		}
		else if(drug == "2")
		{
		document.getElementById("result1").innerHTML = "0.5 mg/kg <i>i.v.</i> bolus.";
		activeResultStyle();
		}
		else if(drug == "3")
		{
		document.getElementById("result1").innerHTML = "0.75 mg/kg <i>i.v.</i> bolus followed by <i>i.v.</i> infusion of 1.75 mg/kg/hour for up to 4 hours after the procedure.";
		activeResultStyle();
		}
		else if(drug=="0")
		{
        deactiveResultStyle();
        document.getElementById("result1").innerHTML = "";
	}		
	}
	}
	
	else if(patient == "2")
	{
	deactiveResultStyle();
	if(therapy == "1")
		{
		deactiveResultStyle();
		if(drug == "1")
		{
		document.getElementById("result1").innerHTML = "Loading dose of 150&ndash;300 mg orally followed by a maintenance dose of 75&ndash;100 mg/day.";
		activeResultStyle();
		}
		else if(drug == "2")
		{
		document.getElementById("result1").innerHTML = "Loading dose of 300 mg orally, followed by a maintenance dose of 75 mg/day orally.";
		activeResultStyle();
		}
		else if(drug=="0")
		{
        deactiveResultStyle();
        document.getElementById("result1").innerHTML = "";
	}
	}
	else if(therapy == "2")
		{
		deactiveResultStyle();
		if(drug == "1")
		{
		document.getElementById("result1").innerHTML = "Same dose as with fibrinolytic therapy (see <a href=\"ref_ENAS5329_6.3.2.0.html\">Table 7</a>).";
		activeResultStyle();
		}
		else if(drug == "2")
		{
		document.getElementById("result1").innerHTML = "Same dose as with fibrinolytic therapy (see <a href=\"ref_ENAS5329_6.3.2.0.html\">Table 7</a>).";
		activeResultStyle();
		}
		else if(drug == "3")
		{
		document.getElementById("result1").innerHTML = "Same dose as with fibrinolytic therapy (see <a href=\"ref_ENAS5329_6.3.2.0.html\">Table 7</a>).";
		activeResultStyle();
		}	
		else if(drug=="0")
		{
        deactiveResultStyle();
        document.getElementById("result1").innerHTML = "";
	}		
	}
	}
	
	}
	
	function clear_list() {
	deactiveResultStyle();
    document.getElementById("result1").innerHTML = "";
	document.getElementById("therapy_type").selectedIndex = "0";
	var drug = document.getElementById("drug");
	resetList("drug");
	
}

/*
function to empty the drop down list.
*/
function resetList(listId) {
    document.getElementById(listId).options.length = 1;
}
/*
function to set the style for the active result box
*/
function activeResultStyle() {
    var classValue = document.getElementsByClassName("output_name_disabled");

    for (var i = 0; i < classValue.length; i + 1) {

        classValue[i].classList.add("output_name");
        classValue[i].classList.remove("output_name_disabled");
    }

    var outputClass = document.getElementsByClassName("output_disabled");
    for (var j = 0; j < outputClass.length; j + 1) {

        outputClass[j].classList.add("output");
        outputClass[j].classList.remove("output_disabled");
    }

    var textareaOutputClass = document.getElementsByClassName("text-area-output-disabled");
    for (var k = 0; k < textareaOutputClass.length; k + 1) {

        textareaOutputClass[k].classList.add("text-area-output");
        textareaOutputClass[k].classList.remove("text-area-output-disabled");
    }

    var unitOutputClass = document.getElementsByClassName("unit_label_output_disabled");
    for (var l = 0; l < unitOutputClass.length; l + 1) {

        unitOutputClass[l].classList.add("unit_label_output");
        unitOutputClass[l].classList.remove("unit_label_output_disabled");
    }

    var activityOutput = document.getElementsByClassName("activity_output_disabled");
    for (var act1 = 0; act1 < activityOutput.length; act1 + 1) {

        activityOutput[act1].classList.add("activity_output");
        activityOutput[act1].classList.remove("activity_output_disabled");
    }

    var activityTextOutput = document.getElementsByClassName("activity-text-area-output-disabled");
    for (var act2 = 0; act2 < activityTextOutput.length; act2 + 1) {

        activityTextOutput[act2].classList.add("activity-text-area-output");
        activityTextOutput[act2].classList.remove("activity-text-area-output-disabled");
    }


}

/*
function to set the style for the empty result box
*/
function deactiveResultStyle() {

    var classValue = document.getElementsByClassName("output_name");
    for (var i = 0; i < classValue.length; i + 1) {

        classValue[i].classList.add("output_name_disabled");
        classValue[i].classList.remove("output_name");
    }

    var outputClass = document.getElementsByClassName("output");
    for (var j = 0; j < outputClass.length; j + 1) {

        outputClass[j].classList.add("output_disabled");
        outputClass[j].classList.remove("output");
    }

    var textareaOutputClass = document.getElementsByClassName("text-area-output");
    for (var k = 0; k < textareaOutputClass.length; k + 1) {

        textareaOutputClass[k].classList.add("text-area-output-disabled");
        textareaOutputClass[k].classList.remove("text-area-output");
    }

    var unitOutputClass = document.getElementsByClassName("unit_label_output");
    for (var l = 0; l < unitOutputClass.length; l + 1) {

        unitOutputClass[l].classList.add("unit_label_output_disabled");
        unitOutputClass[l].classList.remove("unit_label_output");
    }


    var activityOutput = document.getElementsByClassName("activity_output");
    for (var act1 = 0; act1 < activityOutput.length; act1 + 1) {

        activityOutput[act1].classList.add("activity_output_disabled");
        activityOutput[act1].classList.remove("activity_output");
    }

    var activityTextOutput = document.getElementsByClassName("activity-text-area-output");
    for (var act2 = 0; act2 < activityTextOutput.length; act2 + 1) {

        activityTextOutput[act2].classList.add("activity-text-area-output-disabled");
        activityTextOutput[act2].classList.remove("activity-text-area-output");
    }

}