//This file manages images for the Aesir theme

//Load any images marked as deferred
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
	var createImage = function(src){
		var img = new Image();
		img.src = src;
		return img;
	};
	var header_images = [];

	var maxWidth = window.screen.width;
	for(var s=0; s<sizes.length; s++)
		if(sizes[s] <= maxWidth)
			header_images.push(createImage(getHeaderImageSrc(getHeaderImagePath(), sizes[s])));
}

function resetHeaderImage(){
  var width = window.innerWidth;
  document.getElementById("header-image").setAttribute('src', getHeaderImageSrc(getHeaderImagePath(), getHeaderImageSize(width)));
}

(function(){
	if(document.getElementById("header-image") !== null){//If front page
		resetHeaderImage();
	}
	loadDeferredImages();
	if(document.getElementById("header-image") !== null){//If front page
		preloadHeaderImages();
		window.addEventListener('resize', resetHeaderImage);
	}
})();
