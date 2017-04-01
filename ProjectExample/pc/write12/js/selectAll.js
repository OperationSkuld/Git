// JavaScript Document

function selectAll(){
var a = document.getElementsByTagName("input");
if(a[0].checked){
for(var i = 0;i<a.length;i++){
if(a[i].type == "checkbox") a[i].checked = false;
}
}
else{
for(var i = 0;i<a.length;i++){
if(a[i].type == "checkbox") a[i].checked = true;
}
}
}