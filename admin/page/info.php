<?php

include "pondasi/kepala.php";
include "pondasi/kiri.php";


?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="page-title">Data Info Pendaftaran</h3>
                <div class="d-inline-block align-items-center">
                    <nav>

                    </nav>
                </div>
            </div>

        </div>
    </div>


    <!-- Main content -->
    <section class="content">




        <div class="row">
            <div class="col-lg-6 col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Info Pendaftaran </h4>
                        <ul class="box-controls pull-right">
                            <li><a class="box-btn-close" href="#"></a></li>
                            <li><a class="box-btn-slide" href="#"></a></li>
                            <li><a class="box-btn-fullscreen" href="#"></a></li>
                        </ul>
                    </div>
                    <!-- /.box-header -->
                    <?php
                    $id = $_GET['id'];
                    $sql = mysqli_query($conn, "SELECT * FROM info where id='$id'");
                    while ($b = mysqli_fetch_assoc($sql)) {

                        ?>

                        <form class="form" action="info-edit.php" method="post">
                            <div class="box-body">

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Jadwal</label>
                                            <input type="hidden" name="id" value="<?php echo $b['id'] ?>" class="form-control" required>
                                            <textarea rows="5" class="form-control" value="<?php echo $b['jadwal'] ?>" name="jadwal" required><?php echo $b['jadwal'] ?></textarea>

                                        </div>
                                        <div class="form-group">
                                            <label>Persyaratan</label>
                                            <textarea rows="5" class="form-control" value="<?php echo $b['syarat'] ?>" name="syarat" required><?php echo $b['syarat'] ?></textarea>

                                        </div>
                                        <div class="form-group">
                                            <label>Tempat</label>
                                            <input type="text" name="tempat" value="<?php echo $b['tempat'] ?>" class="form-control" required>
                                        </div>
                                        <div class="form-group">
                                            <label>Biaya</label>
                                            <input type="number" name="biaya" value="<?php echo $b['biaya'] ?>" class="form-control" required>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">

                                &nbsp;&nbsp;
                                <button type="submit" class="btn btn-primary btn-outline">
                                    <i class="ti-save-alt"></i> Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- /.box -->
                </div> <?php } ?>




        </div>

    </section>
    <!-- /.content -->
</div>
<?php


include "pondasi/kaki.php";


?>