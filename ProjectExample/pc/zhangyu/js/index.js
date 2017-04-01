//楼层tab选项卡切换js
$(document).ready(function(){
	$(".floor1_tab li").bind("click",function(e){
		var index=$(".floor1_tab li").index(this);
		var lilength =$(".floor1_tab li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".floor1_tab li").eq(i).addClass("tab_select1");
				$(".floor1_infobox").eq(i).show();
				}
			else{
				$(".floor1_tab li").eq(i).removeClass("tab_select1");
				$(".floor1_infobox").eq(i).hide();
				}
		}
	});
	$(".floor2_tab li").bind("click",function(e){
		var index=$(".floor2_tab li").index(this);
		var lilength =$(".floor2_tab li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".floor2_tab li").eq(i).addClass("tab_select2");
				$(".floor2_infobox").eq(i).show();
				}
			else{
				$(".floor2_tab li").eq(i).removeClass("tab_select2");
				$(".floor2_infobox").eq(i).hide();
				}
		}
	});
});

//nav js
$(document).ready(function(){
	$(".li_first").bind("mouseover",function(e){
		var index=$(".li_first").index(this);
		var lilength =$(".li_first").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".li_first").eq(i).addClass("nav_addclass");
				$(".nav_second").eq(i).show();
				}
			else{
				$(".li_first").eq(i).removeClass("nav_addclass");
				$(".nav_second").eq(i).hide();
				}
		}
	});
	$(".li_first").bind("mouseleave",function(e){
		$(".nav_second").hide();
		$(".li_first").removeClass("nav_addclass");
	});
});

