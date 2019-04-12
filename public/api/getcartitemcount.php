<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');
require_once('config.php');

$output =[
    'success' => false
];

if(empty($_SESSION['cart_id'])){
    $output['success']= true;
    $output['itemCount']=0;
} else{
    $cartId = $_SESSION['cart_id'];

    $query ="SELECT `item_count` FROM `carts` WHERE `id` = $cartId";

    $result= mysqli_query($conn,$query);

    if(!$result){
        throw new Exception(mysqli_error($conn));
    }

    if(mysqli_num_rows($result) === 0){
        throw new Exception('Invalid cart id');
    }

    $row = mysqli_fetch_assoc($result);

    $output['success'] = true;
    $output['itemCount'] = (int) $row['item_count'];

    print(json_encode($output));
}

?>