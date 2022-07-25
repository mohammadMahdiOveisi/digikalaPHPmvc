<main class="max_width">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/index.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/sidebar.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/slider1.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/services.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/slider2.css">
    <link rel="stylesheet" href="<?= URL ?>/public/plugins/flipTimer/flipTimer.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/general/flipTimer.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/general/sliderScroll.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/banners.css">
    <div class="main clearfix width_1190 margin_center default_border">
        <?php require("banner.php");
        require("sidebar.php");
        require("slider1.php");
        require("services.php");
        require("slider2.php");
        require("onlyDigikala.php");
        require("banners.php");
        require('mostViewed.php');
        require('mostSaled.php');
        require('lastProducts.php'); ?>
    </div>
    <script src="<?= URL ?>/public/plugins/flipTimer/jquery.flipTimer.js"></script>
    <script src="<?= URL ?>/public/js/slider1.js"></script>
    <script src="<?= URL ?>/public/js/slider2.js"></script>
    <script src="<?= URL ?>/public/js/flipTimer.js"></script>
    <script src="<?= URL ?>/public/js/sliderScroll.js"></script>
</main>