// 银行列表弹窗
$(function(){
	$(".box_each").click(function(){
		$(".coverdiv").show();
	})

// 点击空白关闭遮罩
	$(".coverdiv").click(function(e){
		var _con = $(".cover_div"); // 设置目标区域
		if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
			$(".coverdiv").hide();
		}
	})
})	
