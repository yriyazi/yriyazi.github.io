<?php
include("../res/x5engine.php");
$nameList = array("gv2","h72","26e","atm","yxh","uxm","x5j","8fh","ata","4ye");
$charList = array("5","C","7","D","R","X","D","X","4","M");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
