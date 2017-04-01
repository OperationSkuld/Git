// nav
$(function(){
	$(".firstGray").click(function(){
		$(this).addClass("navFirstCur");
		$(this).parents().siblings().find(".firstGray").removeClass("navFirstCur");
		$(".secondGray").removeClass("navSecondCur");
	})
	$(".secondGray").click(function(){
		$(this).addClass("navSecondCur");
		$(this).parents().siblings().find(".secondGray").removeClass("navSecondCur");
		$(".firstGray").removeClass("navFirstCur");
	})
})