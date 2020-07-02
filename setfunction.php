<?php
			// 连接、选择数据库
			header("Content-Type:text/html;charset=utf8");
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
			$arr=$_POST['timetraarr'];
			function getValueByKey($arr, $key) {
									    foreach($arr as $k => $v) {
									        if ($k == $key) {
									            return $v;
									        }
									    }
									};	
										
						$myname = getValueByKey($arr, 'myname');
						
						$distributefunction = getValueByKey($arr, 'distributefunction');
						$parameter1 = getValueByKey($arr, 'parameter1');
						$parameter2 = getValueByKey($arr, 'parameter2');
						$distributionFunctionDescription = getValueByKey($arr, 'distributionFunctionDescription');
						$myid="only";
					 
					 /*
						$sql='UPDATE mydate SET distributefunction="'.$distributefunction.'",
						parameter1="'.$parameter1.'",parameter2="'.$parameter2.'",
						distributionFunctionDescription="'.$distributionFunctionDescription.'" 
						WHERE myname="'.$myname.'" ';
					*/
			//			$sql='INSERT INTO  function (distributefunction,parameter1,parameter2,distributionfunctiondescription)  
			//			VALUES  ("'.$distributefunction.'","'.$parameter1.'","'.$parameter2.'","'.$distributionFunctionDescription.'")';
				
			$sql='UPDATE function SET distributefunction="'.$distributefunction.'",
				parameter1="'.$parameter1.'",parameter2="'.$parameter2.'",
				distributionfunctiondescription="'.$distributionFunctionDescription.'"
				 WHERE id="'.$myname.'" ';	
				//	$sql="INSERT INTO  dept(dno,loc,dname)  VALUES  (1,23,'zhangteng')";
						mysqli_query($link,'SET NAMES utf8');
						 $result  =  mysqli_query ($link,$sql) ;													
			 	//3、获取查询记录数
					$result_count = mysqli_num_rows($result);			
				 // 关闭连接
			 		mysqli_close ( $link );

?>