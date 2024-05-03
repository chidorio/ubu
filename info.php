<?php
$link = mysqli_connect('db', 'root', 'kali');
if($link) {
	echo 'Good!';
}
else {
	die('Error:' . mysqli_error());
}
mysqli_close($link);
?>
