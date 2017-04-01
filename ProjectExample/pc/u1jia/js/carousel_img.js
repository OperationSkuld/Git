m=0;
	      var  inter;
      function  set_int(){
		  if(m%4==0){m=0;}
				
             for(var c=0;c<$("#image_parent").find("div").size();c++)
				{
					
				$("#image_parent").find("div").eq(c).attr("class","hidden");
				
				}
				$("#image_parent").find("div").eq(m).attr("class","show");
				m++;
			}
		window.onload=function()
		   {
			inter=setInterval(set_int,5000);   
			
			}
		
		
		
 function right_change()
		   {
			clearInterval(inter);
		var parent_slide=$("#image_parent");
		
		for(var a=0;a<parent_slide.find("div").size();a++){
		
		
			if(parent_slide.find("div").eq(a).attr("class")!="hidden")
			{
			
			switch(a){
				
				case 0:
				
				  
					
					parent_slide.find("div").eq(0).attr("class","hidden");
					parent_slide.find("div").eq(2).attr("class","hidden");
					parent_slide.find("div").eq(3).attr("class","hidden");
					parent_slide.find("div").eq(1).attr("class","show");
				
						
				inter=setInterval(set_int,5000);  
					
					
					
					
					break;
					
					
				case 1:
				   
					
					parent_slide.find("div").eq(1).attr("class","hidden");
					parent_slide.find("div").eq(0).attr("class","hidden");
					parent_slide.find("div").eq(3).attr("class","hidden");
						parent_slide.find("div").eq(2).attr("class","show");
				
					
					inter=setInterval(set_int,5000);  
					
					
					
					break;
					
				case 2:
					
					
					
					parent_slide.find("div").eq(0).attr("class","hidden");
					parent_slide.find("div").eq(2).attr("class","hidden");
					parent_slide.find("div").eq(1).attr("class","hidden");
					parent_slide.find("div").eq(3).attr("class","show");
				
				inter=setInterval(set_int,5000);  
					
					break;
					
				case 3:
					
					
					parent_slide.find("div").eq(3).attr("class","hidden");
					parent_slide.find("div").eq(2).attr("class","hidden");
					parent_slide.find("div").eq(1).attr("class","hidden");
				parent_slide.find("div").eq(0).attr("class","show");
				inter=setInterval(set_int,5000);  
					
					break;
				
				
						
				}			
			break;
			
			
			
			}
		
		
		
		
		}		
		
		
		
		}
		
		
		
        
        function left_change()
		   {
			clearInterval(inter);
		var parent_slide=$("#image_parent");
		
		for(var a=0;a<parent_slide.find("div").size();a++){
			
			
			if(parent_slide.find("div").eq(a).attr("class")!="hidden")
			{
				
			switch(a){
			
				case 0:
				
					 	parent_slide.find("div").eq(0).attr("class","hidden");
					parent_slide.find("div").eq(1).attr("class","hidden");
					parent_slide.find("div").eq(2).attr("class","hidden");
					parent_slide.find("div").eq(3).attr("class","show");
					
					
					inter=setInterval(set_int,5000);  
					break;
					
					
				case 1:
				parent_slide.find("div").eq(1).attr("class","hidden");
					parent_slide.find("div").eq(2).attr("class","hidden");
					parent_slide.find("div").eq(3).attr("class","hidden");
				  
					parent_slide.find("div").eq(0).attr("class","show");
					
					
					inter=setInterval(set_int,5000);  
					
					break;
					
				case 2:
				//	parent_slide.find("div").eq(2).fadeOut(10,function(){
					
				//	parent_slide.find("div").eq(1).fadeIn(10);
					parent_slide.find("div").eq(2).attr("class","hidden");
					parent_slide.find("div").eq(0).attr("class","hidden");
					parent_slide.find("div").eq(3).attr("class","hidden");
					parent_slide.find("div").eq(1).attr("class","show");
					inter=setInterval(set_int,5000);  
				//	});
					break;
					
				case 3:
					
				
					
				//	parent_slide.find("div").eq(2).fadeIn(10);
					parent_slide.find("div").eq(0).attr("class","hidden");
					parent_slide.find("div").eq(1).attr("class","hidden");
					parent_slide.find("div").eq(3).attr("class","hidden");
					parent_slide.find("div").eq(2).attr("class","show");
					inter=setInterval(set_int,5000);  
					//});
					break;
						
						
				}	
				break;		
			}
		}		
		}
