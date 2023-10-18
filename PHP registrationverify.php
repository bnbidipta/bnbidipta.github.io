<?php

$username = $_POST['Name'];
$password = $_POST['Password'];
$email = $_POST['Email'];
$mobile = $_POST['Phone'];

$conn = new mysqli('localhost', 'root', '', 'online_spa');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $dup = "SELECT * FROM registration WHERE Email='$email'";
    $result = $conn->query($dup);
    $num = $result->num_rows;

    if ($num > 0) {
        header("Location: error/no.html");
        exit;
    } else {
        $stmt = $conn->prepare("INSERT INTO registration(Name, Email, Phone, Password) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $username, $email, $mobile, $password);
        $stmt->execute();
        echo "Data Inserted Successfully!";
        $stmt->close();
        $conn->close();
        header("Location: Login.html");
        exit;
    }
}
?>
