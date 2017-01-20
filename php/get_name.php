<?php
session_start();
ini_set('display_errors', 1); 
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *'); 

if (isset($_SESSION['token'])) {

$token=$_SESSION['token'];
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

} else {


}
$sql="SELECT * FROM `users17` WHERE confirm_token='$token'";
     $result=$conn->query($sql);
if (mysqli_num_rows($result) >0)
{

while ($row = mysqli_fetch_array($result)) {

$response=$row['name'];
}

}
else
{$response='false1';
session_unset(); 

// destroy the session 
session_destroy(); }

$conn->close();

	}
else
{
$response='false';
}
 echo json_encode($response);



?>


