<?php
include "pondasi/kepala.php";
?>
<!-- HEADER END -->

<!-- CONTENT START
            ============================================= -->
<section id="content" class="single-wrapper">
    <!-- Page Title -->
    <div class="grey-background wow fadeIn">
        <div class="container">
            <div class="heading-block page-title wow fadeInUp">
                <h1>Gallery</h1>
            </div>
        </div>
    </div>

    <!-- GALLERY START
                ============================================= -->
    <div class="gallery">
        <div class="container">
            <!-- Gallery Items
                        ============================================= -->
            <?php
            include "admin/config/koneksi.php";
            $sql = mysqli_query($conn, "SELECT * FROM galeri");
            while ($b = mysqli_fetch_assoc($sql)) {

                ?>
                <div id="gallery" class="wow fadeIn clearfix">
                    <div class="gallery-item exterior">
                        <div class="wow fadeIn">
                            <a title="gallery" href="admin/foto/galeri/<?php echo $b['foto'] ?>">
                                <div class="gallery-image">
                                    <img src="admin/foto/galeri/<?php echo $b['foto'] ?>" alt="" />
                                    <div class="overlay dark"></div>
                                    <span><i class="fa fa-plus"></i></span>
                                </div>
                            </a>
                        </div>
                    </div>

                <?php } ?>

            </div>
        </div>
        <!-- Gallery Items End -->

        <!-- infinite load button start -->

        <!-- Gallery Script End -->
    </div>
    </div>
    <!-- GALLERY END -->

</section>
<!-- CONTENT END -->

<!-- FOOTER START
            ============================================= -->
<footer id="footer">
    <div class="container">
        <div class="row">

        </div>
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