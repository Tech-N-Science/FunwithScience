<?php

require 'connect.php'
header('Access-Control-Allow-Origin: http://localhost:3000'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "funwithscience";

$postdata = file_get_contents("php://input");
if(isset($postdata)&&!empty($postdata)){
    $request = json_decode($postdata);



$subscriber_email = $request->email;
$subscriber_password = $request->password;
$subscriber_fname=$request->username;
}


$sql = "INSERT INTO sign_up (username,email,pass)
VALUES ('$subscriber_fname','$subscriber_email','$subscriber_password')";
if ($conn->query($sql) === TRUE) {

	echo "<script>
    alert('Registered Successfully');
    window.location.href='loginAGA.html';
    </script>";
  
 } 
else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>