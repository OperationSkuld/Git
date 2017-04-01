$(function(){
	var i=0;
	var $btn = $('.section-btn li'),
		$wrap = $('.section-wrap'),
		$arrow = $('.arrow');
	
	/*当前页面赋值*/
	function up(){i++;if(i==$btn.length){i=0};}
	function down(){i--;if(i<0){i=$btn.length-1};}
	
	/*页面滑动*/
	function run(){
		var str = -i*100+'%';
		$btn.eq(i).find("div").addClass('section-selected').parent().siblings().children("div").removeClass('section-selected');
		$btn.eq(i).find("p").addClass('section-selected-p').parent().siblings().children("p").removeClass('section-selected-p');	
		$wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; });
		$(".put-section-"+i).css({
		  	"transform":"translateY("+str+")",
		  	"-webkit-transform":"translateY("+str+")"
  		});
	};
	
	/*右侧按钮点击*/
	$btn.each(function(index) {
		$(this).click(function(){
			i=index;
			run();
		})
	});
	
	/*翻页按钮点击*/
	$arrow.one('click',go);
	function go(){
		up();run();	
		setTimeout(function(){$arrow.one('click',go)},1000)
	};
	
	/*响应鼠标*/
	$wrap.one('mousewheel',mouse_);
	function mouse_(event){
		if(event.deltaY<0 && i!=4 ) {up()}
		if(event.deltaY>0 && i!=0 ) {down()}	
		run();
		setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
	};

});