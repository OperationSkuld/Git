// 写字楼遮罩筛选
$(function(){
	$(".select_css").click(function(e){
		
		var index=$(".select_css").index(this);
		var lilength =$(".select_css").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".cancel").eq(i).show();
			}
			else{		
				$(".cancel").eq(i).hide();
			}
		}
	})
	
	// 点击空白关闭遮罩
//	$(".coverdiv").click(function(e){
//		var _con = $(".cancel"); // 设置目标区域
//		if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
//			$(".coverdiv").hide();
//			$(".search_input").removeAttr("readonly");
//			$(".search_button").removeAttr("disabled");
//			$("body").css("overflow","auto");
//			event.stopPropagation();
//		}
//
//	})
	
	// 区域	
	$(".area ul li").click(function(){
		var index=$(".area ul li").index(this);
		var lilength =$(".area ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("area_cur");
				var area_value = $(this).text();
				$(".hidden_input:eq(0)").attr("value",area_value);
				//$("#form_submit").submit();							   
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
				var traffic_value = $(this).text();
				$(".hidden_input:eq(1)").attr("value",traffic_value);
				//$("#form_submit").submit();				   
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
				var business_value = $(this).text();
				$(".hidden_input:eq(2)").attr("value",business_value);
				//$("#form_submit").submit();				   
			}
			else{		
				$(this).parent().siblings().children().removeClass("area_cur");					
			}
		}
	})
	
	// 面积
	$(".size ul li").click(function(){
		var index=$(".size ul li").index(this);
		var lilength =$(".size ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("area_cur");
				var size_value = $(this).text();
				$(".hidden_input:eq(3)").attr("value",size_value);
				//$("#form_submit").submit();				   
			}
			else{		
				$(this).parent().siblings().children().removeClass("area_cur");				
			}
		}
	})
	
	// 特色
	$(".feature ul li").click(function(){
		var index=$(".feature ul li").index(this);
		var lilength =$(".feature ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("area_cur");
				var feature_value = $(this).text();
				$(".hidden_input:eq(4)").attr("value",feature_value);
				//$("#form_submit").submit();				   
			}
			else{		
				$(this).parent().siblings().children().removeClass("area_cur");					
			}
		}
	})
	
	
})