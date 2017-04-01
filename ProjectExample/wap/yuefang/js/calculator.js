// 房贷计算器表单项切换
$(function(){
	var temp = $(".show3");
	$('.choose3').change(function(){
       if($(this).val() =='按货款额度'){
			$(".show1").show();  
			$(".show2").hide();   
       }
	   else{
			$(".show1").hide();    
			$(".show2").show();  
	   }
  	})
	$('.choose2').change(function changelanecss(){
		if($(this).val() =='公积金'){
			$("#show").show();
			$("#show1").show(); 
			$(".show5").show();
			$(".show2").hide();    
			//$(".show3").hide(); 
			$(".show3").detach(); 
			$(".show4").hide();
			$(".show6").hide(); 
			$(".show5 .cal_word p").text("年利率：");	 
			$(".show5 .cal_word p").css("font-size","14px");	   
       	}
		else if($(this).val() =='纯商贷'){
			$("#show1").show(); 
			$(".show2").hide();  
			$(".show5").hide();  
			//$(".show3").show();
			$("#touch").after(temp);			  
			$(".show4").show(); 
			$(".show6").hide();	 
			$(".show4 .cal_word p").text("年利率：");
			$("#refresh1").addClass("on"); 
			$("#radio_1").prop("checked",true);
			$("#refresh2").removeClass("on");
       	}
		else if($(this).val() =='组合贷'){
			$("#show1").hide();
			$(".show2").hide();    
			//$(".show3").hide();
			$(".show3").detach(); 
			$("#show").show();  
			$(".show4").show();
			$(".show5").show();  
			$(".show6").show(); 
			$(".show4 .cal_word p").text("商贷利率：");
			$(".show5 .cal_word p").text("公积金利率：");	
			$(".show5 .cal_word p").css("font-size","12px");	  
       	}
	});
});

// 借贷款利率表弹窗
$(function(){
	$(".rate_list").mouseover(function(e){
		$(this).children(".rate_hover")
			/*.css({
				"top":e.pageY+"px",
				"left":e.pageX+"px",
			})*/
  			.show();
	}).mouseout(function(){
		$(".rate_hover").hide();
	})
});

// 贷款年限&年利率联动
var ratearray = new Array();
for(var a=1;a<=30;a++)
{
	ratearray.push(a);
}
var yearrateless1 = ["4.35","3.48","3.7","3.91","4.78","5.22","5.66"];
var yearrateless1_text = ["最新基准利率(4.35%)","8折利率(3.48%)","8.5折利率(3.7%)","9折利率(3.91%)","1.1倍利率(4.78%)","1.2倍利率(5.22%)","1.3倍利率(5.66%)"];
var yearrateless2 = ["4.75","3.8","4.04","4.28","5.23","5.7","6.18"];
var yearrateless2_text = ["最新基准利率(4.75%)","8折利率(3.8%)","8.5折利率(4.04%)","9折利率(4.28%)","1.1倍利率(5.23%)","1.2倍利率(5.7%)","1.3倍利率(6.18%)"];
var yearrateless3 = ["4.9","3.92","4.17","4.41","5.39","5.88","6.37"];
var yearrateless3_text = ["最新基准利率(4.9%)","8折利率(3.92%)","8.5折利率(4.17%)","9折利率(4.41%)","1.1倍利率(5.39%)","1.2倍利率(5.88%)","1.3倍利率(6.37%)"];

