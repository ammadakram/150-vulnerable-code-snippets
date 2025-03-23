<?php

function runEmployeeQuery($dbName, $name){
mysql_select_db($dbName,$globalDbHandle) or die("Could not open Database".$dbName);
$preparedStatement = $globalDbHandle->prepare('SELECT * FROM employees WHERE name = :name');
$preparedStatement->execute(array(':name' => $name));
return $preparedStatement->fetchAll();
}

$employeeRecord = runEmployeeQuery('EmployeeDB',$_GET['EmployeeName']);

?>

<!-- // Result:
// Vulnerable (01)
//
// Attack code / input:
// 
//
// Source: 
// CWE Mitre
//
// URL:
// https://cwe.mitre.org/data/definitions/285.html
//
// Vulnerabilty in line:
//
// Extra Context:
// While this code is careful to avoid SQL Injection, the function does not confirm the user sending the query 
// is authorized to do so. An attacker may be able to obtain sensitive employee information from the database. -->
