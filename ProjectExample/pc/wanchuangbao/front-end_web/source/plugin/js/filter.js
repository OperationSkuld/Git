// 筛选条件
function filter(obj){
	var $this = $(obj)
		$thisText = $(obj).children("li").text();
	console.log($thisText);
	$this.children("li").addClass("selected");
	$this.siblings().children("li").removeClass("selected");
	$this.parent().find(".inputHidden").val($thisText);
//	$("#formSubmit").submit();
}
function sort(obj){
	var direction = $(obj).find('span')
	$(obj).find('p').addClass("selected");
	$(obj).siblings().children("p").removeClass("selected");
	if(direction.text() == "↑"){
        direction.text("↓");
    }
	else{
        direction.text("↑");
    }
}

    