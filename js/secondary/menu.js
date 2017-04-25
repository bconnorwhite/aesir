// This file manages menu functionality and interaction with title

var solidBarY = 112;

var menuFunc = {
	NORM: 0,
	BAR: 1,
	OPEN: 2,
	CLOSE: 3,
};

var titleFunc = {
  HIDE: 0,
  SHOW: 1,
};

//Only call checkScroll if on homepage
if(location.pathname == "/"){
	window.onscroll = function() {
		checkScroll(solidBarY);
	};
}

function title(func){
  var title = document.getElementById("title");
  switch(func){
    case titleFunc.HIDE:
      title.classList.remove("show");
      break;
    case titleFunc.SHOW:
      title.classList.remove("hide");
      break;
		}
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function menuClose(){
	menu(menuFunc.CLOSE);
}

function menuOpen(){
	menu(menuFunc.OPEN);
}

function menu(func){
	var header = document.getElementById("header");
	switch(func){
		case menuFunc.NORM:
			header.classList.remove("barMenu");
			break;
		case menuFunc.BAR:
			header.classList.add("barMenu");
			break;
		case menuFunc.OPEN:
			document.getElementById("html").classList.add("freezeY");
			document.getElementById("hamburger").removeEventListener("mouseup", menuOpen);
			document.getElementById("hamburger").addEventListener("mouseup", menuClose);
			header.classList.add("openMenu");
			break;
		case menuFunc.CLOSE:
			document.getElementById("html").classList.remove("freezeY");
			document.getElementById("hamburger").removeEventListener("mouseup", menuClose);
			document.getElementById("hamburger").addEventListener("mouseup", menuOpen);
			header.classList.remove("openMenu");
			break;
	}
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

//Display top bar if page has been scrolled far enough
function checkScroll(y) {
	var titleY = document.getElementById("title").getBoundingClientRect().top;
	if (titleY < y){//Title has passed y and should switch to bar menu
		title(titleFunc.HIDE);
		menu(menuFunc.BAR);
	} else if(!hasClass(document.getElementById("header"), "openMenu")) {//Title has passed y
		title(titleFunc.SHOW);
		menu(menuFunc.NORM);
	}
}

//Apply addSmoothScrolling to each element of the top nav menu
function setLinks(){
	var topBarName = document.getElementById('top-bar-name');
	addSmoothScrolling(topBarName);//Add smooth scrolling to top bar name
	var menuItems = document.getElementById('menu-top-nav').children;
	for(var i=0; i<menuItems.length; i++){//For each menu item, add smooth scrolling
		var link = menuItems[i].firstElementChild;
		addSmoothScrolling(link);
	}
}

//Add Firefox smooth scrolling to an element
function addSmoothScrolling(element){
	element.onclick = function(){//This is called when menu links are clicked.
		var destination = document.getElementById(this.href.split('#')[1]);
		menuClose();//Close hb menu if open
		destination.scrollIntoView({block: 'start', behavior: 'smooth'});//Scroll real smooth
		return false;//Instead of linking
	};
}

function fadeIn(){
	window.onload = function () {
		 document.getElementById('body').style.opacity = 1;
	};
}

(function(){
	fadeIn();
	menuClose();
	setLinks();
})();
