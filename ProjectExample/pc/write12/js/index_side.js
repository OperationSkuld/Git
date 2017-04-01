//side客服QQ和电话
$(document).ready(function(){

	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"150px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#3a99d8"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"42px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#FFF"})	
	});
	
});
//微信图显示隐藏
$(document).ready(function(e) {
    $("#moquu_wxin").hover(function(){
		$(".weixin").toggle();
		});
});
//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}

//底部鼠标经过微信二维码显示隐藏
$(document).ready(function(e) {
    $(".share_weixin").hover(function(){
		$("#erweima").toggle();
		});
});


