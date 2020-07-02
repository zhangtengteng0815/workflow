<?php
			header("Content-Type:text/html;charset=utf8");
				
				$conn = mysqli_connect('127.0.0.1','root','','myworkflow');
				mysqli_query($conn, 'SET NAMES utf8');
				
				$sqlone= 'SELECT * FROM normalplace where (description is not null) or (capacity!=0)';
				$sqltwo = 'SELECT * FROM function';
				$sqlthree = 'SELECT * FROM location where (etop!=0) or (eleft!=0)';
				$sqlfour = 'SELECT * FROM sourceplace where resourcestype is not null';
				$sqlfive = 'SELECT * FROM timetrans where transtype is not null';
				
				mysqli_query($conn,'SET NAMES utf8');
				
				$resultone = mysqli_query($conn, $sqlone);
				$resulttwo = mysqli_query($conn, $sqltwo);
				$resultthree = mysqli_query($conn, $sqlthree);
				$resultfour = mysqli_query($conn, $sqlfour);
				$resultfive = mysqli_query($conn, $sqlfive);
				
				$resultone_count = mysqli_num_rows($resultone);
				$resulttwo_count = mysqli_num_rows($resulttwo);
				$resultthree_count = mysqli_num_rows($resultthree);
				$resultfour_count = mysqli_num_rows($resultfour);
				$resultfive_count = mysqli_num_rows($resultfive);
			/*
					$row=mysqli_fetch_array($resultone);
					$id=$row[0];
					$myname=$row[1];
					$capacity=$row[2];
					$type=$row[3];
					$description=$row[4];
					$dataone=array("id"=>$id,"myname"=>$myname,"capacity"=>$capacity,"type"=>$type,"description"=>$description);
				*/	
				//echo  json_encode($dataone);
				$json = array();	
				$data = array();	
				array_push($json,$resultone_count);
				array_push($json,$resulttwo_count);
				array_push($json,$resultthree_count);
				array_push($json,$resultfour_count);
				array_push($json,$resultfive_count);
			/*	$datatwo = array();
				$json2 = array();
				$datathree = array();
				$json3 = array();
				$datafour = array();
				$json4 = array();	
				$datafive = array();
				$json5 = array();	
				*/
				while($row = mysqli_fetch_row($resultone)){
					$id=$row[0];
					$myname=$row[1];
					$capacity=$row[2];
					$type=$row[3];
					$description=$row[4];
					$data=array("id"=>$id,"myname"=>$myname,"capacity"=>$capacity,"type"=>$type,"description"=>$description);
					array_push($json,$data);
				};
				while($row=mysqli_fetch_row($resulttwo)){
					$id=$row[0];
					$distributefunction=$row[1];
					$parameter1=$row[2];
					$parameter2=$row[3];
					$distributionfunctiondescription=$row[4];
					$data=array("id"=>$id,"distributefunction"=>$distributefunction,"parameter1"=>$parameter1,"parameter2"=>$parameter2,"distributionfunctiondescription"=>$distributionfunctiondescription);
					array_push($json,$data);
				};
				while($row=mysqli_fetch_row($resultthree)){
					$id=$row[0];
					$myname=$row[1];
					$mytop=$row[2];
					$myleft=$row[3];
					$data=array("id"=>$id,"myname"=>$myname,"mytop"=>$mytop,"myleft"=>$myleft);
					array_push($json,$data);
				};
				while($row=mysqli_fetch_row($resultfour)){
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
				while($row=mysqli_fetch_row($resultfive)){
					$id=$row[0];
					$myname=$row[1];
					$transtype=$row[2];
					$transtime=$row[3];
					$timetransdescription=$row[4];					
					$data=array("id"=>$id,"myname"=>$myname,"transtype"=>$transtype,"transtime"=>$transtime,"timetransdescription"=>$timetransdescription);
					array_push($json,$data);
				};
				$myjes= json_encode($json);
				/*$myjes2=  json_encode($json2);
				$myjes3= json_encode($json3);
				$myjes4=  json_encode($json4);
				$myjes5=  json_encode($json5);
				$alljson=array();
				array_push($alljson,$myjes1);
				array_push($alljson,$myjes2);
				array_push($alljson,$myjes3);
				array_push($alljson,$myjes4);
				array_push($alljson,$myjes5);
		 
		 */
				echo $myjes;
			 	mysqli_close ( $conn );
?>		
