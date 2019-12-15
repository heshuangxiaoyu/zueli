	var box=document.getElementById('box');
	var slider=document.getElementById('slider');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var subscript=document.getElementById('subscript').children;
	var attention=document.getElementById('attention');
	var slider2=document.getElementById('slider2');
	var contion=document.getElementById('contion');
	var silde=document.getElementsByClassName('silde');
	var contion=document.getElementById('contion');
	var wenzi=document.getElementById('wenzi');
	var index=1;
	var timer;
	var isMoving=false;
	//轮播下一张的函数
	function next(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index++;
		subChange();
		animate(slider,{left:-1200*index},function () {
			if(index==6){
				slider.style.left='-1200px';
				index=1;
			}
			isMoving=false;
		});

	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index--;
		subChange();
		animate(slider,{left:-1200*index},function () {
			if(index==0){
				slider.style.left='-6000px';
				index=5;
			}
			isMoving=false;
		});
	}
    timer=setInterval(next,2000);
//鼠标划入清定时器
	box.onmouseover=function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	//鼠标画出开定时器
	box.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer=setInterval(next,2000);
	}
	right.onclick=next;
	left.onclick=prev;
    //小按钮点击事件
	for(var i=0;i<subscript.length;i++){
		subscript[i].idx=i;
		subscript[i].onclick=function(){
			index=this.idx+1;
			subChange();
			animate(slider,{left:-1200*index});
		}
	}
	//小按钮背景色
	function subChange(){
		for(var i=0;i<subscript.length;i++){
			subscript[i].className='';
		}
		if(index ==6){
			subscript[0].className='active';
		}else if(index==0){
			subscript[4].className='active';
		}else{
			subscript[index-1].className='active';
		}
	}