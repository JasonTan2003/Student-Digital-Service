<?php
// connect to the database
$name = $_POST['name'];
$password = $_POST['password'];
$email = $_POST['email'];
$conn = new mysqli(server=localhost;user=root;database=jobhive;port=3306;);

// check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// get form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// hash password for security
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// insert data into database
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// close connection
$conn->close();
?>
