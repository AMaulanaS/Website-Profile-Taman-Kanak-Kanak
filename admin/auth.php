<?php
include "config/koneksi.php";

$user = $_POST['username'];
$pass = $_POST['password'];

if (empty($user)) {
  echo "<script>window.alert('Username Belum diisi')
  window.location='index.php'</script>";
} else if (empty($pass)) {
  echo "<script>window.alert('Password Belum diisi')
  window.location='index.php'</script>";
} else {
  session_start();
  $login = mysqli_query($conn, "SELECT * FROM admin WHERE username='$user' and password='$pass' and level='admin'");
  if (mysqli_num_rows($login) > 0) {
    $_SESSION['admin'] = $user;
    header("location:page/index.php");
  } else {

    echo "<script>window.alert('Username dan Password Salah')
  window.location='index.php'</script>";
  }
}
