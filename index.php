<?php

include "pondasi/kepala.php";
?>
<!-- HEADER END -->

<!-- SLIDER START
            ============================================= -->
<section id="slider" class="flexslider-wrap fullscreen clearfix">
    <div class="slider-wrapper">
        <div class="flexslider clearfix">
            <ul class="slides">
                <li class="clearfix" style="background-image: url(image/h1.jpg); background-size: cover; background-repeat: no-repeat;">
                    <div class="overlay color"></div>
                    <div class="flex-content vertical-center">
                        <div class="container">

                            <div class="caption wow fadeInUp">
                                <h1 style="color: #ffffff; font-size: 46px;">Selamat Datang<br>TK PERCIK</h1>
                            </div>

                            <div class="caption wow fadeInUp">
                                <div class="button-normal white">
                                    <a href="#">Daftar Sekarang</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="clearfix" style="background-image: url(image/h2.png); background-size: cover; background-repeat: no-repeat;">
                    <div class="overlay color"></div>
                    <div class="flex-content vertical-center">
                        <div class="container">
                            <div class="caption wow fadeInLeft">
                                <h3 style="color: #ffffff; font-weight: 500;">Mari Bergabung</h3>
                            </div>
                            <div class="caption wow fadeInUp">
                                <h1 style="color: #ffffff; font-size: 46px;">Tingaktan Pengembangan Diri<br>Anak </h1>
                            </div>

                            <div class="caption wow fadeInUp">
                                <div class="button-normal white">
                                    <a href="#">Info Daftar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- SLIDER END -->

<!-- CONTENT START
            ============================================= -->
<section id="content">

    <!-- BANNER START
                ============================================= -->
    <?php
    include "admin/config/koneksi.php";
    $sql = mysqli_query($conn, "SELECT * FROM moto");
    while ($b = mysqli_fetch_assoc($sql)) {

        ?>
        <div class="banner large text-center wow fadeInUp">
            <div class="container">
                <div class="row">
                    <h1 class="no-margin"><?php echo $b['moto'] ?></h1>
                </div>
            </div>
        </div><?php } ?>
    <!-- BANNER END -->

    <!-- ABOUT US SECTION START
                ============================================= -->
    <div class="about-us no-padding-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow fadeIn">
                    <div class="heading-block">
                        <h2>TK Perguruan CIKINI</h2>
                    </div>
                    <?php
                    include "admin/config/koneksi.php";
                    $sql = mysqli_query($conn, "SELECT * FROM profil");
                    while ($b = mysqli_fetch_assoc($sql)) {

                        ?>
                        <p>“Membantu anak didik mengembangkan berbagai potensi yang dimiliki untuk siap memasuki pendidikan dasar melalui kegiatan bermain sambil belajar”.</p>
                        <p><?php echo $b['profil'] ?></p>
                    <?php } ?><div class="button-normal green">
                        <a href="about-us.html">Selengkapnya</a>
                    </div>
                </div>

                <div class="about-img col-md-6 wow fadeInLeft">
                    <img src="image/profil.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    <!-- ABOUT US SECTION END -->

    <!-- FEATURES SECTION START
                ============================================= -->
    <div class="our-features grey-background">
        <div class="container">
            <div class="heading-block wow fadeIn">
                <h2>Intrakulikuler</h2>
                <h4 class="tagline"></h4>
            </div>

            <div class="row">

                <div class="features">
                    <?php
                    include "admin/config/koneksi.php";
                    $sql = mysqli_query($conn, "SELECT * FROM intra");
                    while ($b = mysqli_fetch_assoc($sql)) {

                        ?>
                        <div class="feature-item custom-food col-md-4 wow fadeInUp">
                            <div class="feature-icon">
                                <div class="icon icon-cutlery24"></div>
                            </div>
                            <div class="feature-desc">
                                <h4><?php echo $b['nama'] ?></h4>
                                <p><?php echo $b['detail'] ?>.</p>
                            </div>
                        </div>
                    <?php } ?>



                </div>

            </div>
        </div>
    </div>
    <!-- FEATURES SECTION END -->

    <!-- FACILITY SECTION START
                ============================================= -->

    <div class="testimonial with-bg-image" style="background-image: url('image/bgg.jpg')">
        <div class="container">
            <div class="row">
                <div class="testimonial-wrap text-center wow fadeIn">
                    <div class="testimonial-item flexslider">

                        <ul class="slides">
                            <?php
                            include "admin/config/koneksi.php";
                            $sql = mysqli_query($conn, "SELECT * FROM testi");
                            while ($b = mysqli_fetch_assoc($sql)) {

                                ?>
                                <li>
                                    <div class="review">
                                        <p class="text">“<?php echo $b['testi'] ?>”</p>
                                        <h5 class="title"><?php echo $b['nama'] ?></h5>

                                    </div>
                                <?php } ?>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay dark"></div>
    </div>



    <!-- OUR TEACHER SECTION START
                ============================================= -->



    <!-- OUR TEACHER SECTION END -->

    <!-- BANNER SECTION START
                ============================================= -->
    <div class="banner small wow fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-md-8 pull-left wow fadeInUp">
                    <h3>Ayo Daftar Anak Anda Sekarang Juga?</h3>
                </div>

                <div class="col-md-4 wow fadeInUp">
                    <div class="button-normal white pull-right">
                        <a href="#" class="no-margin">Daftar!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- BANNER SECTION END -->

    <!-- OUR CLASSES SECTION START
                ============================================= -->

    <!-- OUR CLASSES SECTION END -->

    <!-- OUR CLASSES SCRIPT START -->
    <script type="text/javascript">
        jQuery(window).load(function() {
            var classDetailsHeight = jQuery('.class-item img').height();
            jQuery(".class-details").css("height", classDetailsHeight);
        });
    </script>
    <!-- OUR CLASSES SCRIPT END -->

    <!-- TESTIMONIAL SECTION START
                ============================================= -->

    <!-- TESTIMONIAL SECTION END -->

</section>
<!-- CONTENT END -->

<!-- FOOTER START
            ============================================= -->

<!-- FOOTER END -->

<!-- COPYRIGHT START
            ============================================= -->

<?php
include "pondasi/kaki.php";
?>