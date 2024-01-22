<?php
$_SERVER='localhost';
$name='root';
$password='';
$dbname='student_data';

$conn = mysqli_connect($_SERVER,$name,$password,"$dbname");
if(!$conn)
{
    die("Couldn't connect to sql serevr : ".mysqli_error($conn));
}
?>