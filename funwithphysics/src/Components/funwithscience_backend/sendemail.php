<?php
require 'connect.php';
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "funwithscience_backend";
$con = mysqli_connect($servername, $username, $password, $dbname);

$postdata = file_get_contents("php://input");
if(isset($postdata)&&!empty($postdata)){
    $request = json_decode($postdata);


$subscriber_name = $request->name;
$subscriber_email = $request->email;
$subscriber_message = $request->message;
}
$sql = "INSERT INTO msg (name,email,message)
    VALUES ('$subscriber_name','$subscriber_email','$subscriber_message');";
if ($conn->query($sql) === TRUE) {
	echo "1";
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
