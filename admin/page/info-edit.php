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

$que = mysqli_query($conn, "SELECT * FROM admin ");
$hasi = mysqli_fetch_array($que);


$id = $_POST['id'];
$a = $_POST['jadwal'];
$b = $_POST['syarat'];
$c = $_POST['tempat'];
$d = $_POST['biaya'];

$sql = mysqli_query($conn, "UPDATE info SET jadwal = '$a', syarat = '$b', tempat = '$c', biaya = '$d' WHERE id=$id");
header('location:index.php');
