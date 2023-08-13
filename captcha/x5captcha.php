<?php
include("../res/x5engine.php");
$nameList = array("lxe","ut2","nm7","3m4","hk5","dwe","2as","4at","e3n","hcw");
$charList = array("X","Z","Y","8","S","R","Y","2","W","Y");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
