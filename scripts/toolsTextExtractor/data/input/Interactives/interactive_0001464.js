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

var abi = ["≥0.80","0.60-0.79","0.40-0.59","<0.40"];
var ankle_pressure = [">100","70-100","50-70","<50"];
var toe_pressure = ["≥60","40-59","30-39","<30"];

function clear_data()
{
	resetList("id2");
	document.getElementById("row1").style.display = "none";
	document.getElementById("fi").selectedIndex = "0";
	document.getElementById("ischaemia").selectedIndex = "0";
	document.getElementById("result1").innerHTML = "<br/>";
	document.getElementById("result2").innerHTML = "<br/>";
	deactiveResultStyle();
}

function generate_option()
{
	t = 0;
var ischaemia = document.getElementById("ischaemia").selectedIndex;
document.getElementById("fi").selectedIndex = "0";
document.getElementById("result1").innerHTML = "<br/>";
document.getElementById("result2").innerHTML = "<br/>";
deactiveResultStyle();
var id2 = document.getElementById("id2");
resetList("id2");
if(ischaemia == "1")
{
	document.getElementById("row1").style.display = "table-row";
	document.getElementById("id1").innerHTML = "ABI";
	 for (i = 0; i < abi.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(abi[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        id2.appendChild(option);
    }
}	
else if(ischaemia == "2")
{
	document.getElementById("row1").style.display = "table-row";
	document.getElementById("id1").innerHTML = "Ankle pressure (mmHg)";
	 for (i = 0; i < ankle_pressure.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(ankle_pressure[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        id2.appendChild(option);
    }
}
else if(ischaemia == "3")
{
	document.getElementById("row1").style.display = "table-row";
	document.getElementById("id1").innerHTML = "Toe pressure/TcPO<sub>2</sub>";
	for (i = 0; i < toe_pressure.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(toe_pressure[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        id2.appendChild(option);
    }
}
}

function result()
{
	if(document.getElementById("fi").selectedIndex == "0" || document.getElementById("id2").selectedIndex == "0")
	{
		document.getElementById("result1").innerHTML = "<br/>";
		document.getElementById("result2").innerHTML = "<br/>";
		document.getElementById("fi").selectedIndex = "0";
		deactiveResultStyle();
	}
	wound = document.getElementById("wound").value;
	id2 = document.getElementById("id2").value;
	fi = document.getElementById("fi").value;
	for (i = 0; i < data.length; i++) {	
	if(data[i].wound == wound)
	{
		if(data[i].ischaemia == id2)
		{
			if(data[i].foot_infection == fi)
			{
				document.getElementById("result1").innerHTML = wound+"-"+id2+"-"+fi;
				document.getElementById("result2").innerHTML = data[i].result;
				activeResultStyle();
			}
		}
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