<?php 
$test = $_POST['firstQuestion'];

$url = './data.json';
$data = file_get_content($url);

$data = '{
    "messages": [
        {"text": "Welcome to the Chatfuel!"},
        {"text": "'.$test.'"}
    ]
};

$data = json_decode($data);
$data = json_encode($data);
header('Acces-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo $data;

