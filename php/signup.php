<?php
session_start(); 
// define variables and set to empty values
header('Access-Control-Allow-Origin: *');  
$flag =0;
  if (empty($_POST["name"])) {
    $response="Name is required";
    $flag = 1;
  } 
  if (empty($_POST["username"])&&($flag==0)) {
    $response= "Username is required";
    $flag = 1;
  } 
if (empty($_POST["pass"])&&($flag==0)) {
    $response= "Password is required";
    $flag = 1;
  } 
  if (empty($_POST["facebook"])&&($flag==0)) {
    $response= "Facebook url is required";
    $flag = 1;
  } 
  if (empty($_POST["phone"])&&($flag==0)) {
    $response= "Phone No. is required";
    $flag = 1;
  } 
  if (empty($_POST["email"])&&($flag==0)) {
    $response= "Emaill is required";
    $flag = 1;
  } 
    if (empty($_POST["college"])&&($flag==0)) {
    $response= "College is required";
    $flag = 1;
  } 
     if (empty($_POST["gender"])&&($flag==0)) {
    $response= "Gender is required";
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

$name = $_POST["name"];

$username= mysqli_real_escape_string($conn, $_POST["username"]);
$email = mysqli_real_escape_string($conn, $_POST["email"]);
$gender  = mysqli_real_escape_string($conn, $_POST["gender"]);
$phone  = mysqli_real_escape_string($conn, $_POST["phone"]);
$pass  = mysqli_real_escape_string($conn, $_POST["pass"]);
$pass=md5($pass);
$college  = mysqli_real_escape_string($conn, $_POST["college"]);
 $fb  = mysqli_real_escape_string($conn, $_POST["facebook"]);
$sql="SELECT * FROM `users17` WHERE  username='$username'";
$result=$conn->query($sql);
$sql="SELECT * FROM `users17` WHERE  email='$email'";
$result1=$conn->query($sql);
$fbUrlCheck = '/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/';
	$secondCheck = '/home((\/)?\.[a-zA-Z0-9])?/';
	
	
	

$token = bin2hex(openssl_random_pseudo_bytes(16));
if (mysqli_num_rows($result) > 0)
{
$response="Username already registered";
}
elseif (mysqli_num_rows($result1) > 0)
{
$response="Email already registered";
}
elseif(!filter_var($email, FILTER_VALIDATE_EMAIL))
{$response="Invalid Email";}
/*elseif(!preg_match("/^[789][0-9]{9}$/", $phone))
{$response="Invalid Phone";}*/

/*elseif(!(preg_match($fbUrlCheck, $fb) == 1 && preg_match($secondCheck, $fb) == 0))
{
$response="Invalid Facebook url";
}*/











else
{
     $sql = "INSERT INTO users17 (id, name, username, college,phone, email,gender,facebook,password,confirm_token)
	     VALUES (NULL, '$name', '$username', '$college','$phone', '$email','$gender','$fb','$pass','$token')";
     $result=$conn->query($sql);
    $response="true";
$sql="SELECT * FROM `users17` WHERE  username='$username'";
     $result=$conn->query($sql);

while ($row = mysqli_fetch_array($result)) {
$tech_id=$row['id'];

}


	$GLOBALS['subject']="Techkriti,IIT Kanpur";

		$GLOBALS['body']="
Welcome ".$name."<br>
Greetings from Techkriti, IIT Kanpur.<br>
Your Username is : ".$username."<br>
Your Tech Id is : ".$tech_id."<br>
Please keep a note of your Tech Id for future references.<br>
Click the link below to verify your email.<br>
https://2017.techkriti.org/event_in/confirm.php?access_token=".$token."<br>
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
 



$conn->close();}
 echo json_encode($response);

?>

