<?php
$uploaded_name = $_FILES[ 'uploaded' ][ 'name' ];
$uploaded_ext  = substr( $uploaded_name, strrpos( $uploaded_name, '.' ) + 1);
$uploaded_size = $_FILES[ 'uploaded' ][ 'size' ];
$uploaded_tmp  = $_FILES[ 'uploaded' ][ 'tmp_name' ];

// Is it an image?
if( ( strtolower( $uploaded_ext ) == "jpg" || strtolower( $uploaded_ext ) == "jpeg" || strtolower( $uploaded_ext ) == "png" ) &&
( $uploaded_size < 100000 ) &&
getimagesize( $uploaded_tmp ) ) {

// Can we move the file to the upload folder?
if( !move_uploaded_file( $uploaded_tmp, $target_path ) ) {
  // No
  $html .= '<pre>Your image was not uploaded.</pre>';
}
else {
  // Yes!
  $html .= "<pre>{$target_path} succesfully uploaded!</pre>";
}
}
else {
  // Invalid file
  $html .= '<pre>Your image was not uploaded. We can only accept JPEG or PNG images.</pre>'
}
?>

// Result:
// Vulnerable (01)
//
// Attack code / input:
// 
//
// Source: 
// SnoopySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/Insecure%20File%20Uploads/example3.php
//
// Vulnerabilty in line: