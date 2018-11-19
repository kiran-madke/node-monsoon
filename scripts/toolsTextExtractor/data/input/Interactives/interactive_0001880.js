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
	var role = document.getElementById("role").selectedIndex;
	if(role == 1)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>History taking</b></p><p class=\"list-level1\"><b>CSM</b></p><p class=\"list-level1\"><b>Tilt testing</b></p><p class=\"list-level1\"><b>ECG monitoring (Holter, external loop recorder): administration and interpretation</b></p><p class=\"list-level1\"><b>ILR</b></p><p class=\"list-level1\"><b>Patient education, biofeedback trainingc and instruction sheet on PCM</b></p><p class=\"list-level1\"><b>Final report and clinic note</b></p><p class=\"list-level1\"><b>Communication with patients, referring physicians, and stakeholders.</b></p><p class=\"list-level1\"><b>Follow-up</b></p>";
		
		activeResultStyle();
	}
	else if(role == 2)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Structured history taking (e.g. application of software technologies and algorithms)</b></p><p class=\"list-level1\"><b>12-lead ECG</b></p><p class=\"list-level1\"><b>Blood tests</b></p><p class=\"list-level1\"><b>Active standing test</b></p><p class=\"list-level1\"><b>Tilt testing</b></p><p class=\"list-level1\"><b>Basic autonomic function test</b></p><p class=\"list-level1\"><b>ECG monitoring (Holter, external loop recorder): administration and interpretation</b></p><p class=\"list-level1\"><b>ILR</b></p><p class=\"list-level1\"><b>Remote monitoring</b></p><p class=\"list-level1\"><b>Patient education, biofeedback trainingc and instruction sheet on PCM</b></p><p class=\"list-level1\"><b>Communication with patients, referring physicians, and stakeholders.</b></p><p class=\"list-level1\"><b>Follow-up</b></p>";
		
		activeResultStyle();
	}
	else if(role == 3)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b>Echocardiogram and imaging</b></p><p class=\"list-level1\"><b>Other cardiac tests (stress test, EPS, angiograms)</b></p><p class=\"list-level1\"><b>Neurological tests (computed tomography, magnetic resonance imaging, EEG, video-EEG)</b></p><p class=\"list-level1\"><b>Pacemaker and ICD implantation, catheter ablation</b></p>";
		
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