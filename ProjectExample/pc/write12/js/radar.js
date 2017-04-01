//创建ECharts雷达图图表
function DrawColumnEChart(ec) {
var option = { //可以去官网上根据每个案例不同的option去写各种图形
            			title: {   //标题
                		text: ''
            			},
            			tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                		show:true,
                		trigger: 'axis'
            			},
            			legend: {    //图例，每个<a href="http://www.suchso.com/catalog.asp?tags=ECharts%E6%95%99%E7%A8%8B" class="keylink" title=" 图表" target="_blank">图表</a>最多仅有一个图例
                		x: 'center',
                		data: []
            			},
            			polar: [{    //极坐标 
                		indicator: [{text: '题意与思想',max: 100}, 
                            		{text: '特征',max: 100},
                            		{text: '结构',max: 100},
                            		{text: '中心与内容',max: 100},
                            		{text: '常规项',max: 100},
                            		{text: '表达',max: 100}
                           			],
						textStyle:{color:"#000"},
                		radius: 80,      
                		startAngle: 90   // 改变雷达图的旋转度数
            			}],
             
            			series: [{         // 驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据
                
                		type: 'radar',
                		itemStyle: {//图形样式，可设置图表内图形的默认样式和强调样式（悬浮时样式）：
                    	normal: {
                        	areaStyle: {
                            type: 'default'
                        	}
                    	}
                		},
                		data: [{
                    	value: [],      //外部加载，也可以通过ajax去加载外部数据。
                    	name: ''       
                		}]
            		}]
        		};
				
        			$(function(c) {
            		option.series[0].data[0].value=[82,62,94,53,73,65];  // 加载数据到data中
            		option.series[0].data[0].name ='用户名';
            		var myChart = echarts.init(document.getElementById('main'));  
            		myChart.setOption(option, true);   //为echarts对象加载数据
        			});
}