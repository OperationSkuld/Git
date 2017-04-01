// 经营类别筛选
$(function(){
		
	// 四级分类选取	
	$(".supply_listfourth p").click(function(){		
		var isClass = $(this).hasClass("selected");
		console.log(isClass);
		if(isClass){
			$(this).removeClass("selected");
		}
		else{
			$(this).addClass("selected");
		}
	})
		
});