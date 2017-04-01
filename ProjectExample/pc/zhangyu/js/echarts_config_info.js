// 路径配置
require.config({
    paths: {
        echarts: 'js/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
//      var idLen = document.getElementsByClassName("chart").length;
        var dataObj = [{"one":43,"two":57}]
//      for(var i =0;i<idLen;i++){
	        var myChart = ec.init(document.getElementById('main')); 
	        console.log(myChart)
	        var labelTop = {
			    normal : {
			        label : {
			            show : true,
			            position : 'center',
			            formatter : '{b}',
			            textStyle: {
			                baseline : 'bottom',
			            }
			        },
			        labelLine : {
			            show : false
			        }
			    }
			};
			var labelFromatter = {
			    normal : {
			    	color: '#0071bc',
			        label : {
			            formatter : function (params){
			                return 100 - params.value + '%'
			            },
			            textStyle: {
			                baseline : 'middle',
			                align : 'center',
			                color : '#0071bc',
			                fontFamily : 'Microsoft Yahei,微软雅黑',
			                fontSize : '14',
			            }
			        }
			    },
			}
			var labelBottom = {
			    normal : {
			        color: '#dddddd',
			        label : {
			            show : true,
			            position : 'center'
			        },
			        labelLine : {
			            show : false
			        }
			    },
			    emphasis: {
			        color: 'rgba(0,0,0,0)'
			    }
			};
			var radius = [55, 65];
			option = {
			    series : [
			        {
			            type : 'pie',
			            center : ['50%', '50%'],
			            radius : radius,
			            x:'10%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'', value:dataObj[0].one, itemStyle : labelTop},
			                {name:'', value:dataObj[0].two,itemStyle : labelBottom}
			            ]
			        }
			    ]
			};
	
	        // 为echarts对象加载数据 
	        myChart.setOption(option); 
//      }
    }
);