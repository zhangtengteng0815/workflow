<?php
			// 连接、选择数据库
			header("Content-Type:text/html;charset=utf8");
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
			$arr=$_POST['timearr'];
			function getValueByKey($arr, $key) {
									    foreach($arr as $k => $v) {
									        if ($k == $key) {
									            return $v;
									        }
									    }
									};						
						$distributefunction = getValueByKey($arr, 'distributefunction');
						$simtime = getValueByKey($arr, 'simtime');
						$placenum = getValueByKey($arr, 'placenum');
						$timetrans = getValueByKey($arr, 'timetrans');
						
						$sql='INSERT INTO  simtime(distributefunction,simtime,placenum,timetrans)  VALUES  ("'.$distributefunction.'","'.$simtime.'","'.$placenum.'","'.$timetrans.'")';
						
						 mysqli_query($link,'SET NAMES utf8');
						 $result  =  mysqli_query ($link,$sql) ;													
			 	//3、获取查询记录数
				$result_count = mysqli_num_rows($result);			
				 // 关闭连接
			 	mysqli_close ( $link );

?>