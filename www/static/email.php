<?php
	// if($_POST){
	$name = $_POST['name1'];
	$email = $_POST['email1'];
	$message = $_POST['message1'];
	$phone = $_POST['phone1'];
	$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
	
	// After sanitization Validation is performed
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

		$subject = $name;
		// To send HTML mail, the Content-type header must be set.
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From:' . $email. "\r\n"; // Sender's Email
		$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
		$template = '<div style="padding:50px; color:#000; font: 300 18px/24px sans-serif;">Hello ' . $name . ',<br/>'
		. '<br/>Thank you...! For Contacting Us.<br/><br/>'
		. 'Name:' . $name . '<br/>'
		. 'Email:' . $email . '<br/>'
		. 'Contact No:' . $phone . '<br/>'
		. 'Message:' . $message . '<br/><br/>'
		. 'This is a Contact Confirmation mail.'
		. '<br/>'
		. 'We Will contact You as soon as possible .</div>';
		$sendmessage = "<div style=\"background-color:#FFF; color:#000;\">" . $template . "</div>";
		// Message lines should not exceed 70 characters (PHP rule), so wrap it.
		$sendmessage = wordwrap($sendmessage, 70);
		// Send mail by PHP Mail Function.
		mail("herbtorres960@gmail.com", $subject, $sendmessage, $headers);
	}
?>