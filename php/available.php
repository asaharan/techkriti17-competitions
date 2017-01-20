<?php
header('Access-Control-Allow-Origin: *');  
$flag =0;
  


  

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
$id= mysqli_real_escape_string($conn, $_POST["id"]);

$sql="SELECT * FROM `users17` WHERE  id='$id'";
$result=$conn->query($sql);

if (mysqli_num_rows($result) > 0)
{
while ($row = mysqli_fetch_array($result)) {
$response=$row['name'];
}
}














else
{
    
    $response="No such person";
      }
 



$conn->close();

 echo json_encode($response);

?>

