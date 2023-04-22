<?php
$host = 'localhost'; // replace with your database host
$dbname = 'jobhive'; // replace with your database name
$username = 'root'; // replace with your database username
$password = ''; // replace with your database password

// Create a new PDO object to connect to the database
try {
  $dbh = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
} catch (PDOException $e) {
  die("Error connecting to database: " . $e->getMessage());
}

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
