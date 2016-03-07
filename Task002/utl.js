

//判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
	if ( Array.isArray(arr) ) {
		return true;
	} else {
		return Object.prototype.toString(arr)=== "[Object Array]";
	}
}

//判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
	if (typeof(fn)==="function"){
		return true;
	} else {
		return false;
	}
}

//用递归来实现深度克隆。
function cloneObject(src) {

	//判断变量类型
	var type = Object.prototype.toString.call(src);
	var tempObject = {};
	if (type === "[object Array]") {
		return src.concat();
	} 
	else if (type === "[object Object]") {
		//遍历对象
		for (var i in src ) {
			if ( src.hasOwnProperty(i) ) {
				tempObject[i] = cloneObject(src[i]);
			} 
		}
		return tempObject;
	}
	else {
		return src;
	}
}

//测试用例
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
//方法1：双次循环，类似冒泡排序
function uniqArray1(arr) {
    if (Array.isArray(arr)) {
    	var length = arr.length;
    	for (var i=0;i<length;i++) {
    		for (var j=i+1;j<length;j++) {
    			if(arr[i]===arr[j]) {
    				arr.splice(j,1);
    				j--;
    				length--;
    			}
    		}
    	}
    }
    return arr;
}

//方法2：先排序，后去重
function uniqArray2(arr) {
	if (Array.isArray(arr)) {
		arr.sort();
		for (var i=1;i<arr.length;i++) {
			if (arr[i] === arr[i-1]) {
				arr.splice(i,1);
				i--;
			}
		}
		return arr;
	}	
}

//方法3：双对象法
function uniqArray3(arr) {
	if (Array.isArray(arr)) {
		var dictionary = {};
		var res = [];
		for (var i = 0;i<arr.length;i++) {
			if (!dictionary[arr[i]])
			{
				dictionary[arr[i]] = 1;
				res.push(arr[i]);
			}
		}
		return res;
	}
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray3(a); 
console.log(b); // [1, 3, 5, 7]


// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
	str = str.replace(/^\s*|\s*$/g,"");
	return str;
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i = 0 ;i<arr.length;i++) {
    	fn(arr[i],i)
    }
}

//使用实例
var arr = ['java', 'c', 'php', 'html'];
function output1(item) {
    console.log(item)
}
each(arr, output1);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output2(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output2);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var j = 0;
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			j++;
		}
	}
	return j;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
   	var pattern = /\w+@\w+\.com/i;
   	return pattern.test(emailStr);
}


function isMobilePhone (phone) {
	var pattern = /^(\+\d{1,4})?\d{7,11}$/;
	return pattern.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var oldClassName = element.className;
    element.className = (oldClassName === "") ? newClassName : oldClassName + " " + newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
	var className = element.className;
	var pattern = new RegExp("\\b"+oldClassName+"\\b");
	className = className.replace(pattern,"");
	element.className = className.trim();
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}


// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {

	//相对位置
	var left = element.offsetLeft;
	var top = element.offsetTop;
	var current = element.offsetParent;
	var res = {};

	//判断是否为空 进行迭代
	while (current !== null) {
		left += current.offsetLeft;
		top += current.offsetTop;
		current = current.offsetParent;
	}
	res.x = left - document.documentElement.scrollLeft;
	res.y = top - document.documentElement.scrollTop;
	return res;
}

var p = document.getElementsByTagName("span")[0]; 
var pos = getPosition(p);

// 实现一个简单的Query
function $(selector) {
	if (typeof selector !== "string") {
		return selector;
	}
	selector = selector.trim();
	var seekGroup = selector.split(/\s+/);

	var res = [];
	for(var i = 0 ;i<seekGroup.length;i++)
	{
		res.push(seek(seekGroup[i]))
	}

	if (isParent(res,res.length-1)) {
		return res[res.length-1];
	}
	else {
		return null;
	}

	function isParent(arr,i) {
		
		if(i>0) {
			if (arr[i].parentNode === arr[i-1]) {
				isParent(arr,i-1)
			}
			else {
				return false;
			}
		}
		else if(i==0) {
			return true;
		}
		return isParent(arr,i-1);
	}
}

function seek(selector) {
	var index = selector[0];
	var res = null ;
	switch (index) {
	case "#":
		res = document.getElementById(selector.slice(1));
		break;
	case ".":
		res = document.getElementsByClassName(selector.slice(1))[0];
		break;	
	case "[":
		var allElement = document.getElementsByTagName("*");
		var attr = selector.slice(1,-1);
		var pattern = /^(\w+)\s*=\s*(\w+)$/;
		var reg = pattern.exec(attr);
		if (reg === null) {
			for (var i = 0 , len = allElement.length ; i < len ; i ++ ) {
				if (allElement[i].getAttribute(attr) !== null) {
					res = allElement[i];
					break;
				}
			}				
		}
		else {
			for (var i = 0 , len = allElement.length ; i < len ; i ++ ) {
				if (allElement[i].getAttribute(reg[1]) === reg[2]) {
					res = allElement[i];
					break;
				}
			}				
		}
		break;
	default : 
		res = document.getElementsByTagName(selector)[0];
	}
	return res;
}

