/*经营类别四级联动  js*/
function Dsy(){
	this.Items = {};
}
Dsy.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function change(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<s.length){change(v);}
	}//End with
}

function addon(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(a[i]).selectedIndex-1));
	};
	var ss=document.getElementById(a[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt1[v],opt1[v]);
		if(v && document.getElementById(a[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<a.length){addon(v);}
	}//End with
}



var dsy = new Dsy();

dsy.add("0",["钢铁","废钢"]);

dsy.add("0_0",["冷轧类","热轧类"]);
dsy.add("0_0_0",["普冷"]);
dsy.add("0_0_0_0",["四级分类1","四级分类2"]);
dsy.add("0_0_1",["热轧板卷","热轧尾板"]);
dsy.add("0_0_1_0",["四级分类1","四级分类2"]);
dsy.add("0_0_1_1",["四级分类1","四级分类2"]);

dsy.add("0_1",["废钢1类","废钢2类"]);
dsy.add("0_1_0",["钢炼"]);
dsy.add("0_1_0_0",["四级分类1","四级分类2"]);
dsy.add("0_1_1",["钢炉","钢矿"]);
dsy.add("0_1_1_0",["四级分类1","四级分类2"]);
dsy.add("0_1_1_1",["四级分类1","四级分类2"]);




var s=["selectfirst","selectsecond","selectthrid","selectfourth"];//四个select的name
var a=["addfirst","addsecond","addthrid"];//三个select的name
var opt0 = ["一级分类","二级分类","三级分类","四级分类"];//初始值
var opt1 = ["一级分类","二级分类","三级分类"];//初始值
function init_select(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}
function init_add(){  //初始化函数
	for(i=0;i<a.length-1;i++){
	  document.getElementById(a[i]).onchange=new Function("addon("+(i+1)+")");
	}
	addon(0);
}