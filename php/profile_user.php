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

$response["products"] = array();
while ($row = mysqli_fetch_array($result)) {
 $product = array();
 $id = $row["id"];

$product['techid']=(string)$id;
 $product['name'] = $row["name"];
$product['email']=$row["email"];
$product['phone']=$row["phone"];
$product['college']=$row["college"];
 array_push($response["products"], $product);
  }










 echo json_encode($response['products']);



	}

else
{

$response='false';
 echo json_encode($response);
}







?>

