<?php

sleep(2);

$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);
$dt = date('Y-m-d H:i:s');

$errors = [];

if($email == ''){
    $errors['email'] = 'Заполните email';
}
elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $errors['email'] = 'Введите корректный EMail';
}
if($phone == ''){
    $errors['phone'] = 'Заполните phone';
}
if($name == ''){
    $errors['name'] = 'Заполните name';
}

$response = ['res' => empty($errors), 'errors' => $errors];

if($response){
    file_put_contents('apps.txt',"$dt $email $phone $name \n", FILE_APPEND);
}
echo json_encode($response);
















