// 上传文件
function uploadFile(obj){
	var objFile = $(obj).get(0);
	    $this = $(obj);
	if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test($this.val())) {  
	            layer.msg("上传的图片格式不正确！");  
	            $this.value = "";  
	            return false;  
	    }
	else if(objFile.files && objFile.files[0]){
		imgObjPreview = window.URL.createObjectURL(objFile.files[0]);
		$(".upload-img").css("background-image",'url(' + imgObjPreview + ')');
	}
	else{
		return false;
	}
}
