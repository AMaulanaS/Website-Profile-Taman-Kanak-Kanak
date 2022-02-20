<?php
include "pondasi/kepala.php";

include "admin/config/koneksi.php";
$sql = mysqli_query($conn, "SELECT * FROM info");
$b = mysqli_fetch_assoc($sql);

?>

<body>

    <!-- MAIN WRAPPER START
        ============================================= -->
    <!-- HEADER END -->

    <!-- CONTENT START
            ============================================= -->
    <section id="content" class="single-wrapper">

        <div class="our-features grey-background">
            <div class="container">
                <div class="heading-block wow fadeIn">
                    <h2>INFORMASI</h2>
                    <h4 class="tagline"></h4>
                </div>

                <div class="about-us">
                    <div class="container">
                        <div class="row">
                            <!-- Accordion Start -->
                            <div class="accordion col-md-6">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div class="panel-heading" role="tab" id="headingOne">
                                                <h4 class="panel-title">Jadwal</h4>
                                            </div>
                                        </a>
                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <?php echo $b['jadwal'] ?>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panel panel-default">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            <div class="panel-heading" role="tab" id="headingTwo">
                                                <h4 class="panel-title">Persyaratan</h4>
                                            </div>
                                        </a>
                                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div class="panel-body">
                                                <?php echo $b['syarat'] ?> </div>
                                        </div>
                                    </div>

                                    <div class="panel panel-default">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <div class="panel-heading" role="tab" id="headingThree">
                                                <h4 class="panel-title">Biaya</h4>
                                            </div>
                                        </a>
                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="panel-body">
                                                <?php echo $b['biaya'] ?> </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!-- Accordion End -->

                            <div class="col-md-6 wow fadeIn">
                                <div class="heading-block">
                                    <h2>Informasi Pendaftaran</h2>
                                </div>
                                <p> <?php echo $b['jadwal'] ?></p>
                                <p> <?php echo $b['syarat'] ?></p>
                                <p> <?php echo $b['biaya'] ?></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FEATURES SECTION END -->

        <!-- CLASS AND COURSE SECTION START
    
     
      
      

    
                ============================================= -->

        <!-- PRICING TABLE SECTION END -->

    </section>
    <!-- CONTENT END -->

    <!-- FOOTER START
            ============================================= -->
    <footer id="footer">
        <div class="container">

        </div>
    </footer>
    <!-- FOOTER END -->

    <!-- COPYRIGHT START
            ============================================= -->

    <?php
    include "pondasi/kaki.php";
    ?>
    <!-- COPYRIGHT END -->

    </div>
    <!-- MAIN WRAPPER END -->

    <!-- Footer Scripts
        ============================================= -->
    <!-- External -->
    <script type="text/javascript" src="js/plugin.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

</body>

</html>