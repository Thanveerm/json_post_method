<?php

/**
 * File name: form.php
 * PHP script that receives form data from javascript ajax via POST method.
 * PHP version: 8.2
 * @category PHP
 * @package  MyProject\Form
 * @author   Thanveer.m <thanveer.m@codilar.com>
*/

$name = $_POST['name'];
$address = $_POST['email'];
$phone = $_POST['phone'];
$image = $_FILES['image']['name'];
$tmp_img = $_FILES['image']['tmp_name'];
$filledData = file_get_contents('data.json');
$filled_array = json_decode($filledData, true);
$data = array(
    "name" => $name,
    "email" => $address,
    "phone" => $phone,
    "image" => $image
);
$filled_array[] = $data;
move_uploaded_file($tmp_img, "upload/" . $image);
$json_data = json_encode($filled_array);
file_put_contents("data.json", $json_data, FILE_APPEND);
echo $json_data;
