// 监听窗口高度
$(function(){
	var winHeight = $(window).height()-100+'px';
	console.log(winHeight);
	$(".logreg_bg").css("height",winHeight);
});
$(window).resize(function() {
	var winHeight = $(window).height()-100+'px';
	console.log(winHeight);
	$(".logreg_bg").css("height",winHeight);
});