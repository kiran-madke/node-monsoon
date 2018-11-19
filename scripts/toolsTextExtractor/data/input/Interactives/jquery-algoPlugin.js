/*
 *Author: Sambhaji Mane
 *Date: 07-03-2013
 */

(function($)
{
	$.fn.change = function(action)
	{
		if (action === 0)
		{
			return this
					.each(function()
					{
						$(this)
								.css(
										{
										background : "-webkit-gradient(linear, left top, left bottom, from(rgb(80,80,80)), to(rgb(180,180,180)))",
										color : "#ffffff",
										boxShadow : "0 0 0 0 #ffffff"
										});
					});
		}
		else if (action === 1)
		{
			return this
					.each(function()
					{
						$(this)
								.css(
										{
										background : " -webkit-gradient(linear, left top, left bottom, from(#ffffff),to(#a8adb2))",
										color : "#000000",
										boxShadow : "0 0 0 0 #ffffff"
										});
					});
		}
	};

	$.fn.scroll = function()
	{
		return this.each(function()
		{
			$('html, body').animate(
			{
				scrollTop : $(this).offset().top
			}, 700);
		});
	};

}(jQuery));
