
function result()
{
	var region = document.getElementById("regions").selectedIndex;
	if(region == 1)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\">Atherosclerosis</p><p class=\"list-level1\">Thoracic outlet syndrome</p><p class=\"list-level1\">Giant cell arteritis</p><p class=\"list-level1\">Takayasu arteritis</p><p class=\"list-level1\">Radiation artery fibrosis</p><p class=\"list-level1\">Iatrogenic lesions</p>";
		activeResultStyle();
	}
	else if(region == 2)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\">Takayasu arteritis</p><p class=\"list-level1\">Radiation artery fibrosis</p><p class=\"list-level1\">Embolic</p><p class=\"list-level1\">Fibromuscular dysplasia</p><p class=\"list-level1\">Iatrogenic lesions</p>";
		activeResultStyle();
	}
	else if(region == 3)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\">Embolic</p><p class=\"list-level1\">Iatrogenic lesions</p>";	
		activeResultStyle();
	}
	else if(region == 4)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\">Embolic</p><p class=\"list-level1\">Buerger's disease</p><p class=\"list-level1\">Ergotism</p><p class=\"list-level1\">Connective tissue disease</p><p class=\"list-level1\">Iatrogenic lesions</p>";
		activeResultStyle();
	}
	else if(region == 5)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\">Embolic</p><p class=\"list-level1\">Fibromuscular dysplasia</p><p class=\"list-level1\">Buerger's disease</p><p class=\"list-level1\">Ergotism</p><p class=\"list-level1\">Connective tissue disease</p><p class=\"list-level1\">Cytotoxic drugs</p><p class=\"list-level1\">Arterial drug injection</p><p class=\"list-level1\">Diabetes mellitus</p><p class=\"list-level1\">Myeloproliferative disorders</p><p class=\"list-level1\">Hypercoagulative status</p><p class=\"list-level1\">Cryoglobulins</p><p class=\"list-level1\">Repetitive trauma</p><p class=\"list-level1\">Vinyl chloride exposure</p><p class=\"list-level1\">Iatrogenic lesions</p>";
		activeResultStyle();
	}
	else{
		document.getElementById("result1").innerHTML = "";	
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