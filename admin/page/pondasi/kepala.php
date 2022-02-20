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
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../image/profil.png">

    <title>Dashboard</title>

    <!-- Bootstrap 4.0-->
    <link rel="stylesheet" href="../../assets/vendor_components/bootstrap/dist/css/bootstrap.css">

    <!-- Bootstrap extend-->
    <link rel="stylesheet" href="../css/bootstrap-extend.css">

    <!-- theme style -->
    <link rel="stylesheet" href="../css/master_style.css">

    <!-- Superieur Admin skins -->
    <link rel="stylesheet" href="../css/skins/_all-skins.css">

    <!-- daterange picker -->
    <link rel="stylesheet" href="../../assets/vendor_components/bootstrap-daterangepicker/daterangepicker.css">

    <!-- Morris charts -->
    <link rel="stylesheet" href="../../assets/vendor_components/morris.js/morris.css">

    <!-- Data Table-->
    <link rel="stylesheet" type="text/css" href="../../assets/vendor_components/datatable/datatables.min.css" />


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->


</head>

<body class="hold-transition skin-info-light sidebar-mini">
    <div class="wrapper">

        <header class="main-header">
            <!-- Logo -->
            <a href="index.html" class="logo">
                <!-- mini logo -->
                <div class="logo-mini">
                    <span class="light-logo"><img src="../../image/profil.png" width="20px" height="20px" alt="logo"></span>
                    <span class="dark-logo"><img src="../../image/profil.png" width="50px" height="50px" alt="logo">
                        ADMINISTRATOR</span>
                </div>
                <!-- logo-->

            </a>
            <!-- Header Navbar -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <div>
                    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                </div>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">


                        <!-- User Account-->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="../../image/min.png" class="user-image rounded-circle" alt="User Image">
                            </a>
                            <ul class="dropdown-menu animated flipInY">
                                <!-- User image -->

                                <!-- Menu Body -->
                                <li class="user-body">

                                    <a class="dropdown-item" href="keluar.php"><i class="ion-log-out"></i> Logout</a>
                                    <div class="dropdown-divider"></div>
                                </li>
                            </ul>
                        </li>

                        <!-- Messages -->


                        <!-- Control Sidebar Toggle Button -->

                    </ul>
                </div>
            </nav>
        </header>