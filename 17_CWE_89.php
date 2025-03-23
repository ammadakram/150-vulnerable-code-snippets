<?php

require_once('../_helpers/strip.php');

$db = new SQLite3('test.db');

if (strlen($_GET['id']) < 1) {
  echo 'Usage: ?id=1';
} else {
  $count = $db->querySingle('select count(*) from secrets where id = ' . $_GET['id']);

  if ($count > 0) {
    echo 'Yes!';
  } else {
    echo 'No!';
  }
}
?>


<!-- // Result:
// Vulnerable (01)
//
// Attack code / input:
// TBD
//
// Source: 
// SnoopyySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/SQL%20Injection/sqli.php
//
// Vulnerabilty in line: 10
//
// Extra Context: 
// don't sanitize user input, making the SQL query vulnerable to
// an injection. The query result only returns a row count, making
// it blind. It can be exploited based on whether the server
// responds with "Yes!" or "No!" -->