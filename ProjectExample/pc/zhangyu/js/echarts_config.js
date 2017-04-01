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
        var idLen = document.getElementsByClassName("chart").length;
        var dataObj = [{"one":43,"two":57},{"one":40,"two":60},{"one":20,"two":80},{"one":10,"two":90},{"one":50,"two":50}]
        for(var i =0;i<idLen;i++){
	        var myChart = ec.init(document.getElementById('main'+i)); 
	        
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
			var radius = [30, 40];
			option = {
			    series : [
			        {
			            type : 'pie',
			            center : ['50%', '50%'],
			            radius : radius,
			            x:'10%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'', value:dataObj[i].one, itemStyle : labelTop},
			                {name:'', value:dataObj[i].two,itemStyle : labelBottom}
			            ]
			        }
			    ]
			};
	
	        // 为echarts对象加载数据 
	        myChart.setOption(option); 
        }
    }
);