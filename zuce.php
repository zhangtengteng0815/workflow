<?php
			header("Content-Type:text/html;charset=utf8");
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
			//$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'tarena');
			$arr=$_POST['arr'];
				function getValueByKey($arr, $key) {
									    foreach($arr as $k => $v) {
									        if ($k == $key) {
									            return $v;
									        }
									    }
									};
			
					
						$username =getValueByKey($arr, 'username');
						$mailbox = getValueByKey($arr, 'mailbox');
						$password= getValueByKey($arr, 'password');
						$sql='INSERT INTO  log(username,mailbox,password) values("'.$username.'","'.$mailbox.'","'.$password.'")';
						 // 执行 SQL 查询
						 mysqli_query($link,'SET NAMES utf8');
						 $result  =  mysqli_query ($link,$sql) ;	
						 	

			
			 	//3、获取查询记录数
				$result_count = mysqli_num_rows($result);
			
				 // 关闭连接
			 	mysqli_close ( $link );


?>