// 显示/隐藏弹窗
function showMask(coverWidth,i){
	typeof(i)=="undefined" ? i = 0 : i = i;
	$(".coverContain").width(coverWidth);
	$(".coverBox").eq(i).show();
}

function hideMask(){
	$(".coverBox").hide();
}

