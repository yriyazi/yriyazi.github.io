<?php
include("../res/x5engine.php");
$nameList = array("tmx","cey","dsm","kcy","6zv","hx4","guu","c65","a8e","2z5");
$charList = array("H","C","4","N","H","F","F","C","X","8");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
