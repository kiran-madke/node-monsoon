function result()
{
	var grade = document.getElementById("grade").selectedIndex;
	if(grade == 1)
	{
		document.getElementById("result1").innerHTML = "Viable";
		document.getElementById("result2").innerHTML = "None";
		document.getElementById("result3").innerHTML = "None";
		document.getElementById("result4").innerHTML = "No immediate threat";
		activeResultStyle();
	}
	else if(grade == 2)
	{
		document.getElementById("result1").innerHTML = "Marginally threatened";
		document.getElementById("result2").innerHTML = "None or minimal (toes)";
		document.getElementById("result3").innerHTML = "None";
		document.getElementById("result4").innerHTML = "Salvageable if promptly treated";
		activeResultStyle();
	}
	else if(grade == 3)
	{
		document.getElementById("result1").innerHTML = "Immediately threatened";
		document.getElementById("result2").innerHTML = "More than toes";
		document.getElementById("result3").innerHTML = "Mild/moderate";
		document.getElementById("result4").innerHTML = "Salvageable if promptly revascularized";
		activeResultStyle();
	}
	else if(grade == 4)
	{
		document.getElementById("result1").innerHTML = "Irreversible";
		document.getElementById("result2").innerHTML = "Profound, anaesthetic";
		document.getElementById("result3").innerHTML = "Profound, paralysis (rigor)";
		document.getElementById("result4").innerHTML = "Major tissue loss, permanent nerve damage inevitable";
		activeResultStyle();
	}
	else{
		document.getElementById("result1").innerHTML = "";
		document.getElementById("result2").innerHTML = "";
		document.getElementById("result3").innerHTML = "";
		document.getElementById("result4").innerHTML = "";
		deactiveResultStyle();
	}
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