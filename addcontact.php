<?php
header('Access-Control-Allow-Origin: *');
include("connectioncontact.php");

$fullname= $_POST["fullname"];
$email= $_POST["email"];
$phonenumber= $_POST["phonenumber"];
$messages= $_POST["messages"];

$query = $mysqli->prepare("INSERT INTO `contact-me`(fullname,email,phonenumber,messages) VALUE (?,?,?,?)");
$query->bind_param("ssss", $fullname, $email,$phonenumber,$messages);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
?>