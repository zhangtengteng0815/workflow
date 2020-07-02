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
		<script src="Chart/js/Chart-1.0.1-beta.4.js"></script>
		<script src="workflow.js"></script>
		<style type="text/css">
				#timedheader{
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
  			<div id="timedheader">
  				<header class="page-header"><h1>工作流建模系统</h1></header>
  			</div>
			  <?php
			  	header("Content-Type:text/html;charset=utf8");
				$conn = mysqli_connect('127.0.0.1','root','','myworkflow');
				mysqli_query($conn, 'SET NAMES utf8');
			
				$sqlone = 'SELECT * FROM simtime';

				mysqli_query($conn,'SET NAMES utf8');
				$resultone = mysqli_query($conn, $sqlone);

				$dataone =array();
				
				while( $row=mysqli_fetch_array($resultone,MYSQLI_ASSOC) ){
				$dataone[] = $row; //把抓取到一行记录保存到二维数组
				};
			 
			  ?>
			  
			  <!--第1张表-->
			  <hr/>
			  <div class="mytablehead">仿真时间</div>			  
			  <table  border="1" width="1160" >
				<tr>
					<th>ID</th>
					<th>分布函数</th>
					<th>仿真时间</th>
					<th>库所数量</th>
					<th>变迁数量</th>
				</tr>
				<?php
				  for($i=0; $i<count($dataone); $i++){
				    $row = $dataone[$i];
				?>
					<tr>
						<td><?php echo $row['id']?></td>
						<td><?php echo $row['distributefunction']?></td>
						<td><?php echo $row['simtime']?></td>
						<td><?php echo $row['placenum']?></td>
						<td><?php echo $row['timetrans']?></td>
					</tr>
				<?php
				  }	
				?>
			  </table>
			  <br/>
			
			<div style="text-align:center;margin: 10px auto">
		    	<canvas id="myChart" width="1000" height="400"></canvas>
			</div>
	
	
			<!--第2张表-->
			  <hr/>
			  <div class="mytablehead">事务时间统计</div>			  
			  <table  border="1" width="1160" >
				<tr>
					<th>仿真次数</th>
					<th>事务数</th>
					<th>平均仿真时间</th>
				</tr>
				<?php
				  for($i=0; $i<count($dataone); $i++){
				    $row = $dataone[$i];
				?>
					<tr>
						<td><?php echo $i+1?></td>
						<td><?php echo $row['placenum']+$row['timetrans']?></td>
						<td><?php echo $row['simtime']/($row['placenum']+$row['timetrans'])?></td>
					</tr>
				<?php
				  }	
				?>
			  </table>
			  <br/>
			<div>
				<div style="float: right;padding-top:160px;padding-right: 80px">
					<div  style="width: 30px;height: 30px;background-color:rgba(220,220,220,0.5)"></div>
					<div>事务数</div>
					<div style="width: 30px;height: 30px;background-color:rgba(151,187,205,0.5) "></div>
					<div>平均仿真时间</div>
				</div>
				<div style="text-align:center;margin: 10px auto">
		    		<canvas id="myChart2" width="1000" height="400"></canvas>
				</div>
			</div>	
 <footer class="navbar-fixed-bottom text-center">
			南京信息工程大学<span>&copy; 2018</span>
</footer>

