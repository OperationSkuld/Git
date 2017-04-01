

/*********首页展示的js************/
function mOverf(){
		$(".middle_img_f_1").show();
		$(".change_back").css('background','#3ba3c8');
		}
	function mOutf(){
		$(".middle_img_f_1").hide();
		$(".change_back").css('background','none');
		}
	function mOvers(){
		$(".middle_img_s_1").show();
		$(".change_back_s").css('background','#3ba3c8');
		}
	function mOuts(){
		$(".middle_img_s_1").hide();
		$(".change_back_s").css('background','none');
		}
	function mOvert(){
		$(".middle_img_t_1").show();
		$(".change_back_t").css('background','#3ba3c8');
		}
	function mOutt(){
		$(".middle_img_t_1").hide();
		$(".change_back_t").css('background','none');
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
