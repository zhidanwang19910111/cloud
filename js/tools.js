var tools = (function () {

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
        }
	}

	return toolsObj;
}());