<script>
				var timedate=[];
					$.ajax({
									url: "displayphp/getsimtime.php",
									type: "post",
									dataType: "JSON",
									async: false,
									success:function(responseText,responseStatus){			
													//（1.）接收数据库返回的数据
													var receivedjson = JSON.parse(responseText);//接收数据库返回数据
													timedate=receivedjson;
										}
								});
				
				//console.log(timedate);
				//为data准备的数据
				var arr2=new Array();
				var label=new Array();
				for (var i=0; i < timedate.length; i++) {
				  arr2.push(timedate[i].simtime);
				  label.push(timedate[i].id);
				};
	
				//用于存放图表上的数据
				var lineChartData = {  
				//表的X轴参数
				labels : label,
				datasets : [
				    {
				        fillColor : "transparent",     //背景色，常用transparent透明
				        strokeColor : "rgba(220,220,220,1)",  //线条颜色，也可用"#ffffff"
				        pointColor : "rgba(220,220,220,1)",   //点的填充颜色
				        pointStrokeColor : "#fff",            //点的外边框颜色
				        //data : [65,59,32,29,46,55,40]      //点的Y轴值
				    },
				
				    {
				        fillColor : "transparent",
				        strokeColor : "rgba(151,187,205,1)",
				        pointColor : "rgba(151,187,205,1)",
				        pointStrokeColor : "#fff",
				        data : []    //data中的参数，通过下方for循环，获取arr2中的数据
				    }
				  ]
				}
				
				   for(var i = 0; i < arr2.length;i++)
				   { 
				    lineChartData.datasets[1].data.push(arr2[i]);//将数组arr2中的值写入data
				   }
				
				//定义图表的参数   
				var defaults = {    
				    scaleStartValue :null,     // Y 轴的起始值
				    scaleLineColor : "rgba(0,0,0,.1)",    // Y/X轴的颜色
				    scaleLineWidth : 1,        // X,Y轴的宽度
				    scaleShowLabels : true,    // 刻度是否显示标签, 即Y轴上是否显示文字   
				    scaleLabel : "<%=value%>", // Y轴上的刻度,即文字  
				    scaleFontFamily : "'Arial'",  // 字体  
				    scaleFontSize : 20,        // 文字大小 
				    scaleFontStyle : "normal",  // 文字样式  
				    scaleFontColor : "#666",    // 文字颜色  
				    scaleShowGridLines : true,   // 是否显示网格  
				    scaleGridLineColor : "rgba(0,0,0,.05)",   // 网格颜色
				    scaleGridLineWidth : 2,      // 网格宽度  
				    bezierCurve : false,         // 是否使用贝塞尔曲线? 即:线条是否弯曲     
				    pointDot : true,             // 是否显示点数  
				    pointDotRadius : 8,          // 圆点的大小  
				    pointDotStrokeWidth : 1,     // 圆点的笔触宽度, 即:圆点外层边框大小 
				    datasetStroke : true,        // 数据集行程
				    datasetStrokeWidth : 2,      // 线条的宽度, 即:数据集
				    datasetFill : false,         // 是否填充数据集 
				    animation : true,            // 是否执行动画  
				    animationSteps : 60,          // 动画的时间   
				    animationEasing : "easeOutQuart",    // 动画的特效   
				    onAnimationComplete : null    // 动画完成时的执行函数   
				    }
				
				    
					var shiwuarr1=new Array();
					var shiwuarr2=new Array();
					var shiwulabel=new Array();
					for (var i=0; i < timedate.length; i++) {
					  shiwuarr1.push(parseInt(timedate[i].timetrans)+parseInt(timedate[i].	placenum));
					  shiwuarr2.push(timedate[i].simtime/(parseInt(timedate[i].timetrans)+parseInt(timedate[i].	placenum)));
					  shiwulabel.push(timedate[i].id);
					};
				
				 var data = {
					labels :shiwulabel ,
					datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							data : shiwuarr1
						},
						{
							fillColor : "rgba(151,187,205,0.5)",
							strokeColor : "rgba(151,187,205,1)",
							data :  shiwuarr2
						}
					]
				}
				
				var defaults2 = {	
					scaleOverlay : false,
					scaleOverride : false,
					scaleSteps : null,
					scaleStepWidth : null,
					scaleStartValue : null,
					scaleLineColor : "rgba(0,0,0,.1)",
					scaleLineWidth : 1,
					scaleShowLabels : true,
					scaleLabel : "<%=value%>",
					scaleFontFamily : "'Arial'",
					scaleFontSize : 12,
					scaleFontStyle : "normal",
					scaleFontColor : "#666",	
					scaleShowGridLines : true,
					scaleGridLineColor : "rgba(0,0,0,.05)",
					scaleGridLineWidth : 1,	
					barShowStroke : true,
					barStrokeWidth : 2,
					barValueSpacing : 5,
					barDatasetSpacing : 1,
					animation : true,
					animationSteps : 60,
					animationEasing : "easeOutQuart",
					onAnimationComplete : null				
				}
				
				  window.onload = function(){
				        var ctx = document.getElementById("myChart").getContext("2d");
				        window.myLine = new Chart(ctx).Line(lineChartData,defaults); 
				    	var ctx2 = document.getElementById("myChart2").getContext("2d");
						var myNewChart = new Chart(ctx2).Bar(data,defaults2);
				    }

</script>
 </body>
</html>
