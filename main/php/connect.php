<?php

$host = 'localhost';
$nameDB = 'optics';
$login = 'root';
$pass = '';

$link = new mysqli($host, $login, $pass, $nameDB);
if ($link->connect_errno) {
    echo 'Проблемы с подключением: ' . $link->connect_error;
} else {
    echo 'База данных подключена успешно';
}

?>
