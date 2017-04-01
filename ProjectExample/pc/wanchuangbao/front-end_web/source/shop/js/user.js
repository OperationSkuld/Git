// 会员主页
$(function(){
	// tab 切换
	$(".userTab ul li").click(function(){
		var index=$(".userTab ul li").index(this);
		var lilength =$(".userTab ul li").length;
		for(var i=0;i<lilength;i++){
			if(i==index){
				$(".userTabBox").eq(i).show();
				$(this).addClass("userTabCur")
				       .siblings().removeClass("userTabCur");
			}
			else{				
				$(".userTabBox").eq(i).hide();
			}
		}
	});
	// 显示隐藏 切换
	$(".checkboxClass").click(function(){
		var index=$(".checkboxClass").index(this);
		if($(this).is(':checked')) {
			console.log(index);
			if(index==0){
				$("#level").show();
			}
			else if(index==1){
				
			}
			else{
				$(".userBottomBox ul li").eq(index-2).show();
			}
		}
		else{
			if(index==0){
				$("#level").hide();
			}
			else if(index==1){
				
			}
			else{
				$(".userBottomBox ul li").eq(index-2).hide();
			}
		}
	})
	// 预览顶部背景图
	$("#file").change(function(){
		// var objFile = $(this).val();
		var objFile = $("#file").get(0);
		if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(this.value)) {  
            layer.msg("请上传图片格式的后缀名");
            this.value = "";  
            return false;  
        }  
		else if(objFile.files &&objFile.files[0]){
			imgObjPreview = window.URL.createObjectURL(objFile.files[0]);
			$(".defaultImg").css("background-image",'url(' + imgObjPreview + ')');
			$(".userTopBox").css("background-image",'url(' + imgObjPreview + ')');
		}
		else{
			return false;
		}
	})
})
