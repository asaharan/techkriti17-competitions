<?php
session_start();
 if (empty($_POST["pass"])) {
    $response="Password is required";
    $flag = 1;
  } 
if($flag!=1)
{
$servername = "localhost";
$username = "root";
$password = "sAhArAnTech1Kriti16";

$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "USE events";
if ($conn->query($sql) === TRUE) {
    //echo ("Database selected successfully");
} else {
   // echo ("Error selecting database: " );
}


$access= $_SESSION["token"];
$pass = mysqli_real_escape_string($conn, $_POST["pass"]);


$pass=md5($pass);



     $sql="UPDATE `users17` SET password = '$pass' WHERE  confirm_token='$access'";

     $result=$conn->query($sql);

$response='true';
$conn->close();
}
echo(json_encode($response));
?>


