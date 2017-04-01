//楼层tab选项卡切换js
$(document).ready(function(){
	$(".list_tab li").bind("click",function(e){
		var index=$(".list_tab li").index(this);
		var lilength =$(".list_tab li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".list_tab li").eq(i).addClass("select");
				$(".floor1_infobox").eq(i).show();
				}
			else{
				$(".list_tab li").eq(i).removeClass("select");
				$(".floor1_infobox").eq(i).hide();
				}
		}
	});
	$(".list_tab li").bind("click",function(e){
		var index=$(".list_tab li").index(this);
		var lilength =$(".list_tab li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".list_tab li").eq(i).addClass("select");
				$(".floor2_infobox").eq(i).show();
				}
			else{
				$(".list_tab li").eq(i).removeClass("select");
				$(".floor2_infobox").eq(i).hide();
				}
		}
	});
});