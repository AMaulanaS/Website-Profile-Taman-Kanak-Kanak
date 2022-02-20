<?php

include "pondasi/kepala.php";
include "pondasi/kiri.php";


?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="page-title">Data Visi dan Misi</h3>
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
                        <h4 class="box-title">Visi dan Misi</h4>
                        <ul class="box-controls pull-right">
                            <li><a class="box-btn-close" href="#"></a></li>
                            <li><a class="box-btn-slide" href="#"></a></li>
                            <li><a class="box-btn-fullscreen" href="#"></a></li>
                        </ul>
                    </div>
                    <!-- /.box-header -->
                    <?php
                    $id = $_GET['id'];
                    $sql = mysqli_query($conn, "SELECT * FROM visimisi where id='$id'");
                    while ($b = mysqli_fetch_assoc($sql)) {

                        ?>

                        <form class="form" action="vm-edit.php" method="post">
                            <div class="box-body">

                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="form-group">
                                            <label>Edit Data Visi</label>
                                            <input type="hidden" name="id" value="<?php echo $b['id'] ?>" class="form-control">
                                            <textarea rows="5" class="form-control" name="visi" value="<?php echo $b['visi'] ?>" required><?php echo $b['visi'] ?></textarea>

                                        </div>
                                        <div class="form-group">
                                            <label>Edit Data Misi</label>
                                            <textarea rows="5" class="form-control" name="misi" value="<?php echo $b['misi'] ?>" required><?php echo $b['misi'] ?></textarea>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">

                                <button type="submit" class="btn btn-primary btn-outline">
                                    <i class="ti-save-alt"></i> Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- /.box -->
                </div><?php } ?>




        </div>

    </section>
    <!-- /.content -->
</div>
<?php


include "pondasi/kaki.php";


?>