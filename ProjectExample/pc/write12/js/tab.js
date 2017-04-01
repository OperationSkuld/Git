// JavaScript Document

<!--积分充值 tab切换-->
$(document).ready(function(){
	$(".ig_money li").bind("click",function(){
		var index=$(".ig_money li").index(this);
		var lilength =$(".ig_money li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".ig_money li").eq(i).css({"background":"#3a99d8","border":"2px solid #59aee7","color":"#fff"});

				}
			else{
				$(".ig_money li").eq(i).css({"background":"#f6f6f6","border":"none","color":"#ccc"});

				}
		}
	});
});
<!--积分充值 tab切换 end-->

<!--个人中心 tab切换-->
$(document).ready(function(){
	$(".user_left_list").bind("click",function(e){
		var index=$(".user_left_list").index(this);
		var lilength =$(".user_left_list").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".user_left_list").eq(i).css({"background":"#3a99d8","color":"#fff"});
				$(".user_boxcc").eq(i).hide();
				$(".user_box").eq(i).show();
				}
			else{
				$(".user_left_list").eq(i).css({"background":"none","color":"#666"});
				$(".user_box").eq(i).hide();
				$(".user_boxcc").eq(i).hide();
				}
		}
	});
});
<!--个人中心 tab切换 end-->


<!--精品课程 tab切换-->
$(document).ready(function(){
	$(".ex_course_list").bind("click",function(e){
		var index=$(".ex_course_list").index(this);
		var lilength =$(".ex_course_list").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".ex_course_list").eq(i).css({"color":"#3a99d8"});
				$(".ex_course_boxcc").eq(i).hide();
				$(".ex_course_box").eq(i).show();
				}
			else{
				$(".ex_course_list").eq(i).css({"color":"#666"});
				$(".ex_course_box").eq(i).hide();
				$(".ex_course_boxcc").eq(i).hide();
				}
		}
	});
});
<!--个人中心 tab切换 end-->


<!--精品课程详情页 tab切换-->
$(document).ready(function(){
	$(".exinfo_list").bind("click",function(){
		var index=$(".exinfo_list").index(this);
		var lilength =$(".exinfo_list").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".exinfo_list").eq(i).css({"background":"#333"});
				$(".exinfo_box").eq(i).show();
				$(".exinfo_left_box").eq(i).show();
				}
			else{
				$(".exinfo_list").eq(i).css({"background":"#666"});
				$(".exinfo_box").eq(i).hide();
				$(".exinfo_left_box").eq(i).hide();
				}
		}
	});
});
<!--精品课程详情页 tab切换 end-->



<!--练功房 tab切换-->
$(document).ready(function(){
	$(".ex_left ul .ex_list").bind("click",function(e){
		var index=$(".ex_list").index(this);
		var lilength =$(".ex_list").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".ex_list").eq(i).css({"background":"#3a99d8","color":"#fff"});
				$(".ex_box").eq(i).show();
				}
			else{
				$(".ex_list").eq(i).css({"background":"none","color":"#666"});
				$(".ex_box").eq(i).hide();
				}
		}
	});
});
<!--练功房 tab切换 end-->



<!--帮助中心 tab切换-->
$(document).ready(function(){
	$(".help_left_list").bind("click",function(e){
		var index=$(".help_left_list").index(this);
		var lilength =$(".help_left_list").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".help_left_list").eq(i).css({"color":"#3a99d8"});
				}
			else{
				$(".help_left_list").eq(i).css({"color":"#666"});
				}
		}
	});
});
<!--帮助中心 tab切换 end-->