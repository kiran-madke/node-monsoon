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

 //Below function is used for generating POP-UP
 function showModal(message) {
     // get the modal
     var modal = document.getElementById("modal");
     modal.style.display = "block";

     document.getElementById("text").innerHTML = message;

     var modalButton = document.getElementById("modalButton");
     modalButton.onclick = function() {
         modal.style.display = "none";
     }

     window.onclick = function(event) {
         if (event.target === modal) {
             modal.style.display = "none";
         }
     }
 }
 
    function validateSBI(val)
			{
				var value = val.value;
				if(value<40 || value>390)
				{
					showModal("Sorry! Not a valid range");
					val.value="";
					document.getElementById('result1').innerHTML = "<br/>";
					clearOutputField();
				}
			}
			
			function valCal()
			{
				
			 ankle = document.getElementById('ankle').value;
			 artery = document.getElementById('artery').value;
			interpretation = (ankle/artery);
			var ABI_result = interpretation.toFixed(2);
			if(ankle!= 0 && artery!=0 && ankle >= 40 && artery >= 40 && ankle <= 390 && artery <= 390 )
			{
					if(ABI_result <= 0.90)
					{
						document.getElementById('result1').innerHTML = ABI_result;
						document.getElementById('result2').innerHTML = "Abnormal ABI<br/>(low)";
						activeResultStyle();
					}
					else if(0.91 <= ABI_result && ABI_result <= 0.99)
					{
						document.getElementById('result1').innerHTML = ABI_result;
						document.getElementById('result2').innerHTML = "Borderline";
						activeResultStyle();
					}
					else if(1.00 <= ABI_result && ABI_result <= 1.40)
					{
						document.getElementById('result1').innerHTML = ABI_result;
						document.getElementById('result2').innerHTML = "Normal ABI";
						activeResultStyle();
					}
					else if(1.40 < ABI_result)
					{
						document.getElementById('result1').innerHTML = ABI_result;
						document.getElementById('result2').innerHTML = "Abnormal ABI<br/>(high)";
						activeResultStyle();
					}
			}
			else
			{
					document.getElementById('result1').innerHTML = " <br/>";
					document.getElementById('result2').innerHTML = " <br/>";
					deactiveResultStyle();
			}
			}
	
			function isNumberKey(evt)
			{
			var charCode = (evt.which) ? evt.which : evt.keyCode
			if (charCode > 31 && (charCode < 48 || charCode > 57))
			{
					showModal("Please enter a valid number.");
			return false;
			}
			return true;
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