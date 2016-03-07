
var hobby1 = document.getElementById("hobbies");
var button1 = document.getElementsByTagName("button")[0];
button1.addEventListener("click",toArray1,false);

//去重数组
function uniqueArry(arr) {
	var compare = {};
	var res = [];
	var temp;

	for (i=0;i<arr.length;i++) {
		temp = arr[i].trim();
		if (temp === "") {continue;}
		if (!compare[arr[i]]) {
			compare[arr[i]] = 1;
			res.push(arr[i]);
		}
	}
	return res;
}

//第一部分
function toArray1(){
	var str = hobby1.value;
	str = str.trim();
	var arr = str.split("，");
	
	arr = uniqueArry(arr);

	console.log(arr);
	str = arr.toString();
	var div = document.getElementsByTagName("div")[0];
	div.innerHTML = str;
}

// 第二阶段 换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号
var hobby2 = document.getElementsByTagName("textarea")[0];

var button2 = document.getElementsByTagName("button")[1];

button2.addEventListener("click",toArray2,false);

function toArray2() {
	var str = hobby2.value;
	str = str.trim();
	var arr = str.split(/\n|\s+|,|，|;|、/);
	console.log(arr);
	arr = uniqueArry(arr);
	str = arr.toString();
	var div = document.getElementsByTagName("div")[1];
	div.innerHTML = str;

}

//第三阶段 用户输入的爱好数量不能超过10个，也不能什么都不输入。当发生异常时，在按钮上方显示一段红色的错误提示文字，并且不继续执行后面的行为；当输入正确时，提示文字消失。
var hobby3 = document.getElementsByTagName("textarea")[1];

var button3 = document.getElementsByTagName("button")[2];
(function createWarn() {
	var p = document.createElement("p");
	str = document.createTextNode("爱好数量不能超过10个或者少于1个");
	p.appendChild(str);
	p.className = "warn";
	parent = button3.parentNode;
	parent.insertBefore(p,button3);
	p.style.display = "none";
})();


button3.addEventListener("click",function(){
	var div = document.getElementsByTagName("div")[2];
	var str = hobby3.value;
	str = str.trim();
	var cbStr = "";
	var arr = str.split(/\n|\s+|,|，|;|、/);
		arr = uniqueArry(arr);
	var p = document.getElementsByClassName("warn")[0]; 
		console.log(arr);
	if (arr.length>10||typeof(arr[0])==="undefined") {
		p.style.display = "block";
		div.innerHTML ="";
	} else {
		p.style.display = "none";
		for (i in arr) {
			 cbStr+= "<input type = \"checkbox\" value = \""+arr[i]+ "\" >"+arr[i]+"<br>";
		}
		div.innerHTML = cbStr;
	}
},false);
