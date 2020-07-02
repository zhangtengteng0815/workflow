<?php
			header("Content-Type:text/html;charset=utf8");
			// 连接、选择数据库
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
			//$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'tarena');
			$jesonarray=$_POST['jesonarray'];
				function getValueByKey($arr, $key) {
									    foreach($arr as $k => $v) {
									        if ($k == $key) {
									            return $v;
									        }
									    }
									};
			
					foreach ($jesonarray as $key => $vlue) {	
						$myname =getValueByKey($vlue, 'myname');
						$mytop = getValueByKey($vlue, 'mytop');
						$myleft = getValueByKey($vlue, 'myleft');
						$sql='UPDATE  location SET etop="'.$mytop.'",eleft="'.$myleft.'" WHERE name="'.$myname.'" ';
						 // 执行 SQL 查询
						 mysqli_query($link,'SET NAMES utf8');
						 $result  =  mysqli_query ($link,$sql) ;	
						 	
			};
			
			 	//3、获取查询记录数
				$result_count = mysqli_num_rows($result);
			
				 // 关闭连接
			 	mysqli_close ( $link );


?>