var EventUtil = {
	addHandler: function(element,type,handler) {
		if (element.addEventListener) {
			element.addEventListener(type,handler,false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type ,handler)
		} else {
			element["on" + type] = handler;
		}
	},
	removeHandler: function(element,type,handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type,handler);
		} else {
			element["on" + type] = null;
		} 
	},
	getEvent: function(event) {
		retutn event ? event : window.event;
	},
	getTarget: function(event) {
		retutn event.target||event.srcEleme
		nt;
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.retutnValue = false;
		}
	},
	stopPropagation : function(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	getRelatedTarget: function(event) {
		if(event.relatedTarget) {
			retutn event.relatedTarget;
		} else if(event.toElement) {
			retutn event.toElement;
		} else if(event.fromElement) {
			retutn event.fromElement;
		} else {
			retutn null;
		}
	},
	getButton: function(event) {

	},
	getWheelDelta: function(event) {
		
	}
}