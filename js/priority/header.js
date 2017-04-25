function setHeaderImageSize(){
  console.log("RESIZE");
  function setHeaderImage(size){
    var path = document.getElementById("header-image").getAttribute('data-src');
    document.getElementById("header-image").setAttribute('src',path+size+".jpg");
  }
  var width = window.innerWidth;
  if(width<=540){
    setHeaderImage('540');
  }
  else if(width<=720){
    setHeaderImage('720');
  }
  else if(width<=1080){
    setHeaderImage('1080');
  }
  else if(width<=1440){
    setHeaderImage('1440');
  }
  else if(width<=1600){
    setHeaderImage('1600');
  }
  else if(width<=1920){
    setHeaderImage('1920');
  }
  else{
    setHeaderImage('full');
  }
}

(function(){
  document.addEventListener('DOMContentLoaded', setHeaderImageSize);
  window.addEventListener('resize', setHeaderImageSize);
})();
