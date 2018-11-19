/*
 *Author: Sambhaji Mane
 *Date: 07-03-2013
 */
(function($)
{
	$.fn.scroll = function()
	{
		return this.each(function()
		{
			$('html, body').animate(
			{
				scrollTop : $(this).offset().top - 50
			}, 700);
		});
	};

	$.fn.changeImage = function()
	{
		return this.each(function()
		{
			if ($(this).attr("src") === "plus_w.png")
			{
				$(this).attr("src", "minus_w.png");
			}
			else
			{
				$(this).attr("src", "plus_w.png");
			}
		});
	};

}(jQuery));
