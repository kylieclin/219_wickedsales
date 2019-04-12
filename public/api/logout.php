<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');
require_once('config.php');

$output =[
    'success' => false
];

if(empty($_SESSION['user_data']['token'])){
    $output['output'] = true;
    $output['message'] = 'You were not logged in';

    print(json_encode($output));
}

$token = $_SESSION['user_data']['token'];

$query =" DELETE FROM `user_connections` WHERE `token`='$token'";

$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error($conn));
};

if(mysqli_affected_rows($conn) != 1){
    throw new Exception('Unable to logout user');
};

unset($_SESSION['user_data']);

$output['success'] = true;
$output['message'] = 'Log out successfully';

print(json_encode($output));

?>