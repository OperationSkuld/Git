// 关注/取关
function follow(obj){
	var flag = $(obj).attr("flag");
	if(flag=="unfollow"){
		$(obj).text("已关注");
		$(obj).css({"background":"#FFF","color":"#86b3e5"});
		$(obj).attr("flag","follow");
	}
	else{
		$(obj).text("关注Ta");
		$(obj).css({"background":"#86b3e5","color":"#FFF"});
		$(obj).attr("flag","unfollow");
	}
}
