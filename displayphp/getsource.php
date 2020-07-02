<?php
			// 连接、选择数据库
			header("Content-Type:text/html;charset=utf8");
			$link  =  mysqli_connect ( '127.0.0.1', 'root', '', 'myworkflow');
						$sqlone = 'SELECT * FROM sourceplace where resourcestype is not null';
						$sqltwo = 'SELECT * FROM orrder';
						
						mysqli_query($link,'SET NAMES utf8');
					
						$resultone  =  mysqli_query ($link,$sqlone) ;	
						$resulttwo  =  mysqli_query ($link,$sqltwo) ;	
						  
						$resultone_count = mysqli_num_rows($resultone);
						$resulttwo_count = mysqli_num_rows($resulttwo);
						
						$json = array();	
						$data = array();
						
						array_push($json,$resultone_count);
						array_push($json,$resulttwo_count);	
						
						while($row=mysqli_fetch_row($resultone)){
							$id=$row[0];
							$myname=$row[1];
							$resourcesnums=$row[2];
							$resourcestype=$row[3];
							$resourcescost=$row[4];			
							$timeoutcost=$row[5];			
							$fixedcost=$row[6];
							$maxtimeout=$row[7];
							$timesetting=$row[8];
							$sourcedescription=$row[9];
							$data=array("id"=>$id,"myname"=>$myname,"resourcesnums"=>$resourcesnums,"resourcestype"=>$resourcestype,"resourcescost"=>$resourcescost,"timeoutcost"=>$timeoutcost,"fixedcost"=>$fixedcost,
							"maxtimeout"=>$maxtimeout,"timesetting"=>$timesetting,"sourcedescription"=>$sourcedescription);
							array_push($json,$data);
						};	
						
						while($row=mysqli_fetch_row($resulttwo)){
							$id=$row[0];
							$mname=$row[1];
							$data=array("id"=>$id,"mname"=>$mname);
							array_push($json,$data);
						};
						
						$myjes= json_encode($json);	
						
						echo $myjes;								
			 		
						$sqlthree = 'DELETE FROM orrder';
						$resultthree =  mysqli_query ($link,$sqlthree) ;	
				 // 关闭连接
			 	mysqli_close ( $link );

?>