$(function(){
	for(var a=0;a<ratearray.length;a++){
		$("#year").append('<option value="'+ ratearray[a] +'">'+ ratearray[a] +'年</option>');
	}
	$("#year").change(function(){
		var yearvalue = $(this).val();
		if(yearvalue==1){
			for(var a=0;a<yearrateless1.length;a++){
				$("#year_rate option").eq(a).attr('value',yearrateless1[a]);
				$("#year_rate option").eq(a).text(yearrateless1_text[a]);
				$("#publicrate").eq(a).attr('value','2.75%');
			}
		}
		else{
		if(2<=yearvalue<6){
			for(var a=0;a<yearrateless2.length;a++){
				$("#year_rate option").eq(a).attr('value',yearrateless2[a]);
				$("#year_rate option").eq(a).text(yearrateless2_text[a]);
				$("#publicrate").eq(a).attr('value','2.75%');
			}
		}
		if(yearvalue>=6){
			for(var a=0;a<yearrateless3.length;a++){
				$("#year_rate option").eq(a).attr('value',yearrateless3[a]);
				$("#year_rate option").eq(a).text(yearrateless3_text[a]);
				$("#publicrate").eq(a).attr('value','3.25%');
			}
		}
		}
	});

});

// 千分符
function toThousands(num) {
    var num = (num || 0).toString(), result = '';
	var count=0;
    while (num.length > 3) {
	
	if(count==0){
		result =  num.slice(-3) + result;
	}
	else{
		result = ',' + num.slice(-3) + result;}
		count++;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}

// 点击空白关闭遮罩
$(function(){
	$(".cover_calculator").click(function(e){
		var _con = $(".calculator_coverbox"); // 设置目标区域
		if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
			$(".cover_calculator").hide();
		}
	})
})	

