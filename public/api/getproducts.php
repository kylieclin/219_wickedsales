<?php 

require_once('mysqlconnect.php');
require_once('functions.php');

set_exception_handler('handleError');

$query = 'SELECT `p`.`id`, `p`.`name`, `p`.`price`, `i`.`url` AS `images` FROM `products` AS `p` JOIN `images` AS `i` ON `p`.`id` = `i`.`products_id` ORDER BY `p`.`id`';

$result = mysqli_query($conn, $query);




if(!$result){
    throw new Exception('invalid query:'. mysqli_error($conn));
}

$data = [];

// while($row = mysqli_fetch_assoc($result)){
    

//     $currentID = $row['id'];
//     $image = $row['images'];

//     if( isset($data[$currentID])){

//         $data[$currentID]['images'][] = $image;
//     } else {

//         unset( $row['images']); //delete things cant do it javascript
//         $row['images'] = [];
//         array_push($row['images'], $image);
//         // $row['images'][] = $image; array push

//         //$data[$row['id]]['images]=[$row['images]];

//         $row['price'] =intval($row['price']); //turn str to number ofr an do (int)$row[]
//         $data[$currentID] = $row;
//     }
    
// };

// $pureData =[]; //turn $data into array
// foreach($data as $value){
//     $pureData[]= $value;
// }
$lastID = null;

 while($row = mysqli_fetch_assoc($result)){ //make row obj

    $image = $row['images'];
    $currentID = $row['id'];

    if( $currentID === $lastID){
        $data[count($data)-1]['images'][] = $image;

    } else {
        unset( $row['images']);
        $row['images'] = [];
        array_push($row['images'], $image);
        $row['price'] = intval($row['price']); 
        $data[] = $row;
        $lastID = $data[count($data)-1]['id']; 
    }

};

$output = [
    'success'=>true,
    'product'=>$data

];

$json_output = json_encode($output);

print($json_output);


?>



