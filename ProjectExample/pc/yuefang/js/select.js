// 下拉表单筛选
// 点击空白关闭遮罩
function closess(e){
	var _con = $(".cancel"); // 设置目标区域
	if(!_con.is(e.target) && _con.has(e.target).length === 0)
	{ 
		$(".cancel").hide();
		$("body").css("overflow-y","auto");
		event.stopPropagation();
	}	
}

$(function(){
	$(".text_input_right").click(function(e){		
		var index=$(".text_input_right").index(this);
		var lilength =$(".text_input_right").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$("body").css("overflow-y","hidden");
				$(".cancel").eq(i).show();
				event.stopPropagation();	
			}
			else{			
				$(".cancel").eq(i).hide();
			}
		}
	})
	
	// 区域	
	$(".area ul li").click(function(){		
		var index=$(".area ul li").index(this);
		var lilength =$(".area ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("area_cur");
				var area_value = $(this).text();
				$("#area").attr("value",area_value);
				$(".cancel").hide();
				$("body").css("overflow-y","auto");									   
			}
			else{	
				$(this).parent().siblings().children().removeClass("area_cur");						
			}
		}
	})
	
	// 交通
	$(".traffic ul li").click(function(){		
		var index=$(".traffic ul li").index(this);
		var lilength =$(".traffic ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("area_cur");
				var area_value = $(this).text();
				$("#traffic").attr("value",area_value);
				$(".cancel").hide();
				$("body").css("overflow-y","auto");									   
			}
			else{	
				$(this).parent().siblings().children().removeClass("area_cur");						
			}
		}
	})
	
	// 商圈		
	$(".business ul li").click(function(){		
		var index=$(".business ul li").index(this);
		var lilength =$(".business ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("area_cur");
				var area_value = $(this).text();
				$("#business").attr("value",area_value);
				$(".cancel").hide();
				$("body").css("overflow-y","auto");									   
			}
			else{	
				$(this).parent().siblings().children().removeClass("area_cur");						
			}
		}
	})
	
});