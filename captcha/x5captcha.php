<?php
include("../res/x5engine.php");
$nameList = array("5up","4a5","5za","jmm","nma","nc4","86n","z8z","dch","ed5");
$charList = array("Y","N","7","J","U","R","V","N","R","8");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
