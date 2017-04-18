<?php
  $name = $email = $message = "";
  if($_SERVER["REQUEST_METHOD"] == "POST"){
  	$name = validate($_POST["name"]);
  	$email = validate($_POST["email"]);
  	$message = validate($_POST["message"]);
  	mail("connor.bcw@gmail.com", "New Message from " . $name . " at " . $email, $message);
  }
  function validate($data){
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	return $data;
  }
?>
