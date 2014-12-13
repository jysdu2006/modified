var li=document.getElementsByTagName('li');
for(var i=0;i<li.length;i++)
	li[i].style.display="none";


var ul=document.getElementsByTagName('ul');
for(var i=0;i<ul.length;i++){
	ul[i].onmouseover=ul[i].onclick=function(){
		showmenu(this);
	};
	ul[i].onmouseout=function(){hidemenu(this);};
}


function showmenu(ulmenu){
	var li=ulmenu.getElementsByTagName('li');
	for(var j=0;j<li.length;j++)
		li[j].style.display="block";
	ulmenu.onclick=function(){
		hidemenu(this);
	};
}

function hidemenu(ulmenu){
	var li=ulmenu.getElementsByTagName('li');
	for(var j=0;j<li.length;j++)
		li[j].style.display="none";
	ulmenu.onclick=function(){
		showmenu(this);
	};
}
