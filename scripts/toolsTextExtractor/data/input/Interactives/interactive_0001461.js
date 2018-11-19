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


var drug_fibrinolytic = ["Streptokinase","Alteplase (tPA)","Reteplase (rPA)","Tenecteplase (TNK-tPA)"];

var drug_antiplatelet =["Aspirin","Clopidogrel"];

var drug_anticoagulant =["Enoxaparin","UFH","Fondaparinux (only with streptokinase)"];

function option()
{
	var t = 1;
	//
	var therapy = document.getElementById("therapy").selectedIndex;
	var drug = document.getElementById("drug");
	if(therapy == "1")
	{
		resetList("drug");
		 deactiveResultStyle();
		 document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
    for (i = 0; i < drug_fibrinolytic.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(drug_fibrinolytic[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        drug.appendChild(option);
    }
	}
	else if(therapy == "2")
	{
		resetList("drug");
		deactiveResultStyle();
		document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
    for (i = 0; i < drug_antiplatelet.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(drug_antiplatelet[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        drug.appendChild(option);
    }
	}
		else if(therapy == "3")
	{
		resetList("drug");
		deactiveResultStyle();
		document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
    for (i = 0; i < drug_anticoagulant.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(drug_anticoagulant[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        drug.appendChild(option);
    }
	}
	else{
		document.getElementById("therapy").selectedIndex = "0";
		document.getElementById("result1").innerHTML = "";
			document.getElementById("result2").innerHTML = "";
			deactiveResultStyle();
		resetList("drug");
	}
	}

function result()
	{
	var therapy = document.getElementById("therapy").selectedIndex;
	var drug = document.getElementById("drug").selectedIndex;
	if(therapy == "1")
	{
		if(drug == "1")
		{
			document.getElementById("result1").innerHTML = "1.5 million units over 30&ndash;60 min <i>i.v.</i>";
			document.getElementById("result2").innerHTML = "Previous treatment with streptokinase or anistreplase";
			activeResultStyle();
		}
		else if(drug == "2")
		{
			document.getElementById("result1").innerHTML = "15 mg <i>i.v.</i> bolus<br/>0.75 mg/kg <i>i.v.</i> over 30 min (up to 50 mg)<br/>then 0.5 mg/kg <i>i.v.</i> over 60 min (up to 35 mg)";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug == "3")
		{
			document.getElementById("result1").innerHTML = "10 units + 10 units <i>i.v.</i> bolus given 30 min apart";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug == "4")
		{
			document.getElementById("result1").innerHTML = "Single <i>i.v.</i> bolus:<p  style=\"margin-left: 1.5em; margin-bottom: -10px;\">30 mg (6000 IU) if <60 kg</span></p><p style=\"margin-left: 1.5em;margin-bottom: -10px;\">35 mg (7000 IU) if 60 to <70 kg</p><p style=\"margin-left: 1.5em;margin-bottom: -10px;\">40 mg (8000 IU) if 70 to <80 kg</p><p style=\"margin-left: 1.5em;margin-bottom: -10px;\">45 mg (9000 IU) if 80 to <90 kg</p><p style=\"margin-left: 1.5em;margin-bottom: -10px;\">50 mg (10000 IU) if &ge;90 kg</p><p style=\"margin-left: 1.5em;margin-bottom: -10px;\">It is recommended to reduce to half-dose in patients &ge;75 years of age.</p><br/>";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug== "0")
		{
		document.getElementById("result1").innerHTML = "";
			document.getElementById("result2").innerHTML = "";
			deactiveResultStyle();
		}
	}
	else if(therapy == "2")
	{
		if(drug == "1")
		{
			document.getElementById("result1").innerHTML = "Starting dose of 150&ndash;300 mg orally (or 75&ndash;250 mg intravenously if oral ingestion is not possible), followed by a maintenance dose of 75&ndash;100 mg/day.";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug == "2")
		{
			document.getElementById("result1").innerHTML = "Loading dose of 300 mg orally, followed by a maintenance dose of 75 mg/day.<br/>In patients &ge;75 years of age: loading dose of 75 mg, followed by a maintenance dose of 75 mg/day.";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug== "0")
		{
		document.getElementById("result1").innerHTML = "";
			document.getElementById("result2").innerHTML = "";
			deactiveResultStyle();
		}
	}
	else if(therapy == "3")
	{
		if(drug == "1")
		{
			document.getElementById("result1").innerHTML = "In patients <75 years of age:<p  style=\"margin-left: 1.5em; margin-bottom: -10px;\">30 mg <i>i.v.</i> bolus followed 15 min later by 1 mg/kg <i>s.c.</i> every 12 hours until revascularization or hospital discharge for a maximum of 8 days. The first two <i>s.c.</i> doses should not exceed 100 mg per injection.</p><br/><hr>In patients &ge;75 years of age:<p  style=\"margin-left: 1.5em; margin-bottom: -10px;\">no <i>i.v.</i> bolus; start with first <i>s.c.</i> dose of 0.75 mg/kg with a maximum of 75 mg per injection for the first two <i>s.c.</i> doses </p><br/>In patients with eGFR <30 mL/min/1.73 m<sup>2</sup>, regardless of age, the <i>s.c.</i> doses are given once every 24 hours.";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug == "2")
		{
			document.getElementById("result1").innerHTML = "60 IU/kg <i>i.v.</i> bolus with a maximum of 4000 IU followed by an <i>i.v.</i> infusion of 12 IU/kg with a maximum of 1000 IU/hour for 24&ndash;48 hours. Target aPTT: 50&ndash;70 s or 1.5 to 2.0 times that of control to be monitored at 3, 6, 12 and 24 hours.";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug == "3")
		{
			document.getElementById("result1").innerHTML = "2.5 mg <i>i.v.</i> bolus followed by a <i>s.c.</i> dose of 2.5 mg once daily up to 8 days or hospital discharge.";
			document.getElementById("result2").innerHTML = "-";
			activeResultStyle();
		}
		else if(drug== "0")
		{
		document.getElementById("result1").innerHTML = "";
			document.getElementById("result2").innerHTML = "";
			deactiveResultStyle();
		}
	}
	
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