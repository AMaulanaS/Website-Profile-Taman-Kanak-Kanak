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


$a = $_POST['judul'];
$b = $_POST['detail'];
$c = $_POST['tentang'];
$d = $_POST['tgl'];



mysqli_query($conn, "INSERT INTO agenda (judul,detail,tentang,tgl) VALUES ('$a','$b','$c','$d')");
header('location:agenda.php');
