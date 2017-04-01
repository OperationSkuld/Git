$(function(){
	$(".footer ul li").click(function(){
		$(this).addClass("foot_cur")
			   .siblings().removeClass("foot_cur")	
		$(this).children().children().eq(0).css("display","none")
		$(this).children().children().eq(1).css("display","inline")
		$(this).siblings().children().children("img:first-child").css("display", "inline")	
		$(this).siblings().children().children("img:nth-child(2)").css("display", "none")	
	})
})
