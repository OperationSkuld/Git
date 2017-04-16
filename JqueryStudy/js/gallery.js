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
//$(".save").click(function(){
//	$("form").submit();
//})

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
	//$(obj).prop("disabled",true);
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
		layer.msg("请至少选择一项进行移动", {time: 1000});

	}
	else{
		showMask(360,0);
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

//操作
function reload()
{
	window.location.reload();
}
//图片上传
$(document).ready(function(e){
	$(".upload_img").bind("click",function(){
		var data = new FormData($('#form_id')[0]);
		$.ajax({
			type: "POST",
			url:'/setting/img',
			data:data,
			dataType:"JSON",
			async: false,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data) {
				if(data.state == 'fail'){
					tankuang(120,data.msg,data.url);

				}


			},
			error: function(data) {
				tankuang(120,"提交失败");
				return false;
			},
		});
	});

});

//添加图库
function addcateimg()
{
	var $name=$('#addimgcate').val();
	if($name=="")
	{
		tankuang(120,"请输入图库名称");
		return false;
	}
	$.ajax({
		type: "POST",
		url:"/setting/addcate",
		data:{title:$name,type:'add'},
		dataType:"JSON",
		async: true,
		error: function(request) {
			tankuang(120,"提交失败");
			return false;
		},
		success: function(data) {
			if(data.state == 'fail'){

				tankuang(120,data.msg);
				$(".classificationBox").hide();
				$(".btnNewClass").show();
				var str='<option selected value="'+data.id+'">'+$name+'（0）</option>';
				$("#imgcate").append(str);
				$("#upimg").attr('onclick','reload()');




			}



		},
	});
}
//添加图库
function addcate()
{
	var $name=$('#addcate').val();
	if($name=="")
	{
		tankuang(120,"请输入图库名称");
		return false;
	}
	$.ajax({
		type: "POST",
		url:"/setting/addcate",
		data:{title:$name,type:'add'},
		dataType:"JSON",
		async: true,
		error: function(request) {
			tankuang(120,"提交失败");
			return false;
		},
		success: function(data) {
			if(data.state == 'fail'){
				tankuang(120,data.msg,data.url);

			}



		},
	});
}
//删除图库
function dele(obj,id)
{
	var $id=id;
	layer.msg('你确定要删除吗？', {
		time: 0 //不自动关闭
		,btn: ['确定', '取消']
		,yes: function(index){
			$.ajax({
				type: "POST",
				url:"/setting/delimg",
				data:{cate_id:$id},
				dataType:"JSON",
				async: true,
				error: function(request) {
					tankuang(120,"提交失败");
					return false;
				},
				success: function(data) {
					if(data.state == 'fail'){
						layer.close(index);
						tankuang(120,data.msg,data.url);

					}



				},
			});


		}
	});



}
//图库修改
function edit(obj,id)
{
	var $id=id;
	var $name=$(obj).parents('li').find('.inputName').val();

	$.ajax({
		type: "POST",
		url:"/setting/addcate",
		data:{id:$id,title:$name,type:'edit'},
		dataType:"JSON",
		async: true,
		error: function(request) {
			tankuang(120,"提交失败");
			return false;
		},
		success: function(data) {
			$(obj).parents(".galleryHover").find(".save").hide();
			$(obj).parents(".galleryHover").find(".edit").show();
			$(obj).parents("li").find(".inputName").attr("disabled","disabled");

			tankuang(120,"修改成功");

		},
	});
}
function tankuang(pWidth,content,url)
{
	$("#msg").remove();
	var html ='<div id="msg" style="position:fixed;top:50%;width:100%;height:30px;line-height:30px;margin-top:-15px;z-index:999;"><p style="background:#000;opacity:0.8;width:'+ pWidth +'px;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:12px;border-radius:4px;">'+ content +'</p></div>';
	$("body").append(html);
	var t=setTimeout(next,1000);
	function next()
	{

		$("#msg").remove();
		if(url!= undefined){
			window.location.href = url;
		}

	}
}
function ajaxSubmit(obj){
	var action=$(obj).attr("action");
	$.ajax({
		type: "POST",
		url:action,
		data:$(obj).serialize(),
		dataType:"JSON",
		async: true,
		error: function(request) {
			tankuang(120,"提交失败");
			return false;
		},
		success: function(data) {
			var msg = data.msg,
				state = data.state,
				url = data.url;
			if(state == 'fail'){
				tankuang(120,msg);
			}else{
				tankuang(120,msg,url);
			}
		},
	});

	return false;
}