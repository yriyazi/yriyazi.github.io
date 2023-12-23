<?php
include("../res/x5engine.php");
$nameList = array("vfx","u8h","dxl","4t5","h2u","6mx","r2p","pe7","kkk","kdd");
$charList = array("X","N","E","M","Y","5","T","4","D","S");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
