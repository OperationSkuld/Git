// highcharts config
$(function () {
    $('#skill-base').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: null
        },
        legend: {
        	enabled: false
        },
        credits:{
 			enabled: false 
		},
        xAxis: {
            categories: [
                '4.必学基础',
                '5.结构基础',
                '6.场景基础',
                '7.素描基础',
                '8.色彩基础',
                '9.设计基础',
            ],
            opposite: true,
            tickLength: 0,
            tickWidth: 0,
        },
        yAxis: {
            min: 0,
            max: 5,
           	tickInterval: 1,
            title: {
                text: null
            },
            labels:{
 				enabled: false, 			
			},
        },
//      tooltip: {
//
//          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//          '<td style="padding:0"><b>{point.y}/5</b></td></tr>',
//
//
//          useHTML: true
//      },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
            }
        },
        series: [
	        {   
	            name: '熟练度',
	            color: '#70a7c6',
	            data: [['4.1 概括与观察',1],['5.1 角色结构',1],['6.1 横版场景',1],['7.1 综合构图',1],['8.1 色彩平面配比',1],['9.1 设计基础',1]],
	            pointPadding: 0.4,
	            pointPlacement: -0.2,
	            zIndex: 2,
	            zoneAxis: 'x',
	            zones: [
	            	{
	                	value: 1,
	                	color: '#ff4c4c',
	            	},
	            	{
	                	value: 2,
	                	color: '#fe620d',
	            	},
	            	{
	                	value: 3,
	                	color: '#fde837',
	            	},
	            	{
	                	value: 4,
	                	color: '#7eba0d',
	            	},
	            	{
	                	value: 5,
	                	color: '#3aced8',
	            	},
	            	{
	                	value: 6,
	                	color: '#0e6ac1',
	            	},
	            ],
	        }, 
	        {
	            name: '满熟练度',
	            color: '#ccc',
	            data: [['4.1 概括与观察',5],['5.1 角色结构',5],['6.1 横版场景',5],['7.1 综合构图',5],['8.1 色彩平面配比',5],['9.1 设计基础',5]],
	            pointPadding: 0.4,
	            pointPlacement: -0.2,
	            zIndex: 1,
	        },
	        {
	            name: '熟练度',
	            color: '#70a7c6',
	            data: [['4.2 透视基础',4],['5.2 基本动态',4],['6.2 45°场景',4],['7.2 黑白平面配比',4],['8.2 上色基础',4],['9.2 角色设计',4]],
	            pointPadding: 0.4,
	            pointPlacement: 0,
	            zIndex: 2,
	            zoneAxis: 'x',
	            zones: [
	            	{
	                	value: 1,
	                	color: '#ff4c4c',
	            	},
	            	{
	                	value: 2,
	                	color: '#fe620d',
	            	},
	            	{
	                	value: 3,
	                	color: '#fde837',
	            	},
	            	{
	                	value: 4,
	                	color: '#7eba0d',
	            	},
	            	{
	                	value: 5,
	                	color: '#3aced8',
	            	},
	            	{
	                	value: 6,
	                	color: '#0e6ac1',
	            	},
	            ],
	        }, 
	        {
	            name: '满熟练度',
	            color: '#ccc',
	            data: [['4.2 透视基础',5],['5.2 基本动态',5],['6.2 45°场景',5],['7.2 黑白平面配比',5],['8.2 上色基础',5],['9.2 角色设计',5]],
	            pointPadding: 0.4,
	            pointPlacement: 0,
	            zIndex: 1,
	        },
	        {
	            name: '熟练度',
	            color: '#70a7c6',
	            data: [['4.3 平面图形配比',3],['5.3 复杂动态',3],['6.3 自由视角场景',3],['7.3 黑白基础',3],null,['9.3 场景设计',3]],
	            pointPadding: 0.4,
	            pointPlacement: 0.2,
	            zIndex: 2,
	            zoneAxis: 'x',
	            zones: [
	            	{
	                	value: 1,
	                	color: '#ff4c4c',
	            	},
	            	{
	                	value: 2,
	                	color: '#fe620d',
	            	},
	            	{
	                	value: 3,
	                	color: '#fde837',
	            	},
	            	{
	                	value: 4,
	                	color: '#7eba0d',
	            	},
	            	{
	                	value: 5,
	                	color: '#3aced8',
	            	},
	            	{
	                	value: 6,
	                	color: '#0e6ac1',
	            	},
	            ],
	        }, 
	        {
	            name: '满熟练度',
	            color: '#ccc',
	            data: [['4.3 平面图形配比',5],['5.3 复杂动态',5],['6.3 自由视角场景',5],['7.3 黑白基础',5],null,['9.3 场景设计',5]],
	            pointPadding: 0.4,
	            pointPlacement: 0.2,
	            zIndex: 1,
	        },
        ]
    });
    
    $('#skill-others').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: '其他综合技能',
            
            style: {
            	fontSize: '12px',
            	color: '#999',
            	width: '12px'
            }
        },
        legend: {
        	enabled: false
        },
        credits:{
 			enabled: false 
		},
        xAxis: {
        	tickmarkPlacement: 'on',
        	labels: {
        		
                style: {
                    '-webkitTransform': 'translateY(25px)',
                    '-ms-transform': 'translateY(10px)', 
					'-moz-transform': 'translateY(10px)',
					'-o-transform': 'translateY(10px)', 	
                    writingMode:'tb-rl'    
                }
           },
            categories: [
                '镜头语言',
                '动画理论',
                '3D知识',
                '软件使用',
                '项目经验',
                '沟通能力',
                '影视研究',
                '游戏研究',
                '设计积累',
                '表现积累',
            ]
        },
        yAxis: {
            min: 0,
            max: 5,
           	tickInterval: 1,
            title: {
                text: null
            },
            labels:{
 				enabled: false, 			
			},
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
            }
        },
        series: [
	        {   
	            name: '熟练度',
	            color: '#aa56c5',
	            data: [1,4,3,1,4,3,1,4,3,1],
	            pointPadding: 0.1,
	            zIndex: 2,
	        }, 
	        {
	            name: '满熟练度',
	            color: '#ccc',
	            data: [5,5,5,5,5,5,5,5,5,5],
	            pointPadding: 0.1,
	            zIndex: 1,
	        },
        ]
    });
    
});