<?php
			// 连接、选择数据库
			header("Content-Type:text/html;charset=utf8");
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
			$arr=$_POST['arr'];
			function getValueByKey($arr, $key) {
									    foreach($arr as $k => $v) {
									        if ($k == $key) {
									            return $v;
									        }
									    }
									};						
						$myname = getValueByKey($arr, 'myname');
						$resourcesnums = getValueByKey($arr, 'resourcesnums');
						$Resourcestype = getValueByKey($arr, 'Resourcestype');
						$Resourcescost = getValueByKey($arr, 'Resourcescost');
						$timeoutcost = getValueByKey($arr, 'timeoutcost');
						$fixedcost = getValueByKey($arr, 'fixedcost');
						$Maximumtimeout =getValueByKey($arr, 'Maximumtimeout');
						$timesetting = getValueByKey($arr, 'timesetting');
						$sourcedescription = getValueByKey($arr, 'sourcedescription');
						$sql='UPDATE sourceplace SET resourcesnums="'.$resourcesnums.'",
						resourcestype="'.$Resourcestype.'",resourcescost="'.$Resourcescost.'",
						timeoutcost="'.$timeoutcost.'",fixedcost="'.$fixedcost.'",maxtimeout="'.$Maximumtimeout.'",
						timesetting="'.$timesetting.'" ,sourcedescription="'.$sourcedescription.'"
						WHERE name="'.$myname.'" ';
						 mysqli_query($link,'SET NAMES utf8');
						 $result  =  mysqli_query ($link,$sql) ;													
			 	//3、获取查询记录数
				$result_count = mysqli_num_rows($result);			
				 // 关闭连接
			 	mysqli_close ( $link );

?>