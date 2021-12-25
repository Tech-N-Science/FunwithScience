<?php
use PHPMailer\PHPMailer\PHPMailer;
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

if($con){
    // echo "connection successfull";
}else{
    echo "no connection";
}

$postdata = file_get_contents("php://input");
if(isset($postdata)&&!empty($postdata)){
    $request = json_decode($postdata);


$subscriber_name = $request->name;
$subscriber_email = $request->email;
$subscriber_message = $request->message;
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";
$mail=new PHPMailer();
}
$mail->isSMTP();
$mail->Host="smtp.gmail.com";
$mail->SMTPAuth=true;
$mail->Username="youremail@gmail.com";
$mail->Password="yourpassword";
$mail->Port=465;
$mail->SMTPSecure="ssl";
$mail->isHTML(true);
$mail->setFrom($subscriber_email,$subscriber_name);
$mail->addAddress("youremail@gmail.com");
$mail->Subject=("$subscriber_email");
$mail->Body=$subscriber_message;
if($mail->send())
{
    echo "1";
}
else{
    echo "0";
}
?>