var a = $("p")
console.log(a);

//小jQ完毕

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if(element.addEventListener) {
    	element.addEventListener(event,listener,false);
    } else if(element.attachEvent) {
    	element.attachEvent("on"+event,listener);
    } else {
    	element["on" + event] = listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if(element.removeEventListener) {
    	element.removeEventListener(event,listener,false)
    } else if(element.detachEvent) {
    	element.detachEvent("on"+event,listener);
    } else {
    	element["on"+event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element,"click",listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,"keydown",function(event){
    	if (event.keyCode == 13) {
    		listener();
    	}
    });
}


// 给一个element绑定一个针对event事件的响应，响应函数为listener
function $on (element, event, listener) {
    if(element.addEventListener) {
    	element.addEventListener(event,listener,false);
    } else if(element.attachEvent) {
    	element.attachEvent("on"+event,listener);
    } else {
    	element["on" + event] = listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function $un (element, event, listener) {
    if(element.removeEventListener) {
    	element.removeEventListener(event,listener,false)
    } else if(element.detachEvent) {
    	element.detachEvent("on"+event,listener);
    } else {
    	element["on"+event] = null;
    }
}

// 实现对click事件的绑定
function $click (element, listener) {
    addEvent(element,"click",listener);
}

// 实现对于按Enter键时的事件绑定
function $enter (element, listener) {
    addEvent(element,"keydown",function(event){
    	if (event.keyCode == 13) {
    		listener();
    	}
    });
}

//事件委托方法1
var delegate = function(client,method) {
	return (function() {
		method.apply(client,arguments);
	})
}

//事件委托2
var nav = $("nav");
addEvent(nav,"click",agentFunc)
function agentFunc (event) {
	event = event ? arguments[0] : window.event;
	target = event.target ? event.target : event.srcElement;
	switch (target.id) {
		case "no2" :
		navNo2();
		break;
	}
}

function navNo2 (){
	console.log("This is number 2");
}

//事件代理结束

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    var s = navigator.userAgent.toLowerCase();

}
function getBVersion () {
	var s = navigator.userAgent.toLowerCase();
	var res = {};
	res.ie = s.match(/msie\s*[\d.]*/) === null ? null : s.match(/msie\s*[\d.]*/);
	res.chrome = s.match(/chrome\/[\d.]*/) ===null ? null : s.match(/chrome\/[\d.]*/);
	res.fireFox = s.match(/firefox\/[\d.]*/) === null ? null : s.match(/firefox\/[\d.]*/);
	res.saFari = s.match(/version\/[\d.]*/) === null ? null : s.match(/version\/[\d.]*/);
	res.ie11 = s.match(/rv:11.0/) === null ? null : s.match(/rv:11.0/);
	for(i in res) {
		if (res[i]!=null) {
			res = "Bowser : " + i + " Version: " + res[i][0].match(/[\d\.]+/);
			break;
		}
	}
	return res;
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var cookieText = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue);
    if (expiredays instanceof Date) {
    	cookieText += "; expires =" + expiredays.toGMTString();
    }
    document.cookie = cookieText;
    return document.cookie;
}

// 获取cookie值
function getCookie(cookieName) {
    var cookieName = encodeURIComponent(cookieName)+"=",
    	cookieStart = document.cookie.indexOf(cookieName),
    	cookieValue = null;
    if(cookieStart>-1) {
    	cookieEnd = document.cookie.indexOf(";",cookieStart);
    	if(cookieEnd == -1) {
		cookieEnd = document.cookie.length;
    	}
      	cookieValue = decodeURIComponent(document.cookie.substring(cookieStart,cookieEnd));    
    } 
    return cookieValue;
}

function getCookieAll() {
	var cookie = {};
	var all = document.cookie;
	if (all == "") {
		return cookie;
	}
	var list = all.split('; ');
	for(var i = 0 ; i<list.length ; i++) {
		var item = list[i];
		var p = item.indexOf('=');
		var name = item.substring(0,p);
		name = decodeURIComponent(name);
		var value = item.substring(p+1);
		value = decodeURIComponent(value);
		cookie[name] = value;
	}
	return cookie;
}

setCookie("lai","value");
console.log(document.cookie);

// XMLHttpRequest()
// ActiveXObject("Microsoft.XMLHTTP")
function ajax(url, options) {
    // 创建XHR对象
    var requset;
    if (window.XMLHttpRequest) {
    	requset = new XMLHttpRequest();
    } else {
    	requset = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //
   	if (options.data === 'object') {
   		var str = "";
   		for (i in options.data) {
   			str += i + ":" + options.data[i] + '&';
   		}
   		dataResult = str.split(0,str.length-1);
   	}
   	requset.open();
    
}

// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);