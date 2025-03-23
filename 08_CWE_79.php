<?php

require_once('../_helpers/strip.php');

// the `name` variable isn't getting sanitized, making it vulnerable
// to a reflected Cross-Site Scripting vulnerability.
echo 'Hello, ' . $_GET['name']

// Result:
// Vulnerable (01)
//
// Attack code / input:
//
// Source: 
// SnoopySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/XSS/dom.php
//
// Vulnerabilty in line: 