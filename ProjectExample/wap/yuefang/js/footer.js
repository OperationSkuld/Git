$(function(){
		$(".footer ul li").click(function(){
			$(this).addClass("foot_cur")
			       .siblings().removeClass("foot_cur")			   
		})
		$(".footer ul li:eq(0)").click(function(){
			$(this).children().attr("src","images/home_on.png")
			$(".footer ul li img:eq(1)").attr("src","images/build_off.png")
			$(".footer ul li img:eq(2)").attr("src","images/house_off.png")
			$(".footer ul li img:eq(3)").attr("src","images/service_off.png")
			$(".footer ul li img:eq(4)").attr("src","images/user_off.png")
		})
		$(".footer ul li:eq(1)").click(function(){
			$(this).children().attr("src","images/build_on.png")
			$(".footer ul li img:eq(0)").attr("src","images/home_off.png")
			$(".footer ul li img:eq(2)").attr("src","images/house_off.png")
			$(".footer ul li img:eq(3)").attr("src","images/service_off.png")
			$(".footer ul li img:eq(4)").attr("src","images/user_off.png")
		})
		$(".footer ul li:eq(2)").click(function(){
			$(this).children().attr("src","images/house_on.png")
			$(".footer ul li img:eq(0)").attr("src","images/home_off.png")
			$(".footer ul li img:eq(1)").attr("src","images/build_off.png")
			$(".footer ul li img:eq(3)").attr("src","images/service_off.png")
			$(".footer ul li img:eq(4)").attr("src","images/user_off.png")
		})
		$(".footer ul li:eq(3)").click(function(){
			$(this).children().attr("src","images/service_on.png")
			$(".footer ul li img:eq(0)").attr("src","images/home_off.png")
			$(".footer ul li img:eq(1)").attr("src","images/build_off.png")
			$(".footer ul li img:eq(2)").attr("src","images/house_off.png")
			$(".footer ul li img:eq(4)").attr("src","images/user_off.png")
		})
		$(".footer ul li:eq(4)").click(function(){
			$(this).children().attr("src","images/user_on.png")
			$(".footer ul li img:eq(0)").attr("src","images/home_off.png")
			$(".footer ul li img:eq(1)").attr("src","images/build_off.png")
			$(".footer ul li img:eq(2)").attr("src","images/house_off.png")
			$(".footer ul li img:eq(3)").attr("src","images/service_off.png")
		})
})