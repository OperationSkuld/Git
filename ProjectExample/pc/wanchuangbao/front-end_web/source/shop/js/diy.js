/******共用功能******/
// 点击左边模块显示右边设置模块
function showSetting(obj){
	var objHidden = $(obj).find("input:hidden"),			//获取隐藏类对象
		dateTitle = $(objHidden).attr("date-title"),		//标题
		dateAlign = $(objHidden).attr("date-align"),		//对齐方式
		dateMargin = $(objHidden).attr("date-margin"),		//模块上下边距
		dateBgcolor = $(objHidden).attr("date-bgcolor");	//页面背景色

	$(".diy-action.selected").removeClass("selected");		//移除、隐藏类操作
	$(".diy-settings[data-origin=page-title]").remove();
	$(".diy-settings[data-origin=page-setting]").hide();
	$(".diy-action-btns").css("display","none");	
	
	$(obj).find(".diy-action").addClass("selected");		//追加、新增类操作
	$(obj).find(".diy-action-btns").css("display","block");
	$(".tempRightBox").append(pageTitleSetting);
	$(".diy-settings[data-origin=page-title]").show();
	
	showLocation(obj);	//定位
	console.log(showLocation(obj));
	$(".diy-settings:visible").css("margin-top",showLocation(obj));
	
	$(".diy-settings[data-origin=page-title] .formitems input#title").attr("value",dateTitle);	//赋值设置模块变量
	$("."+dateAlign+"").prop("checked",true);	
	$("#title-number").text(dateMargin+'px');
	$("#title-colorSelector div").css("background-color",dateBgcolor);
	slider(dateMargin); //滑块
	colorSelector(dateBgcolor); //颜色选择器
}
// 定位右边设置模块高度
var showLocation = function (obj){
	return ($(obj).offset().top-257);
}
// 模块删除
function diyDelete(obj){
	var $thisParents = $(obj).parents("div.diy-container");
	layer.msg('你确定要删除吗？', {
		time: 0 //不自动关闭
		,btn: ['确定', '取消']
		,yes: function(index){
	    	layer.msg("删除成功！");
	    	$thisParents.remove();
	    	$(".diy-settings:visible").remove();
	  	}
	});
}


/******页面头部模块******/
// 页面margin设置
function hasMargin(obj){
	if($(obj).hasClass("hasMargin")){
		$(".diy-content").css({"margin-left":"10px","margin-right":"10px"});
	}
	else{
		$(".diy-content").css("margin","0");
	}
}
// 页面标题
function topChangeValue(obj){
	var value = $(obj).val();
	$(".iphoneContentBox .wxTopBox p").text(value);
}
// 页面设置
$(".iphoneContentBox .wxTopBox").click(function(){
	$(".diy-settings[data-origin!=page-setting]").remove();
	$(".diy-action.selected").removeClass("selected");
	$(".diy-action-btns").css("display","none");
	$(".diy-settings[data-origin=page-setting]").show();
})
$("#page-setting").click(function(){
	$(".diy-settings[data-origin!=page-setting]").remove();
	$(".diy-action.selected").removeClass("selected");
	$(".diy-action-btns").css("display","none");
	$(".diy-settings[data-origin=page-setting]").show();
	$(document).scrollTop(180);
})



/******标题模块******/
// 标题
function titleChangeValue(obj){
	var value = $(obj).val();
	$(obj).attr("value",value);
	$(".diy-action.selected").siblings(".diy-content").find(".diy-title p").text(value);
	$(".diy-action.selected").parent().find("input:hidden").attr("date-title",value);
}
// 标题对齐方式
function textAlign(obj){
	if($(obj).hasClass("text-pos-left")){
		$(".diy-action.selected").siblings(".diy-content").find(".diy-title").css({"text-align":"left"});
		$(".diy-action.selected").parent().find("input:hidden").attr("date-align","text-pos-left");
	}
	if($(obj).hasClass("text-pos-center")){
		$(".diy-action.selected").siblings(".diy-content").find(".diy-title").css({"text-align":"center"});
		$(".diy-action.selected").parent().find("input:hidden").attr("date-align","text-pos-center");
	}
	if($(obj).hasClass("text-pos-right")){
		$(".diy-action.selected").siblings(".diy-content").find(".diy-title").css({"text-align":"right"});
		$(".diy-action.selected").parent().find("input:hidden").attr("date-align","text-pos-right");
	}
}













/******动态追加******/
var pageTitle = '<div class="diy-container" data-origin="page-title" onclick="showSetting(this);">'+
					'<input type="hidden" date-title="标题名称" date-style="style1" date-align="text-pos-left" date-margin="0" date-bgcolor="#333333" />'+
					'<div class="diy-action selected">'+
						'<div class="diy-action-btns" style="display:block;">'+
							'<a onclick="diyDelete(this)" class="diy-del">删除</a>'+
							'<a href="javascript:;" class="diy-edit">编辑</a>'+							
						'</div>'+
					'</div>'+
					'<div class="diy-content">'+
						'<div class="diy-title diy-title-style1">'+
							'<p>标题名称</p>'+
						'</div>'+
					'</div>'+							
				 '</div>',
	pageTitleSetting = '<div class="diy-settings" data-origin="page-title">'+
							'<div class="formitems">'+
								'<p>标题：</p>'+
								'<input type="text" value="标题名称" id="title" onchange="titleChangeValue(this)" />'+
							'</div>'+
							'<div class="formitems">'+
								'<p>显示类型：</p>'+
								'<input type="radio" name="title-style" value="" checked="checked" />'+
								'<label>样式一</label>'+
								'<!--<input type="radio" name="title-style" value="" />'+
								'<label>样式二</label>-->'+
							'</div>'+
							'<div class="formitems">'+
								'<p>显示方式：</p>'+
								'<input type="radio" name="title-position" class="text-pos-left" value="" checked="checked" onclick="textAlign(this)" />'+
								'<label>居左</label>'+
								'<input type="radio" name="title-position" class="text-pos-center" value="" onclick="textAlign(this)" />'+
								'<label>居中</label>'+
								'<input type="radio" name="title-position" class="text-pos-right" value="" onclick="textAlign(this)" />'+
								'<label>居右</label>'+
							'</div>'+
							'<div class="formitems">'+
								'<p>模块上下边距：</p>'+
								'<div class="sliderBox">'+
									'<div id="title-slider"></div>'+				
								'</div>'+
								'<span id="title-number">0px</span>'+
							'</div>'+	
							'<div class="formitems">'+
								'<p>页面背景色：</p>'+
								'<div class="colorSelector" id="title-colorSelector" style="float: left;">'+
									'<div style="background-color: #333"></div>'+
								'</div>'+
							'</div>'+
						 '</div>';
	











$("#page-title").click(function(){
	$(".diy-action.selected").removeClass("selected");		//移除、隐藏类操作
	$(".diy-settings[data-origin=page-title]").remove();
	$(".diy-settings[data-origin=page-setting]").hide();
	$(".diy-action-btns").css("display","none");	
	
	$(".drag").append(pageTitle);							//追加、新增类操作
	$(".tempRightBox").append(pageTitleSetting);
	$(".diy-settings[data-origin=page-title]").show();
	
	slider(); //滑块
	colorSelector(); //颜色选择器
	
	showLocation($(".diy-action.selected"));	//定位
	
	$(".diy-settings:visible").css("margin-top",showLocation($(".diy-action.selected")));
	
	if($(".hasMargin").is(':checked')){
		$(".diy-content").css({"margin-left":"10px","margin-right":"10px"});
	}
	else{
		$(".diy-content").css("margin","0");
	}
})
