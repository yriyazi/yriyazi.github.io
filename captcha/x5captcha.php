<?php
include("../res/x5engine.php");
$nameList = array("n4e","muv","vjw","hup","yuz","t4e","j3h","alu","wfy","tee");
$charList = array("J","J","T","5","W","R","6","C","5","J");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
