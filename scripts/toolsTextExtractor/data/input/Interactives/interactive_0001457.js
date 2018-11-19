

var fontaine = ["Asymptomatic","Non-disabling intermittent claudication","Disabling intermittent claudication","Ischaemic rest pain","Ulceration or gangrene"];

var rutherford =["Asymptomatic","Mild claudication","Moderate claudication","Severe claudication","Ischaemic rest pain","Minor tissue loss","Major tissue loss"];
function option()
{
	var t = 1;
	//
	var classification = document.getElementById("classified").selectedIndex;
	var sympt = document.getElementById("symptoms");
	if(classification == "1")
	{
		resetList("symptoms");
		 document.getElementById("row1").style.display = "table-row";
		 deactiveResultStyle();
		 document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
	document.getElementById("result3").innerHTML = "";
    for (i = 0; i < fontaine.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(fontaine[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        sympt.appendChild(option);
    }
	document.getElementById("stage").style.display = "table-row";
	document.getElementById("stage_result").style.display = "table-row";
	 document.getElementById("grade").style.display = "none";
	document.getElementById("grade_result").style.display = "none";
	document.getElementById("category").style.display = "none";
	document.getElementById("category_result").style.display = "none"; 
	}
	else if(classification == "2")
	{
		resetList("symptoms");
		deactiveResultStyle();
		document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
	document.getElementById("result3").innerHTML = "";
		document.getElementById("row1").style.display = "table-row";
    for (i = 0; i < rutherford.length; i++) {
        //create <option> element
        var option = document.createElement("option");
        //attribute 'value' is an incremental value.
        option.setAttribute("value", t);
        t++;
        //variable for storing the data for <option> element
        var t1 = document.createTextNode(rutherford[i]);
        //appends data to <option> tag
        option.appendChild(t1);
        //appends <option> element in drop-down list.
        sympt.appendChild(option);
    }
	 document.getElementById("stage").style.display = "none";
	document.getElementById("stage_result").style.display = "none"; 
	document.getElementById("grade").style.display = "table-row";
	document.getElementById("grade_result").style.display = "table-row";
	document.getElementById("category").style.display = "table-row";
	document.getElementById("category_result").style.display = "table-row";
	}
	else{
		document.getElementById("classified").selectedIndex = "0";
		document.getElementById("row1").style.display = "none"; 
		 document.getElementById("stage").style.display = "none";
	document.getElementById("stage_result").style.display = "none"; 
	 document.getElementById("grade").style.display = "none";
	document.getElementById("grade_result").style.display = "none";
	document.getElementById("category").style.display = "none";
	document.getElementById("category_result").style.display = "none"; 
	}
	}

function result()
	{
	var classification = document.getElementById("classified").selectedIndex;
	var sympt = document.getElementById("symptoms").selectedIndex;
if(classification == "1")
	{
		deactiveResultStyle();
	if(sympt == 1)
	{
		document.getElementById("result1").innerHTML = "I";
		activeResultStyle();
	}
	else if(sympt == 2)
	{
		document.getElementById("result1").innerHTML = "IIa";
		activeResultStyle();
	}
	else if(sympt == 3)
	{
		document.getElementById("result1").innerHTML = "IIb";
		activeResultStyle();
	}
	else if(sympt == 4)
	{
		document.getElementById("result1").innerHTML = "III";
		activeResultStyle();
	}
	else if(sympt == 5)
	{
		document.getElementById("result1").innerHTML = "IV";
		activeResultStyle();
	}
	}
else if(classification == "2")
	{
		deactiveResultStyle();
		if(sympt == 1)
	{
		document.getElementById("result2").innerHTML = "0";
		document.getElementById("result3").innerHTML = "0";
		activeResultStyle();
	}
	else if(sympt == 2)
	{
		document.getElementById("result2").innerHTML = "I";
		document.getElementById("result3").innerHTML = "I";
		activeResultStyle();
	}
	else if(sympt == 3)
	{
		document.getElementById("result2").innerHTML = "I";
		document.getElementById("result3").innerHTML = "2";
		activeResultStyle();
	}
	else if(sympt == 4)
	{
		document.getElementById("result2").innerHTML = "I";
		document.getElementById("result3").innerHTML = "3";
		activeResultStyle();
	}
	else if(sympt == 5)
	{
		document.getElementById("result2").innerHTML = "II";
		document.getElementById("result3").innerHTML = "4";
		activeResultStyle();
	}
	else if(sympt == 6)
	{
		document.getElementById("result2").innerHTML = "III";
		document.getElementById("result3").innerHTML = "5";
		activeResultStyle();
	}
	else if(sympt == 7)
	{
		document.getElementById("result2").innerHTML = "III";
		document.getElementById("result3").innerHTML = "6";
		activeResultStyle();
	}
	}
else{
	deactiveResultStyle();
	document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
	document.getElementById("result3").innerHTML = "";
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