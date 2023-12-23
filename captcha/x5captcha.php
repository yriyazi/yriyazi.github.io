<?php
include("../res/x5engine.php");
$nameList = array("s8w","zeg","dtc","ye7","lxm","xyt","w7y","prv","fm3","tnx");
$charList = array("L","U","J","Y","3","J","M","2","F","S");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
