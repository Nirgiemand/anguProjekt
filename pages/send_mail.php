<?php
$webmaster_email = "henri.tamvere@khk.ee";
 /*
This bit sets the URLs of the supporting pages.
If you change the names of any of the pages, you will need to change the values here.
*/
$feedback_page = "feedback.htm";
$thankyou_page = "thank_you.htm";
 /*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$name = $_REQUEST['name'] ;
$msg = 
"Name: " . $name . "\r\n" .  
"Email: " . $email . "\r\n" . 
"Comments: " . $message ;
 /*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}
 // If the user tries to access this script directly, redirect them to the feedback form,
if (!isset($_REQUEST['email_address'])) {
header( "Location: $feedback_page" );
}
 // If we passed all previous tests, send the email then redirect to the thank you page.
else {
 	mail( "$webmaster_email", "Message from AngularJS page", $msg );
 	header( "Location: $thankyou_page" );
}
?> 