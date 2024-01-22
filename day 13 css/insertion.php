<?php
include_once 'connection.php';
if(isset($_POST['submit']))
{
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "INSERT INTO user_login(username,password) VALUES('$username','$password')";

    if(mysqli_query($conn, $sql))
    {
        echo"Data has been submitted successfully..";
        
    }else{
        echo"Error: ". $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>