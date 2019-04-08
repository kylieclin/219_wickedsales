<?php

session_start();

// unset($_SESSION['user']); only destroy user

session_destroy();

print(json_encode(['success'=>true]));

?>