window.onload = function () {
	var contain = document.getElementsByClassName("slidingContainer")[0];
	
	var slidingImg = contain.getElementsByTagName("img");
	var imgWidth = slidingImg[0].offsetWidth;

	function reset (n) {
		slidingImg[0].style.left =  0;
		slidingImg[1].style.left = imgWidth + "px";
		slidingImg[2].style.left = imgWidth + 100 + "px";
		slidingImg[3].style.left = imgWidth + 200 + "px";
	}

	reset();

	contain.addEventListener("mouseover",function(){
		 var target = event.target;
		 switch (target) {
		 	case slidingImg[0]: 
		 		reset();
		 		break;
		 	case slidingImg[1]:
		 		reset();
		 		slidingImg[1].style.left = "100px";
		 		break;
		 	case slidingImg[2]:
		 		reset();
		 		slidingImg[1].style.left = "100px";
		 		slidingImg[2].style.left = "200px";
		 		break;
		 	case slidingImg[3]:
		 		reset();
		 		slidingImg[1].style.left = "100px";
		 		slidingImg[2].style.left = "200px";
		 		slidingImg[3].style.left = "300px";
		 	default:
		 		break;
		 }
	},false)
}