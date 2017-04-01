// 监听窗口高度
$(function(){
	var floorHeight = $(window).height()-106+'px';
	var bannerHeight = $(".flexslider").height();
	var topHeight = $(window).height()-106-bannerHeight+'px';
	var bottomHeight = $(window).height()-446+'px';
	$(".section-floor").css("height",floorHeight);
	$(".introduce").css("height",topHeight);
	$(".bottom-introduce").css("height",bottomHeight);

});
$(window).resize(function() {
	var floorHeight = $(window).height()-106+'px';
	var bannerHeight = $(".flexslider").height();
	var topHeight = $(window).height()-106-bannerHeight+'px';
	var bottomHeight = $(window).height()-446+'px';
	$(".section-floor").css("height",floorHeight);
	$(".introduce").css("height",topHeight);
	$(".bottom-introduce").css("height",bottomHeight);

});