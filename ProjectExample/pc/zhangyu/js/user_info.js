//用户详情页tab选项卡切换js
$(document).ready(function(){
	$(".info_tab li").bind("click",function(e){
		var index=$(".info_tab li").index(this);
		var lilength =$(".info_tab li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".info_tab li").eq(i).addClass("select");
				$(".user_switchbox").eq(i).show();
				}
			else{
				$(".info_tab li").eq(i).removeClass("select");
				$(".user_switchbox").eq(i).hide();
				}
		}
	});
});