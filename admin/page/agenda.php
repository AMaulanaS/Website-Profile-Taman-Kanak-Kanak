<?php

include "pondasi/kepala.php";
include "pondasi/kiri.php";


?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="page-title">Data Agenda</h3>
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



            <div class="col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title"><a href="ag-tbh.php" class="btn btn-success"><i class="fa fa-plus"></i> Tambah Data</a>
                            <div class="box-controls pull-right">

                            </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body no-padding">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <tr>
                                    <th>Id</th>
                                    <th>Judul Agenda</th>
                                    <th>Detail Agenda</th>
                                    <th>Agenda Mengenai</th>
                                    <th>Tanggal</th>

                                    <th>Aksi</th>
                                </tr>
                                <?php
                                $sql = mysqli_query($conn, "SELECT * FROM agenda");
                                while ($b = mysqli_fetch_assoc($sql)) {
                                    echo "
                                    <tr>
                                    <td>" . $b['id'] . "                     
                                    </td>
                                    <td>" . $b['judul'] . "
                                    </td>
                                    <td>" . $b['detail'] . "
                                    </td>
                                    <td>" . $b['tentang'] . "
                                    </td>
                                    <td>" . $b['tgl'] . "
                                    </td>

                                    <td>
                                    <a href='ag-edit.php?id=" . $b['id'] . "' class='btn btn-primary'><i class='fa fa-edit'></i></a>
                                    <a href='ag-hapus.php?id=" . $b['id'] . "' class='btn btn-danger'><i class='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                    ";
                                }
                                ?>



                            </table>
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>








        </div>
        <!-- /.row -->

    </section>
    <!-- /.content -->
</div>
<?php


include "pondasi/kaki.php";


?>