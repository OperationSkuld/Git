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
		var myChart = ec.init(document.getElementById('main')); 
//      for(var i =0;i<idLen;i++){
	        
	        option = {
//			    tooltip : {
//			        trigger: 'item',
//			        formatter: "{a} <br/>{b} : {c} ({d}%)"
//			    },
			    
			    calculable : false,
			    series : [
			        {
//			            name:'访问来源',
			            type:'pie',
			            radius : [60, 70],
			            itemStyle : {
			                normal : {
			                    label : {
			                        show : false,
//			                        position : 'inner',
//			                        textStyle : {
//			                        	color : '#333',
//			                        	align : 'center',
//			                        	baseline : 'middle',
//			                        	fontSize : '12',
//			                        }
			                    },
		                    	labelLine : {
			                        show : false
			                    }
			                },
//						itemStyle : labelFromatter,
			                emphasis : {
			                    label : {
			                        show : true,
			                        position : 'center',
			                        textStyle : {
			                            fontSize : '12',
			                            fontWeight : 'bold'
			                        }
			                    }
			                }
			            },
			            data:[
			                {
			                	value:6000, 
			                	name:'可用额度：'+6000,
			                	itemStyle:{
			                		normal : {
								        color: '#ffa500',
//								        label : {
//								            show : true,
//								            position : 'center',
//								            textStyle : {
//			                            		fontSize : '12',
//			                            		fontWeight : 'bold',
//			                            		color : '#ffa500'
//			                        		}
//								        },
//								        labelLine : {
//								            show : false
//								        }
								    },
			                	},
			                },
			                {
			                	value:3000,
			                	name:'挂单使用：'+3000,
			                	itemStyle:{
			                		normal : {
								        color: '#29abe2',
								        
								    },
			                	},
			                },
			                {
			                	value:1000, 
			                	name:'挂牌使用：'+1000,
			                	itemStyle:{
			                		normal : {
								        color: '#0071bc',
								        
								    },
			                	},
			                },
			            ]
			        }
			    ]
			};
//			var optionInnerHover = option.series[0].itemStyle.emphasis.label.show;
//			console.log(optionInnerHover)
//			var optionInnerDefault = option.series[0].data[0].itemStyle.normal.label.show;
			$("#main").hover(
				function(){
					$("#e_traggle").hide();
//					option.series[0].data[0].itemStyle.normal.label.show = true;
				},
				function(){
					$("#e_traggle").show();
//					option.series[0].data[0].itemStyle.normal.label.show = false;
				}
			);
			myChart.setOption(option); 
//			var mainElenemt = document.getElementById("main");
//			mainElenemt.style.cursor = "default";
//			$("#main").mouseenter(function(){
//				var cursorHover = mainElenemt.style.cursor;
////					if(cursorHover != "default"){
//					option.series[0].itemStyle.emphasis.label.show = true;
//					option.series[0].data[0].itemStyle.normal.label.show = false;
//					console.log(option.series[0].itemStyle.emphasis.label.show);
//					myChart.setOption(option); 
////					}					
//			})
//			$("#main").mouseleave(function(){
//				option.series[0].itemStyle.emphasis.label.show = false;
//				option.series[0].data[0].itemStyle.normal.label.show = true;
//				myChart.setOption(option); 
//			})
//			$("#main").hover(
//				function(){
//					var cursorHover = mainElenemt.style.cursor;
//					//if(cursorHover != "default"){
//						option.series[0].itemStyle.emphasis.label.show = true;
//						option.series[0].data[0].itemStyle.normal.label.show = false;
//						console.log(option.series[0].itemStyle.emphasis.label.show);
//						myChart.setOption(option); 
//					//}
//					
//				},
//				function(){
//					option.series[0].itemStyle.emphasis.label.show = false;
//					option.series[0].data[0].itemStyle.normal.label.show = true;
//					myChart.setOption(option); 
//				}
//			);
	        // 为echarts对象加载数据 
	        
//      }
    }
);
//$(document).ready(function(){
//	var optionInnerHover = option.series[0].itemStyle.emphasis.label.show;
//			var optionInnerDefault = option.series[0].data[0].itemStyle.normal.label.show;
//	$("#main").hover(
//		function(){
//			$("#e_traggle").hide();
//			option.series[0].data[0].itemStyle.normal.label.show = true;
//		},
//		function(){
//			$("#e_traggle").show();
//			option.series[0].data[0].itemStyle.normal.label.show = false;
//		}
//	);
//});










