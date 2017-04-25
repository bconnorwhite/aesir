var form = document.forms['contact'];

/* sendEmail(url)
 * Input: URL of mail.php
 * Result: -Sends POST request containing parameters for name, email, and message
           -Hides contact form
           -Sets inner HTML of #thanks to a custom thank you message, using sender's first name, if available
 * Return: n/a
 */
function sendEmail(url){
  if(form["email"].value == "" || form["message"].value == ""){
    return false;
  } else {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//On return from mail.php
      if(this.readyState == 4 && this.status == 200){
        personalizeThankYouMessage();
        hideContactForm();
      }
    };
    xhttp.open("POST", url, true);//POST to mail.php (url)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var params = "name=" + form["name"].value + "&email=" + form["email"].value + "&message=" + form["message"].value;
    xhttp.send(params);
  }
}

/* hideContactForm()
 * Input: n/a
 * Result: hides #contact-form
 * Return: n/a
 */
function hideContactForm(){
  form.style.opacity = 0;//Set opacity to 0. Tranisiton will take 1s to complete
  setTimeout(function(){//After transition is complete, get rid of form entirely
    form.style.visibility = "hidden";
    form["message"].style.height = "0";
    form.style.height = "0";
    document.getElementById('thanks').style.display = "block";//Show thank you message
  }, 1000);
}

/* personalizeThankYouMessage()
 * Input: n/a
 * Result: if getFirstName returns a name, changes #thanks to include sender's first name.
 * Return: n/a
 */
function personalizeThankYouMessage(){
  var name = form["name"].value;
  firstName = getFirstName(name);
  if(firstName !== ""){//Add space before name, if not blank
    document.getElementById('thanks').innerHTML = "Thanks " + firstName + "! Your message has been sent.";
  }
}

/* getFirstName(name)
 * Input: string name
 * Return: -if name contains letters and white space only, returns first word
           -else returns blank string
 */
function getFirstName(name){
  if(/^[A-Za-z\s]+$/.test(name)){//If name contains only letters and white space
    return name.split(" ")[0];//Set name to first word
  }
  return "";
}
