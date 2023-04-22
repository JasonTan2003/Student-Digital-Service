<?php
// Get the form data
$name = $_POST['name'];
$surname = $_POST['surname'];
$password = $_POST['password'];
$email = $_POST['email'];

// Create a new PDO object to connect to the database
$dbh = new PDO('mysql:host=localhost;dbname=jobhive;charset=utf8');

// Prepare the INSERT statement
$stmt = $dbh->prepare('INSERT INTO users (name,password, email) VALUES (:name,:password, :email)');

// Bind the parameters and execute the statement
$stmt->bindParam(':name', $name);
$stmt->bindParam(':surname', $surname);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':email', $email);
$stmt->execute();

// Redirect the user to the login page
header('Location: login.html');
exit();
?>
