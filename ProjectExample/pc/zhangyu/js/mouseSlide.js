// 鼠标移至div出现向下箭头js
$(function(){
	
	$(".floor2_list").mouseover(function(){
	var count =$(".floor2_list").index(this);
	var countlength =$(".floor2_list").length;
	for(var i=0;i<countlength;i++){
		if(i==count){			
			$(".arrow_click").eq(i).show();
//			$(".arrow_click").eq(i).css("border-bottom","1px solid #ccc");
		}
	}
	});
	$(".floor2_list").mouseleave(function(){
		$(".arrow_click").hide();
		$(".pulldown").hide();
	});
	
	$(".buyer_infolist").mouseover(function(){
	var count =$(".buyer_infolist").index(this);
	var countlength =$(".buyer_infolist").length;
	for(var i=0;i<countlength;i++){
		if(i==count){			
			$(".arrow_click").eq(i).show();
//			$(".arrow_click").eq(i).css("border-bottom","1px solid #ccc");
		}
	}
	});
	$(".buyer_infolist").mouseleave(function(){
		$(".arrow_click").hide();
		$(".pulldown").hide();
	});
	
	$(".arrow_click").click(function(){
	var count =$(".arrow_click").index(this);
	var countlength =$(".arrow_click").length;
	for(var i=0;i<countlength;i++){
		if(i==count){			
			$(".pulldown").eq(i).show();
//			$(this).css("border-bottom","0");
		}
		else{
			$(".pulldown").eq(i).hide();
//			$(this).css("border-bottom","1px solid #ccc");	
		}
	}
	})
});
