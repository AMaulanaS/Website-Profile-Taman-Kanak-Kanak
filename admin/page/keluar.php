<?php
session_start();
session_destroy();
echo "<script>window.alert('Terimakasih Anda Telah Keluar ')
  window.location='../index.php'</script>";
