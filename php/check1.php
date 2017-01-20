<?php
session_start();
header('Access-Control-Allow-Origin: *'); 

if (isset($_SESSION['token'])) {
$response='true';

$response=$_SESSION['id'];
 echo json_encode($response);
	}
else
{
$response='false';
 echo json_encode(false);
}




?>


