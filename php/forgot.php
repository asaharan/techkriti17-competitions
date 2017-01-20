<?php
// define variables and set to empty values
header('Access-Control-Allow-Origin: *');  
$flag =0;
  if (empty($_POST["email"])) {
    $response="Name is required";
    $flag = 1;
  } 
  if (empty($_POST["username"])&&($flag==0)) {
    $response= "College city is required";
    $flag = 1;
  } 

  if ($flag!=1){

  

$servername = "localhost";
$username = "root";
$password = "sAhArAnTech1Kriti16";


$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "USE events";
if ($conn->query($sql) === TRUE) {

} else {

}



$username= mysqli_real_escape_string($conn, $_POST["username"]);
$email = mysqli_real_escape_string($conn, $_POST["email"]);

$sql="SELECT * FROM `users17` WHERE  username='$username' AND email='$email'";
$result=$conn->query($sql);

if (mysqli_num_rows($result) > 0)
{

while ($row = mysqli_fetch_array($result)) {
 $access = $row["confirm_token"];
}
$response="true";
$GLOBALS['from']='techkriti'.'<'.'Techkriit,IIT Kanpur'.'>';
	$GLOBALS['subject']="Techkriti,IIT Kanpur";
$from='Techkriti,IIT Kanpur'.'<'.'techkriti.org'.'>';
		$GLOBALS['body']="https://2017.techkriti.org/event_in/recover.php?access_token=".$access;
	
	$GLOBALS['header']="MIME-Version: 1.0" . "\r\n";
	$GLOBALS['header'].="Content-type: text/html; charset=utf-8" . "\r\n";
	$GLOBALS['header'].='From: '.$from."\r\n";
	$GLOBALS['header'].='Reply-To: '.$from."\r\n";
		$GLOBALS['header'].='Return-Path: '.$from."\r\n";
	$GLOBALS['header'].='X-Mailer: PHP/'.phpversion();
	




		mail($email,$GLOBALS['subject'],$GLOBALS['body'],$GLOBALS['header']);

}











else
{
     
    $response="Sorry no such credentials in our record";










      }
 



$conn->close();}
 echo json_encode($response);

?>

