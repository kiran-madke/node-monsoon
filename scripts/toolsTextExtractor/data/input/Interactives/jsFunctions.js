function validateInput()
{
	var result;
    //alert(input_age);
	if ((input_age != null) && (input_heartRate != null)
			&& (input_bloodPressure != null) && (input_chf != null)
			&& (input_creatine != null) && (input_segment != null) && (input_troponin != null) && (input_cardiac != null))
	{
		result = true;
	}
	else
	{
		result = false;
	}
	return result;
}

function showTables()
{
	if (isPressed == true)
	{
		if (isResultShowing == false)
		{
			$("#result_table").fadeIn(700);
			isResultShowing = true;
		}
	}
}

function hideTables()
{
	$("#result_table").fadeOut(700);
}

function animateGraph(plotResult, result, id)
{
	cancelTimeout = false;
	$("#page-graph-id").show();
	$("#bar").delay(700).fadeIn(700);
	
	$('#graph-footer').html('Calculated risk: ' + result + '&#37;');
	$('#bar-result').hide();

	window.startAnimation = setTimeout(function()
	{
		if (cancelTimeout == false)
		{
			if (plotResult > 0)
			{
				// Get the value to move graph by in pixels
				/*
				 * var wrap_width = $('#page-graph-id').find('#graph-content')
				 * .width(); var percent = plotResult / 100; var newResult =
				 * wrap_width * percent;
				 */
				$("#bar").animate(
				{
					left : plotResult + '%'
				}, "slow");
			}

			setBarColour(id, result);
			showBarResult(result);
		}

		else
		{
			cancelTimeout == false;
		}

	}, 1000);
	return false;
}

// Show result over the bar
function showBarResult(number)
{
	$('#bar-result').html(number + '%').delay(1100).fadeIn(700);
}

// Set bar colour
function setBarColour(id, result)
{
	$("#bar").css('background-color', '#9491a2');
	$("#graph-header").fadeIn(700);
	// Graph: 1 Year
	if ("#" + id == "#one-year-nomi")
	{
	$("#graph-img").css("background-image","url('graph_1y.png')");
		$("#graph-header").html(
				"Number of patients by risk group for 1-year death");
		
		if (result > 0 && result < 4)
		{
			$("#bar").css(
			{
				backgroundColor : '#37b34a'
			});
		}
		else if (result >= 4 && result <= 12)
		{
			$("#bar").css(
			{
				backgroundColor : '#ffdd15'
			});
		}
		else if (result > 12)
		{
			$("#bar").css(
			{
				backgroundColor : '#ec1c24'
			});
		}
	}

	// Graph: 3 Years
	else if ("#" + id == "#graph4_btn")
	{
	$("#graph-img").css("background-image","url('graph_3y.png')");
		$("#graph-header").html(
				"Number of patients by risk group for 3-year death");
		if (result > 0 && result < 12)
		{
			$("#bar").css(
			{
				backgroundColor : '#37b34a'
			});
		}
		else if (result >= 12 && result <= 30)
		{
			$("#bar").css(
			{
				backgroundColor : '#ffdd15'
			});
		}
		else if (result > 30)
		{
			$("#bar").css(
			{
				backgroundColor : '#ec1c24'
			});
		}
	}

	// Graph: 1 Year MI
	else if ("#" + id == "#graph4MI_btn")
	{
	$("#graph-img").css("background-image","url('graph_1y_mi.png')");
		$("#graph-header").html(
				"Number of patients by risk group for 1-year death or MI");
		
		if (result > 0 && result < 10)
		{
			$("#bar").css(
			{
				backgroundColor : '#37b34a'
			});
		}
		else if (result >= 10 && result <= 22)
		{
			$("#bar").css(
			{
				backgroundColor : '#ffdd15'
			});
		}
		else if (result > 22)
		{
			$("#bar").css(
			{
				backgroundColor : '#ec1c24'
			});
		}
	}
}