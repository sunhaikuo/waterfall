 window.onload=function(){
     waterfall('main','box');
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
      console.log(oBoxs[idx].offsetLeft + 'px');
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
