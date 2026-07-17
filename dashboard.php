<?php
session_start();

if(!isset($_SESSION['admin']))
{
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Admin Dashboard</title>

<style>
body{
    font-family:Arial;
    background:#f4f4f4;
    margin:0;
}

.header{
    background:#0066cc;
    color:white;
    padding:15px;
    text-align:center;
}

.container{
    width:80%;
    margin:30px auto;
}

.card{
    background:white;
    padding:20px;
    margin:15px 0;
    border-radius:8px;
    box-shadow:0 0 10px #ccc;
}

a{
    text-decoration:none;
    color:#0066cc;
    font-size:18px;
}

.logout{
    float:right;
    color:white;
}
</style>

</head>

<body>

<div class="header">
<h2>Admin Dashboard</h2>

<a class="logout" href="logout.php">Logout</a>
</div>

<div class="container">

<div class="card">
<a href="add_student.php">➕ Add Student</a>
</div>

<div class="card">
<a href="student_list.php">📋 Student List</a>
</div>

<div class="card">
<a href="add_course.php">📚 Manage Courses</a>
</div>

<div class="card">
<a href="add_result.php">📝 Enter Result</a>
</div>

<div class="card">
<a href="view_result.php">📊 View Results</a>
</div>

</div>

</body>
</html>
