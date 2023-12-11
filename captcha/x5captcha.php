<?php
include("../res/x5engine.php");
$nameList = array("8jp","8ct","dg6","ndg","8dw","uv3","83u","z7l","2g7","nc5");
$charList = array("7","E","T","M","5","7","V","Y","6","C");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
