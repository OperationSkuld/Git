// 全选/全不选/批量删除
$(function(){
	$("#selectAll").click(function(){
		$("input:checkbox").prop("checked",true);
	})
	$("#selectNone").click(function(){
		$("input:checkbox").prop("checked",false);
	})
	$("#batchDelete").click(function(){
		var checkedLength = $("input[type='checkbox']:checked").length;
		if(checkedLength == 0){
			layer.msg("请至少选择一项进行删除");
		}
		else{
			var $deleteObj = $("input[type='checkbox']:checked");
//			console.log($deleteObj);
			layer.msg('你确定要删除勾选项吗？', {
				time: 0 //不自动关闭
				,btn: ['确定', '取消']
				,yes: function(index){
			    	layer.msg("删除成功！");
				    $deleteObj.parents("li").remove();
			  	}
			});
		}
	})
})

