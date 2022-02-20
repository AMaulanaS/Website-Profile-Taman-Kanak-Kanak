<?php

include "pondasi/kepala.php";
include "pondasi/kiri.php";


?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="page-title">Data Guru</h3>
                <div class="d-inline-block align-items-center">
                    <nav>
                        <a href="guru-tbh.php" class="btn btn-success"><i class="fa fa-plus"></i> Tambah Data Guru</a>
                    </nav>
                </div>
            </div>

        </div>
    </div>


    <!-- Main content -->
    <section class="content">

        <div class="row">
            <?php
            $sql = mysqli_query($conn, "SELECT * FROM guru");
            while ($b = mysqli_fetch_assoc($sql)) {
                echo "
            <div class='col-12 col-lg-6 col-xl-4'>
               
                <div class='box'>
                   
                    <div class='box-body'>
                        <div class='product-img'>
                            <img src='../foto/guru/" . $b['foto'] . "' alt='' width='300px' height='300px' >
                        </div>
                       
                        <div class='product-text>
                            <div class='pro-img-overlay'>
                                
                                <a href='guru-hapus.php?id=" . $b['id'] . "' class='btn btn-danger btn-icon-circle'><i class='mdi mdi-delete'></i></a>
                            </div>
                            <h2 class='pro-price text-blue'></h2>
                            <h3 class='box-title mb-0'>" . $b['nama'] . "</h3>
                            <small class='text-muted db'>" . $b['jabatan'] . "</small>
                        </div>
                       
                    </div> 
        </div>";
            } ?>
        </div>




</div>

</section>
<!-- /.content -->
</div>
<?php


include "pondasi/kaki.php";


?>