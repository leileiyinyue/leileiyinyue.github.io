window.addEventListener('load',function(){
	//1.获取元素
	var focus =document.querySelector('.focus');
	var ul = focus.children[0];
	//获得focus的宽度
	var w = focus.offsetWidth;
	var ol = focus.children[1];
	//利用定时器自动轮播图图片
	var index = 0;
	var timer = setInterval(function(){
		index++;
		var translatex = -index * w;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX('+translatex+'px)';
	},2000);
	//等着我们过渡完成之后,再去判断 监听过渡完成的事件 transitionend
	ul.addEventListener('transitionend',function(){
		//无缝滚动
		if (index >=3){
			index = 0;
			ul.style.transition = 'none';
			var translatex = -index * w;
			ul.style.transform = 'translateX('+translatex+'px)';
		}else if (index<0){
			index = 2;
			ul.style.transition = 'none';
			var translatex = -index * w;
			ul.style.transform = 'translateX('+translatex+'px)';
		}
		//3.小圆点跟随变化
		ol.querySelector('.current').classList.remove('current');
		ol.children[index].classList.add('current');
	});
	//4.手指滑动轮播图
	//触摸元素 touchstar: 获取手指初始坐标
	var startX = 0;
	var moveX = 0;
	var flag = false;
	ul.addEventListener('touchstart',function(e){
		startX = e.targetTouches[0].pageX;
		//手指触摸的时候就停止定时器
		clearInterval(timer);
	});
	//移动手指 touchmove: 计算手指的滑动距离, 并且移动盒子
	ul.addEventListener('touchmove',function(e){
	   //计算移动距离
	   moveX = e.targetTouches[0].pageX - startX;
	   //移动盒子: 盒子原来的位置 +手指移动的距离
	   var translatex = -index * w + moveX;
	   ul.style.transition = 'none';
	   ul.style.transform = 'translateX('+translatex+'px)';
	   flag = true;
	   e.preventDefault();
});
    ul.addEventListener('touchend',function(e){
    	if (flag) {
    		//如果移动距离大于50像素我们就播放上一张或下一张
    	if(Math.abs(moveX) >50){
    		//如果是右滑就是 播放上一张 movex 是正直
    	if (moveX>0) {
    		index--;
    	} else{
    		//如果是左滑就是 播放下一张 movex是负值
    		index++;
    	}
    	var translatex = -index * w;
    	ul.style.transition = 'all .3s';
    	ul.style.transform = 'translateX('+translatex+'px)';
    	}else {
    		//如果移动距离小于50像素我们就回弹
    	    var translatex = -index * w;
    	    ul.style.transition = 'all .1s';
    	}
    	    ul.style.transform = 'translateX('+translatex+'px)';
    	}
    	//手指离开的时候就从新开启定时器
    	clearInterval(timer);
    	timer = setInterval(function(){
		index++;
		var translatex = -index * w;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX('+translatex+'px)';
	},2000);
    });
    
})