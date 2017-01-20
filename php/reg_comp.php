<?php
session_start();
// define variables and set to empty values

$flag =0;
  if (empty($_POST["members"])) {
    $response="Name is required";
    $flag = 1;
  } 
  if (empty($_POST["team"])&&($flag==0)) {
    $response= "Team Name is required";
    $flag = 1;
  } 
if (empty($_POST["competition"])&&($flag==0)) {
    $response= "Competition is required";
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



$members= mysqli_real_escape_string($conn, $_POST["members"]);
$team = mysqli_real_escape_string($conn, $_POST["team"]);
$competitions  = mysqli_real_escape_string($conn, $_POST["competition"]);
$myArray = explode(',', $members);
$newarray=array_unique($myArray);

$t=0;
for($k=0;$k<sizeof($myArray);$k=$k+1)
{
$techy=$myArray[$k];
$sql="SELECT * FROM `users17` WHERE id='$techy'";
     $result=$conn->query($sql);
if (mysqli_num_rows($result) == 0)

{
$t=1;
break;

}
}

if(sizeof($myArray)!=sizeof($newarray))
{
$response="Type different tech ids";
}
elseif($t==1)
{
$response="Type correct tech ids";
}








else
{$id=0;
     $sql = "INSERT INTO `groups_17` (id, members, team, competition)
	     VALUES (NULL, '$members', '$team', '$competitions')";
     $result=$conn->query($sql);
$sql="SELECT * FROM `groups_17` WHERE members='$members' AND team='$team' AND competition='$competitions'";
     $result=$conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
 $id = $row["id"];
  }



for($i=0;$i<sizeof($myArray);$i=$i+1)
{
  $sql = "INSERT INTO group_info (id, group_id, tech_ids)
	     VALUES (NULL, '$id', '$myArray[$i]')";
     $result=$conn->query($sql);
}
    $response="true";
	












      }
 



$conn->close();}
 echo json_encode($response);

?>

