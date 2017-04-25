function loadDeferredImages(){
	var images = document.getElementsByClassName('deferred');
	for(var i=0; i<images.length; i++){
		if(images[i].getAttribute('data-src')) {
			images[i].setAttribute('src',images[i].getAttribute('data-src'));
		}
	}
}

//Preload images up to the screen width
function preloadHeaderImages(){
	var path = document.getElementById("header-image").getAttribute('data-src');

	bg_540 = new Image();
	bg_720 = new Image();
	bg_1080 = new Image();
	bg_1440 = new Image();
	bg_1600 = new Image();
	bg_1920 = new Image();
	bg_full = new Image();

	var maxWidth = window.screen.width;
	bg_540.src = path + "540.jpg";
	if(maxWidth >= 540){//Only preload images as wide as needed
		bg_720.src = path + "720.jpg";
	}
	if(maxWidth >= 720){
		bg_1080.src = path + "1080.jpg";
	}
	if(maxWidth >= 1080){
		bg_1440.src = path + "1440.jpg";
	}
	if(maxWidth >= 1440){
		bg_1600.src = path + "1600.jpg";
	}
	if(maxWidth >= 1600){
		bg_1920.src = path + "1920.jpg";
	}
	if(maxWidth >= 1920){
		bg_full.src = path + "full.jpg";
	}
}

(function(){
	loadDeferredImages();
	if(document.getElementById("header-image") !== null){
		preloadHeaderImages();//Only preload header images on front page
	}
})();
