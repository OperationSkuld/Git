$(document).ready(function(){

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	if($('.calendar').length > 0){
		$('.calendar').fullCalendar({
			header: {
				left: 'prev',
				center: 'title',
				right: 'next'
			},
			buttonText:{
				today:'跳转到当天'
			},
			editable: true,
			events: [	
			{
				title: '下午',
				start: new Date(y, m, 1),
				url: 'http://www.baidu.com/'
			},
			{
				title: '晚上',
				start: new Date(y, m, 1),
				url: 'http://www.baidu.com/'
			},
			{
				title: '上午',
				start: new Date(y, m, d),
				url: 'http://www.baidu.com/'
			},
			{
				title: '下午',
				start: new Date(y, m, d),
				url: 'http://www.baidu.com/'
			},
			{
				title: '晚上',
				start: new Date(y, m, d),
				url: 'http://www.baidu.com/'
			},
			{
				title: '上午',
				start: new Date(y, m, d+1),
				url: 'http://www.baidu.com/'
			},
			]
		});
	}
	
});