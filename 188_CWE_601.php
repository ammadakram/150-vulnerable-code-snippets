<?php
$redirect_url = $_GET['redirect'];
if(isset($redirect_url)) {
    header('Location: ' . $redirect_url);
}
?>