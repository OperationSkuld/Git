// JavaScript Document

$(function  () {
	//获取短信验证码
	var validCode=true;
	$(".signup_code").click (function  () {
		var time=60;
		var code=$(this);
		if (validCode) {
			validCode=false;
			code.addClass("signup_coding");
		var t=setInterval(function  () {
			time--;
			code.html(time+"s");
			if (time==0) {
				clearInterval(t);
			code.html("重新获取");
				validCode=true;
			code.removeClass("signup_coding");
			}
		},1000)
		}
	})
})