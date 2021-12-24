<?php
require 'connect.php';
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$postdata = file_get_contents("php://input");
if(isset($postdata)&&!empty($postdata)){
    $request = json_decode($postdata);



$subscriber_pass = $request->pass;
$subscriber_email = $request->email;
}
$encry = password_hash($subscriber_pass,PASSWORD_BCRYPT);
$q="update sign_up set pass='$encry' where email='$subscriber_email';";

if ($conn->query($q) === TRUE) {
	echo "1";
 } 
else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
