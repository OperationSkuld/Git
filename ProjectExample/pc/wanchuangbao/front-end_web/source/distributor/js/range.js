// range滑块
function range(o,e){
	var e = e ? e : window.event;
	if(!window.event) {e.preventDefault();}
	var tX=o.offsetLeft,
		dx=e.clientX;
	document.onmousemove=function(e){
		var e = e ? e : window.event;
		var len=tX+e.clientX-dx;
		if(len>=0 && len<=300){
			o.style.left=len+"px";
			document.getElementById('rangeValue').innerHTML =0 + Math.round(len/10);
		}
	}
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}

