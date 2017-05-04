//Preloads the appropriate sized header image
var sizes = [1920, 1600, 1440, 1080, 720, 540];

function getHeaderImageSize(width){
  var size = 'full';
  for(var s=0; s<sizes.length; s++)
    if(width <= sizes[s])
      size = '' + sizes[s];
  return size;
}

function getHeaderImagePath(){
  return aesir.themeUrl + "/img/" + aesir.themeColor + "/";
}

function getHeaderImageExtension(width){
  if(window.devicePixelRatio > 1.5 && width != 'full'){
    return "@2x.jpg";
  } else {
    return ".jpg";
  }
}

function getHeaderImageSrc(path, width){
    return path + width + getHeaderImageExtension(width);
}

alert(window.screen.availWidth / document.documentElement.clientWidth);
header_img = new Image();
header_img.src = getHeaderImageSrc(getHeaderImagePath(), getHeaderImageSize(window.innerWidth));
