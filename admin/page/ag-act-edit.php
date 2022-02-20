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
$a = $_POST['judul'];
$b = $_POST['detail'];
$c = $_POST['tentang'];
$d = $_POST['tgl'];

$sql = mysqli_query($conn, "UPDATE agenda SET judul = '$a', detail='$b', tentang = '$c', tgl='$d' WHERE id=$id");
header('location:agenda.php');
