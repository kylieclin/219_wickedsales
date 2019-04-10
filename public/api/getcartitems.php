<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');
require_once('config.php');

$output =[
    'success' => false
];

if(empty($_SESSION['cart_id'])){
    throw new Exception('Missing Cart id');
}

$cart_id = $_SESSION['cart_id'];

$query = "SELECT `p`.`name`, `p`.`price`,
    `i`.`url` AS `image`,
    `item`.`quantity`, 
    `p`.`id`, 
    `c`.`created`, 
    `c`.`total_price` AS `total` 
    FROM `carts` AS `c` 
    JOIN `cart_items` AS `item` 
    JOIN `products` AS `p` 
    JOIN `images` AS `i` 
    ON `c`.`id` = `item`.`carts_id` 
    AND `item`.`products_id` = `p`.`id` 
    AND `p`.`id` = `i`.`products_id` 
    WHERE `c`.`id`=$cart_id 
    GROUP BY `p`.`id`
";


$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($result) === 0){
    throw new Exception('Unable to retrieve cart data');
}


$output= [
    'success' => true,
    "cartItems" =>[],
    "cartMetaData" => []
];

while($row = mysqli_fetch_assoc($result)){
    
    $output['cartItems'][]=[
        'name' => $row['name'],
        'price' => (int)$row['price'],
        'image' => $row['image'],
        'quantity' => (int)$row['quantity'],
        'id' => (int)$row['id']
    ];

    $output['cartMetaData']=[
        'created' => $row['created'],
        'total'=> (int)$row['total']
    ];
    
}

print(json_encode($output));

?>
