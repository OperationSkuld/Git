//创建ECharts折线图图表
function DrawLineEChart(ec) {
var 
			option = {
    title : {
        text: '',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[]
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1次','2次','3次','4次','5次','6次']
			
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} 分'
            }
        }
    ],
    series : [     
        {
            name:'分数',
            type:'line',
            data:[80, 65, 78, 90, 50, 90],
            smooth:true,
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
        $(function(e) {

            var myChart = echarts.init(document.getElementById('mainLine'));  
            myChart.setOption(option, true);   //为echarts对象加载数据
        });
}