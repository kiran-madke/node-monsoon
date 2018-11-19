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
	var grade = document.getElementById("grade").selectedIndex;
	if(grade == 1)
	{
		document.getElementById("result1").innerHTML = "Loading dose of 150&ndash;300 mg orally followed by a maintenance dose of 75&ndash;100 mg/day.";
		document.getElementById("result2").innerHTML = "No dose adjustment";
		document.getElementById("result3").innerHTML = "No dose adjustment";
		activeResultStyle();
	}
	else if(grade == 2)
	{
		document.getElementById("result1").innerHTML = "Loading dose of 300&ndash;600 mg orally followed by 75 mg/day.";
		document.getElementById("result2").innerHTML = "No dose adjustment";
		document.getElementById("result3").innerHTML = "No information available";
		activeResultStyle();
	}
	else if(grade == 3)
	{
		document.getElementById("result1").innerHTML = "Loading dose of 180 mg orally followed 90 mg twice a day.";
		document.getElementById("result2").innerHTML = "No dose adjustment";
		document.getElementById("result3").innerHTML = "Not recommended";
		activeResultStyle();
	}
	else if(grade == 4)
	{
		document.getElementById("result1").innerHTML = "Loading dose of 60 mg orally followed by 10 mg/day.";
		document.getElementById("result2").innerHTML = "No dose adjustment";
		document.getElementById("result3").innerHTML = "Not recommended";
		activeResultStyle();
	}
	else if(grade == 5)
	{
		document.getElementById("result1").innerHTML = "1 mg/kg <i>s.c.</i> twice a day, <br/>0.75 mg/kg <i>s.c.</i> twice daily in patients &ge;75 years old.";
		document.getElementById("result2").innerHTML = "1 mg/kg <i>s.c.</i> once a day";
		document.getElementById("result3").innerHTML = "Not recommended";
		activeResultStyle();
	}
	else if(grade == 6)
	{
		document.getElementById("result1").innerHTML = "<p class=\"list-level1\"><b><i>Before coronary angiography:</i></b></p><p class=\"list-level2\">Bolus 60&ndash;70 IU/kg <i>i.v.</i> (maximum 5000 IU) and</p><p class=\"list-level2\">infusion (12&ndash;15 IU/kg/hour, maximum 1000 IU/hour),</p><p class=\"list-level2\">target aPTT 1.5&ndash;2.5 x control.</p><p class=\"list-level1\"><b><i>During PCI:</i></b></p><p class=\"list-level2\">70&ndash;100 IU/kg <i>i.v.</i> (50&ndash;70 IU/kg if concomitant with GP IIb/IIIa inhibitors).</p>";
		document.getElementById("result2").innerHTML = "No dose adjustment";
		document.getElementById("result3").innerHTML = "No dose adjustment";
		activeResultStyle();
	}
	else if(grade == 7)
	{
		document.getElementById("result1").innerHTML = "2.5 mg <i>s.c.</i> once a day.";
		document.getElementById("result2").innerHTML = "Not recommended<br/>if eGFR <20 mL/min/1.73 m<sup>2</sup> or dialysis";
		document.getElementById("result3").innerHTML = "Not recommended";
		activeResultStyle();
	}
	else if(grade == 8)
	{
		document.getElementById("result1").innerHTML = "Bolus 0.75 mg/kg <i>i.v.</i>, infusion 1.75 mg/kg/hour.<br/><i>If eGFR &ge;30 and &le;60 mL/min/1.73m<sup>2</sup> reduce infusion dose to 1.4 mg/kg/hour</i>.";
		document.getElementById("result2").innerHTML = "Not recommended";
		document.getElementById("result3").innerHTML = "Not recommended";
		activeResultStyle();
	}
	else if(grade == 9)
	{
		document.getElementById("result1").innerHTML = "Bolus of 0.25 mg/kg <i>i.v.</i> followed by 0.125 &mu;g/kg/min infusion<br/>(maximum 10 &mu;g/min).";
		document.getElementById("result2").innerHTML = "Careful consideration of bleeding risk";
		document.getElementById("result3").innerHTML = "Careful consideration of bleeding risk";
		activeResultStyle();
	}
	else if(grade == 10)
	{
		document.getElementById("result1").innerHTML = "Bolus<sup>a</sup> of 180 &mu;g/kg <i>i.v.</i> followed by an infusion of 2.0 &mu;g/kg/min for up to 18 hours.<br/>If eGFR <50 mL/min/1.73 m<sup>2</sup> reduce infusion dose to 1.0 &mu;g/kg/min.";
		document.getElementById("result2").innerHTML = "Not recommended";
		document.getElementById("result3").innerHTML = "Not recommended";
		activeResultStyle();
	}
	else if(grade == 11)
	{
		document.getElementById("result1").innerHTML = "Bolus 25 &mu;g/kg <i>i.v.</i> followed by 0.15 &mu;g/kg/min.";
		document.getElementById("result2").innerHTML = "Reduce infusion rate to 50%";
		document.getElementById("result3").innerHTML = "Not recommended";
		activeResultStyle();
	}
	else{
		document.getElementById("result1").innerHTML = "";
		document.getElementById("result2").innerHTML = "";
		document.getElementById("result3").innerHTML = "";
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