$( window ).on( "load", function(){
   // 调用waterfall函数
   waterfall();
    var dataInt={'data':[{'src':'img/1.jpg'},{'src':'img/2.jpg'},{'src':'img/3.jpg'},{'src':'img/4.jpg'}]};
    window.onscroll=function(){
       // 拖动滚动条时
       if(checkscrollside()) {
	       	$.each( dataInt.data, function( index, value ){
	            var $oBox = $('<div>').addClass('box').appendTo( $("#main") );
	            var $oPin = $('<div>').addClass('pic').appendTo( $oBox );
	            $('<img>').attr('src',  $( value).attr( 'src') ).appendTo($oPin);
	        });
	        waterfall();
       }
     }
});
function waterfall(){
 // 计算及定位数据块显示分散效果
	var $oBoxes = $("#main>div");
	var boxWidth = $oBoxes.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/boxWidth);
	var boxHeiArr = [];
	$.each($oBoxes, function(i,n){
		if(i<cols) {
			boxHeiArr.push($(n).outerHeight());
		}else {
			var minHei = Math.min.apply(null, boxHeiArr);
			var idx = $.inArray(minHei, boxHeiArr);
			$(n).css("position", "absolute").css("top", minHei).css("left",$oBoxes.eq(idx).outerWidth()*idx); 
			boxHeiArr[idx] +=  $oBoxes.eq(i).outerHeight();
		}
	});
}

function checkscrollside(){
  // 检测是否具备了加载数据块的条件
  var $oBoxes = $("#main>div");
  var offsetTop = $oBoxes.last().offset().top;
  var oBoxHeight = $oBoxes.last().outerHeight();
  return (offsetTop + oBoxHeight/2)<$(window).height()+$(window).scrollTop() ? true : false;
}
