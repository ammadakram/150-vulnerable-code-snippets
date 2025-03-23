<?php
// Is it an image?
if (($uploaded_type === "image/jpeg" || $uploaded_type === "image/png") && 
    ($uploaded_size < 100000)) {

    // Can we move the file to the upload folder?
    if (!move_uploaded_file($_FILES['uploaded']['tmp_name'], $target_path)) {
        // No
        $html .= '<pre>Your image was not uploaded.</pre>';
    } else {
        // Yes!
        $html .= "<pre>{$target_path} successfully uploaded!</pre>";
    }
} else {
    // Invalid file
    $html .= '<pre>Your image was not uploaded. We can only accept JPEG or PNG images.</pre>';
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
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/Insecure%20File%20Uploads/example2.php
//
// Vulnerabilty in line: