<?php
session_start();
header('Access-Control-Allow-Origin: *'); 

if (isset($_SESSION['token'])) {
$token=$_SESSION['token'];


$servername = "localhost";
$username = "root";
$password = "sAhArAnTech1Kriti16";
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
mysqli_set_charset($conn, 'utf8');
$sql = "USE events";
if ($conn->query($sql) === TRUE) {
} else {
}


$id=0;
$sql="SELECT * FROM `users17` WHERE confirm_token='$token'";
$result=$conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
 $id = $row["id"];

  }
$sql = "USE zonals17";
if ($conn->query($sql) === TRUE) {
} else {
}


$sql="SELECT * FROM `work_reg` WHERE tech_id='$id'";
$result1=$conn->query($sql);
$response["products"] = array();
while ($row = mysqli_fetch_array($result1)) {
 $product = array();
 $product["workshop"] = $row["workshop"];

 $product["pay"] = $row["pay"];
 $product["centre"] = $row["centre"];

 array_push($response["products"], $product);
  }



  }













	

else
{

$response='false';
}



 echo json_encode($response['products']);



?>

