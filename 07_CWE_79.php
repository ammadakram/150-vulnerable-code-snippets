<?php
require_once('../_helpers/strip.php');
?>

<html>
  <!-- From https://portswigger.net/web-security/dom-based/dom-clobbering -->
  <head>

  </head>
  <body>
    <p>
      Hi, <?= $_GET['name']; ?>
    </p>
    <script>
      window.onload = function(){
        let someObject = window.someObject || {};
        let script = document.createElement('script');
        script.src = someObject.url;
        document.body.appendChild(script);
     };
    </script>
  </body>
</html>

<!-- // Result:
// Vulnerable (01)
//
// Attack code / input:
//
// Source: 
// SnoopySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/XSS/Spring.java
//
// Vulnerabilty in line:  -->