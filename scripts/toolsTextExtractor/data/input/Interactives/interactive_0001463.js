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


function result()
	{
	var setting = document.getElementById("setting_type").selectedIndex;
	var inhibitor = document.getElementById("inhibitor_type").selectedIndex;
	
	if(setting == "1")
	{
		{
		deactiveResultStyle();
		if(inhibitor == "1")
		{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Prasugrel LD (60 mg)</b> <br/>irrespective of prior Clopidogrel timing and dosing</p><p class=\"list-level1\"><b>Ticagrelor LD (180 mg)</b><br/>irrespective of prior Clopidogrel timing and dosing</p>";
		activeResultStyle();
		}
		else if(inhibitor == "2")
		{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Prasugrel LD (60 mg)</b><br/>24h after last Ticagrelor dose</p><p class=\"list-level1\"><b>Clopidogrel LD (600 mg)</b> <br/>24h after last Ticagrelor dose</p>";
		activeResultStyle();
		}
		else if(inhibitor == "3")
		{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Clopidogrel LD (600 mg)</b><br/> 24h after last Prasugrel dose</p><p class=\"list-level1\"><b>Ticagrelor LD (180 mg)</b><br/> 24h after last Prasugrel dose</p>";
		activeResultStyle();
		}
		else if(inhibitor == "0")
		{
		document.getElementById("result1").innerHTML = "";
		deactiveResultStyle();
		}	
	}
	}
	else if(setting == "2")
	{
		{
		deactiveResultStyle();
		if(inhibitor == "1")
		{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Prasugrel MD (10 mg q.d.)</b><br/> 24h after last Clopidogrel dose</p><p class=\"list-level1\"><b>Ticagrelor MD (90 mg b.i.d.)</b><br/> 24h after last Clopidogrel dose</p>";
		activeResultStyle();
		}
		else if(inhibitor == "2")
		{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Prasugrel LD (60 mg)</b><br/> 24h after last Ticagrelor dose</p><p class=\"list-level1\"><b>Clopidogrel LD (600 mg)</b><br/> 24h after last Ticagrelor dose</p>";
		activeResultStyle();
		}
		else if(inhibitor == "3")
		{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Clopidogrel MD (75 mg q.d.)</b><br/> 24h after last Prasugrel dose</p><p class=\"list-level1\"><b>Ticagrelor MD (90 mg b.i.d.)</b><br/> 24h after last Clopidogrel dose</p>";
		activeResultStyle();
		}
		else if(inhibitor == "0")
		{
		document.getElementById("result1").innerHTML = "";
		deactiveResultStyle();
		}	
	}
	}
	}
	
	function clear_list() {
	deactiveResultStyle();
    document.getElementById("result1").innerHTML = "";
	document.getElementById("inhibitor_type").selectedIndex = "0";
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