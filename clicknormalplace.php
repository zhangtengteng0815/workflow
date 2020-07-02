<?php
			// 连接、选择数据库
			header("Content-Type:text/html;charset=utf8");
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
			$clicknormalplacearr=$_POST['clicknormalplacearr'];
			function getValueByKey($arr, $key) {
									    foreach($arr as $k => $v) {
									        if ($k == $key) {
									            return $v;
									        }
									    }
									};						
						$myname = getValueByKey($clicknormalplacearr, 'myname');
						$capacity = getValueByKey($clicknormalplacearr, 'capacity');
						$nodedescription = getValueByKey($clicknormalplacearr, 'nodedescription');
						$sql='UPDATE normalplace SET capacity="'.$capacity.'",
						description="'.$nodedescription.'"
						 WHERE name="'.$myname.'" ';
						 mysqli_query($link,'SET NAMES utf8');
						 $result  =  mysqli_query ($link,$sql) ;													
			 	//3、获取查询记录数
				$result_count = mysqli_num_rows($result);			
				 // 关闭连接
			 	mysqli_close ( $link );

?>