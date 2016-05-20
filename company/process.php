<?php
if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {$name = 'No name entered';}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
} else {$email = 'No email entered';}
if ((isset($_POST['message'])) && (strlen(trim($_POST['message'])) > 0)) {
	$message = stripslashes(strip_tags($_POST['message']));
} else {$message = 'No phone entered';}
ob_start();
?>
<html>
<head>
<style type="text/css">
</style>
</head>
<body>
<table style="font-family:'Courier New', Courier, monospace; font-size:16px" width="800" border="1" cellspacing="2" cellpadding="2">
  <tr bgcolor="#eeffee" width="100">
    <td>Name</td>
    <td><?=$name;?></td>
  </tr>
  <tr bgcolor="#eeeeff" width="100">
    <td>Email</td>
    <td><?=$email;?></td>
  </tr>
  <tr bgcolor="#eeffee" width="100">
    <td>Message</td>
    <td><?=$message;?></td>
  </tr>
</table>
</body>
</html>
<?
$body = ob_get_contents();

$to = $email;
$email = $email;
$fromaddress = "you@example.com";
$fromname = "Online Contact";

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = $email;
$mail->FromName = "Contact Form Filled";
$mail->AddAddress("hopewellnigeria@yahoo.com","Name 1"); // Put your email

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Hopewell Form:  Contact form submitted";
$mail->Body     =  $body;
$mail->AltBody  =  "This is the text-only body";

if(!$mail->Send()) {
	$recipient = 'hopewellnigeria@yahoo.com';
	$subject = 'Contact form failed';
	$content = $body;	
  mail($recipient, $subject, $content, "From: $email \r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}
?>
