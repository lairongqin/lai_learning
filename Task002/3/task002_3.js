window.onload = function() {
	// lai_lunbo_0();
	lai_lunbo_2();
}
function lai_lunbo_0 (dir,loop,inter) {
	var box = document.getElementsByClassName("lai_lunbo_0_imgBox")[0];
		box.style.left = 0;
	var nav = document.getElementsByClassName("lai_lunbo_0_nav")[0];
	var li = nav.getElementsByTagName("a");
	autoMove(true);
	var go;

	function autoMove(loop){
		judgeLi();
		go = setInterval(function(){		
		if(parseInt(box.style.left) == -2400) {
				clearInterval(go);
				if (loop==true) {
					setTimeout(function(){
					box.style.left = 0;
					autoMove(true);
				},0);
			}
		}
		else {
			moveLeft(600);		
		}
		},2000);			
	}

	function autoStop() {
		clearInterval(go);
	}

	function moveLeft(dis) {
		// var dis = 600;
		var march = 0;
		var _dis = Math.abs(dis);
		//取得现在位置 目标位置
		var start = box.style.left;
		var end = parseInt(start) - dis;

		//开始轮播一个单位
		var goOnce = setInterval(function(){
			var moveSpeed = 10 + Math.atan(_dis-march/300)*10;
			if (dis<0) moveSpeed = -1*moveSpeed;

			box.style.left = (parseInt(box.style.left) - moveSpeed) + "px";
			
			//更新已经走过的路程
			march = Math.abs(moveSpeed) + march;

			if (march > _dis -1) {
				box.style.left = end +"px";
				clearInterval(goOnce);
				judgeLi();
			}
		},25);
	}


	nav.addEventListener("click",function(event){
		autoStop();
		var now =parseInt(box.style.left);
		var delta;
		switch (event.target) {
			case li[0]:
			delta =parseInt(box.style.left) + 0;
			moveLeft(delta);
			break;
			case li[1]:
		    delta =parseInt(box.style.left) + 600;
			moveLeft(delta);
			break;
			case li[2]:
			delta =parseInt(box.style.left) + 1200;
			moveLeft(delta);
			break;
			case li[3]:
			delta =parseInt(box.style.left) + 1800;
			moveLeft(delta);
			break;
			case li[4]:
			delta =parseInt(box.style.left) + 2400;
			moveLeft(delta);
			break;
			default:
			autoMove();
			break;
		}
	},false);

	function judgeLi() {
		reset();
		function reset() {
			for(var i = 0 ;i<5;i++) {
				li[i].style.backgroundColor = "";
			}
		}
		var nowPos = parseInt(box.style.left);
		console.log(nowPos);
		switch(nowPos) {
			case 0 :
			li[0].style.backgroundColor = "#fff";
			break;
			case -600 :
			li[1].style.backgroundColor = "#fff";
			break;
			case -1200 :
			li[2].style.backgroundColor = "#fff";
			break;
			case -1800 :
			li[3].style.backgroundColor = "#fff";
			break;
			case -2400 :
			li[4].style.backgroundColor = "#fff";
			break;
		}
	}
}


function lai_lunbo_2 () {
	var list = document.querySelectorAll(".lai_lunbo_2_imgBox img");
	var change = null;
	// replaceAuto();

	function replaceAuto() {
		var i = 0;
		var j = 0;
		change = setInterval(function(){
			j = i%4;
			console.log(j+','+(j+1));
			replace(list[j],list[j+1]);
			i++;
		},1500);
	}

	
	function replace(hiddenEle,showEle) {

		hiddenEle.style.display = "block";
		hiddenEle.style.zIndex = 2;
		showEle.style.display = "block";
		hiddenEle.style.opacity = 1;

		var speed = (hiddenEle.style.opacity)/40;
		var change = setInterval(function(){

			hiddenEle.style.opacity = hiddenEle.style.opacity - speed;
			if (hiddenEle.style.opacity <=0 ) {
				clearInterval(change);

				hiddenEle.style.display = "none";
				hiddenEle.style.opacity = 1;
				hiddenEle.style.zIndex = 0;
			}
		},16);
	}
}