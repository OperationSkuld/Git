// 显示/隐藏弹窗
function showMask(coverWidth,i){
	typeof(i)=="undefined" ? i = 0 : i = i;
	$(".coverContain").width(coverWidth);
	$(".coverBox").eq(i).show();
	$(".coverBox").eq(i).css("visibility","visible");
}

function hideMask(){
	$(".coverBox").hide();
	$(".coverBox").css("visibility","hidden");
}

// 遮罩height自适应屏幕
$(function(){
	var coverHeight = $(document).height(),
		coverWidth = $(document).width();
	$(".coverBox").css({"width":coverWidth,"height":coverHeight});
	$(window).resize(function(){
		var coverHeight = $(document).height(),
			coverWidth = $(document).width();
//		console.log(coverHeight);
//		console.log(coverWidth);
		$(".coverBox").css({"width":coverWidth,"height":coverHeight});
	})
})
