<?php
/*
Include CORS - how ? Allow Headers! 
*/
header('Access-Control-Allow-Origin: *');
include("connectioncontact.php");

$query = $mysqli->prepare("SELECT messages FROM contact");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
?>