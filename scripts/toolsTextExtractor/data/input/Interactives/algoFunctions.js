function toggleDecisionBtn(change, normal, status)
{
	$("#" + change).change(1);
	$("#" + normal).change(1);
	switch (status)
	{
		case 0:
			$("#" + change).change(status);
			break;
		case 1:
			break;
	}
}

function toggleLayout(slide, hide, status)
{
	$("#" + slide).hide();
	$("#" + hide).hide();
	switch (status)
	{
		case 0:
			$("#" + slide).slideDown("fast", function()
			{
				$(this).scroll();
			});
			break;
		case 1:
			break;
	}
}

function hideLayout(array)
{
	for ( var x = 0; x < array.length; x++)
	{
		$("#" + array[x]).hide();
	}
}

function toggleDecisionBtn3(change, normal1, normal2, status)
{
	$("#" + change).change(1);
	$("#" + normal1).change(1);
	$("#" + normal2).change(1);
	switch (status)
	{
		case 0:
			$("#" + change).change(status);
			break;
		case 1:
			break;
	}
}

function toggleLayout3(slide, hide1, hide2, status)
{
	$("#" + slide).hide();
	$("#" + hide1).hide();
	$("#" + hide2).hide();
	switch (status)
	{
		case 0:
			$("#" + slide).slideDown("fast", function()
			{
				$(this).scroll();
			});
			break;
		case 1:
			break;
	}
}