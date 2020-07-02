<?php
				header("Content-Type:text/html;charset=utf8");
				$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
				$neworderarr=$_POST['neworderarr'];
					function getValueByKey($arr, $key) {
										    foreach($arr as $k => $v) {
										        if ($k == $key) {
										            return $v;
										        }
										    }
										};
				
						foreach ($neworderarr as $key => $vlue) {
							$mname = getValueByKey($vlue, 'myname');
							$sql='INSERT INTO  orrder(mname)  VALUES  ("'.$mname.'")';	
							 mysqli_query($link,'SET NAMES utf8');
							 $result  =  mysqli_query ($link,$sql) ;		
							};
				
				 	//3、获取查询记录数
					$result_count = mysqli_num_rows($result);
				
					 // 关闭连接
				 	mysqli_close ( $link );
	

?>
