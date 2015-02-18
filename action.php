
<?php
$name = $_POST["mail"]; // put in as many variables as you want
$comment = $_POST["comment"];


$subject = $name;
$emailId = "rishabhaggarwal2@gmail.com";	// change this field to suit your needs - R$@
$towrite = <<< EOFILE
$name
$comment

----------------------------
Rishabhaggarwal.com Form Mail
----------------------------
EOFILE;
mail($emailId,$subject,$towrite);
header("location: index.html")
?>
