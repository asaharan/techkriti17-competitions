<?php
// define variables and set to empty values
header('Access-Control-Allow-Origin: *');  
$flag =0;
  if (empty($_POST["email"])) {
    $response="Email is required";
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




$email = mysqli_real_escape_string($conn, $_POST["email"]);

$sql="SELECT * FROM `users17` WHERE  email='$email'";
$result=$conn->query($sql);

if (mysqli_num_rows($result) > 0)
{

while ($row = mysqli_fetch_array($result)) {
 $access = $row["confirm_token"];
 $name = $row["name"];
 $email = $row["email"];
 $username = $row["username"];
 $tech_id = $row["id"];

}
$response="true";

	$GLOBALS['subject']="Techkriti,IIT Kanpur";

		$GLOBALS['body']="
Welcome ".$name."<br>
Greetings from Techkriti, IIT Kanpur.<br>
Your Username is : ".$username."<br>
Your Tech Id is : ".$tech_id."<br>
Please keep a note of your Tech Id for future references.<br>
Click the link below to verify your email.<br>
https://www.techkriti.org/event_in/confirm.php?access_token=".$access."<br>
Only after confirmation you will be able to login.<br>
Visit http://www.techkriti.org/ to explore about competitions, workshops, exhibitions and much more.<br>
To get latest updates follow us on Facebook<br>

Cheers !!!<br>
Team Techkriti'17<br>";



	
	$GLOBALS['header']="MIME-Version: 1.0" . "\r\n";
	$GLOBALS['header'].="Content-type: text/html; charset=utf-8" . "\r\n";
	$GLOBALS['header'].="From:\"Techkriti,IIT Kanpur\" <techkriti@techkriti.org>"."\r\n";
	$GLOBALS['header'].="Reply-To:\"Techkriti,IIT Kanpur\" <techkriti@techkriti.org>"."\r\n";
	$GLOBALS['header'].="Return-Path:\"Techkriti,IIT Kanpur\" <techkriti@techkriti.org>"."\r\n";
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

