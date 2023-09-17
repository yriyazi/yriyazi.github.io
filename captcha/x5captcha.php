<?php
include("../res/x5engine.php");
$nameList = array("u2l","hwy","eas","yve","ksh","ge7","dc6","gz7","acj","d5m");
$charList = array("3","S","8","G","P","8","Z","M","6","N");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
