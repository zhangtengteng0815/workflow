/**
 * @author ztt
 */
$(document).ready(function() {
					var costall=[];
					$.ajax({
											url: "displayphp/getsourceanaylise.php",
											type: "post",
											dataType: "JSON",
											async: false,
											success:function(responseText,responseStatus){
													receivedjson = JSON.parse(responseText);
													var backresource=[];
													var backorder=[];
													//将接收到的数据分开
													for (var i=0; i < receivedjson.length; i++) {
														 
															 if (receivedjson[i].hasOwnProperty("sourcedescription")) {
															  	backresource.push(receivedjson[i]);
															};
															 if (receivedjson[i].hasOwnProperty("mname")) {
															 	backorder.push(receivedjson[i]);
															};
													};
												
												//接收仿真时间
												var simtime=window.location.search;
												simtime=simtime.substring(9);
												
												//将图形中的资源数组提取出来
												var havesource=[];
												for (var i=0; i < backorder.length; i++) {
												  	for (var j=0; j < backresource.length; j++) {
															if (backresource[j].myname==backorder[i].mname) {
																	havesource.push(backresource[j]);
															};	
													  };
												};

												for (var i=0; i < havesource.length; i++) {
													
												  	var cost1=parseFloat(havesource[i].resourcesnums)*(parseFloat(havesource[i].resourcescost)+parseFloat(havesource[i].fixedcost));
													var istimeout=false;
													if (parseFloat(simtime)>parseFloat(havesource[i].maxtimeout)) {
														cost1=cost1+parseFloat(havesource[i].timeoutcost);
														istimeout=true;
													};
													var arr={
														"myname":havesource[i].myname,
														"cost":cost1,
														"number":parseFloat(havesource[i].resourcesnums),
														"istimeout":istimeout
													};
										
													console.log(havesource[i].myname);
													console.log(arr);
													//costall.push("123456789");
													costall.push(arr);
													console.log(costall);
												};
											console.log(havesource.length);
											if (costall.length==1) {
												
														//创建table表格
														var table=document.createElement("table");
														var tr0=document.createElement("tr");
														var th1=document.createElement("th");
														var th2=document.createElement("th");
														var th3=document.createElement("th");
														var th4=document.createElement("th");
																th1.innerHTML="资源名";
																th2.innerHTML="资源成本";
																th3.innerHTML="资源数";
																th4.innerHTML="是否超时";
																tr0.appendChild(th1);
																tr0.appendChild(th2);
																tr0.appendChild(th3);
																tr0.appendChild(th4);
																table.appendChild(tr0);
														var tr1=document.createElement("tr");
														for(var j=0;j<costall.length;j++){
															//alert(list);
															//创建td
															var td1=document.createElement("td");
															var td2=document.createElement("td");
															var td3=document.createElement("td");
															var td4=document.createElement("td");
															console.log(costall);
															td1.innerHTML=costall[j].myname;
															td2.innerHTML=costall[j].cost;
															td3.innerHTML=costall[j].number;
															td4.innerHTML=costall[j].istimeout;
															tr1.appendChild(td1);
															tr1.appendChild(td2);
															tr1.appendChild(td3);
															tr1.appendChild(td4);
														};
														table.appendChild(tr1); 
														
														
														var tr2=document.createElement("tr");
														var td21=document.createElement("td");
														var td22=document.createElement("td");
														var td23=document.createElement("td");
														var td24=document.createElement("td");
														var totalresource=0;
														var totalresourcenum=0;
														for (var i=0; i < costall.length; i++) {
														 	totalresource=totalresource+costall[i].cost;
														 	totalresourcenum=totalresourcenum+costall[i].number;
														};
														td21.innerHTML="总计";
														td22.innerHTML=totalresource;
														td23.innerHTML=totalresourcenum;
														tr2.appendChild(td21);
														tr2.appendChild(td22);
														tr2.appendChild(td23);
														tr2.appendChild(td24);
														table.appendChild(tr2); 
														
														
													
														
														document.getElementById("mytable").appendChild(table);
													
												
											} else{
												
														//创建table表格
														var table=document.createElement("table");
														var tr0=document.createElement("tr");
														var th1=document.createElement("th");
														var th2=document.createElement("th");
														var th3=document.createElement("th");
														var th4=document.createElement("th");
																th1.innerHTML="资源名";
																th2.innerHTML="资源成本";
																th3.innerHTML="资源数";
																th4.innerHTML="是否超时";
																tr0.appendChild(th1);
																tr0.appendChild(th2);
																tr0.appendChild(th3);
																tr0.appendChild(th4);
																table.appendChild(tr0);
														
														for(var j=0;j<costall.length;j++){
															var tr1=document.createElement("tr");
															var td1=document.createElement("td");
															var td2=document.createElement("td");
															var td3=document.createElement("td");
															var td4=document.createElement("td");
															console.log(costall);
															td1.innerHTML=costall[j].myname;
															td2.innerHTML=costall[j].cost;
															td3.innerHTML=costall[j].number;
															td4.innerHTML=costall[j].istimeout;
															tr1.appendChild(td1);
															tr1.appendChild(td2);
															tr1.appendChild(td3);
															tr1.appendChild(td4);
															table.appendChild(tr1); 
														};
														
														var tr2=document.createElement("tr");
														var td21=document.createElement("td");
														var td22=document.createElement("td");
														var td23=document.createElement("td");
														var td24=document.createElement("td");
														var totalresource=0;
														var totalresourcenum=0;
														for (var i=0; i < costall.length; i++) {
														 	totalresource=totalresource+costall[i].cost;
														 	totalresourcenum=totalresourcenum+costall[i].number;
														};
														td21.innerHTML="总计";
														td22.innerHTML=totalresource;
														td23.innerHTML=totalresourcenum;
														tr2.appendChild(td21);
														tr2.appendChild(td22);
														tr2.appendChild(td23);
														tr2.appendChild(td24);
														table.appendChild(tr2); 
														
															
														document.getElementById("mytable").appendChild(table);	
			
															//console.log(timedate);
															//为data准备的数据
															var arr2=new Array();//纵坐标
															var label=new Array();//横坐标
															for (var i=0; i < costall.length; i++) {
															  arr2.push(costall[i].cost);
															  label.push(costall[i].myname);
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
															};
															
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
															   };
															
															    window.onload = function(){
															        var ctx = document.getElementById("myChart").getContext("2d");
															        window.myLine = new Chart(ctx).Line(lineChartData,defaults); 
															    };
											};
												console.log(costall);	
												console.log(simtime);	
												console.log(backresource);
												console.log(backorder);
												console.log(havesource);
												console.log(typeof(havesource[0].resourcesnums));
												console.log(typeof(simtime));
												console.log(receivedjson);
											},
											error:function(msg){
												alert("打开失败");
											}
									});		
																	
			});
		