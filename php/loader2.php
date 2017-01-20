<?php
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

$competition= mysqli_real_escape_string($conn, $_POST["competition"]);

$sql="SELECT * FROM `desc` WHERE event='$competition'";
$result=$conn->query($sql);
$response["products"] = array();
while ($row = mysqli_fetch_array($result)) {
 $product = array();
 $product["title"] = $row["title"];
 $product["desc"] = $row["desc"];
 array_push($response["products"], $product);
  }
echo json_encode($response["products"]);
?>
