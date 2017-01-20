<?php
header('Access-Control-Allow-Origin: *');  
$flag =0;
  if (empty($_POST["username"])) {
    $response="Name is required";
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


mysqli_set_charset($conn, 'utf8');
$username= mysqli_real_escape_string($conn, $_POST["username"]);

$sql="SELECT * FROM `users17` WHERE  username='$username'";
$result=$conn->query($sql);

if (mysqli_num_rows($result) > 0)
{
$response="Username already registered";
}














else
{
    
    $response="Username Available";
      }
 



$conn->close();}

 echo json_encode($response);

?>

