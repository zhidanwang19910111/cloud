(function(){

//1.生成header nav结构
	var headerNav = utils.$('.header-nav')[0];
	
	var headerNavHtml = '';

	utils.each(headerNavData, function(item, index){
		headerNavHtml += `
			<li class="header-nav-list fl">${item.name}</li>
		`
	})
	headerNav.innerHTML = headerNavHtml;

	//给header nav 添加点击事件

	var headerNavList = utils.$('.header-nav-list');
	var navPre = null;
	for(var i = 0;i < headerNavList.length; i++){
		headerNavList[i].onclick = function(){

			if(navPre){
				navPre.style.color = '#000000';
			}
			navPre = this;
			
			this.style.color = '#3b8cff';

		}
	}

//2.左侧文件导航栏

	//左侧导航高度自适应
	var slideNav = utils.$('.slide-wrap')[0];

	var slideHtml = '';

	utils.each(slideDate, function(item, index){
		slideHtml += `
			<li class="slide-list">
						${item.name}
					</li>
		`;
	})
	slideNav.innerHTML = slideHtml;

	//给导航添加点击事件

	var slideNavList = utils.$('.slide-list');

	slideNavList[0].style.background = '#dcdcdc';
	slideNavList[0].style.color = '#3b8cff';

	for(var j=0;j<slideNavList.length;j++){
		slideNavList[j].onclick = function(){
			clearStyle(slideNavList, 'background');
			clearStyle(slideNavList, 'color');
			this.style.background = '#dcdcdc';
			this.style.color = '#3b8cff'
		}
	}

	function clearStyle(list, style){
		for(var i=0;i<list.length;i++){
			list[i].style[style] = '';
		}
	}









})()