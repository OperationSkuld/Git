

/*********首页展示的js************/
function mOverf(){
		$(".middle_img_f_1").show();
		$(".change_back").css('background','#3a99d8');
		$(".change_back").css('color','#FFF');
		}
	function mOutf(){
		$(".middle_img_f_1").hide();
		$(".change_back").css('background','none');
		$(".change_back").css('color','#333');
		}
	function mOvers(){
		$(".middle_img_s_1").show();
		$(".change_back_s").css('background','#3a99d8');
		$(".change_back_s").css('color','#FFF');
		}
	function mOuts(){
		$(".middle_img_s_1").hide();
		$(".change_back_s").css('background','none');
		$(".change_back_s").css('color','#333');
		}
	function mOvert(){
		$(".middle_img_t_1").show();
		$(".change_back_t").css('background','#3a99d8');
		$(".change_back_t").css('color','#FFF');
		}
	function mOutt(){
		$(".middle_img_t_1").hide();
		$(".change_back_t").css('background','none');
		$(".change_back_t").css('color','#333');
		}
		
	/*function left_change(i){
		for(i;i<4;i++){
			$(".carousel_img_"+i).hide();alert("daadad");
			$[".carousel_img_"+(i+1)].show;
			
			break;
			
			
		}
		}*/
var docEle = function() {   
  return document.getElementById(arguments[0]) || false;   
}   
function openNewDiv(_id) {   
  var m = "mask";   
  if (docEle(_id)) document.removeChild(docEle(_id));   
  if (docEle(m)) document.removeChild(docEle(m));   
  // 新激活图层   
 	$("#aaa").show();
  // mask图层   
  var newMask = document.createElement("div");   
  newMask.id = m;   
  newMask.style.position = "absolute";   
  newMask.style.zIndex = "1";   
  newMask.style.width = document.body.scrollWidth + "px";   
  newMask.style.height = document.body.scrollHeight + "px";   
  newMask.style.top = "0px";   
  newMask.style.left = "0px";   
  newMask.style.background = "#000";   
  newMask.style.filter = "alpha(opacity=40)";   
  newMask.style.opacity = "0.60";   
  document.body.appendChild(newMask);    
  // 关闭mask和新图层
  var newA = $("#get_coupon_yes") 
  newA.href = "#";   
     
   newA.onclick = function() {   
   document.body.removeChild(docEle(_id));   
   document.body.removeChild(docEle(m));   
   return false;   
  }   
  newDiv.appendChild(newA);   
     	  
} 
function get_coupon_yes(){
	   
   $("#aaa").hide();  
   $("#mask").hide();
   $("v_aaa_hide").hide(); 
   
   }
   function get(){   
   $("#aaa").hide();  
   $("#mask").hide();
   }



/*********教师分类遮罩js************/
$(document).ready(function(){
	$(".class_primary_every").mouseover(function(){
		var index=$(".class_primary_every").index(this);
		var lilength =$(".class_primary_every").length;
		for(var i=0;i<lilength;i++){
			if(i==index){				
				$(".ins").eq(i).show();
				}
			else{			
				$(".ins").eq(i).hide();
				}
		}
	});
	$(".class_primary_every").mouseout(function(){
		var index=$(".class_primary_every").index(this);
		var lilength =$(".class_primary_every").length;
		for(var i=0;i<lilength;i++){				
				$(".ins").eq(i).hide();
		}
	});
});



/*********互动教室遮罩js************/
$(document).ready(function(){
	$(".active_class_every").mouseover(function(){
		var index=$(".active_class_every").index(this);
		var lilength =$(".active_class_every").length;
		for(var i=0;i<lilength;i++){
			if(i==index){				
				$(".ins").eq(i).show();
				}
			else{			
				$(".ins").eq(i).hide();
				}
		}
	});
	$(".active_class_every").mouseout(function(){
		var index=$(".active_class_every").index(this);
		var lilength =$(".active_class_every").length;
		for(var i=0;i<lilength;i++){				
				$(".ins").eq(i).hide();
		}
	});
});



/*********精品课程遮罩js************/
$(document).ready(function(){
	$(".ex_course_img").mouseover(function(){
		var index=$(".ex_course_img").index(this);
		var lilength =$(".ex_course_img").length;
		for(var i=0;i<lilength;i++){
			if(i==index){				
				$(".ex_course_ins").eq(i).show();
				}
			else{			
				$(".ex_course_ins").eq(i).hide();
				}
		}
	});
	$(".ex_course_img").mouseout(function(){
		var index=$(".ex_course_img").index(this);
		var lilength =$(".ex_course_img").length;
		for(var i=0;i<lilength;i++){				
				$(".ex_course_ins").eq(i).hide();
		}
	});
});



/*********在线家教遮罩js************/
$(document).ready(function(){
	$(".inline_course_img").mouseover(function(){
		var index=$(".inline_course_img").index(this);
		var lilength =$(".inline_course_img").length;
		for(var i=0;i<lilength;i++){
			if(i==index){				
				$(".inline_course_ins").eq(i).show();
				}
			else{			
				$(".inline_course_ins").eq(i).hide();
				}
		}
	});
	$(".inline_course_img").mouseout(function(){
		var index=$(".inline_course_img").index(this);
		var lilength =$(".inline_course_img").length;
		for(var i=0;i<lilength;i++){				
				$(".inline_course_ins").eq(i).hide();
		}
	});
});




/*********精品课程详情页js************/
$(document).ready(function(){
	
	$('.exinfo_star').bind("click",function(){
		var bcposition = parseInt($(".exinfo_star").css("background-position"));
		if(bcposition==0){
			$(".exinfo_star").css({"background-position":"-44px 0px"});
			}
		else{
			$(".exinfo_star").css({"background-position":"0px 0px"});
			}
	})

})
