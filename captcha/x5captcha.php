<?php
include("../res/x5engine.php");
$nameList = array("snm","5sd","pur","xje","xlv","2n2","5tm","6tx","5sg","u7k");
$charList = array("4","E","K","T","Y","8","4","8","D","W");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
