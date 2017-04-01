// 登录注册头部鼠标经过特效
$(function(){
	$('#home').bind("mouseover",function(){		
		$("#home").css({"background-position":"-70px 0px"});	
	})
	$('#home').bind("mouseleave",function(){
		$("#home").css({"background-position":"0px 0px"});
	})
	$('#app').bind("mouseover",function(){		
		$("#app").css({"background-position":"-70px 0px"});	
	})
	$('#app').bind("mouseleave",function(){
		$("#app").css({"background-position":"0px 0px"});
	})
	$('#help').bind("mouseover",function(){		
		$("#help").css({"background-position":"-70px 0px"});	
	})
	$('#help').bind("mouseleave",function(){
		$("#help").css({"background-position":"0px 0px"});
	})
})