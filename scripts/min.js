function sendEmail(e){if(""==form.email.value||""==form.message.value)return!1;var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(personalizeThankYouMessage(),hideContactForm())},t.open("POST",e,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded");var n="name="+form.name.value+"&email="+form.email.value+"&message="+form.message.value;t.send(n)}function hideContactForm(){form.style.opacity=0,setTimeout(function(){form.style.visibility="hidden",form.message.style.height="0",form.style.height="0",document.getElementById("thanks").style.display="block"},1e3)}function personalizeThankYouMessage(){var e=form.name.value;firstName=getFirstName(e),""!==firstName&&(document.getElementById("thanks").innerHTML="Thanks "+firstName+"! Your message has been sent.")}function getFirstName(e){return/^[A-Za-z\s]+$/.test(e)?e.split(" ")[0]:""}function title(e){var t=document.getElementById("title");switch(e){case titleFunc.HIDE:t.classList.remove("show");break;case titleFunc.SHOW:t.classList.remove("hide")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function menuClose(){menu(menuFunc.CLOSE)}function menuOpen(){menu(menuFunc.OPEN)}function menu(e){var t=document.getElementById("header");switch(e){case menuFunc.NORM:t.classList.remove("barMenu");break;case menuFunc.BAR:t.classList.add("barMenu");break;case menuFunc.OPEN:document.getElementById("html").classList.add("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuOpen),document.getElementById("hamburger").addEventListener("mouseup",menuClose),t.classList.add("openMenu");break;case menuFunc.CLOSE:document.getElementById("html").classList.remove("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuClose),document.getElementById("hamburger").addEventListener("mouseup",menuOpen),t.classList.remove("openMenu")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function checkScroll(e){document.getElementById("title").getBoundingClientRect().top<e?(title(titleFunc.HIDE),menu(menuFunc.BAR)):hasClass(document.getElementById("header"),"openMenu")||(title(titleFunc.SHOW),menu(menuFunc.NORM))}function setLinks(){var e=document.getElementById("top-bar-name");addSmoothScrolling(e);for(var t=document.getElementById("menu-top-nav").children,n=0;n<t.length;n++){var a=t[n].firstElementChild;addSmoothScrolling(a)}}function addSmoothScrolling(e){e.onclick=function(){var e=document.getElementById(this.href.split("#")[1]);return menuClose(),e.scrollIntoView({block:"start",behavior:"smooth"}),!1}}function getBgUrl(e){var t="";return t=e.currentStyle?e.currentStyle.backgroundImage:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,"").backgroundImage:e.style.backgroundImage,t.replace(/url\(['"]?(.*?)['"]?\)/i,"$1")}function preloadImages(){var e=getBgUrl(document.getElementById("top")),t=e.split("/img/"),n=t[0]+"/img/",a=t[1].split("_")[0];bg_540=new Image,bg_720=new Image,bg_1080=new Image,bg_1440=new Image,bg_1600=new Image,bg_1920=new Image,bg_full=new Image;var o=window.screen.width;bg_540.src=n+a+"_540.jpg",o>=540&&(bg_720.src=n+a+"_720.jpg"),o>=720&&(bg_1080.src=n+a+"_1080.jpg"),o>=1080&&(bg_1440.src=n+a+"_1440.jpg"),o>=1440&&(bg_1600.src=n+a+"_1600.jpg"),o>=1600&&(bg_1920.src=n+a+"_1920.jpg"),o>=1920&&(bg_full.src=n+a+"_full.jpg")}function fadeIn(){window.onload=function(){document.getElementById("body").style.opacity=1}}function sendEmail(e){if(""==form.email.value||""==form.message.value)return!1;var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(personalizeThankYouMessage(),hideContactForm())},t.open("POST",e,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded");var n="name="+form.name.value+"&email="+form.email.value+"&message="+form.message.value;t.send(n)}function hideContactForm(){form.style.opacity=0,setTimeout(function(){form.style.visibility="hidden",form.message.style.height="0",form.style.height="0",document.getElementById("thanks").style.display="block"},1e3)}function personalizeThankYouMessage(){var e=form.name.value;firstName=getFirstName(e),""!==firstName&&(document.getElementById("thanks").innerHTML="Thanks "+firstName+"! Your message has been sent.")}function getFirstName(e){return/^[A-Za-z\s]+$/.test(e)?e.split(" ")[0]:""}function title(e){var t=document.getElementById("title");switch(e){case titleFunc.HIDE:t.classList.remove("show");break;case titleFunc.SHOW:t.classList.remove("hide")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function menuClose(){menu(menuFunc.CLOSE)}function menuOpen(){menu(menuFunc.OPEN)}function menu(e){var t=document.getElementById("header");switch(e){case menuFunc.NORM:t.classList.remove("barMenu");break;case menuFunc.BAR:t.classList.add("barMenu");break;case menuFunc.OPEN:document.getElementById("html").classList.add("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuOpen),document.getElementById("hamburger").addEventListener("mouseup",menuClose),t.classList.add("openMenu");break;case menuFunc.CLOSE:document.getElementById("html").classList.remove("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuClose),document.getElementById("hamburger").addEventListener("mouseup",menuOpen),t.classList.remove("openMenu")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function checkScroll(e){document.getElementById("title").getBoundingClientRect().top<e?(title(titleFunc.HIDE),menu(menuFunc.BAR)):hasClass(document.getElementById("header"),"openMenu")||(title(titleFunc.SHOW),menu(menuFunc.NORM))}function setLinks(){var e=document.getElementById("top-bar-name");addSmoothScrolling(e);for(var t=document.getElementById("menu-top-nav").children,n=0;n<t.length;n++){var a=t[n].firstElementChild;addSmoothScrolling(a)}}function addSmoothScrolling(e){e.onclick=function(){var e=document.getElementById(this.href.split("#")[1]);return menuClose(),e.scrollIntoView({block:"start",behavior:"smooth"}),!1}}function getBgUrl(e){var t="";return t=e.currentStyle?e.currentStyle.backgroundImage:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,"").backgroundImage:e.style.backgroundImage,t.replace(/url\(['"]?(.*?)['"]?\)/i,"$1")}function preloadImages(e){var t=getBgUrl(e),n=t.split("/img/"),a=n[0]+"/img/",o=n[1].split("_")[0];bg_540=new Image,bg_720=new Image,bg_1080=new Image,bg_1440=new Image,bg_1600=new Image,bg_1920=new Image,bg_full=new Image;var m=window.screen.width;bg_540.src=a+o+"_540.jpg",m>=540&&(bg_720.src=a+o+"_720.jpg"),m>=720&&(bg_1080.src=a+o+"_1080.jpg"),m>=1080&&(bg_1440.src=a+o+"_1440.jpg"),m>=1440&&(bg_1600.src=a+o+"_1600.jpg"),m>=1600&&(bg_1920.src=a+o+"_1920.jpg"),m>=1920&&(bg_full.src=a+o+"_full.jpg")}function fadeInTop(){var e=document.getElementById("top");null!==e&&(window.onload=function(){document.getElementById("body").style.opacity=1,preloadImages(e)})}function sendEmail(e){if(""==form.email.value||""==form.message.value)return!1;var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(personalizeThankYouMessage(),hideContactForm())},t.open("POST",e,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded");var n="name="+form.name.value+"&email="+form.email.value+"&message="+form.message.value;t.send(n)}function hideContactForm(){form.style.opacity=0,setTimeout(function(){form.style.visibility="hidden",form.message.style.height="0",form.style.height="0",document.getElementById("thanks").style.display="block"},1e3)}function personalizeThankYouMessage(){var e=form.name.value;firstName=getFirstName(e),""!==firstName&&(document.getElementById("thanks").innerHTML="Thanks "+firstName+"! Your message has been sent.")}function getFirstName(e){return/^[A-Za-z\s]+$/.test(e)?e.split(" ")[0]:""}function title(e){var t=document.getElementById("title");switch(e){case titleFunc.HIDE:t.classList.remove("show");break;case titleFunc.SHOW:t.classList.remove("hide")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function menuClose(){menu(menuFunc.CLOSE)}function menuOpen(){menu(menuFunc.OPEN)}function menu(e){var t=document.getElementById("header");switch(e){case menuFunc.NORM:t.classList.remove("barMenu");break;case menuFunc.BAR:t.classList.add("barMenu");break;case menuFunc.OPEN:document.getElementById("html").classList.add("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuOpen),document.getElementById("hamburger").addEventListener("mouseup",menuClose),t.classList.add("openMenu");break;case menuFunc.CLOSE:document.getElementById("html").classList.remove("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuClose),document.getElementById("hamburger").addEventListener("mouseup",menuOpen),t.classList.remove("openMenu")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function checkScroll(e){document.getElementById("title").getBoundingClientRect().top<e?(title(titleFunc.HIDE),menu(menuFunc.BAR)):hasClass(document.getElementById("header"),"openMenu")||(title(titleFunc.SHOW),menu(menuFunc.NORM))}function setLinks(){var e=document.getElementById("top-bar-name");addSmoothScrolling(e);for(var t=document.getElementById("menu-top-nav").children,n=0;n<t.length;n++){var a=t[n].firstElementChild;addSmoothScrolling(a)}}function addSmoothScrolling(e){e.onclick=function(){var e=document.getElementById(this.href.split("#")[1]);return menuClose(),e.scrollIntoView({block:"start",behavior:"smooth"}),!1}}function getBgUrl(e){var t="";return t=e.currentStyle?e.currentStyle.backgroundImage:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,"").backgroundImage:e.style.backgroundImage,t.replace(/url\(['"]?(.*?)['"]?\)/i,"$1")}function preloadImages(e){var t=getBgUrl(e),n=t.split("/img/"),a=n[0]+"/img/",o=n[1].split("_")[0];bg_540=new Image,bg_720=new Image,bg_1080=new Image,bg_1440=new Image,bg_1600=new Image,bg_1920=new Image,bg_full=new Image;var m=window.screen.width;bg_540.src=a+o+"_540.jpg",m>=540&&(bg_720.src=a+o+"_720.jpg"),m>=720&&(bg_1080.src=a+o+"_1080.jpg"),m>=1080&&(bg_1440.src=a+o+"_1440.jpg"),m>=1440&&(bg_1600.src=a+o+"_1600.jpg"),m>=1600&&(bg_1920.src=a+o+"_1920.jpg"),m>=1920&&(bg_full.src=a+o+"_full.jpg")}function fadeInTop(){var e=document.getElementById("top");null!==e&&(document.ready=function(){document.getElementById("main").style.opacity=1,document.getElementById("header").style.opacity=1,preloadImages(e)})}function sendEmail(e){if(""==form.email.value||""==form.message.value)return!1;var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(personalizeThankYouMessage(),hideContactForm())},t.open("POST",e,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded");var n="name="+form.name.value+"&email="+form.email.value+"&message="+form.message.value;t.send(n)}function hideContactForm(){form.style.opacity=0,setTimeout(function(){form.style.visibility="hidden",form.message.style.height="0",form.style.height="0",document.getElementById("thanks").style.display="block"},1e3)}function personalizeThankYouMessage(){var e=form.name.value;firstName=getFirstName(e),""!==firstName&&(document.getElementById("thanks").innerHTML="Thanks "+firstName+"! Your message has been sent.")}function getFirstName(e){return/^[A-Za-z\s]+$/.test(e)?e.split(" ")[0]:""}function title(e){var t=document.getElementById("title");switch(e){case titleFunc.HIDE:t.classList.remove("show");break;case titleFunc.SHOW:t.classList.remove("hide")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function menuClose(){menu(menuFunc.CLOSE)}function menuOpen(){menu(menuFunc.OPEN)}function menu(e){var t=document.getElementById("header");switch(e){case menuFunc.NORM:t.classList.remove("barMenu");break;case menuFunc.BAR:t.classList.add("barMenu");break;case menuFunc.OPEN:document.getElementById("html").classList.add("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuOpen),document.getElementById("hamburger").addEventListener("mouseup",menuClose),t.classList.add("openMenu");break;case menuFunc.CLOSE:document.getElementById("html").classList.remove("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuClose),document.getElementById("hamburger").addEventListener("mouseup",menuOpen),t.classList.remove("openMenu")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function checkScroll(e){document.getElementById("title").getBoundingClientRect().top<e?(title(titleFunc.HIDE),menu(menuFunc.BAR)):hasClass(document.getElementById("header"),"openMenu")||(title(titleFunc.SHOW),menu(menuFunc.NORM))}function setLinks(){var e=document.getElementById("top-bar-name");addSmoothScrolling(e);for(var t=document.getElementById("menu-top-nav").children,n=0;n<t.length;n++){var a=t[n].firstElementChild;addSmoothScrolling(a)}}function addSmoothScrolling(e){e.onclick=function(){var e=document.getElementById(this.href.split("#")[1]);return menuClose(),e.scrollIntoView({block:"start",behavior:"smooth"}),!1}}function getBgUrl(e){var t="";return t=e.currentStyle?e.currentStyle.backgroundImage:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,"").backgroundImage:e.style.backgroundImage,t.replace(/url\(['"]?(.*?)['"]?\)/i,"$1")}function preloadImages(e){var t=getBgUrl(e),n=t.split("/img/"),a=n[0]+"/img/",o=n[1].split("_")[0];bg_540=new Image,bg_720=new Image,bg_1080=new Image,bg_1440=new Image,bg_1600=new Image,bg_1920=new Image,bg_full=new Image;var m=window.screen.width;bg_540.src=a+o+"_540.jpg",m>=540&&(bg_720.src=a+o+"_720.jpg"),m>=720&&(bg_1080.src=a+o+"_1080.jpg"),m>=1080&&(bg_1440.src=a+o+"_1440.jpg"),m>=1440&&(bg_1600.src=a+o+"_1600.jpg"),m>=1600&&(bg_1920.src=a+o+"_1920.jpg"),m>=1920&&(bg_full.src=a+o+"_full.jpg")}function fadeInTop(){var e=document.getElementById("top");null!==e&&(window.onload=function(){document.getElementById("main").style.opacity=1,document.getElementById("header").style.opacity=1,preloadImages(e)})}function sendEmail(e){if(""==form.email.value||""==form.message.value)return!1;var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(personalizeThankYouMessage(),hideContactForm())},t.open("POST",e,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded");var n="name="+form.name.value+"&email="+form.email.value+"&message="+form.message.value;t.send(n)}function hideContactForm(){form.style.opacity=0,setTimeout(function(){form.style.visibility="hidden",form.message.style.height="0",form.style.height="0",document.getElementById("thanks").style.display="block"},1e3)}function personalizeThankYouMessage(){var e=form.name.value;firstName=getFirstName(e),""!==firstName&&(document.getElementById("thanks").innerHTML="Thanks "+firstName+"! Your message has been sent.")}function getFirstName(e){return/^[A-Za-z\s]+$/.test(e)?e.split(" ")[0]:""}function title(e){var t=document.getElementById("title");switch(e){case titleFunc.HIDE:t.classList.remove("show");break;case titleFunc.SHOW:t.classList.remove("hide")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function menuClose(){menu(menuFunc.CLOSE)}function menuOpen(){menu(menuFunc.OPEN)}function menu(e){var t=document.getElementById("header");switch(e){case menuFunc.NORM:t.classList.remove("barMenu");break;case menuFunc.BAR:t.classList.add("barMenu");break;case menuFunc.OPEN:document.getElementById("html").classList.add("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuOpen),document.getElementById("hamburger").addEventListener("mouseup",menuClose),t.classList.add("openMenu");break;case menuFunc.CLOSE:document.getElementById("html").classList.remove("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuClose),document.getElementById("hamburger").addEventListener("mouseup",menuOpen),t.classList.remove("openMenu")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function checkScroll(e){document.getElementById("title").getBoundingClientRect().top<e?(title(titleFunc.HIDE),menu(menuFunc.BAR)):hasClass(document.getElementById("header"),"openMenu")||(title(titleFunc.SHOW),menu(menuFunc.NORM))}function setLinks(){var e=document.getElementById("top-bar-name");addSmoothScrolling(e);for(var t=document.getElementById("menu-top-nav").children,n=0;n<t.length;n++){var a=t[n].firstElementChild;addSmoothScrolling(a)}}function addSmoothScrolling(e){e.onclick=function(){var e=document.getElementById(this.href.split("#")[1]);return menuClose(),e.scrollIntoView({block:"start",behavior:"smooth"}),!1}}function getBgUrl(e){var t="";return t=e.currentStyle?e.currentStyle.backgroundImage:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,"").backgroundImage:e.style.backgroundImage,t.replace(/url\(['"]?(.*?)['"]?\)/i,"$1")}function preloadImages(e){var t=getBgUrl(e),n=t.split("/img/"),a=n[0]+"/img/",o=n[1].split("_")[0];bg_540=new Image,bg_720=new Image,bg_1080=new Image,bg_1440=new Image,bg_1600=new Image,bg_1920=new Image,bg_full=new Image;var m=window.screen.width;bg_540.src=a+o+"_540.jpg",m>=540&&(bg_720.src=a+o+"_720.jpg"),m>=720&&(bg_1080.src=a+o+"_1080.jpg"),m>=1080&&(bg_1440.src=a+o+"_1440.jpg"),m>=1440&&(bg_1600.src=a+o+"_1600.jpg"),m>=1600&&(bg_1920.src=a+o+"_1920.jpg"),m>=1920&&(bg_full.src=a+o+"_full.jpg")}function fadeInTop(){var e=document.getElementById("top");null!==e&&(window.onload=function(){document.getElementById("main").style.opacity=1,document.getElementById("header").style.opacity=1,preloadImages(e)})}function sendEmail(e){if(""==form.email.value||""==form.message.value)return!1;var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(personalizeThankYouMessage(),hideContactForm())},t.open("POST",e,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded");var n="name="+form.name.value+"&email="+form.email.value+"&message="+form.message.value;t.send(n)}function hideContactForm(){form.style.opacity=0,setTimeout(function(){form.style.visibility="hidden",form.message.style.height="0",form.style.height="0",document.getElementById("thanks").style.display="block"},1e3)}function personalizeThankYouMessage(){var e=form.name.value;firstName=getFirstName(e),""!==firstName&&(document.getElementById("thanks").innerHTML="Thanks "+firstName+"! Your message has been sent.")}function getFirstName(e){return/^[A-Za-z\s]+$/.test(e)?e.split(" ")[0]:""}function title(e){var t=document.getElementById("title");switch(e){case titleFunc.HIDE:t.classList.remove("show");break;case titleFunc.SHOW:t.classList.remove("hide")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function menuClose(){menu(menuFunc.CLOSE)}function menuOpen(){menu(menuFunc.OPEN)}function menu(e){var t=document.getElementById("header");switch(e){case menuFunc.NORM:t.classList.remove("barMenu");break;case menuFunc.BAR:t.classList.add("barMenu");break;case menuFunc.OPEN:document.getElementById("html").classList.add("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuOpen),document.getElementById("hamburger").addEventListener("mouseup",menuClose),t.classList.add("openMenu");break;case menuFunc.CLOSE:document.getElementById("html").classList.remove("freezeY"),document.getElementById("hamburger").removeEventListener("mouseup",menuClose),document.getElementById("hamburger").addEventListener("mouseup",menuOpen),t.classList.remove("openMenu")}}function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function checkScroll(e){document.getElementById("title").getBoundingClientRect().top<e?(title(titleFunc.HIDE),menu(menuFunc.BAR)):hasClass(document.getElementById("header"),"openMenu")||(title(titleFunc.SHOW),menu(menuFunc.NORM))}function setLinks(){var e=document.getElementById("top-bar-name");addSmoothScrolling(e);for(var t=document.getElementById("menu-top-nav").children,n=0;n<t.length;n++){var a=t[n].firstElementChild;addSmoothScrolling(a)}}function addSmoothScrolling(e){e.onclick=function(){var e=document.getElementById(this.href.split("#")[1]);return menuClose(),e.scrollIntoView({block:"start",behavior:"smooth"}),!1}}function getBgUrl(e){var t="";return t=e.currentStyle?e.currentStyle.backgroundImage:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,"").backgroundImage:e.style.backgroundImage,t.replace(/url\(['"]?(.*?)['"]?\)/i,"$1")}function preloadImages(e){var t=getBgUrl(e),n=t.split("/img/"),a=n[0]+"/img/",o=n[1].split("_")[0];bg_540=new Image,bg_720=new Image,bg_1080=new Image,bg_1440=new Image,bg_1600=new Image,bg_1920=new Image,bg_full=new Image;var m=window.screen.width;bg_540.src=a+o+"_540.jpg",m>=540&&(bg_720.src=a+o+"_720.jpg"),m>=720&&(bg_1080.src=a+o+"_1080.jpg"),m>=1080&&(bg_1440.src=a+o+"_1440.jpg"),m>=1440&&(bg_1600.src=a+o+"_1600.jpg"),m>=1600&&(bg_1920.src=a+o+"_1920.jpg"),m>=1920&&(bg_full.src=a+o+"_full.jpg")}function fadeInTop(){var e=document.getElementById("top");null!==e&&(window.onload=function(){document.getElementById("main").style.opacity=1,document.getElementById("header").style.opacity=1,preloadImages(e)})}var form=document.forms.contact,solidBarY=112,menuFunc={NORM:0,BAR:1,OPEN:2,CLOSE:3},titleFunc={HIDE:0,SHOW:1};"/"==location.pathname&&(window.onscroll=function(){checkScroll(solidBarY)}),function(){fadeIn(),menuClose(),setLinks(),preloadImages()}();var form=document.forms.contact,solidBarY=112,menuFunc={NORM:0,BAR:1,OPEN:2,CLOSE:3},titleFunc={HIDE:0,SHOW:1};"/"==location.pathname&&(window.onscroll=function(){checkScroll(solidBarY)}),function(){fadeInTop(),menuClose(),setLinks()}();var form=document.forms.contact,solidBarY=112,menuFunc={NORM:0,BAR:1,OPEN:2,CLOSE:3},titleFunc={HIDE:0,SHOW:1};"/"==location.pathname&&(window.onscroll=function(){checkScroll(solidBarY)}),function(){fadeInTop(),menuClose(),setLinks()}();var form=document.forms.contact,solidBarY=112,menuFunc={NORM:0,BAR:1,OPEN:2,CLOSE:3},titleFunc={HIDE:0,SHOW:1};"/"==location.pathname&&(window.onscroll=function(){checkScroll(solidBarY)}),function(){fadeInTop(),menuClose(),setLinks()}();var form=document.forms.contact,solidBarY=112,menuFunc={NORM:0,BAR:1,OPEN:2,CLOSE:3},titleFunc={HIDE:0,SHOW:1};"/"==location.pathname&&(window.onscroll=function(){checkScroll(solidBarY)}),function(){fadeInTop(),menuClose(),setLinks()}();var form=document.forms.contact,solidBarY=112,menuFunc={NORM:0,BAR:1,OPEN:2,CLOSE:3},titleFunc={HIDE:0,SHOW:1};"/"==location.pathname&&(window.onscroll=function(){checkScroll(solidBarY)}),function(){fadeInTop(),menuClose(),setLinks()}();