window.addEventListener('load',function(){
	//1.��ȡԪ��
	var focus =document.querySelector('.focus');
	var ul = focus.children[0];
	//���focus�Ŀ��
	var w = focus.offsetWidth;
	var ol = focus.children[1];
	//���ö�ʱ���Զ��ֲ�ͼͼƬ
	var index = 0;
	var timer = setInterval(function(){
		index++;
		var translatex = -index * w;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX('+translatex+'px)';
	},2000);
	//�������ǹ������֮��,��ȥ�ж� ����������ɵ��¼� transitionend
	ul.addEventListener('transitionend',function(){
		//�޷����
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
		//3.СԲ�����仯
		ol.querySelector('.current').classList.remove('current');
		ol.children[index].classList.add('current');
	});
	//4.��ָ�����ֲ�ͼ
	//����Ԫ�� touchstar: ��ȡ��ָ��ʼ����
	var startX = 0;
	var moveX = 0;
	var flag = false;
	ul.addEventListener('touchstart',function(e){
		startX = e.targetTouches[0].pageX;
		//��ָ������ʱ���ֹͣ��ʱ��
		clearInterval(timer);
	});
	//�ƶ���ָ touchmove: ������ָ�Ļ�������, �����ƶ�����
	ul.addEventListener('touchmove',function(e){
	   //�����ƶ�����
	   moveX = e.targetTouches[0].pageX - startX;
	   //�ƶ�����: ����ԭ����λ�� +��ָ�ƶ��ľ���
	   var translatex = -index * w + moveX;
	   ul.style.transition = 'none';
	   ul.style.transform = 'translateX('+translatex+'px)';
	   flag = true;
	   e.preventDefault();
});
    ul.addEventListener('touchend',function(e){
    	if (flag) {
    		//����ƶ��������50�������ǾͲ�����һ�Ż���һ��
    	if(Math.abs(moveX) >50){
    		//������һ����� ������һ�� movex ����ֱ
    	if (moveX>0) {
    		index--;
    	} else{
    		//������󻬾��� ������һ�� movex�Ǹ�ֵ
    		index++;
    	}
    	var translatex = -index * w;
    	ul.style.transition = 'all .3s';
    	ul.style.transform = 'translateX('+translatex+'px)';
    	}else {
    		//����ƶ�����С��50�������Ǿͻص�
    	    var translatex = -index * w;
    	    ul.style.transition = 'all .1s';
    	}
    	    ul.style.transform = 'translateX('+translatex+'px)';
    	}
    	//��ָ�뿪��ʱ��ʹ��¿�����ʱ��
    	clearInterval(timer);
    	timer = setInterval(function(){
		index++;
		var translatex = -index * w;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX('+translatex+'px)';
	},2000);
    });
    
})