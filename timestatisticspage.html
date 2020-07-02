<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<title>workflow</title>
		<link rel="stylesheet" href="jsui/jquery-ui.theme.min.css" />
		<link rel="stylesheet" href="jsui/jquery-ui.css" />
		<link rel="stylesheet" href="jsui/jquery-ui.min.css" />
		<link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
		<link rel="stylesheet" href="workflow.css" />
		<script src="scripts/jquery.js"></script>
		<script src="scripts/jquery-1.4.2.min.js"></script>
		<script src="jsui/jquery-ui.min.js"></script>
		<script src="bootstrap/js/bootstrap.js"></script>
		<script src="scripts/less.js"></script>
		<script src="scripts/angular-1.2.5.js"></script>
		<script src="workflow.js"></script>
		<style type="text/css">
				#dheader{
					 margin-left:105px;
				}
				table {
				        margin-left:105px;  
				        margin-right:20px;  
				        margin-bottom:5px;  
				        background-color: #FFF;  
				        background:#EEF4F9;  
				        border: none;  
				        border: 1;  
				        color:#003755;  
				        border-collapse:collapse;  
				        font: 14px  "宋体";  
				}  		  
				table th{  
				        background:#7CB8E2;  
				        color:#fff;  
				        padding:6px 4px;  
				        text-align:center;  
				}  
				  
				table td{  
				        background:#C7DDEE none repeat-x scroll center left;  
				        color:#000;  
				        padding:4px 2px;  
				} 
	     </style>
 </head>

 <body>
  			<div id="dheader">
  				<header class="page-header"><h1>工作流建模系统</h1></header>
  			</div>
			  <?php
			  	header("Content-Type:text/html;charset=utf8");
				//查询数据库中所有的员工记录——二维数组
				$conn = mysqli_connect('127.0.0.1','root','','myworkflow');
				mysqli_query($conn, 'SET NAMES utf8');
			
				//no,myname,resourcesnums,Resourcestype,Resourcescost,timeoutcost,fixedcost ,Maximumtimeout ,
				//timesetting,distributefunction,parameter1,parameter2,distributionFunctionDes
			
				//$sql = 'SELECT no,myname,mytop,myleft,resourcesnums,Resourcestype,Resourcescost,timeoutcost,fixedcost ,Maximumtimeout ,timesetting,distributefunction,parameter1,parameter2,distributionFunctionDescription FROM mydate';
				//select * from A where info is not null
				$sqlone= 'SELECT * FROM normalplace where (description is not null) or (capacity!=0)';//where description is not null and capacity is not null
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
			
				
				$dataone =array();	//用于盛放查询结果集的二维数组
				$datatwo =array();
				$datathree =array();
				$datafour =array();
				$datafive =array();
				
				while( $row=mysqli_fetch_array($resultone,MYSQLI_ASSOC) ){
				$dataone[] = $row; //把抓取到一行记录保存到二维数组
				};
				while( $row=mysqli_fetch_array($resulttwo,MYSQLI_ASSOC) ){
				$datatwo[] = $row; //把抓取到一行记录保存到二维数组
				};
				while( $row=mysqli_fetch_array($resultthree,MYSQLI_ASSOC) ){
				$datathree[] = $row; //把抓取到一行记录保存到二维数组
				};
				while( $row=mysqli_fetch_array($resultfour,MYSQLI_ASSOC) ){
				$datafour[] = $row; //把抓取到一行记录保存到二维数组
				};
				while( $row=mysqli_fetch_array($resultfive,MYSQLI_ASSOC) ){
				$datafive[] = $row; //把抓取到一行记录保存到二维数组
				};
			 
			  ?>
			  
			  <!--第1张表-->
			  <hr/>
			  <div class="mytablehead">普通库所列表</div>			  
			  <table  border="1" width="1160" >
				<tr>
					<th>ID</th>
					<th>名字</th>
					<th>类型</th>
					<th>容量</th>
					<th>节点描述</th>
				</tr>
				<?php
				  for($i=0; $i<count($dataone); $i++){
				    $row = $dataone[$i];
				?>
					<tr>
						<td><?php echo $row['id']?></td>
						<td><?php echo $row['name']?></td>
						<td><?php echo $row['type']?></td>
						<td><?php echo $row['capacity']?></td>
						<td><?php echo $row['description']?></td>
					</tr>
				<?php
				  }	
				?>
			  </table>
			  <br/>
			  
			  <!--第2张表-->
			    <hr/>	
			   <div class="mytablehead">函数列表</div>			  
			  <table  border="1" width="1160" >
				<tr>
					<th>ID</th>
					<th>分布函数</th>
					<th>参数1</th>
					<th>参数2</th>
					<th>分布函数描述</th>
				</tr>
				<?php
				  for($i=0; $i<count($datatwo); $i++){
				    $row = $datatwo[$i];
				?>
					<tr>
						<td><?php echo $row['id']?></td>
						<td><?php echo $row['distributefunction']?></td>
						<td><?php echo $row['parameter1']?></td>
						<td><?php echo $row['parameter2']?></td>
						<td><?php echo $row['distributionfunctiondescription']?></td>
					</tr>
				<?php
				  }	
				?>
			  </table>
			  <br/>
			  
			  
			  <!--第3张表-->
			    <hr/>	
			    <div class="mytablehead">坐标列表</div>			  
			  <table  border="1" width="1160" >
				<tr>
					<th>ID</th>
					<th>名字</th>
					<th>横坐标</th>
					<th>纵坐标</th>
				</tr>
				<?php
				  for($i=0; $i<count($datathree); $i++){
				    $row = $datathree[$i];
				?>
					<tr>
						<td><?php echo $row['id']?></td>
						<td><?php echo $row['name']?></td>
						<td><?php echo $row['eleft']?></td>
						<td><?php echo $row['etop']?></td>
					</tr>
				<?php
				  }	
				?>
			  </table>
			  <br/>
			  
			  
			  <!--第4张表-->
			    <hr/>	
			    <div class="mytablehead">资源库所列表</div>			  
			  <table  border="1" width="1160" >
				<tr>
					<th>ID</th>
					<th>名字</th>
					<th>资源数量</th>
					<th>资源类型</th>
					<th>资源成本</th>
					<th>超时成本</th>
					<th>固定成本</th>
					<th>最大超时</th>
					<th>时间设定</th>
					<th>资源描述</th>
				</tr>
				<?php
				  for($i=0; $i<count($datafour); $i++){
				    $row = $datafour[$i];
				?>
					<tr>
						<td><?php echo $row['id']?></td>
						<td><?php echo $row['name']?></td>
						<td><?php echo $row['resourcesnums']?></td>
						<td><?php echo $row['resourcestype']?></td>			
						<td><?php echo $row['resourcescost']?></td>
						<td><?php echo $row['timeoutcost']?></td>
						<td><?php echo $row['fixedcost']?></td>
						<td><?php echo $row['maxtimeout']?></td>
						<td><?php echo $row['timesetting']?></td>
						<td><?php echo $row['sourcedescription']?></td>
					</tr>
				<?php
				  }	
				?>
			  </table>
			  <br/>
			  
			  
			  <!--第5张表-->
			    <hr/>
			    <div class="mytablehead">变迁列表</div>				  
			  <table  border="1" width="1160" >
				<tr>
					<th>ID</th>
					<th>名字</th>
					<th>变迁类型</th>
					<th>变迁时间</th>
					<th>变迁描述</th>
				</tr>
				<?php
				  for($i=0; $i<count($datafive); $i++){
				    $row = $datafive[$i];
				?>
					<tr>
						<td><?php echo $row['id']?></td>
						<td><?php echo $row['name']?></td>
						<td><?php echo $row['transtype']?></td>
						<td><?php echo $row['transtime']?></td>
						<td><?php echo $row['timetransdescription']?></td>
					</tr>
				<?php
				  }	
				?>
			  </table>
			  <br/>
			  
			  
			  
 <footer class="navbar-fixed-bottom text-center">
			南京信息工程大学<span>&copy; 2018</span>
</footer>
 </body>
</html>
