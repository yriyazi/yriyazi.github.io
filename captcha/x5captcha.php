<?php
include("../res/x5engine.php");
$nameList = array("nha","t63","kzg","hsw","rk2","we7","ycz","cel","jef","lmz");
$charList = array("Z","A","R","M","C","W","J","F","H","7");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
