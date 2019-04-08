<?php

session_start();

$output = [
    'message' => 'sign in api working'
];

if(empty($_SESSION['user'])){
    $_SESSION['user'] = 'Jonny Jen';
    $user = $_SESSION['user'];
    $output['message'] = "Hello $user";
    
} else {
    $output['message'] = 'User already sign in';
    $output['user'] = $_SESSION['user'];
}

print(json_encode($output));

?>