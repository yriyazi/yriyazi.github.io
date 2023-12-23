<?php
include("../res/x5engine.php");
$nameList = array("ges","e2m","duw","ajz","2u4","g43","v2t","y7p","jeh","wca");
$charList = array("K","L","F","5","S","L","6","2","W","K");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
