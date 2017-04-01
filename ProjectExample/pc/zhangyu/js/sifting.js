// 筛选钢材

$(function(){
		
	// 物料分类	
	$(".material").click(function(){		
		var index=$(".material").index(this);
		var lilength =$(".material").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var material_value = $(this).text();
				//console.log(material_value);
				$("#material").attr("value",material_value);
				$(".material_detail").eq(i).show();
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");	
				$(".material_detail").eq(i).hide();
			}
		}
	})
	$(".material_detail li").click(function(){		
		var index=$(".material_detail li").index(this);
		var lilength =$(".material_detail li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var material_detail_value = $(this).text();
				console.log(material_detail_value);
				$("#material").attr("value",material_detail_value);
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");	
			}
		}
	})
	
	// 招标总量
	$(".sum_list ul li").click(function(){		
		var index=$(".sum_list ul li").index(this);
		var lilength =$(".sum_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var sum_value = $(this).text();
				$("#sum").attr("value",sum_value);	   
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 含税价		
	$(".tax_list ul li").click(function(){		
		var index=$(".tax_list ul li").index(this);
		var lilength =$(".tax_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var tax_value = $(this).text();
				$("#tax").attr("value",tax_value);									   
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 地区		
	$(".area_list ul li").click(function(){		
		var index=$(".area_list ul li").index(this);
		var lilength =$(".area_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var area_value = $(this).text();
				$("#area").attr("value",area_value);	
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
	// 其他		
	$(".other_list ul li").click(function(){		
		var index=$(".other_list ul li").index(this);
		var lilength =$(".other_list ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(this).addClass("cur");
				var other_value = $(this).text();
				$("#other").attr("value",other_value);
			}
			else{	
				$(this).parent().siblings().children().removeClass("cur");						
			}
		}
	})
	
});