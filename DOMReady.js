function myReady(fn) {
	//现代浏览器，对DOMContentLoaded事件采用标准的事件绑定方式
	if(document.addEventListener) {
		document.addEventListener("DOMContentLoaded",fn,false);
	} else {
		IEContentLoaded(fn);
	}


	//IE下模拟
	function IEContentLoaded(fn) {
		var done = false;
		var d = window.document;

		var init = function() {
			if (!done) {
				done = true ;
				fn();
			}
		};

		(function () {
			try {
				//DOM树未创建完成前调用doScroll语句会抛出错误
				d.documentElement.doScroll("left");
			} catch (e) {
				setTimeout(arguments.callee,50);
				return;
			}
			init();
		})();

		//监听 Document加载状态
		d.onreadystatechange = function () {

			//如果用户是在domReady之后绑定的函数，立马执行
			if(d.readystate == 'complete') {
				d.onreadystatechange = null; 
				init();
			}
		}
	}

	IEContentLoaded(fn);

}