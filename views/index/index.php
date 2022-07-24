<main class="max_width">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/index.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/sidebar.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/slider1.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/services.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/index/slider2.css">
    <link rel="stylesheet" href="<?= URL ?>/public/plugins/flipTimer/flipTimer.css">
    <link rel="stylesheet" href="<?= URL ?>/public/css/general/flipTimer.css">
    <div class="main clearfix width_1190 margin_center">
        <?php require("banner.php") ?>
        <?php require("sidebar.php") ?>
        <?php require("slider1.php") ?>
        <?php require("services.php") ?>
        <?php require("slider2.php") ?>
    </div>
    <script src="<?= URL ?>/public/plugins/flipTimer/jquery.flipTimer.js"></script>
    <script src="<?= URL ?>/public/js/slider1.js"></script>
    <script src="<?= URL ?>/public/js/slider2.js"></script>
    <script src="<?= URL ?>/public/js/flipTimer.js"></script>
</main>