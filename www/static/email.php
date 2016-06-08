<?php
	if($_POST){
	    $name = $_POST['form_name'];
	    $email = $_POST['form_email'];
	    $message = $_POST['form_msg'];

		//send email
	    mail("herbtorres960@gmail.com", "A message has been sent from your site!" .$email, $message);
	}
?>