var utils = (function () {

	var toolsObj = {
		// $选择器
        $: function (selector, context) {
            context = context || document;
            // 有空格时，采用高级选择器
            if (selector.indexOf('') !== -1) {
                return context.querySelectorAll(selector);
            }
            // id选择器
            else if (selector.charAt(0) === '#') {
                return document.getElementById(selector.slice(1));
            }
            // class选择器
            else if (selector.charAt(0) === '.') {
                return context.getElementsByClassName(selector.slice(1));
            }
            // 标签选择器
            else {
                return context.getElementsByTagName(selector)
            }
        },
        // 遍历
        each: function (obj, callBack) {
            for (var i = 0, len = obj.length; i < len; i++) {
                callBack(obj[i], i);
            }
        }
	}

	return toolsObj;
}());