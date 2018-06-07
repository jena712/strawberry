<?php
	include "public.php";
	$uname = $_POST['uname'];
	$pwd = $_POST['upwd'];
//	echo $uname,$pwd;
	$sql = "INSERT INTO `usertable`(`uname`, `upassword`) VALUES ('$uname','$pwd')";
	$row = mysql_query($sql);
	if($row){
		echo"<script>alert('注册成功！');location.href='../login.html';</script>";
	}else{
		echo"<script>alert('注册失败！');location.href='register.html';</script>";
	}
?>