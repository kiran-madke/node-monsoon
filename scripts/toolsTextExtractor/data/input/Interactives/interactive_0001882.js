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


var array_comorbidities = ["HTN","HTN + DM","HTN + CKD","HTN + CAD","HTN + Strokeᵃ/TIA"];



function option()
{
	var t = 1;
	//
	var age_group = document.getElementById("age_group").selectedIndex;
	var comorbidities = document.getElementById("comorbidities");
	if(age_group == "1" || age_group == "2" || age_group == "3" )
	{
		resetList("comorbidities");
		 deactiveResultStyle();
		 document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
    for (i = 0; i < array_comorbidities.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(array_comorbidities[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        comorbidities.appendChild(option);
    }
	}
	
	else{
		document.getElementById("age_group").selectedIndex = "0";
		document.getElementById("result1").innerHTML = "";
			document.getElementById("result2").innerHTML = "";
			deactiveResultStyle();
		resetList("comorbidities");
	}
	}

function result()
	{
	var age_group = document.getElementById("age_group").selectedIndex;
	var comorbidities = document.getElementById("comorbidities").selectedIndex;
	if(age_group == "1")
	{
		if(comorbidities == "1")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130</font> or lower if tolerated <br><font color=\"red\">Not <120</font>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "2")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130</font> or lower if tolerated <br><font color=\"red\">Not <120</font>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "3")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to <140 to 130</font> if tolerated";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "4")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130</font> or lower if tolerated <br><font color=\"red\">Not <120</font>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "5")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130</font> or lower if tolerated <br><font color=\"red\">Not <120</font>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities== "0")
		{
		document.getElementById("result1").innerHTML = "";
			document.getElementById("result2").innerHTML = "";
			deactiveResultStyle();
		}
	}
	else if(age_group == "2" || age_group == "3")
	{
		if(comorbidities == "1")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130-139</font><i> if tolerated </i>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "2")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130-139</font><i> if tolerated </i>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "3")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130-139</font><i> if tolerated </i>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "4")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130-139</font><i> if tolerated </i>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities == "5")
		{
			document.getElementById("result1").innerHTML = "<font color=\"black\">Target to 130-139</font><i> if tolerated </i>";
			document.getElementById("result2").innerHTML = "70-79";
			activeResultStyle();
		}
		else if(comorbidities== "0")
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