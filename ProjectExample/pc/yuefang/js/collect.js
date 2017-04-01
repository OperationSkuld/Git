// 加入/取消收藏
$(function(){
	$('.info_collect').bind("click",function(){
		var bcposition = parseInt($("#star_bg").css("background-position"));
		if(bcposition==0){
			$("#star_bg").css({"background-position":"-50px 0px"});
			layer.msg('已加入收藏');
		}
		else{
			$("#star_bg").css({"background-position":"0px 0px"});
			layer.msg('已取消收藏');
		}
	})
})