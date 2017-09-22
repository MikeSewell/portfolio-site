<?php

// define variables and set to empty values
$name_error = $email_error = "";
$name = $email = $message = $subject = $success = "";

//form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $name_error = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $name_error = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["email"])) {
    $email_error = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = "Invalid email format";
    }
  }

  if (empty($_POST["subject"])) {
    $subject = "";
  } else {
    $subject = test_input($_POST["subject"]);
  }
  if (empty($_POST["message"])) {
    $message = "";
  } else {
    $message = test_input($_POST["message"]);
  }

  if ($name_error == '' and $email_error == ''){
      $message_body = '';
      unset($_POST['submit']);
      foreach ($_POST as $key => $value){
          $message_body .=  "$key: $value\n";
      }

      $to = 'mikesewell01@gmail.com';


    // e-mail message
    $real_message = "You have received a message from your website:"
    ."\nContact Name: $name"
    ."\nEmail: $email"
    ."\nSubject: $subject"
    ."\nFrom IP: {$_SERVER['REMOTE_ADDR']}"
    ."\nMessage: $message";

    if (mail($to, $subject, $real_message)){
        $success = "Message sent, thank you for contacting us!";
        $name = $email = $subject = $message = '';
        echo '<script>window.location.href = "http://msewell.com/";</script>';
    }
  }

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
