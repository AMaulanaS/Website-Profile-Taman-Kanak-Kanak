<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />

    <!-- Google Fonts
        ============================================= -->
    <link href='http://fonts.googleapis.com/css?family=Dosis:400,500,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>

    <!-- Stylesheets
        ============================================= -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="css/plugin.css" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/responsive.css" type="text/css" />

    <!-- External Styles
        ============================================= -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <!-- JavaScripts
        ============================================= -->
    <script type="text/javascript" src="js/jquery.js"></script>

    <!-- Document Title
        ============================================= -->
    <title>Home</title>

    <!--[if gte IE 9]>
          <style type="text/css">
            .gradient {
               filter: none;
            }
          </style>
        <![endif]-->
</head>

<body>

    <!-- MAIN WRAPPER START
        ============================================= -->
    <div id="main-wrapper" class="animsition clearfix">

        <!-- HEADER START
            ============================================= -->
        <header id="header" class="site-header clearfix">
            <div class="container">
                <div class="row">
                    <!-- LOGO START
                        ============================================= -->
                    <div class="logo col-md-2">
                        <a href="index.php">
                            <H2>TK PERCIK</H2>
                        </a>
                    </div>
                    <!-- LOGO END -->

                    <!-- NAVIGATION START
                        ============================================= -->
                    <div class="navigation col-md-10 text-right">

                        <!-- SEARCH BAR START
                            ============================================= -->
                        <div id="sb-search" class="sb-search">
                            <form>
                                <input class="sb-search-input" placeholder="Enter your search term..." type="search" value="" name="search" id="search">
                                <input class="sb-search-submit" type="submit" value="">
                                <span class="sb-icon-search"><i class="fa fa-search"></i></span>
                            </form>
                        </div>
                        <!-- SEARCH BAR END -->

                        <!--MOBILE MENU START
                            ============================================= -->
                        <div class="mobile-menu">
                            <button id="slide-buttons" class="icon icon-navicon-round"></button>
                        </div>

                        <nav id="c-menu--slide-right" class="c-menu c-menu--slide-right">
                            <button class="c-menu__close icon icon-remove-delete"></button>
                            <div class="logo-menu-right text-center">
                                <img src="image/h1.jpg" alt="" />
                            </div>
                            <ul class="menus-mobile">
                                <li><a href="index.php">Home</a></li>
                                <li class="has-child">
                                    <a href="#">Profil</a>
                                    <ul class="child">

                                        <li><a href="profil.php">Prestasi Sekolah</a></li>
                                        <li><a href="guru.php">Guru Pengajar</a></li>
                                    </ul>
                                </li>
                                <li class="has-child">
                                    <a href="galeri.php">Galery</a>
                                    <ul class="child">
                                        <li><a href="single-classes.html">Single Classes</a></li>
                                    </ul>
                                </li>
                                <li><a href="gallery.html">Agenda</a></li>
                                <li class="has-child">
                                    <a href="blog.html"></a>
                                    <ul class="child">
                                        <li><a href="single-post.html">Single Post</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Info Pendaftaran</a></li>
                            </ul>
                        </nav>
                        <div id="slide-overlay" class="slide-overlay"></div>
                        <!-- MOBILE MENU -->

                        <!-- MAIN NAVIGATION START
                            ============================================= -->
                        <nav id="main-menu" class="menu">
                            <ul id="menu-top-menu" class="menus">
                                <li class="active"><a href="index.php">Home</a></li>
                                <li><a href="profil.php">Profil Sekolah</a></li>
                                <li><a href="galeri.php">Gallery</a></li>
                                <li class="has-child">
                                    <a href="agenda.php">Agenda</a>

                                </li>
                                <li><a href="info.php">Info Pendaftaran</a></li>
                            </ul>
                        </nav>
                        <!-- MAIN NAVIGATION END -->
                    </div>
                    <!-- NAVIGATION END -->
                </div>
            </div>
        </header>