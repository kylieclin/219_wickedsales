<?php 

if(!function_exists('handleError')){ //if function doesnt not exist defined the handleError function
    
    function handleError( $error ){
        $output = [
            'success' => false,
            'error' => $error->getMessage()
    
        ];
        $json_output = json_encode($output);
        print($json_output);
    }
}







?>