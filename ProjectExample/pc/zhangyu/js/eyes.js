// 账户显示/隐藏
$(function(){
	$('.e_showhide').bind("click",function(){
		var bcposition = parseInt($(".e_showhide").css("background-position"));
		if(bcposition==0){
			$(".e_showhide").css({"background-position":"-22px 0px"});
			$(".e_circle strong").text("*****");
			$(".e_money strong").eq(0).text("*****");
			$(".e_money strong").eq(1).text("*****");
			$("#e_traggle strong").text("*****");
		}
		else{
			$(".e_showhide").css({"background-position":"0px 0px"});
			$(".e_circle strong").text("100,000,000");
			$(".e_money strong").eq(0).text("0");
			$(".e_money strong").eq(1).text("0");
			$("#e_traggle strong").text("6,000");
		}
	})
})