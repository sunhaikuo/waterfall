 window.onload=function(){
 	for(var i=0; i<10; i++) {
 		var oBox = document.createElement("div");
 		oBox.className = "box";
 		var oMain = document.getElementById("main");
 		oMain.appendChild(oBox);
 		var oPic = document.createElement("div");
 		oPic.className = "pic";
 		oBox.appendChild(oPic);
 		var oImg = document.createElement("img");
 		oImg.src = "img/" + i + ".jpg";
 		oPic.appendChild(oImg);
 	}
 	window.setTimeout(function(){
 		waterfall('main','box');	
 	}, 1000);
 	var imgData = [{"src":"30.jpg"},{"src":"31.jpg"},{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"}];
	window.onscroll = function() {
		if(checkScrollSide()) {
			for(var i=0; i<imgData.length; i++) {
		 		var oBox = document.createElement("div");
		 		oBox.className = "box";
		 		var oMain = document.getElementById("main");
		 		oMain.appendChild(oBox);
		 		var oPic = document.createElement("div");
		 		oPic.className = "pic";
		 		oBox.appendChild(oPic);
		 		var oImg = document.createElement("img");
		 		oImg.src = "img/" + imgData[i].src;
		 		oPic.appendChild(oImg);
		 	}
			waterfall('main','box');
		}
	}
}
function waterfall(parent,box){
  var oParent=document.getElementById(parent);
  var oBoxs=getByClass(oParent,box);
  var cols = Math.floor(document.documentElement.offsetWidth/oBoxs[0].offsetWidth);
  var oBoxsH = [];
	for(var i=0;i<oBoxs.length;i++){
    if(i<cols){
       // 将图片的高度值添加到数组中
       oBoxsH.push(oBoxs[i].offsetHeight);
    }else{
      // 求最小值和最小值的索引
      var minBoxH = Math.min.apply(null, oBoxsH);
      var idx = getMinhIndex(oBoxsH, minBoxH);
    	//计算及定义图片出现的位置
      oBoxs[i].style.position='absolute';
      oBoxs[i].style.left = oBoxs[idx].offsetLeft + 'px';
      oBoxs[i].style.top = minBoxH + 'px';
      // 改变数组值
     	oBoxsH[idx] += oBoxs[i].offsetHeight;
    }
  }
}


function getByClass(parent,clsName){
  var boxArr=new Array(), 
      oElements=parent.getElementsByTagName('*');
  for(var i=0;i<oElements.length;i++){
    if(oElements[i].className==clsName){
      boxArr.push(oElements[i]);
    }
  }
  return boxArr;
}

// 求值在数组中的索引,arr接收的是数组，val接收的是判断的值
function getMinhIndex(arr,val){
	for(var i=0; i<arr.length; i++) {
		if(arr[i] == val) {
			return i;
		}
	}
}

// 获取滚动时异步取数据的边界
function checkScrollSide () {
	var oBoxs = getByClass(document.getElementById("main"), "box");
	var oEltHeight = Math.floor(oBoxs[oBoxs.length-1].offsetTop + oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	return (oEltHeight < scrollTop + document.documentElement.clientHeight ? true : false)
}




