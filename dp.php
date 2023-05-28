<?php
    $server='localhost';
    $name='root';
    $password='';
    $dbname = "Users_details";
    $conn=mysqli_connect($server,$name,$password,"$dbname");
      if(!$conn){
          die('Could not Connect MySql Server:' .mysqli_error($conn));
        }
?>
