// 预约/收藏js
$(function(){
	$(".sub_border").mouseover(function(){
	var count =$(".sub_border").index(this);
	var countlength =$(".sub_border").length;
	for(var i=0;i<countlength;i++){
		if(i==count){			
			$(".arrow_click").eq(i).show();
			$(".arrow_click").eq(i).css("border-bottom","1px solid #ccc");
		}
	}
	});
	$(".panel").mouseleave(function(){
		$(".arrow_click").hide();
		$(".pulldown").hide();
	});
	$(".arrow_click").click(function(){
	var count =$(".arrow_click").index(this);
	var countlength =$(".arrow_click").length;
	for(var i=0;i<countlength;i++){
		if(i==count){			
			$(".pulldown").eq(i).show();
			$(this).css("border-bottom","0");
		}
		else{
			$(".pulldown").eq(i).hide();
			$(this).css("border-bottom","1px solid #ccc");	
		}
	}
	})
});

// 我的预约表弹窗
$(function(){
	$(".pulldown a:last-child").click(function(){
		$(".coverdiv").show();
	})

// 点击取消关闭遮罩
	$(".cover_cancel").click(function(){
		$(".coverdiv").hide();
	})
})	

//取消收藏
$(function(){
	$(".cancel").click(function(){
		var that = this;
		//询问框
		layer.confirm('您确定取消收藏吗？', {
    		btn: ['确定','取消'] //按钮
		}, function(){
			$(that).parents(".panel").remove();
    		layer.msg('取消成功', {
        		time: 2000, //2s后自动关闭			
			});
		}, function(){
    		layer.close();
		});
	})
});