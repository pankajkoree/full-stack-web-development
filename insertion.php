<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
     $email = $_POST['email'];
     $password = $_POST['password'];
     $sql = "INSERT INTO users (email,password)
     VALUES ('$email','$password')";
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>
