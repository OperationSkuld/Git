// map tab js
$(function(){
	$(".floor_tab ul li").click(function(){
		var index=$(".floor_tab ul li").index(this);
		var lilength =$(".floor_tab ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("point")
					   .parent().siblings().children().removeClass("point")
				$(".floor_map").eq(i).show();
			}
			else{				
				$(".floor_map").eq(i).hide();
			}
		}
	});
})