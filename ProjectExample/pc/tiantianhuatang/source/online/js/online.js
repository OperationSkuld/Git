function show(obj){
	var objChildren = $(obj).find(".down");
	if(objChildren.is(":hidden")){
		objChildren.show();
	}
	else{
		objChildren.hide();
	}

//$(".banner img").hide().first().show()

//	alert(objChildren);
//	console.log(objChildren);
	
//document.getElementById("div").style.display="block";
//alert(document.getElementById("div").style.display)
}
//function hidden(){
//document.getElementById("div").style.display="none";
////alert(document.getElementById("div").style.display)
//}