// 表单验证&计算公式
$(function(){
$(".btn_submit").click(function(){
	if($("#average_rate").is(":checked")){
		if($("#radio_1").is(":checked")){
			if($("input[type='text']:eq(0)").val()=="" || $("input[type='text']:eq(1)").val()==""){
				layer.msg('请输入1-99999的数');
			}
			else{
				//layer.msg('提交成功');
				//等额本息&按货款额度
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本息");
				var downpayment = ($("#downpayment").val()*10000).toFixed(2); //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan = ($("#loan").val()*10000).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var year_rate = parseFloat($("#year_rate").val()/1200);  //月利率
				console.log(year_rate);
				var monthpay = (loan*year_rate*Math.pow(1+year_rate, year)/[Math.pow(1+year_rate, year)-1]).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				var repayall = (monthpay*year).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var interestsall = (repayall-loan).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				//console.log(downpayment)
				//console.log(repayall)
				//console.log(parseFloat(downpayment)+parseFloat(repayall))
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
			}	
		}
		if($("#radio_2").is(":checked")){
			if($("input[type='text']:eq(2)").val()==""){
				layer.msg('请输入1-99999的数');
			}	
			else{
				//layer.msg('提交成功');
				//等额本息&按购房总价
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本息");
				var purchaseall = ($("#purchaseall").val()*10000).toFixed(2);  //购房总价
				var ratio = $("#ratio").val();  //首付比例
				var downpayment = (purchaseall*ratio).toFixed(2);  //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan = (purchaseall-downpayment).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var year_rate = parseFloat($("#year_rate").val()/1200);  //月利率
				var monthpay = (loan*year_rate*Math.pow(1+year_rate, year)/[Math.pow(1+year_rate, year)-1]).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				var repayall = (monthpay*year).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var interestsall = (repayall-loan).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				//console.log(downpayment)
				//console.log(repayall)
				//console.log(parseFloat(downpayment)+parseFloat(repayall))
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
			}	
		}
		if($("#radio_3").is(":checked")){
			if($("input[type='text']:eq(0)").val()=="" || $("input[type='text']:eq(1)").val()==""){
				layer.msg('请输入1-99999的数');
			}
			else{
				//layer.msg('提交成功');
				//等额本息&公积金
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本息");
				var downpayment = ($("#downpayment").val()*10000).toFixed(2); //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan = ($("#loan").val()*10000).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var year_rate = parseFloat($("#publicrate").val())/1200;  //月利率
				var year_rate = parseFloat(year_rate);  //月利率
				var monthpay = (loan*year_rate*Math.pow(1+year_rate, year)/[Math.pow(1+year_rate, year)-1]).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				var repayall = (monthpay*year).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var interestsall = (repayall-loan).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				console.log(year_rate)
				//console.log(repayall)
				//console.log(parseFloat(downpayment)+parseFloat(repayall))
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
			}	
		}
		if($("#radio_4").is(":checked")){
			if($("input[type='text']:eq(0)").val()=="" || $("input[type='text']:eq(3)").val()=="" || $("input[type='text']:eq(4)").val()==""){
				layer.msg('请输入1-99999的数');
			}
			else{
				//layer.msg('提交成功');
				//等额本息&组合贷
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本息");
				var downpayment = ($("#downpayment").val()*10000).toFixed(2); //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan_sum = ($("#loan_sum").val()*10000).toFixed(2); //商贷金额
				var public_sum = ($("#public_sum").val()*10000).toFixed(2); //公积金金额
				var loan = (parseFloat(loan_sum)+parseFloat(public_sum)).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var loan_year_rate = parseFloat($("#year_rate").val())/1200;  //商贷月利率
				var loan_year_rate = parseFloat(loan_year_rate);  //商贷月利率
				var loan_monthpay = (loan_sum*loan_year_rate*Math.pow(1+loan_year_rate, year)/[Math.pow(1+loan_year_rate, year)-1]).toFixed(2); //商贷月均还款
				var public_year_rate = parseFloat($("#publicrate").val())/1200;  //公积金月利率
				var public_year_rate = parseFloat(public_year_rate);  //公积金月利率
				var public_monthpay = (public_sum*public_year_rate*Math.pow(1+public_year_rate, year)/[Math.pow(1+public_year_rate, year)-1]).toFixed(2); //公积金月均还款
				var monthpay = (parseFloat(loan_monthpay)+parseFloat(public_monthpay)).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				var repayall = (monthpay*year).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var interestsall = (repayall-loan).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				console.log(year_rate)
				//console.log(repayall)
				//console.log(parseFloat(downpayment)+parseFloat(repayall))
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
				
			}	
		}	
	}
	
	if($("#average_corpus").is(":checked")){
		if($("#radio_1").is(":checked")){
			if($("input[type='text']:eq(0)").val()=="" || $("input[type='text']:eq(1)").val()==""){
				layer.msg('请输入1-99999的数');
			}
			else{
				//layer.msg('提交成功');
				//等额本金&按货款额度
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本金");
				var downpayment = ($("#downpayment").val()*10000).toFixed(2); //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan = ($("#loan").val()*10000).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var year_rate = $("#year_rate").val()/1200;  //月利率
				var averagepay = parseFloat(loan/year); //每月应还本金
				var interestsall = parseFloat((averagepay+parseFloat(loan*year_rate)+parseFloat(averagepay*(1+parseFloat(year_rate))))*(year/2)-loan).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				var repayall = (parseFloat(loan)+parseFloat(interestsall)).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				var monthpay = parseFloat(repayall/year).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
			}	
		}
		if($("#radio_2").is(":checked")){
			if($("input[type='text']:eq(2)").val()==""){
				layer.msg('请输入1-99999的数');
			}	
			else{
				//layer.msg('提交成功');
				//等额本金&按购房总价
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本金");
				var purchaseall = ($("#purchaseall").val()*10000).toFixed(2);  //购房总价
				var ratio = $("#ratio").val();  //首付比例
				var downpayment = (purchaseall*ratio).toFixed(2);  //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan = (purchaseall-downpayment).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var year_rate = $("#year_rate").val()/1200;  //月利率
				var averagepay = parseFloat(loan/year); //每月应还本金
				var interestsall = parseFloat((averagepay+parseFloat(loan*year_rate)+parseFloat(averagepay*(1+parseFloat(year_rate))))*(year/2)-loan).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				var repayall = (parseFloat(loan)+parseFloat(interestsall)).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				var monthpay = parseFloat(repayall/year).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
			}	
		}
		if($("#radio_3").is(":checked")){
			if($("input[type='text']:eq(0)").val()=="" || $("input[type='text']:eq(1)").val()==""){
				layer.msg('请输入1-99999的数');
			}
			else{
				//layer.msg('提交成功');
				//等额本金&公积金
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本金");
				var downpayment = ($("#downpayment").val()*10000).toFixed(2); //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan = ($("#loan").val()*10000).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var year_rate = parseFloat($("#publicrate").val())/1200;  //月利率
				console.log(year);
				console.log(year_rate);
				var averagepay = parseFloat(loan/year); //每月应还本金
				console.log(averagepay)
				var interestsall = parseFloat(((averagepay+parseFloat(loan*year_rate))+parseFloat(averagepay*(1+parseFloat(year_rate))))*(year/2)-loan).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				var repayall = (parseFloat(loan)+parseFloat(interestsall)).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				var monthpay = parseFloat(repayall/year).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				//console.log(repayall)
				//console.log(parseFloat(downpayment)+parseFloat(repayall))
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
			}	
		}
		if($("#radio_4").is(":checked")){
			if($("input[type='text']:eq(0)").val()=="" || $("input[type='text']:eq(3)").val()=="" || $("input[type='text']:eq(4)").val()==""){
				layer.msg('请输入1-99999的数');
			}
			else{
				//layer.msg('提交成功');
				//等额本金&组合贷
				$(".cover_calculator").show();
				$(".repay_way p").text("等额本金");
				var downpayment = ($("#downpayment").val()*10000).toFixed(2); //首付
        		var downpayment_k = toThousands(downpayment);  	//转化千位符
				var loan_sum = ($("#loan_sum").val()*10000).toFixed(2); //商贷金额
				var public_sum = ($("#public_sum").val()*10000).toFixed(2); //公积金金额
				var loan = (parseFloat(loan_sum)+parseFloat(public_sum)).toFixed(2); //贷款金额
        		var loan_k = toThousands(loan);  	//转化千位符
				var year = $("#year").val()*12;  //贷款总月数
				var loan_averagepay = parseFloat(loan_sum/year); //每月应还本金
				var public_averagepay = parseFloat(public_sum/year); //每月应还本金
				var loan_year_rate = parseFloat($("#year_rate").val())/1200;  //商贷月利率
				var loan_year_rate = parseFloat(loan_year_rate);  //商贷月利率
				var loan_rate = parseFloat((loan_averagepay+parseFloat(loan_sum*loan_year_rate)+parseFloat(loan_averagepay*(1+parseFloat(loan_year_rate))))*(year/2)-loan_sum).toFixed(2); //商贷利息总额				
				var public_year_rate = parseFloat($("#publicrate").val())/1200;  //公积金月利率
				var public_year_rate = parseFloat(public_year_rate);  //公积金月利率
				var public_rate = parseFloat((public_averagepay+parseFloat(public_sum*public_year_rate)+parseFloat(public_averagepay*(1+parseFloat(public_year_rate))))*(year/2)-public_sum).toFixed(2); //公积金利息总额
				var interestsall = (parseFloat(loan_rate)+parseFloat(public_rate)).toFixed(2);  //利息总额
				var interestsall_k = toThousands(interestsall);  	//转化千位符
				
				var repayall = (parseFloat(loan)+parseFloat(interestsall)).toFixed(2); //还款总额
				var repayall_k = toThousands(repayall);  	//转化千位符
				var payall = (parseFloat(downpayment)+parseFloat(repayall)).toFixed(2);  //购房总额
				var payall_k = toThousands(payall);  	//转化千位符
				var monthpay = parseFloat(repayall/year).toFixed(2); //月均还款
				var monthpay_k = toThousands(monthpay);  	//转化千位符
				$(".result_list:eq(0) span").text('￥' + downpayment_k);
				$(".result_list:eq(1) span").text('￥' + loan_k);
				$(".result_list:eq(2) span").text('￥' + interestsall_k);
				$(".result_list:eq(3) span").text('￥' + repayall_k);
				$(".result_list:eq(4) span").text('￥' + payall_k);
				$(".result_list:eq(5) span").text($("#year").val() + '年');
				$(".result_list:eq(6) span").text('￥' + monthpay_k);
				
			}	
		}
	}
})	
})