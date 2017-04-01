// 图库管理
$(function(){
	var liLength = $(".galleryNumber ul li").length;
	for(var i=0;i<liLength;i++){
		$(".inputName").eq(i).width(textWidth($(".inputName").eq(i).val()));
	}
})

//获取文本宽度
var textWidth = function(text){ 
    var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'}); 
    $('body').append(sensor); 
    var width = sensor.width()+6;
    sensor.remove(); 
    return width;   
};

//input宽度自适应
$(".inputName").bind("input",function(){
    $(this).width(textWidth($(this).val()));
    $(this).siblings(".galleryHover").find(".save").show();
	$(this).siblings(".galleryHover").find(".edit").hide()
});

// 保存提交ajax方法
$(".save").click(function(){
	$("form").submit();
})

// 分类悬停、点击、命名效果
function galleryMouseover(obj){
	var objHover = $(obj).find(".galleryHover");
	$(obj).css({"background-color":"#f4fbff"});
	objHover.show();
}
function galleryMouseleave(obj){
	var objHover = $(obj).find(".galleryHover");
	$(obj).css({"background-color":"#FFF"});
	objHover.hide();
}
function galleryClick(obj){
	$(obj).addClass("bgCur")
	$(obj).siblings().removeClass("bgCur");
}
function galleryRename(obj){
	$(obj).parent().siblings("input").removeAttr("disabled")
									 .focus().select()	
}
function inputBlur(obj){
	$(obj).prop("disabled",true);
}

// 新建/取消分类
function newClass(){
	$(".classificationBox").show();
	$(".btnNewClass").hide();
}
function cancelClass(){
	$(".classificationBox").hide();
	$(".btnNewClass").show();
}

// 多图上传
function selectImage(element){
	console.log($(element).val());
	for(i=0; i<element.files.length; i++){
		uploadImage(element.files[i]);	
	}
}
function uploadImage(file){
	var allowextnames = ['jpg','gif','jpeg','png','JPG','GIF','JPEG','PNG'];
	var name = file.name;
	var ldot = name.lastIndexOf(".");
    var type = name.substring(ldot + 1);
	var imgObjPreview = window.URL.createObjectURL(file);
    var html =  '<li style="background-image: url(' + imgObjPreview + ');">'+
					'<div class="hoverBox">'+
						'<p>'+name+'</p>'+
						'<a onclick="imgDelete(this)"><span>×</span></a>'+
					'</div>'+
				'</li>';
    if($.inArray(type, allowextnames) == -1){
		return false;
	}
    else{
    	$("#imgPreview ul").append(html);
    }
    if($("#imgPreview ul li").length>0){
    	$(".uploadBtnBox").show();
    }
}
function imgDelete(obj){
	var $thisParents = $(obj).parents("li");
	$thisParents.remove();
	if($("#imgPreview ul li").length==0){
    	$(".uploadBtnBox").hide();
    }
}

// 移动图片到
function moveImgTo(obj){
	var checkedLength = $("input[type='checkbox']:checked").length;
	if(checkedLength == 0){
		layer.msg("请至少选择一项进行移动");
	}
	else{
		showMask(360,2);
	}
}

// 删除所选图片
function removeImg(obj){
	var checkedLength = $("input[type='checkbox']:checked").length;
	if(checkedLength == 0){
		layer.msg("请至少选择一项进行删除");
	}
	else{
		var $deleteObj = $("input[type='checkbox']:checked");
//		console.log($deleteObj);
		layer.msg('你确定要删除勾选项吗？', {
			time: 0 //不自动关闭
			,btn: ['确定', '取消']
			,yes: function(index){
		    	layer.msg("删除成功！");
			    $deleteObj.parents(".galleryPic").remove();
		  	}
		});
	}
}

// 上传图片tab切换
$(".galleryTab ul li").click(function(){
	var index=$(".galleryTab ul li").index(this);
	var lilength =$(".galleryTab ul li").length;
	for(var i=0;i<lilength;i++){
		if(i==index){
			$(this).addClass("tabSelected")
				   .siblings().removeClass("tabSelected");
			$(".galleryTabBox").eq(i).show();
		}
		else{	
			$(".galleryTabBox").eq(i).hide();
		}
	}
});

// 图片库选择图片
$(".galleryImgBox ul li input[type='checkbox']").on("click",function(){
	var checkedLength = $(".galleryImgBox ul li input[type='checkbox']:checked").length,
		objImg = $(this).parent(),
	    imgID = $(this).parent().attr("id"),
	    imgUrl = objImg.attr("data-url");
	    console.log(imgUrl);
	if(checkedLength>5){
		return false;
	}
	else{
		if($(this).is(":checked")){
			$(this).siblings(".checkedIcon").show();
			$(".selectImgBox ul li:not(#imgPos):last").remove();
			$(".selectImgBox ul li#imgPos").before('<li data-id="'+imgID+'" style="background-image: url('+imgUrl+');"><div class="imgDelete" onClick="galleryImgDelete(this)">×</div></li>'); 
			
		}
		else{
			$(this).siblings(".checkedIcon").hide();
		}
	}
})
function galleryImgDelete(obj){
	var imgID = $(obj).parent("li").attr("data-id");
	console.log('#'+imgID);
	$('#'+imgID).find("input[type='checkbox']").attr("checked",false);
	$('#'+imgID).find(".checkedIcon").hide();
	$(obj).parent().remove();
	$(".selectImgBox ul").append("<li></li>");
}
