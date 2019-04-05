<?php
require_once('functions.php');
require_once('mysqlconnect.php');
require_once('config.php');
set_exception_handler('handleError');

if(empty($_GET['productId'])){
    throw new Exception('not valid product id');
}

$id = (int)$_GET['productId']; // ?productId=1 then productId will be 1 (change id to interger)

$query= "SELECT `p`.`id`, `p`.`name`, 
        `p`.`price`,
         GROUP_CONCAT(`i`.`url`) AS `images`,
        `p`.`description`, 
        `p`.misc_details AS `miscDetails` 
        FROM `products` AS `p` 
        JOIN `images` AS `i` 
        ON `p`.`id` = `i`.`products_id`
        WHERE `p`.`id` = '{$id}' 
        GROUP BY `p`.`id`
        ";

$result = mysqli_query($conn, $query); // two params (connecttion, query)

if(!$result){ //check if connect
    throw new Exception(mysqli_error($conn)); //mysqli_error($conn) is for learning the  error pupose
}

if(mysqli_num_rows($result) === 0){ //check if there any data
    throw new Exception("no data for product id $id");
}

$data = mysqli_fetch_assoc($result);

$data['price'] = Intval($data['price'] );
$data['miscDetails'] = json_decode($data['miscDetails']); //decode json
$data['images'] = explode(',',$data['images']); //make str to arr

$output = [
    'success'=> true,
    'productIndo' => $data
];

$json_output = json_encode($output);

print($json_output);

?>