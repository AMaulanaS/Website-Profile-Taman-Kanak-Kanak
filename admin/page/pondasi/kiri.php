<?php
$sql = mysqli_query($conn, "SELECT * FROM moto");
$b = mysqli_fetch_assoc($sql);

$s = mysqli_query($conn, "SELECT * FROM profil");
$l = mysqli_fetch_assoc($s);

$v = mysqli_query($conn, "SELECT * FROM visimisi");
$m = mysqli_fetch_assoc($v);

$i = mysqli_query($conn, "SELECT * FROM info");
$f = mysqli_fetch_assoc($i);
?>
<aside class="main-sidebar">
    <!-- sidebar-->
    <section class="sidebar">

        <!-- sidebar menu-->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header nav-small-cap">HOME</li>


            <li class="active">
                <a href="moto.php?id=<?php echo $b['id'] ?>">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Moto</span>
                </a>
            </li>
            <li class="active">
                <a href="profil.php?id=<?php echo $l['id'] ?>">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Profil</span>
                </a>
            </li>
            <li class="active">
                <a href="intra.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Intrakulikuler</span>
                </a>
            </li>

            <li class="active">
                <a href="testi.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Testimoni</span>
                </a>
            </li>

            <li class="header nav-small-cap">PAGE</li>
            <li class="active">
                <a href="visimisi.php?id=<?php echo $m['id'] ?>">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Visi dan Misi</span>
                </a>
            </li>

            <li class="active">
                <a href="strategi.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Strategi</span>
                </a>
            </li>
            <li class="active">
                <a href="tujuan.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Tujuan</span>
                </a>
            </li>
            <li class="active">
                <a href="prestasi.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Prestasi Sekolah</span>
                </a>
            </li>
            <li class="active">
                <a href="agenda.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Data Agenda</span>
                </a>
            </li>
            <li class="active">
                <a href="info.php?id=<?php echo $f['id'] ?>">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Info Pendaftaran</span>
                </a>
            </li>
            <li class="active">
                <a href="guru.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Data Guru</span>
                </a>
            </li>

            <li class="active">
                <a href="galeri.php">
                    <i class="mdi mdi-view-dashboard"></i>
                    <span>Data Galery</span>
                </a>
            </li>






        </ul>
    </section>
</aside>