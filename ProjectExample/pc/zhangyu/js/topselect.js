// 首页条件搜索js
$(function(){
	$(".top_select").mouseover(function(){
		$(".top_select li").show();	
	})
	$(".top_select").mouseleave(function(){
		$(".top_select li").hide();	
	})
	
});
function changLi(obj){
	var litext = $(obj).text();
	$(".input_select").attr("value",litext);
	$(obj).siblings("li").hide();	
	$(obj).parents("ul").prepend("<li onclick='changLi(this)'>"+litext+"</li>");
	$(obj).detach();
}