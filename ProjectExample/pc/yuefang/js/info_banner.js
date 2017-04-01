/*********banner************/
$(document).ready(function(){
	$(".index_focus").hover(function(){
		$(this).find(".index_focus_pre,.index_focus_next").stop(true, true).fadeTo("show", 1)
	},function(){
		$(this).find(".index_focus_pre,.index_focus_next").fadeOut()
	});
	
	$(".index_focus").slide({
		titCell: ".slide_nav a ",
		mainCell: ".bd ul",
		autoPlay: false,
		delayTime: 500,
		prevCell:".index_focus_pre",
		nextCell:".index_focus_next",
		effect: "fold",
		trigger: "click",
		startFun:function(i){
			$(".index_focus_info").eq(i).find("h3").css("display","block").fadeTo(1000,1);
			$(".index_focus_info").eq(i).find(".text").css("display","block").fadeTo(1000,1);
		}
	});
});

/*********band************/
$(function(){
	$(".multipleColumn").slide({
		titCell:".hd ul",
		mainCell:".bd .ulWrap",
		autoPage:true,
		effect:"leftLoop",
		autoPlay:false,
		vis:2,
	});
	if($(".ulWrap ul li").length<=4)
	{
		$(".multipleColumn .hd .next").hide();
		$(".multipleColumn .hd .prev").hide();
	}
});