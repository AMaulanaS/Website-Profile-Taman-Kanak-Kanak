<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header('location:../index.php');
} else {
    $username = $_SESSION['admin'];
}

require_once("../config/koneksi.php");
$query = mysqli_query($conn, "SELECT * FROM admin WHERE username='$username'");
$hasil = mysqli_fetch_array($query);

$id = $_GET['id'];
mysqli_query($conn, "DELETE FROM testi WHERE id='$id'") or die(mysqli_errorr());

header("location:testi.php");
