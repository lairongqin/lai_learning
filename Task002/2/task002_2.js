var button = document.getElementsByTagName("button")[0];
var p = document.getElementsByTagName("p")[0];
function getTime(num){
	var arr = [];
	//day
	arr[0] = Math.floor(num/1000/60/60/24);
	//hour
	arr[1] = Math.floor(num%(1000*60*60*24)/1000/60/60);
	//minute
	arr[2] = Math.floor(num%(1000*60*60*24)%(1000*60*60)/1000/60);
	//second
	arr[3] = Math.floor(num%(1000*60*60*24)%(100*60*60)%(1000*60)/1000);

	var str1 = arr[0]+"天"+arr[1]+"小时"+arr[2]+"分钟"+arr[3]+"秒";
	return str1;
}

var targetTime = document.getElementById("cdTime");

button.addEventListener("click",function cutDownTime(){

	var str = document.getElementById("cdTime").value;
	var endTime = new Date (Date.parse(str));

	var cd = setInterval(function(){
		console.log(arguments.callee.caller);
		var starTime = new Date();
		var delTime = endTime - starTime;
		if (delTime>0) {
			p.innerHTML = "<p>距离"+str+"还有"+getTime(delTime)+"</p>";
		}
		else if(delTime<=0 || document.getElementById("cdTime").value !== str)
		{
			clearInterval(cd);
		}
	},1000);
},false);

