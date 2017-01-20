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

$sql="SELECT * FROM `group_info` WHERE tech_ids='$id'";
$result=$conn->query($sql);
$response["products"] = array();
while ($row = mysqli_fetch_array($result)) {
 $group_id = $row["group_id"];

$sql="SELECT * FROM `groups_17` WHERE id=$group_id";
$result1=$conn->query($sql);

while ($row1 = mysqli_fetch_array($result1)) {
 $product = array();

 $product["competition"] = $row1["competition"];
 $product["members"] = $row1["members"];
$members=$product["members"];
$myArray = explode(',', $members);

$final_name="";
$t=0;
for($k=0;$k<sizeof($myArray);$k=$k+1)
{

$mem_id=$myArray[$k];
$mem_id=(int)$mem_id;


$sql="SELECT * FROM `users17` WHERE id=$mem_id";
$result3=$conn->query($sql);


while ($row3 = mysqli_fetch_array($result3)) {

$mem_name=$row3['name'];

}




if($k==0)
{
$final_name=$mem_name;
}
else
{
$final_name=$final_name.",".$mem_name;
}

}
 $product["names"] = $final_name;




 array_push($response["products"], $product);
  }



  }













	}

else
{

$response='false';
}



 echo json_encode($response['products']);



?>

