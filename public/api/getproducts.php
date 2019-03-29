<?php 

require_once('mysqlconnect.php');

$query = 'SELECT `p`.`id`, `p`.`name`, `p`.`price`, `i`.`url` AS `images` FROM `products` AS `p` JOIN `images` AS `i` ON `p`.`id` = `i`.`products_id` ORDER BY `p`.`id`';

$result = mysqli_query($conn, $query);

$data = [];

while($row = mysqli_fetch_assoc($result)){
    $currentID = $row['id'];
    $image = $row['images'];

    if( isset($data[$currentID])){

        $data[$currentID]['images'][] = $image;
    } else {

        unset( $row['images']);
        $row['images'] = [];
        array_push($row['images'], $image);
        // $row['images'][] = [$image]; array push

        //$data[$row['id]]['images]=[$row['images]];

        $row['price'] =intval($row['price']); //turn str to number ofr an do (int)$row['price]
        $data[$currentID] = $row;
    }
    
};

$pureData =[]; //turn $data into array
foreach($data as $value){
    $pureData[]= $value;
}

$output = [
    'success'=>true,
    'product'=>$pureData

];

$json_output = json_encode($output);

print($json_output);

?>