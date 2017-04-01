$(document).ready(function() {
    var bullets = document.getElementById('position').getElementsByTagName('li');
	var banner = Swipe(document.getElementById('mySwipe'), {
		auto: 0,
		continuous: false,
		disableScroll:false,
		callback: function(pos) {
			//alert(pos)
			var i = bullets.length;
			/*var winHeight = $(window).height();
			var imgHeight = $(".img-responsive").eq(pos).height();
			//alert(winHeight);
			//alert(imgHeight);
			var marginHeight = ($(window).height()-$(".img-responsive").eq(pos).height())/2+'px';
			//alert(marginHeight)
			$(".img-responsive").css("margin-top",marginHeight);*/
			while (i--) {
				bullets[i].className = ' ';
			}
			//bullets[pos].className = 'cur';
		}
	})
});