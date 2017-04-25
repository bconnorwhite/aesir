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
  return aesir.themeUrl + "/img/" + aesir.themeColor + "_";
}

function getHeaderImageSrc(path, width){
  return path + width + ".jpg";
}

header_img = new Image();
header_img.src = getHeaderImageSrc(getHeaderImagePath(), getHeaderImageSize(window.innerWidth));
