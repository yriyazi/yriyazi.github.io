<?php
include("../res/x5engine.php");
$nameList = array("pc3","6ax","np5","rey","dmr","g7e","gdj","cl6","3cm","hvr");
$charList = array("5","Y","X","A","6","J","2","5","4","C");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
