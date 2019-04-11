<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');
require_once('config.php');

$output =[
    'success' => false
];

if(empty($_POST['email'])){
    throw new Exception('email is a required value');
}

if(empty($_POST['password'])){
    throw new Exception('password is a required value');
}

$email = $_POST['email'];
$password = $_POST['password'];

$hashedPassword = sha1($password);

unset($_POST['password']);

$query="SELECT `id`, `name` FROM `users` 
    WHERE `email` = '$email' AND `password` ='$hashedPassword'
";

$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($result) !== 1){ //result of select rows obj
    throw new Exception('Login unsuccessfully, invalid username or password');
}

$data = mysqli_fetch_assoc($result);

$token = $email . $data['id'] . microtime(); //create token
$token = sha1($token);

$connect_query = "INSERT INTO `user_connections` SET 
    `token`='$token', 
    `users_id`= {$data['id']}, 
    `created` = NOW(),
    `ip_address` = '{$_SERVER['REMOTE_ADDR']}'
";

$connect_result = mysqli_query($conn, $connect_query);

if(!$connect_result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) !== 1){ //affect rows in insert so use $conn
    throw new Exception('could not log you in: connection not saved');
}

$_SESSION['user_data'] = [
    'id' => $data['id'],
    'username' => $data['name'],
    'token' => $token
];

$output['success'] = true;
$output['username']= $data['name'];


print(json_encode($output));

?>
