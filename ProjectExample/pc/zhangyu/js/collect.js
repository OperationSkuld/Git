// 加入/取消收藏
$(function(){
	$('.collect').bind("click",function(){
		var bcposition = parseInt($("#star_bg").css("background-position"));
		if(bcposition==0){
			$("#star_bg").css({"background-position":"-40px 0px"});
			layer.msg('已加入收藏');
		}
		else{
			$("#star_bg").css({"background-position":"0px 0px"});
			layer.msg('已取消收藏');
		}
	})
	$('.user_collect').bind("click",function(){
		var bcposition = parseInt($("#collect").css("background-position"));
		if(bcposition==0){
			$("#collect").css({"background-position":"-18px 0px"});
			$(this).find("span").text("已收藏");
			layer.msg('已加入收藏');
		}
		else{
			$("#collect").css({"background-position":"0px 0px"});
			$(this).find("span").text("加入收藏")
			layer.msg('已取消收藏');
		}
	})
})