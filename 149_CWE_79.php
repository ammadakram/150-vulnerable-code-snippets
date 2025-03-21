<?php
$page = $_GET['page'];
if(isset($page)) {
    extract($_GET);
    include($page . '.php');
}
?>