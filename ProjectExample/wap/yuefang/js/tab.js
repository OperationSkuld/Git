// 首页tab切换
$(function(){
	$(".index_tab ul li").click(function(){
		var index=$(".index_tab ul li").index(this);
		var lilength =$(".index_tab ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("tab_cur")
					   .siblings().removeClass("tab_cur")
				$(".index_box").eq(i).show();
			}
			else{				
				$(".index_box").eq(i).hide();
			}
		}
	});
})


// 写字楼遮罩筛选
$(function(){
	$(".select_css").click(function(e){
		
		var index=$(".select_css").index(this);
		var lilength =$(".select_css").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".select_css").eq(i).css("border-bottom","1px solid #ff7b00");
				$(".search_input").attr("readonly",true);
				$(".search_button").attr("disabled",true);
				$("body").css("overflow-y","hidden");
				$(".coverdiv").eq(i).show();
			}
			else{		
				$(".select_css").eq(i).css("border","0px");		
				$(".coverdiv").eq(i).hide();
			}
		}
	})
	
	// 点击空白关闭遮罩
	$(".coverdiv").click(function(e){
		var _con = $(".cancel"); // 设置目标区域
		if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
			$(".coverdiv").hide();
			$(".search_input").removeAttr("readonly");
			$(".search_button").removeAttr("disabled");
			$("body").css("overflow","auto");
			event.stopPropagation();
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
				$(".hidden_input:eq(0)").attr("value",area_value);
				$("#form_area").submit();							   
			}
			else{		
				$(this).siblings().removeClass("area_cur");						
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
				$(".hidden_input:eq(1)").attr("value",area_value);
				$("#form_traffic").submit();				   
			}
			else{		
				$(this).siblings().removeClass("area_cur");						
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
				$(".hidden_input:eq(2)").attr("value",area_value);
				$("#form_business").submit();				   
			}
			else{		
				$(this).siblings().removeClass("area_cur");						
			}
		}
	})
	
	// 更多-面积
	$(".area_choose ul li").click(function(){
		var index=$(".area_choose ul li").index(this);
		var lilength =$(".area_choose ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("more_cur");
				var area_value = $(this).text();
				$(".hidden_input:eq(3)").attr("value",area_value);
				//$("#form_business").submit();				   
			}
			else{		
				$(this).siblings().removeClass("more_cur");						
			}
		}
	})
	
	// 更多-特色
	$(".feature_choose ul li").click(function(){
		var index=$(".feature_choose ul li").index(this);
		var lilength =$(".feature_choose ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("more_cur");
				var area_value = $(this).text();
				$(".hidden_input:eq(4)").attr("value",area_value);
				//$("#form_business").submit();				   
			}
			else{		
				$(this).siblings().removeClass("more_cur");						
			}
		}
	})
	
	$(".more_submit").click(function(){
		$("#form_more").submit();			
	});
	
})