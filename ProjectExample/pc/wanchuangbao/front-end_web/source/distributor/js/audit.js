$(function(){
	// 同意操作
	$(".btnPass").click(function(){
		var $status = $(this).parents("li").find(".status"),
			$this = $(this);
		layer.msg('你确定要同意吗？', {
			time: 0 //不自动关闭
			,btn: ['确定', '取消']
			,yes: function(index){
		    	layer.msg("操作成功！");
		    	$status.text("已通过");
		    	$this.parent().html("一 一");
		    	$this.parent().children().remove();		    	
		  	}
		});
	})
	// 拒绝操作
	$(".btnRefuse").click(function(){
		var $status = $(this).parents("li").find(".status"),
			$this = $(this);
		layer.msg('你确定要拒绝吗？', {
			time: 0 //不自动关闭
			,btn: ['确定', '取消']
			,yes: function(index){
		    	layer.msg("操作成功！");
		    	$status.text("已拒绝");
		    	$this.parent().html("一 一");
		    	$this.parent().children().remove();		    	
		  	}
		});
	})
})

