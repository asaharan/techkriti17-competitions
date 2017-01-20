<?php
session_start();
$flag=0;
 if (empty($_POST["old_pass"])) {
    $response="Old Password is required";
    $flag = 1;
  } 
 if (empty($_POST["new_pass"])&&($flag==0)) {
    $response= "New Password is required";
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
$old_pass = mysqli_real_escape_string($conn, $_POST["old_pass"]);
$old_pass=md5($old_pass);
$new_pass = mysqli_real_escape_string($conn, $_POST["new_pass"]);
$new_pass=md5($new_pass);
$sql="SELECT * FROM `users17` WHERE  confirm_token='$access' AND password='$old_pass'";
     $result=$conn->query($sql);
if (mysqli_num_rows($result) == 0)
{
$response='Enter correct old password';
}


else
{
     $sql="UPDATE `users17` SET password = '$new_pass' WHERE  confirm_token='$access'";

     $result=$conn->query($sql);
$response='true';
}

$conn->close();
}
echo(json_encode($response));
?>


