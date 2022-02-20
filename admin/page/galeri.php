<?php

include "pondasi/kepala.php";
include "pondasi/kiri.php";


?>
<link rel="stylesheet" type="text/css" href="../../assets/vendor_components/gallery/css/animated-masonry-gallery.css" />

<!-- fancybox -->
<link rel="stylesheet" type="text/css" href="../../assets/vendor_components/lightbox-master/dist/ekko-lightbox.css" />

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">

                <div class="d-inline-block align-items-center">
                    <nav>
                        <a href="galeri-tbh.php" class="btn btn-success"><i class="fa fa-upload"></i> Upload Galeri </a>
                    </nav>
                </div>
            </div>

        </div>
    </div>


    <!-- Main content -->
    <section class="content">
        <div id="gallery">
            <div class="box">
                <div class="box-header">
                    <h2 class="box-title">Photo <strong>Gallery</strong></h2>
                    <div class="pull-right btn-group">

                    </div>
                </div>
            </div>
            <!-- Default box -->
            <div class="box bg-transparent no-shadow">
                <div class="box-body p-0">
                    <div id="gallery-content">

                        <div id='gallery-content-center'>
                            <?php
                            $sql = mysqli_query($conn, "SELECT * FROM galeri");
                            while ($b = mysqli_fetch_assoc($sql)) {
                                echo "
                            <a href='../foto/galeri/" . $b['foto'] . "' data-toggle='lightbox' data-gallery='multiimages' data-title='Image title will be apear here'><img src='../foto/galeri/" . $b['foto'] . "' alt='gallery' class='all studio' /> </a>
                            ";
                            } ?></div>
                    </div>
                </div>
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
</div>
<?php


include "pondasi/kaki.php";


?>