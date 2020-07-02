<?php
			header("Content-Type:text/html;charset=utf8");
				
				$conn = mysqli_connect('127.0.0.1','root','','myworkflow');
				mysqli_query($conn, 'SET NAMES utf8');
				
				$sqlone = 'SELECT * FROM simtime';
				
				mysqli_query($conn,'SET NAMES utf8');
				
				$resultone = mysqli_query($conn, $sqlone);
				
				$resultone_count = mysqli_num_rows($resultone);
			
				$json = array();	
				$data = array();	
			
				while($row = mysqli_fetch_row($resultone)){
					$id=$row[0];
					$distributefunction=$row[1];
					$simtime=$row[2];
					$placenum=$row[3];
					$timetrans=$row[4];
					$data=array("id"=>$id,"distributefunction"=>$distributefunction,"simtime"=>$simtime,"placenum"=>$placenum,"timetrans"=>$timetrans);
					array_push($json,$data);
				};
				
				$myjes= json_encode($json);

				echo $myjes;
			 	mysqli_close ( $conn );
?>		
