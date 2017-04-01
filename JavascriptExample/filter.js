// 筛选房源

$(function(){
		
	// 区域	
	$(".area_list ul li").click(function(){		
		var index=$(".area_list ul li").index(this);
		var lilength =$(".area_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var area_value = $(this).text();
				$("#area").attr("value",area_value);
				if(area_value=="全部"){
					$("#li_area").remove();
				}
				else{
					$("#li_area").empty();
					if($("#li_area").length==0){
						$(".filter_list ul").append("<li id='li_area'>"+area_value+"</li>");	
					}
					if(area_value!==""){
						$("#li_area").text(area_value);	
					}
				}	
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 交通
	$(".traffic_list ul li").click(function(){		
		var index=$(".traffic_list ul li").index(this);
		var lilength =$(".traffic_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var traffic_value = $(this).text();
				$("#traffic").attr("value",traffic_value);	
				if(traffic_value=="全部"){
					$("#li_traffic").remove();
				}
				else{
					$("#li_traffic").empty();
					if($("#li_traffic").length==0){
						$(".filter_list ul").append("<li id='li_traffic'>"+traffic_value+"</li>");	
					}			
					if(traffic_value!==""){
						$("#li_traffic").text(traffic_value);	
					}
				}							   
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 商圈		
	$(".business_list ul li").click(function(){		
		var index=$(".business_list ul li").index(this);
		var lilength =$(".business_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var business_value = $(this).text();
				$("#business").attr("value",business_value);	
				if(business_value=="全部"){
					$("#li_business").remove();
				}
				else{
					$("#li_business").empty();
					if($("#li_business").length==0){
						$(".filter_list ul").append("<li id='li_business'>"+business_value+"</li>");	
					}			
					if(business_value!==""){
						$("#li_business").text(business_value);	
					}
				}								   
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 面积		
	$(".size_list ul li").click(function(){		
		var index=$(".size_list ul li").index(this);
		var lilength =$(".size_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var size_value = $(this).text();
				$("#size").attr("value",size_value);	
				if(size_value=="全部"){
					$("#li_size").remove();
				}
				else{
					$("#li_size").empty();
					if($("#li_size").length==0){
						$(".filter_list ul").append("<li id='li_size'>"+size_value+"</li>");	
					}			
					if(size_value!==""){
						$("#li_size").text(size_value);	
					}
				}					   
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 商圈		
	$(".feature_list ul li").click(function(){		
		var index=$(".feature_list ul li").index(this);
		var lilength =$(".feature_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var feature_value = $(this).text();
				$("#feature").attr("value",feature_value);
				if(feature_value=="全部"){
					$("#li_feature").remove();
				}
				else{
					$("#li_feature").empty();
					if($("#li_feature").length==0){
						$(".filter_list ul").append("<li id='li_feature'>"+feature_value+"</li>");	
					}			
					if(feature_value!==""){
						$("#li_feature").text(feature_value);	
					}
				}								   
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 清除全部筛选
	$(".cancel ul li").click(function(){
		var liLength = $(".filter_list ul li").length;
		console.log(liLength)
		/*if($("#area").val()=="全部" && $("#traffic").val()=="全部" && $("#business").val()=="全部" && $("#size").val()=="全部" && $("#feature").val()=="全部"){
			$(".filter_show").hide();	
		}
		else{
			$(".filter_show").show();	
		}*/
		if(liLength>0){
			$(".filter_list p").show();	
		}
		else{
			$(".filter_list p").hide();		
		}
	})
	$(".filter_list p").click(function(){
		$(".hidden_input").attr("value","全部");
		$(".filter_list ul li").remove();
		$(".filter_list p").hide();
		$(".first").addClass("cur");
		$(".cancel ul li:not(.first)").removeClass("cur");
	})
	
});