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
$cat="";
$sql="SELECT * FROM `events` WHERE title='$competition'";
$result=$conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
$cat= $row["subcategory"];
}


$sql="SELECT * FROM `events` WHERE subcategory='$cat'";
$result=$conn->query($sql);
$response["products"] = array();
while ($row = mysqli_fetch_array($result)) {
 $product = array();
 $product["title"] = $row["title"];
if($product["title"]!=$competition)
{
 array_push($response["products"], $product);
}
  }
echo json_encode($response["products"]);
?>
