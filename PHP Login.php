<?php 

$email=$_POST['email'];
$password=$_POST['password'];

$conn= mysqli_connect('localhost','root','','online_spa');

$stmt="SELECT * FROM registration where Email='$email' AND Password='$password'";
$result=mysqli_query($conn,$stmt);
$num=mysqli_num_rows($result);

if($num==1)
{
    $login=true;
    echo "Your are logged in";
    header("Location: Appointment Page.html");
}
else{
  
   header("Location: Error.html");
}
?>