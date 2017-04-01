// 微信菜单范例

// 初始化导航
var liLength = $(".wxBottomBox ul li").length,
	average = Math.round(240/liLength);
if(liLength==0){
	$(".wxBottomBox").remove();
}
else if(liLength==1){
	$(".wxBottomBox ul li").css({
	  "width":average,
	})
	$(".wxSecNav").css({
	  "width":average/2-12,
	  "margin-left": -average/4
	})
}
else if(liLength==2){
	$(".wxBottomBox ul li").css({
	  "width":average,
	})
	$(".wxSecNav").css({
	  "width":average-12,
	  "margin-left": -average/2
	})
}
else if(liLength==3){
	$(".wxBottomBox ul li").css({
	  "width":average,
	})
	$(".wxSecNav").css({
	  "width":average-12,
	  "margin-left": -average/2
	})
}

// 点击显示二级导航
$(".hasSecNav").on("click",function(){
	$(this).find(".wxSecNav").show();
	$(this).siblings().find(".wxSecNav").hide();
})



// 微信菜单管理

// 分类悬停、点击、命名效果
function wxaddmenuMouseover(obj){
	var objHover = $(obj).find(".wxaddmenuHover");
	$(obj).css({"background-color":"#f4fbff"});
	objHover.show();
}
function wxaddmenuMouseleave(obj){
	var objHover = $(obj).find(".wxaddmenuHover");
	$(obj).css({"background-color":"#FFF"});
	objHover.hide();
}
function wxaddmenuClick(obj){
	$(".wxaddmenuNumber ul li").removeClass("bgCur");
	$(obj).addClass("bgCur");
}
function wxaddmenuRename(obj){
	$(obj).parent().siblings("input").removeAttr("disabled")
									 .focus().select()	
}
function inputBlur(obj){
	$(obj).prop("disabled",true);
}

// 限制输入字节数
function limtedLength(obj,length) {
	var inputValue = $(obj).val(), 
		inputNum = inputValue.replace(/[^\x00-\xff]/g, "**").length; //得到输入的字节数
    if(inputNum <= length){
        matchWords = inputValue.length;
        $(obj).attr("value",inputValue);
    }
    else{
    	$(obj).val(inputValue.substring(0, matchWords)) //截断超出部分的字节
    	$(obj).attr("value",inputValue.substring(0, matchWords));
    }    
}

// 监听input value值变化，改变图标
function changeIcon(obj){
	$(obj).siblings(".wxaddmenuHover").find(".save").show();
	$(obj).siblings(".wxaddmenuHover").find(".edit").hide();
}

// 上移/下移
function setFirstUp(obj){
	var objParent = $(obj).parents("ul");
	objParent.prev().before(objParent); 
}
function setFirstDown(obj){
	var objParent = $(obj).parents("ul");
	objParent.next().after(objParent); 
}
function setSecondUp(obj){
	var objParent = $(obj).parents("li");
	objParent.prev().before(objParent); 
}
function setSecondDown(obj){
	var objParent = $(obj).parents("li");
	objParent.next().after(objParent); 
}

// 限制一级/二级菜单个数
function limtedMenuNum(obj,num){
	var firstLen = $(".wxFirstNav").length,
	    secondLen = $(obj).parents("ul").find(".wxSecondNav li").length;
	if(firstLen>=num){
		layer.msg("最多创建"+num+"个一级菜单");
		$(".coverBox").hide();
	}
	if(secondLen>=num){
		layer.msg("最多创建"+num+"个二级菜单");
		$(".coverBox").hide();
	}
}

// 删除一级/二级菜单
$(".delete").click(function(){
	var $ulParents = $(this).parent().parent().parent();
	var $liParents = $(this).parents("li");
	console.log($ulParents);
	layer.msg('你确定要删除吗？', {
		time: 0 //不自动关闭
		,btn: ['确定', '取消']
		,yes: function(index){
			if($ulParents.hasClass("wxFirstNav")){
				$ulParents.remove();
				layer.msg("删除成功！");
			}
			else{
				$liParents.remove();
				layer.msg("删除成功！");
			}	
	  	}
	});
})



// 微信菜单链接设置

// 判断select最后option项是否选中
$(".wxlinkBox select").change(function(){
	if($(".wxlinkBox option:last").is(":selected")){
		$(".inputHref").show();
	}
	else{
		$(".inputHref").hide();
	}
})

