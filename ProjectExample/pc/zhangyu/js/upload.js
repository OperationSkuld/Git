// 上传预览图片
function setImagePreview() {
	var docObj = $(".uploadimg").get(0);	
	//var docObj=document.getElementById("doc");
	var imgObjPreview = $(".preview").get(0);
	// var imgObjPreview=document.getElementById("preview");
	var suffix = docObj.value.substr(docObj.value.indexOf("."));
	if(docObj.files &&docObj.files[0])
	{
		//火狐下，直接设img属性
		imgObjPreview.style.display = 'block';
		imgObjPreview.style.width = '100%';
		imgObjPreview.style.height = imgObjPreview.width+'px'; 
		//imgObjPreview.src = docObj.files[0].getAsDataURL();

		//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
		imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
	}
	else
	{
		return false;
	}
}

function setIdPreview() {
	var docObj = $(".uploadid").get(0);	
	//var docObj=document.getElementById("doc");
	var imgObjPreview = $(".previewid").get(0);
	// var imgObjPreview=document.getElementById("preview");
	var suffix = docObj.value.substr(docObj.value.indexOf("."));
	if(docObj.files &&docObj.files[0])
	{
		//火狐下，直接设img属性
		imgObjPreview.style.display = 'block';
		imgObjPreview.style.width = '100%';
		imgObjPreview.style.height = imgObjPreview.width+'px'; 
		//imgObjPreview.src = docObj.files[0].getAsDataURL();

		//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
		imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
	}
	else
	{
		return false;
	}
}