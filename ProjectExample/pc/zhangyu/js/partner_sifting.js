// 奖金提成筛选
$(function(){
	
	// 最近日期
	$(".reward_recent ul li").click(function(){		
		var index=$(".reward_recent ul li").index(this);
		var lilength =$(".reward_recent ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("recent_cur");
				var recent_value = $(this).text();
				$("#recent").attr("value",recent_value);	   
			}
			else{	
				$(this).parent().siblings().children().removeClass("recent_cur");						
			}
		}
	})
	
	// 分类
	$(".reward_type ul li").click(function(){		
		var index=$(".reward_type ul li").index(this);
		var lilength =$(".reward_type ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("recent_cur");
				var type_value = $(this).text();
				$("#type").attr("value",type_value);	   
			}
			else{	
				$(this).parent().siblings().children().removeClass("recent_cur");						
			}
		}
	})
	
})
