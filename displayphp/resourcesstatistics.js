/**
 * @author ztt
 */
$(document).ready(function() {
					var costall=[];
					$.ajax({
											url: "displayphp/getsource.php",
											type: "post",
											dataType: "JSON",
											async: false,
											success:function(responseText,responseStatus){
													receivedjson = JSON.parse(responseText);
													var backresource=[];
													var backorder=[];
													
													for (var i=0; i < receivedjson.length; i++) {
														 
															 if (receivedjson[i].hasOwnProperty("sourcedescription")) {
															  	backresource.push(receivedjson[i]);
															};
															 if (receivedjson[i].hasOwnProperty("mname")) {
															 	backorder.push(receivedjson[i]);
															};
													};
													
													var havesource=[];
													for (var i=0; i < backorder.length; i++) {
													  	for (var j=0; j < backresource.length; j++) {
																if (backresource[j].myname==backorder[i].mname) {
																		havesource.push(backresource[j]);
																};	
														  };
													};
												
													for (var i=0; i < havesource.length; i++) {																								  	
														var arr={
															"myname":havesource[i].myname,
															"number":parseFloat(havesource[i].resourcesnums)
														};
														costall.push(arr);
													};
													
													var table=document.createElement("table");
													var tr0=document.createElement("tr");
													var th1=document.createElement("th");
													var th2=document.createElement("th");
													th1.innerHTML="资源名";
													th2.innerHTML="资源数";
													tr0.appendChild(th1);
													tr0.appendChild(th2);
													table.appendChild(tr0);
													
													for (var i=0; i < costall.length; i++) {
													  		var tr1=document.createElement("tr");
															var td1=document.createElement("td");
															var td2=document.createElement("td");
															td1.innerHTML=costall[i].myname;
															td2.innerHTML=costall[i].number;
															tr1.appendChild(td1);
															tr1.appendChild(td2);
															table.appendChild(tr1); 
													};
													
													var tr2=document.createElement("tr");
														var td21=document.createElement("td");
														var td22=document.createElement("td");
														var totalresource=0;
														var totalresourcenum=0;
														for (var i=0; i < costall.length; i++) {
														 	totalresourcenum=totalresourcenum+costall[i].number;
														};
														td21.innerHTML="总计";
														td22.innerHTML=totalresourcenum;
														tr2.appendChild(td21);
														tr2.appendChild(td22);
														table.appendChild(tr2); 
														document.getElementById("mytable").appendChild(table);	
														
														
														var arr2=new Array();//纵坐标
															var label=new Array();//横坐标
															for (var i=0; i < costall.length; i++) {
															  arr2.push(costall[i].number);
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
													
											},
											error:function(msg){
												alert("打开失败");
											}
									});		
																	
});
		