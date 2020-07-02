<?php
			header("Content-Type:text/html;charset=utf8");
				
				$conn = mysqli_connect('127.0.0.1','root','','myworkflow');
				mysqli_query($conn, 'SET NAMES utf8');
				
				$sqlone= "UPDATE function set distributefunction=null ,parameter1=null,parameter2=null ,distributionfunctiondescription=null where id='only' " ;
				$sqltwo = "UPDATE location set etop=null ,eleft=null where 1";
				$sqlthree ="UPDATE normalplace set capacity=null ,description=null where 1" ;
				$sqlfour = "UPDATE sourceplace set resourcesnums=null ,resourcestype=null,resourcescost=null ,timeoutcost=null,fixedcost=null ,maxtimeout=null,timesetting=null ,sourcedescription=null where 1";
				$sqlfive = "UPDATE timetrans set transtype=null ,transtime=null ,timetransdescription=null where 1";
				
				mysqli_query($conn,'SET NAMES utf8');
				
				$resultone = mysqli_query($conn, $sqlone);
				$resulttwo = mysqli_query($conn, $sqltwo);
				$resultthree = mysqli_query($conn, $sqlthree);
				$resultfour = mysqli_query($conn, $sqlfour);
				$resultfive = mysqli_query($conn, $sqlfive);
		
				 
			 	mysqli_close ( $conn );

?>