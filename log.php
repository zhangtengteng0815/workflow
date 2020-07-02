<?php
			header("Content-Type:text/html;charset=utf8");
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
			$sql = 'SELECT * FROM log';
			mysqli_query($link,'SET NAMES utf8');
			$result= mysqli_query($link, $sql);
			$result_count = mysqli_num_rows($result);
			$json = array();	
			$data = array();
			while($row = mysqli_fetch_row($result)){
					$username=$row[0];
					$mailbox=$row[1];
					$password=$row[2];
					$data=array("username"=>$username,"mailbox"=>$mailbox,"password"=>$password);
					array_push($json,$data);
				};
				$myjes= json_encode($json);
			 echo $myjes;
			 	mysqli_close ( $link );
?>