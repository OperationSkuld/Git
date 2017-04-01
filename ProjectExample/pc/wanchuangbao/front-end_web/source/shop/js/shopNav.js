// 店铺导航 js
$(function(){
	navNum = $(".navAddBox ul li").length,
	navhtml = $(".navCopy").html();
	navIconHtml = '<div class="navSetting">'+
					'<div class="inputBox">'+
						'<p>链接到：</p>'+
						'<select name="">'+
							'<option value="">请选择</option>'+
							'<option value="">链接1</option>'+
							'<option value="">链接2</option>'+
							'<option value="">自定义</option>'+
						'</select>'+
					'</div>'+
					'<div class="inputBox">'+
						'<p>导航名称：</p>'+
						'<input type="text" value=""  />'+
					'</div>'+
					'<div class="inputBox iconBox">'+
						'<p>小图标：</p>'+
						'<div class="navIconBox">'+
							'<div class="navIcon" style="background-image: url(img/nav_icon.png);"></div>'+
						'</div>'+
					'</div>'+
					'<div class="inputBox">'+
						'<p>背景色：</p>'+
						'<select name="">'+
							'<option value="">黑</option>'+
							'<option value="">红</option>'+
							'<option value="">黄</option>'+
						'</select>'+
					'</div>'+
					'<div class="inputBox">'+
						'<p>文字颜色：</p>'+
						'<select name="">'+
							'<option value="">黑</option>'+
							'<option value="">红</option>'+
							'<option value="">黄</option>'+
						'</select>'+
					'</div>'+
				 '</div>';
	navTextHtml = '<div class="navSetting">'+
					'<div class="inputBox">'+
						'<p>链接到：</p>'+
						'<select name="">'+
							'<option value="">请选择</option>'+
							'<option value="">链接1</option>'+
							'<option value="">链接2</option>'+
							'<option value="">自定义</option>'+
						'</select>'+
					'</div>'+
					'<div class="inputBox">'+
						'<p>导航名称：</p>'+
						'<input type="text" value=""  />'+
					'</div>'+
					'<div class="inputBox iconBox" style="display:none;">'+
						'<p>小图标：</p>'+
						'<div class="navIconBox">'+
							'<div class="navIcon" style="background-image: url(img/nav_icon.png);"></div>'+
						'</div>'+
					'</div>'+
					'<div class="inputBox">'+
						'<p>背景色：</p>'+
						'<select name="">'+
							'<option value="">黑</option>'+
							'<option value="">红</option>'+
							'<option value="">黄</option>'+
						'</select>'+
					'</div>'+
					'<div class="inputBox">'+
						'<p>文字颜色：</p>'+
						'<select name="">'+
							'<option value="">黑</option>'+
							'<option value="">红</option>'+
							'<option value="">黄</option>'+
						'</select>'+
					'</div>'+
				 '</div>';
	// 导航类型切换
	$(".radioClass").on("click",function(){
		if($("#navTypeText").is(":checked")){ 
   			$(".iconBox").hide();
   			navhtml = navTextHtml;
  		}
		else{
			$(".iconBox").show();
   			navhtml = navIconHtml;
		}
	})
	// 循环遍历导航
	for(var i = 1; i < navNum; i++){
		$(".navCopy").append(navhtml);
	}
	$(".navAddBox").on("click","ul li",function(){
		var index = $(".navAddBox ul li").index(this),
		    navNum = $(".navAddBox ul li").length;
		for(var i=0;i<navNum;i++){
			if(i==index){
				$(this).addClass("navSelected")
					   .siblings().removeClass("navSelected");
				$(".navSetting").eq(i).show();
			}
			else{	
				$(".navSetting").eq(i).hide();
			}
		}
	});
	// 添加/删除 导航
	$(".btnDelete").eq(navNum-1).addClass("btnClickDelete");
	$(".navAddBox").on("click",".btnClickDelete",function(event){
		var $thisParents = $(this).parents("li"),
		    navNum = $(".navAddBox ul li").length;
		if($thisParents.hasClass("navSelected")){
			$thisParents.prev().addClass("navSelected").find(".btnDelete").addClass("btnClickDelete");
			$(".navSetting").eq(navNum-2).show();
			$(".navSetting").eq(navNum-1).remove();".btnDelete"
			$thisParents.remove();
		}
		else{
			$thisParents.prev().find(".btnDelete").addClass("btnClickDelete");
			$(".navSetting").eq(navNum-1).remove();
			$thisParents.remove();
		}	
		event.stopPropagation();
	})
	$(".addNavBtn").on("click","button",function(){
//		if($("#navTypeText").is(":checked")){ 
// 			$(".iconBox").hide();
// 			var navhtml = $(".navCopy").html();
// 			alert(navhtml);
//		}
//		else{
//			$(".iconBox").show();
//			var navhtml = $(".navCopy").html();
//			alert(navhtml);
//		}
		var navNum = $(".navAddBox ul li").length+1;
		console.log(navNum);
		    nav =   '<li>'+
						'<p>导航 '+navNum+'</p>'+
						'<div class="liOperation">'+
							'<button type="button" class="btnAdd">添加</button>'+
							'<span>/</span>'+
							'<button type="button" class="btnDelete btnClickDelete">删除</button>'+
						'</div>'+
					'</li>';
		if(navNum>5){
			layer.msg("最多只能添加5个导航");
			return false;
		}
		else if(navNum==1){
			$(".navAddBox ul").append(nav);			
			$(".navCopy").append(navhtml);
			$(".navAddBox ul li:first-child").addClass("navSelected");
		}
		else{
			$(".navAddBox ul").append(nav);
			
			$(".navCopy").append(navhtml);
			var navNum = $(".navAddBox ul li").length;
			$(".btnClickDelete").parents("li").prev().find(".btnDelete").removeClass("btnClickDelete");
		}
		
	})
})
