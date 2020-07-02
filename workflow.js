/**
 * @author zhangtengteng
 */

/*所有方法*/

		/*1.控件拖动时改变jeson数据*/
			function jsonchange(objs){
				for(var i = 0; i < objs.length; i++) {
					var newTop=$("#"+objs[i].myname).offset().top-$('#drawing').offset().top+16;
					var newLeft=$("#"+objs[i].myname).offset().left-$('#drawing').offset().left+16;
					objs[i].mytop=newTop;
					objs[i].myleft=newLeft;
				}
			};
			
		/*2.画直线*/
			function drawDiagonal(a,b,c,d) {  
				var canvas = document.getElementById('mycanvas');  
				var context = canvas.getContext('2d');  
				context.beginPath();  
				context.moveTo(a, b);  
				context.lineTo(c, d);  
				//context.scale(0.5,0.5);
				context.stroke();  
			};
			
		//3.箭头的画法
			function getAngle(a,b,c,d){
			       	var x = Math.abs(c-a);
			        var y = Math.abs(d-b);
			        var z = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
					var cos=x/z;
					var angle = Math.acos(cos);//用反三角函数求弧度
			        //var angle = Math.floor(180/(Math.PI/radina));//将弧度转换成角度
					//return angle;
					var point1x=0;
					var point1y=0;
					var point2x=0;
					var point2y=0;
						//第三象限
				   	if((c<a)&&(d<b)){
						//angle=angle-Math.PI ;
						if(angle>Math.PI/3){
							 point1x=c+10*Math.cos(angle-Math.PI/3);
							 point1y=d+10*Math.sin(angle-Math.PI/3);
							 point2x=c-10*Math.cos(Math.PI-angle-Math.PI/3);
							 point2y=d+10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(Math.PI/6<angle<Math.PI/3){
							 point1x=c+10*Math.cos(Math.PI/3-angle);
							 point1y=d-10*Math.sin(Math.PI/3-angle);
							point2x=c-10*Math.cos(Math.PI-angle-Math.PI/3);
							point2y=d+10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(angle<Math.PI/6){
							 point1x=c+10*Math.cos(Math.PI/3-angle);
							 point1y=d-10*Math.sin(Math.PI/3-angle);
							 point2x=c+10*Math.cos(angle+Math.PI/3);
							point2y=d+10*Math.sin(angle+Math.PI/3);
						}
					}
					//第一象限
					else if((c>a)&&(d>b)){
						//angle=Math.PI -angle;
						if(angle>Math.PI/3){
							 point1x=c-10*Math.cos(angle-Math.PI/3);
							 point1y=d-10*Math.sin(angle-Math.PI/3);
							 point2x=c+10*Math.cos(Math.PI-angle-Math.PI/3);
							 point2y=d-10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(Math.PI/6<angle<Math.PI/3){
							 point1x=c-10*Math.cos(Math.PI/3-angle);
							 point1y=d+10*Math.sin(Math.PI/3-angle);
							 point2x=c+10*Math.cos(Math.PI-angle-Math.PI/3);
							point2y=d-10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(angle<Math.PI/6){
							 point1x=c-10*Math.cos(Math.PI/3-angle);
							 point1y=d+10*Math.sin(Math.PI/3-angle);
							 point2x=c-10*Math.cos(angle+Math.PI/3);
							point2y=d-10*Math.sin(angle+Math.PI/3);
						}
					   }
					//第二象限
					else if((c<a)&&(d>b)){
						//return angle;
						if(angle>Math.PI/3){
							 point1x=c+10*Math.cos(angle-Math.PI/3);
							 point1y=d-10*Math.sin(angle-Math.PI/3);
							 point2x=c-10*Math.cos(Math.PI-angle-Math.PI/3);
							 point2y=d-10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(Math.PI/6<angle<Math.PI/3){
							 point1x=c+10*Math.cos(Math.PI/3-angle);
							point1y=d+10*Math.sin(Math.PI/3-angle);
							 point2x=c-10*Math.cos(Math.PI-angle-Math.PI/3);
							 point2y=d-10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(angle<Math.PI/6){
							 point1x=c+10*Math.cos(Math.PI/3-angle);
							point1y=d+10*Math.sin(Math.PI/3-angle);
							 point2x=c+10*Math.cos(angle+Math.PI/3);
							 point2y=d-10*Math.sin(angle+Math.PI/3);
						}	
					   }
					//第四象限
					else if((c>a)&&(d<b)){
						//angle=-angle; 
						if(angle>Math.PI/3){
							 point1x=c-10*Math.cos(angle-Math.PI/3);
							 point1y=d+10*Math.sin(angle-Math.PI/3);
						 	point2x=c+10*Math.cos(Math.PI-angle-Math.PI/3);
							point2y=d+10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(Math.PI/6<angle<Math.PI/3){
							 point1x=c-10*Math.cos(Math.PI/3-angle);
							point1y=d-10*Math.sin(Math.PI/3-angle);
							 point2x=c+10*Math.cos(Math.PI-angle-Math.PI/3);
							 point2y=d+10*Math.sin(Math.PI-angle-Math.PI/3);
						}else if(angle<Math.PI/6){
							 point1x=c-10*Math.cos(Math.PI/3-angle);
							point1y=d-10*Math.sin(Math.PI/3-angle);
							 point2x=c-10*Math.cos(angle+Math.PI/3);
							 point2y=d+10*Math.sin(angle+Math.PI/3);
						}
					   }
					//在x轴正方向
					else if((c>a)&&(d==b)){
						//angle=0;
						 point1x=c-10*Math.cos(Math.PI/3);
						 point1y=d+10*Math.sin(Math.PI/3);
						 point2x=c-10*Math.cos(Math.PI/3);
						 point2y=d-10*Math.sin(Math.PI/3);
					}
					//在x轴负方向
					else if((c<a)&&(d==b)){
						//angle=-Math.PI;
						 point1x=c+10*Math.cos(Math.PI/3);
						 point1y=d+10*Math.sin(Math.PI/3);
						point2x=c+10*Math.cos(Math.PI/3);
						point2y=d-10*Math.cos(Math.PI/3);
					}
					//在y轴正方向
					else if((c==a)&&(d>b)){
						//angle=Math.PI/2;
						 point1x=c+10*Math.sin(Math.PI/3);
						 point1y=d-10*Math.cos(Math.PI/3);
						point2x=c-10*Math.sin(Math.PI/3);
						point2y=d-10*Math.cos(Math.PI/3);
					}
					//在y轴负方向
					else if((c==a)&&(d<b)){
						//angle=-Math.PI/2;
						 point1x=c+10*Math.sin(Math.PI/3);
						 point1y=d+10*Math.cos(Math.PI/3);
						 point2x=c-10*Math.sin(Math.PI/3);
						 point2y=d+10*Math.cos(Math.PI/3);
					}
					else if((c==a)&&(d==b)){
						alert ("输入有误");
					}
					//console.log(angle);
					//console.log(a,b,c,d);
					//console.log(point1x,point1y,point2x,point2y);
					drawDiagonal(c,d,point1x,point1y);
					drawDiagonal(c,d,point2x,point2y);
					  // return angle
			   };
		
		//4.a的数组是否包含b数组
		function iscontain(a,b){
			for (var i=0; i < a.length; i++) {
					if ((a[i].myleft==b[0].myleft)&&(a[i].mytop==b[0].mytop)) {
							for (var i=0; i < a.length; i++) {
								  if ((a[i].myleft==b[1].myleft)&&(a[i].mytop==b[1].mytop)) {
								  		return true;
								  };
							};
					} 
			};
		};
		
		/*各种函数的方法*/
					//5.二项式分布
					function 	Binomialfunc(a) {
					  	var rand=Math.random();
					  	if (rand<a) {
					  		return true;
					  	} else{
					  		return false;
					  	};
					};
					//6.泊松分布
					function 	poissonfunc(a) {
					  	var rand=Math.random();
					  	var p=a*Math.pow(Math.E ,-a);
					  	if (rand<p) {
					  		return true;
					  	} else{
					  		return false;
					  	};
					};
					//7.均与分布
					function 	evenlyfunc(a,b) {
					  	var rand=Math.random();
					  	var p=1/(b-a);
					  	if (rand<p) {
					  		return true;
					  	} else{
					  		return false;
					  	};
					};
					//8.正态分布
					function 	normalfunc(a) {
					  	var rand=Math.random();
					  	var p=1/Math.pow(Math.PI*2 ,1/2)*Math.pow(Math.E ,-Math.pow( a,2)/2);
					  	if (rand<p) {
					  		return true;
					  	} else{
					  		return false;
					  	};
					};
					//9.指数分布
					function 	indexfunc(a,b) {
					  	var rand=Math.random();
					  	var p=a*Math.pow(Math.E ,-a*b);
					  	if (rand<p) {
					  		return true;
					  	} else{
					  		return false;
					  	};
					};
					//10.瑞利分布
					function 	rayleighfunc(a,b) {
					  	var rand=Math.random();
					  	var p=2/a*b/a*Math.pow(Math.E ,-Math.pow(b/a ,2));
					  	if (rand<p) {
					  		return true;
					  	} else{
					  		return false;
					  	};
					};
				

$(document).ready(function() {

/*workflow.html中js内容*/
			var yesDrag=true;	 					//用于画布显示与否
			var placeno=0;							//用于创建控件的名字
			var timeTransitno=0;					//用于创建控件的名字
			var jesonarray=[];						//控件的数据存储,用于所有的控件
			var coord=[];								//画布两次点击存储的数据，用于画直线
			var normalplaceno=0;						//用于创建普通库所的名字
			//var temporaryID;	
			var normalarr=[];						//专门用于存储普通控件
			var sourcearr=[];						//专门用于存储资源控件
			var timetransarr=[];					//专门用于存储时间控件
			var hasarr=[];							//用于存储所有库所
			
			var orderarr=[];						//用于存储所画控件的顺序
			var neworder=[];						//用于接收新的画图顺序包含所有信息
			var neworderarr=[];					//将neworder数组变为一个数组只保留了名字
			
			var receivedjson=[];				//用于初始化接收数据库数据
			
			var simtime=0;						//仿真时间
			var backnormalarr=[];				//用于接收数据库返回的数据
			var backfunctionarr=[];
			var backlocationarr=[];
			var backsourcearr=[];
			var backtimetransarr=[];
			
		
			var temporaryarr=[];			//用于画线时的画图顺序
				/*1.添加普通库所*/	 
				
			$('#imgzeo').bind('click',function(){
				var newname="normalplace"+normalplaceno;
				var $newplace=$(this).clone();
				$newplace.removeAttr("id");
				$newplace.attr("id",newname);
				$newplace.attr("class","clicknormalplace");
				//data-placement="bottom" title="添加普通库所"
				$newplace.attr("data-placement","bottom");
				$newplace.attr("title",newname);
			   // $($newplace).draggable({ containment: 'parent' });
				$('#drawing').append($newplace);	
				//$('#processadd').html("Hello <b>world</b>!");
				
				/*
				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <img style = 'margin-left: 18px;' src='myico/normalplaces.png'/><lable style = 'margin-left: 80px;'>普通库所</lable>"
						+newname+"<lable style = 'margin-left:109px;'>"+normalplaceno+"</lable></ul>"); 
				*/
				
				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'><img src='myico/normalplaces.png'/></div><div  class='col-md-5'>普通库所"+newname+"</div><div  class='col-md-4'> "+normalplaceno+"</div></ul>"); 
						
				$('#processadd').append(divobj);
				normalplaceno++;
				var array={
					"myname":newname,
					"mytop":$($newplace).offset().top-$('#drawing').offset().top+16,
					"myleft":$($newplace).offset().left-$('#drawing').offset().left+16
				};
			  	jesonarray.push(array);
			  	normalarr.push(array);
			  	hasarr.push(array);
			});
				
				
				
			/* 2.添加资源库所*/
			$('#imgone').bind('click',function(){
				var newname="myplace"+placeno;
				var $newplace=$(this).clone();
				$newplace.removeAttr("id");
				$newplace.attr("id",newname);
				$newplace.attr("class","clickmyplace");
				$newplace.attr("data-placement","bottom");
				$newplace.attr("title",newname);
			   // $($newplace).draggable({ containment: 'parent' });
				$('#drawing').append($newplace);	
				//$('#processadd').html("Hello <b>world</b>!");
				/*
				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <img style = 'margin-left: 18px;' src='myico/sourceplaces.png'/><lable style = 'margin-left: 80px;'>资源库所</lable>"+newname+"<lable style = 'margin-left:130px;'>"+placeno+"</lable></ul>"); 
				*/
				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'><img src='myico/sourceplaces.png'/></div><div  class='col-md-5'>资源库所"+newname+"</div><div  class='col-md-4'> "+placeno+"</div></ul>"); 
				$('#processadd').append(divobj);
				placeno++;
				var array={
					"myname":newname,
					"mytop":$($newplace).offset().top-$('#drawing').offset().top+16,
					"myleft":$($newplace).offset().left-$('#drawing').offset().left+16
				};
			  	jesonarray.push(array);
			  	sourcearr.push(array);
			  	hasarr.push(array);
			});
		
			/*3.添加时间库所*/
			$('#imgtwo').bind('click',function(){
				//alert(123);
				var newname="mytimeTransit"+timeTransitno;
				var $newplace=$(this).clone();
				$newplace.attr("class","clickmytimeTransit");
				$newplace.removeAttr("id");
				$newplace.attr("id",newname);
				$newplace.attr("data-placement","bottom");
				$newplace.attr("title",newname);
				//$($newplace).draggable({ containment: 'parent' });
				$('#drawing').append($newplace);
				/*
				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <img style = 'margin-left: 18px;' src='myico/timetranss.png'/><lable style = 'margin-left:80px;'>变迁</lable>"+newname+"<lable style = 'margin-left:123px;'>"+timeTransitno+"</lable></ul>"); 
				*/
				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'><img src='myico/timetranss.png'/></div><div  class='col-md-5'>变迁"+newname+"</div><div  class='col-md-4'> "+timeTransitno+"</div></ul>"); 
				$('#processadd').append(divobj);
				timeTransitno++;	
				var array={
					"myname":newname,
					"mytop":$($newplace).offset().top-$('#drawing').offset().top+16,
					"myleft":$($newplace).offset().left-$('#drawing').offset().left+16
				};	
				jesonarray.push(array);
				timetransarr	.push(array);										
			});
			
			
			/* 4.手指normalArc的绑定事件*/
			$('#normalArc').bind('click',function(){
					for (var i=0; i <jesonarray.length; i++) {
					  	var myname=""+jesonarray[i].myname;
					  	$('#'+myname).draggable({ containment: 'parent' });
					};
				});
				
			
			/*5.点击进入画布进行画线*/
				$('#drawingline').click(function(){
							//清除画布
								var $canvas=document.getElementById('mycanvas'); 
								var ctx=$canvas.getContext("2d");
								ctx.clearRect(0,0,1008,530);
								//控件数组改变
								jsonchange(normalarr);
								jsonchange(sourcearr);
								jsonchange(timetransarr);
								jsonchange(jesonarray);
								jsonchange(hasarr);	
								orderarr=[];
								//return jesonarray;
								if(yesDrag==true){
									//$("#drawing >img").attr("class");
									//$("#drawing >img").attr("draggable","false");
									//$("#mycanvas").show();
									$("#drawing").attr("style","z-index: 0");
									$("#mycanvas").attr("style","z-index: 1");
									yesDrag=false;
									return yesDrag;
								 }else{
						        	//$("#drawing >img").attr("class");
									//$("#drawing >img").attr("draggable","true");
									//$("#mycanvas").hide();
									$("#drawing").attr("style","z-index: 1");
									$("#mycanvas").attr("style","z-index: 0");
									yesDrag=true;
									return yesDrag;
								 };	
				});
	
			/*6.数据添加到数据库*/
			$("#onload").click(function(){				
						$.ajax({
							url: "server.php",
							type: "post",
							dataType: "JSON",
							async: false,
							data:{jesonarray:jesonarray},
							success:function(data){
								alert("保存成功");
								console.log(jesonarray);
							},
							error:function(msg){
								alert("保存失败");
								//console.log(msg);
							}
						});
				
			});
			
			/*7设置函数的点击事件*/
			$('#setfunction').bind('click',function(){	
				 window.open('setfunction.html');	
				});
			
			/* 8.place元素的点击添加信息加载clickmytplace页面*/		
			$('.clickmyplace').live('click',function(){		  
			  		
			  		var name=this.id;
					var urlname="clickmyplace.html?"+"name="+name;
			  		window.open(urlname,"_blank","width=200,height=200");
			  		//window.open("clickmyplace.html","_blank","width=200,height=200");
			  		
			  	});
			
			 /* 9.点击mytimeTransit元素加载clickmytimetransition页面*/
			$('.clickmytimeTransit').live('click',function(){		  
			
			  		var name=this.id;
					var urlname="clickmytimetransit.html?"+"name="+name;
			  		window.open(urlname,"_blank","width=200,height=200");
			  		
			  	});
			
				//10.点击canvas里面普通库所的点击事件打开
				$('.clicknormalplace').live('click',function(){		  
			  		var name=this.id;
					var urlname="clicknormalplace.html?"+"name="+name;
			  		window.open(urlname,"_blank","width=200,height=200");
			  		
			  	});  	
			//var normalarr=[];						//专门用于存储普通控件
			//var sourcearr=[];						//专门用于存储资源控件
			//var timetransarr=[];					//专门用于存储时间控件
			//var hasarr=[];							//用于存储普通库所和资源库所
			
			/*11.canvas获得焦点事件*/	
			$('#mycanvas').bind('click',function(){
						var x = event.clientX- this.getBoundingClientRect().left; 
				 		var y = event.clientY- this.getBoundingClientRect().top;
				 		
				 		//console.log(x);
				 		//console.log(y);
				 		for (var i=0; i <jesonarray.length; i++) {
					  			if(Math.abs(jesonarray[i].myleft-x)<16&&Math.abs(jesonarray[i].mytop-y)<16){
					  				//console.log(jesonarray[i].myleft-x );
					  				//console.log(jesonarray[i].myleft-x );
							  	var arr={
							  		"myleft":jesonarray[i].myleft,
							  		"mytop":jesonarray[i].mytop,
							  		"myname":jesonarray[i].myname
							  		};	
					  				coord.push(arr);	
					  			}
						};
				 		//console.log(coord);
				 		//console.log(jesonarray);
				 		//console.log(orderarr);
						 		if (coord.length>1){
								 	if(Math.abs(coord[0].mytop-coord[1].mytop)<16&&Math.abs(coord[0].myleft-coord[1].myleft)<16 ){
								 		//两次点击在同一个点
								 		coord.splice(0,coord.length);
								 		alert("两次点击的是同一个控件，不能进行绘制");
								 	}else if(iscontain(normalarr,coord)){
								 		coord.splice(0,coord.length);
								 		alert("不可以将两个普通库所相连");
								 	}else if(iscontain(sourcearr,coord)){
								 		coord.splice(0,coord.length);
								 		alert("不可以将两个资源库所相连");
								 	}else if(iscontain(timetransarr,coord)){
								 		coord.splice(0,coord.length);
								 		alert("不可以将两个时间变迁相连");
								 	}else if(iscontain(hasarr,coord)){
								 		coord.splice(0,coord.length);
								 		alert("不可以将两个库所相连");
								 	}/*else if((temporaryarr.length>0)&&(coord[0].myname!==temporaryarr[1].myname)&&(coord[0].myname!==temporaryarr[0].myname)){
								 			var arr=coord.concat();
								 			coord.splice(0,coord.length);
								 			alert("连接的顺序不对");
								 			console.log(arr[0].myname);
								 			console.log(temporaryarr[0].myname);
								 			console.log(temporaryarr);
								 			console.log(arr);
								 		
								 	}*/else{
										temporaryarr=[];
										temporaryarr=coord.concat();
								 		orderarr.push(temporaryarr);	
								 		//console.log(temporaryarr);						
										//alert(123);
								 		var drawingarr=[];
								 			//5.获得画线的方法
								 		function getdrawingarr(a,b,c,d){
										 		var x = Math.abs(c-a);
					       						var y = Math.abs(d-b);
					       						var z = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
												var cos=x/z;
												var angle = Math.acos(cos);//用反三角函数求弧度
										 		if (a<c) {
											 			if (b<d) {
												 				//第一象限
												 				x1=a+16*Math.cos(angle);
												 				y1=b+16*Math.sin(angle);
												 				x2=c-16*Math.cos(angle);
												 				y2=d-16*Math.sin(angle);
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			} else if(b==d){
											 					//x轴正半轴
											 					x1=a+16;
												 				y1=b;
												 				x2=c-16;
												 				y2=d;
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			}else if(b>d){
											 					//第四象限
											 					x1=a+16*Math.cos(angle);
												 				y1=b-16*Math.sin(angle);
												 				x2=c-16*Math.cos(angle);
												 				y2=d+16*Math.sin(angle);
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			};
										 		} else if(a==c){
										 				if (b<d) {
											 					//y轴正方向
											 					x1=a;
												 				y1=b+16;
												 				x2=c;
												 				y2=d-16;
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			} else if(b==d){
											 					//原点
											 					x1=a;
												 				y1=b;
												 				x2=c;
												 				y2=d;
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			}else if(b>d){
											 					//y轴负方向
											 					x1=a;
												 				y1=b-16;
												 				x2=c;
												 				y2=d+16;
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			};
										 		}else if(a>c){
										 				if (b<d) {
											 					//第二象限
											 					x1=a-16*Math.cos(angle);
												 				y1=b+16*Math.sin(angle);
												 				x2=c+16*Math.cos(angle);
												 				y2=d-16*Math.sin(angle);
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			} else if(b==d){
												 					//x轴负半轴
												 					x1=a-16;
													 				y1=b;
													 				x2=c+16;
													 				y2=d;
													 			 	drawingarr={
																		"x1":x1,
																		"y1":y1,
																		"x2":x2,
																		"y2":y2
																	};
											 			}else if(b>d){
											 					//第三象限
											 					x1=a-16*Math.cos(angle);
												 				y1=b-16*Math.sin(angle);
												 				x2=c+16*Math.cos(angle);
												 				y2=d+16*Math.sin(angle);
												 			 	drawingarr={
																	"x1":x1,
																	"y1":y1,
																	"x2":x2,
																	"y2":y2
																};
											 			};
										 		};
										 };	
										 		
								 		getdrawingarr(coord[0].myleft,coord[0].mytop,coord[1].myleft,coord[1].mytop);
								 		//箭头的画法
										getAngle(drawingarr.x1,drawingarr.y1,drawingarr.x2,drawingarr.y2);
										//直线的画法
										drawDiagonal(drawingarr.x1,drawingarr.y1,drawingarr.x2,drawingarr.y2);
										
										coord.splice(0,coord.length);
								 	};	 		
						 		};
				});
				
				//12.从数据库下载数据			
			 $('#download').bind('click',function(){
			
			 		window.open('mydate.php');
			 
			 });
				
				//13.description描述区域按键显示
							//关联矩阵
							$("#correlationmatrix").bind('click',function(){
										$("#cmdescri").removeAttr("style");
										$("#oddescri").removeAttr("style");
										$("#msdescri").removeAttr("style");
										//$("#cmdescri").attr("style","display:none");
										$("#oddescri").attr("style","display:none");
										$("#msdescri").attr("style","display:none");
							});
							//对象定义
							$("#objectdefinition").bind('click',function(){
								$("#cmdescri").removeAttr("style");
								$("#oddescri").removeAttr("style");
								$("#msdescri").removeAttr("style");
								$("#cmdescri").attr("style","display:none");
								//$("#oddescri").attr("style","display:none");
								$("#msdescri").attr("style","display:none");
								
							});
							//模型状态
							$("#modelstate").bind('click',function(){
								$("#cmdescri").removeAttr("style");
								$("#oddescri").removeAttr("style");
								$("#msdescri").removeAttr("style");
								$("#cmdescri").attr("style","display:none");
								$("#oddescri").attr("style","display:none");
								//$("#msdescri").attr("style","display:none");		
							});
						
						
				/*14菜单栏的事件*/
					//文件
					$('#myfile').bind('click',function(){
						var display=$('#filedown').css('display');
								if(display=='none'){
									var ftop=$('#myfile').offset().top+20;
									var fleft=$('#myfile').offset().left;
									$('#filedown').css('top',ftop);
									$('#filedown').css('left',fleft);
									$('#filedown').show();
								}else{
									$('#filedown').css('display','none');
								}					
					});
					//编辑
					$('#myedit').bind('click',function(){
						var display=$('#editdown').css('display');
								if(display=='none'){
									var ftop=$('#myedit').offset().top+20;
									var fleft=$('#myedit').offset().left;
									$('#editdown').css('top',ftop);
									$('#editdown').css('left',fleft);
									$('#editdown').show();
								}else{
									$('#editdown').css('display','none');
								}					
					});
					//视图
					$('#myview').bind('click',function(){
						var display=$('#viewdown').css('display');
								if(display=='none'){
									var ftop=$('#myview').offset().top+20;
									var fleft=$('#myview').offset().left;
									$('#viewdown').css('top',ftop);
									$('#viewdown').css('left',fleft);
									$('#viewdown').show();
								}else{
									$('#viewdown').css('display','none');
								}					
					});
					//仿真
					$('#mysimulation').bind('click',function(){
						var display=$('#simulationdown').css('display');
								if(display=='none'){
									var ftop=$('#mysimulation').offset().top+20;
									var fleft=$('#mysimulation').offset().left;
									$('#simulationdown').css('top',ftop);
									$('#simulationdown').css('left',fleft);
									$('#simulationdown').show();
								}else{
									$('#simulationdown').css('display','none');
								}					
					});
					//系统评价
						$('#myevaluate').bind('click',function(){
						var display=$('#evaluatedown').css('display');
								if(display=='none'){
									var ftop=$('#myevaluate').offset().top+20;
									var fleft=$('#myevaluate').offset().left;
									$('#evaluatedown').css('top',ftop);
									$('#evaluatedown').css('left',fleft);
									$('#evaluatedown').show();
								}else{
									$('#evaluatedown').css('display','none');
								}					
					});
					//帮助
			
			
			
			/*15.显示栏事件的效果*/
					$("#newfile").mouseover(function(){
						$("#newfile").css('border','2px solid black');
					});
					$("#openfile").mouseover(function(){
						$("#openfile").css('border','2px solid black');
					});
					$("#savefile").mouseover(function(){
						$("#savefile").css('border','2px solid black');
					});
					$("#cut").mouseover(function(){
						$("#cut").css('border','2px solid black');
					});
					$("#copy").mouseover(function(){
						$("#copy").css('border','2px solid black');
					});
					$("#paste").mouseover(function(){
						$("#paste").css('border','2px solid black');
					});
					$("#print").mouseover(function(){
						$("#print").css('border','2px solid black');
					});
					$("#help").mouseover(function(){
						$("#help").css('border','2px solid black');
					});
					$("#initsimulation").mouseover(function(){
						$("#initsimulation").css('border','2px solid black');
					});
					$("#startsimulation").mouseover(function(){
						$("#startsimulation").css('border','2px solid black');
					});
					$("#simulationtime").mouseover(function(){
						$("#simulationtime").css('border','2px solid black');
					});
					
					
					$("#newfile").mouseout(function(){
						$("#newfile").css('border','none');
					});
					$("#openfile").mouseout(function(){
						$("#openfile").css('border','none');
					});
					$("#savefile").mouseout(function(){
						$("#savefile").css('border','none');
					});
					$("#cut").mouseout(function(){
						$("#cut").css('border','none');
					});
					$("#copy").mouseout(function(){
						$("#copy").css('border','none');
					});
					$("#paste").mouseout(function(){
						$("#paste").css('border','none');
					});
					$("#print").mouseout(function(){
						$("#print").css('border','none');
					});
					$("#help").mouseout(function(){
						$("#help").css('border','none');
					});
					$("#initsimulation").mouseout(function(){
						$("#initsimulation").css('border','none');
					});
					$("#startsimulation").mouseout(function(){
						$("#startsimulation").css('border','none');
					});
					$("#simulationtime").mouseout(function(){
						$("#simulationtime").css('border','none');
					});

				
				//16.新建按钮点击清除数据库中的所有数据
						//清空画布内画线并清除drawing内的控件
						function newfilefuc(){
									//清除画布
										var $canvas=document.getElementById('mycanvas'); 
										var ctx=$canvas.getContext("2d");
										ctx.clearRect(0,0,1008,530);
										
										$('#drawing').empty();
										$("#processadd ul.nettreeadd").remove(); 
										
										
										$('#cmdescribox ul').remove();
										$('#oddescribox1 ul').remove();
										$('#oddescribox2 ul').remove();
										$('#msdescribox1 ul').remove();
										$('#msdescribox2 ul').remove();		
									//数据置空
									placeno=0;							//用于创建控件的名字
									timeTransitno=0;					//用于创建控件的名字
									jesonarray=[];						//控件的数据存储,用于所有的控件
									coord=[];								//画布两次点击存储的数据，用于画直线
									normalplaceno=0;						//用于创建普通库所的名字
									normalarr=[];						//专门用于存储普通控件
									sourcearr=[];						//专门用于存储资源控件
									timetransarr=[];					//专门用于存储时间控件
									hasarr=[];							//用于存储所有库所
									orderarr=[];						//用于存储所画控件的顺序
									receivedjson=[];				//初始化接收数据库数据
									backnormalarr=[];				//用于接收数据库返回的数据
									backfunctionarr=[];
									backlocationarr=[];
			 						backsourcearr=[];
									backtimetransarr=[];
									temporaryarr=[];	
									simtime=0;
									neworder=[];	
									neworderarr=[];					//将neworder数组变为一个数组
						};
						
				$("#newfile").bind('click',function(){
							newfilefuc();
							$.ajax({
								url: "displayphp/mynewfile.php",
								type: "post",
								async: false,
								success:function(data){
									alert("新建成功");
								},
								error:function(msg){
									alert("新建失败");
									//console.log(msg);
								}
						});									
					
				});
				
				
				//17.打开按钮查询数据和下载数据一个功能
				$("#openfile").	bind('click',function(){
								window.open('mydate.php');	
				});
				
				
				//18.保存和上存数据一个功能
				
					$("#savefile").	bind('click',function(){
								$.ajax({
									url: "server.php",
									type: "post",
									dataType: "JSON",
									async: false,
									data:{jesonarray:jesonarray},
									success:function(data){
										alert("保存成功");
										console.log(jesonarray);
									},
									error:function(msg){
										alert("保存失败");
										//console.log(msg);
									}
								});
				});
				
				
				
				//19.仿真初始化按钮的作用
					$("#initsimulation").bind('click',function(){
								$.ajax({
									url: "displayphp/initsimulation.php",
									type: "post",
									dataType: "JSON",
									async: false,
									success:function(responseText,responseStatus){
												//(0).删除状态栏以前添加的内容
													$('#cmdescribox ul').remove();
													$('#oddescribox1 ul').remove();
													$('#oddescribox2 ul').remove();
													$('#msdescribox1 ul').remove();
													$('#msdescribox2 ul').remove();
												
												//（1.）接收数据库返回的数据
												//console.log(orderarr);
												receivedjson = JSON.parse(responseText);//接收数据库返回数据
												//receivedjson前五个数分别为五个表中元素的个数如果需要可以在这里取值
												backnormalarr=[];				//用于接收数据库返回的数据
												backfunctionarr=[];
												backlocationarr=[];
					 							backsourcearr=[];
												backtimetransarr=[];
										//（2.）对返回的数据进行分组
												for (var i=0; i < receivedjson.length; i++) {
														 if (receivedjson[i].hasOwnProperty("distributefunction")) {
																backfunctionarr.push(receivedjson[i]);
															};
															 if (receivedjson[i].hasOwnProperty("mytop")) {
															  	backlocationarr.push(receivedjson[i]);
															};
															 if (receivedjson[i].hasOwnProperty("capacity")) {
																backnormalarr.push(receivedjson[i]);
															};
															 if (receivedjson[i].hasOwnProperty("sourcedescription")) {
															  	backsourcearr.push(receivedjson[i]);
															};
															 if (receivedjson[i].hasOwnProperty("timetransdescription")) {
															 	backtimetransarr.push(receivedjson[i]);
															};
												};
											
												//（3.）用于筛选orderarr中重复的对象
													var paxuarr=[];			
													for (var i=0; i < orderarr.length; i++){
														for (var j=0; j < orderarr[i].length; j++) {
																paxuarr.push(orderarr[i][j]);
														};
																		// paxuarr.push(orderarr[i][0]);
																		// paxuarr.push(orderarr[i][1]);
													};
												
													//删除隔壁相同的数组
													for (var i=0; i < paxuarr.length-1; i++) {
															if (paxuarr[i].myname==paxuarr[i+1].myname) {
																	 paxuarr.splice(i+1,1);
															};
													};
								
												//（4.）内部方法增加增加部件
												function addcmdescribox(a){
															if(a==0){
																	var isinnormalplace=false;
																	var isinsourceplace=false;
																	for (var j=0; j< backnormalarr.length; j++) {
																		if (paxuarr[a].myname==backnormalarr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].description+"</div></ul>"); 
																			$('#cmdescribox').append(divobj);
																			isinnormalplace=true;
																			} 
																	 };
																	for (var j=0; j < backsourcearr.length;j++) {
																		if (paxuarr[a].myname==backsourcearr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].sourcedescription+"</div></ul>"); 
																			$('#cmdescribox').append(divobj);
																			isinsourceplace=true;
																			} 
																		}; 
																		if(isinnormalplace==false&&isinsourceplace==false){
																			alert("开始节点必须为库所");
																		};
																}else if(a<paxuarr.length-1){
																	for (var j=0; j < backnormalarr.length; j++) {
																		if (paxuarr[a].myname==backnormalarr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].description+"</div></ul>"); 
																			$('#cmdescribox').append(divobj);
																		} 
																	 };
																	for (var j=0; j< backsourcearr.length;j++) {
																		if (paxuarr[a].myname==backsourcearr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].sourcedescription+"</div></ul>"); 
																			$('#cmdescribox').append(divobj);
																		} 
																	}; 
																	for (var j=0; j< backtimetransarr.length;j++) {
																	if (paxuarr[a].myname==backtimetransarr[j].myname) {
																		var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backtimetransarr[j].myname+"</div><div  class='col-md-5'>"+backtimetransarr[j].transtype+"</div><div  class='col-md-4'> "+backtimetransarr[j].timetransdescription+"</div></ul>"); 
																		$('#cmdescribox').append(divobj);
																		} 
																	}; 
																}else{
																	var isinnormalplace=false;
																	var isinsourceplace=false;
																	for (var j=0; j < backnormalarr.length; j++) {
																		if (paxuarr[a].myname==backnormalarr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].description+"</div></ul>"); 
																			$('#cmdescribox').append(divobj);
																			isinnormalplace=true;
																		} 
																	};
																	for (var j=0; j< backsourcearr.length; j++) {
																		if (paxuarr[a].myname==backsourcearr[j].myname) {
																		var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].sourcedescription+"</div></ul>"); 
																		$('#cmdescribox').append(divobj);
																		isinsourceplace=true;
																		} 
																	}; 
																	if(isinnormalplace==false&&isinsourceplace==false){
																		alert("结束节点必须为库所");
																		};
																	};
												};
													
													//调用增加方法
													for (var i=0; i < paxuarr.length; i++) {
														  	addcmdescribox(i);
														};
											
											
											//（5.）内部方法增加增加部件
												function addoddescribox(a){
																	for (var j=0; j< backnormalarr.length; j++) {
																		if (paxuarr[a].myname==backnormalarr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].capacity+"</div></ul>"); 
																			$('#oddescribox1').append(divobj);
																			//console.log("宝贝");
																			} 							
																	 };
																	for (var j=0; j < backsourcearr.length;j++) {
																		if (paxuarr[a].myname==backsourcearr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].resourcesnums+"</div></ul>"); 
																			$('#oddescribox2').append(divobj);
																			} 
																		}; 
																		//console.log(a);
																		//console.log(paxuarr);
																		//console.log(backsourcearr);
																		//console.log(backnormalarr);
																		//console.log(paxuarr[a].myname);
																		//console.log(a);
													};
													
													//调用增加方法
													for (var i=0; i < paxuarr.length; i++) {
														  	addoddescribox(i);
														};
														
												//(6.)模型方程的添加
												function addmsdescribox(){
															var msdescriboxobj1=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-4'>"+backfunctionarr[0].distributefunction+"</div><div  class='col-md-4'>"
															+backfunctionarr[0].parameter1+"</div><div  class='col-md-4'> "+backfunctionarr[0].parameter2+"</div></ul>"); 
															$('#msdescribox1').append(msdescriboxobj1);
															var msdescriboxobj2=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  >"+backfunctionarr[0].distributionfunctiondescription+"</div></ul>"); 
															$('#msdescribox2').append(msdescriboxobj2);
															
												};
													//console.log(backfunctionarr);
												addmsdescribox();
													
												alert("初始化成功");
												
									},
									error:function(msg){
										alert("初始化失败");
									}
								});
				});
				
				
				
						//(1)二项分布方法
						function 		Binomialtime(parameter){
									
										//《1》.将orderarr数组进行数据添加
										   var allarr=[];
										   allarr=backnormalarr.concat(backsourcearr);
										   allarr=allarr.concat(backtimetransarr);
											neworder=[];
											neworderarr=[];
											for (var i=0; i < orderarr.length; i++) {
													var	arr=[];
												  	for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][0].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][1].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   neworder.push(arr);
											};
											
											for (var i=0; i < neworder.length; i++) {
											  	for (var j=0; j < neworder[i].length; j++) {
														neworderarr.push(neworder[i][j]);
												  };
											};
											
											for (var i=0; i < neworderarr.length-1; i++) {
											  	if (neworderarr[i].myname==neworderarr[i+1].myname) {
											  		neworderarr.splice(i+1,1);
											  	};
											};
											
																	/*节点的方法*/
											//《2》，开始节点的判断方法
										function startnode(arr) {
											var startnodearr=[];
											var temarr=[];
											var times1=0;
											var times2=0;
										  	for (var i=0; i < arr.length; i++) {
													for (var j=0; j < arr[i].length; j++) {
													  	temarr.push(arr[i][j]);
													};
											  };
											// console.log(temarr);
											// console.log(arr);
											  for (var i=0; i < arr.length; i++) {	 
													times1=0;
													times2=0;
													for (var j=0; j < arr.length; j++) {
														
														  	if (arr[i][0].myname==arr[j][1].myname) {
																	times1=times1+1;
															};	
													};
													for (var m=0; m < temarr.length; m++) {
														
														  	if (arr[i][0].myname==temarr[m].myname) {
																	times2=times2+1;
															};	
													};
													//console.log(times1);
													if(times1==0&&times2==1){
														startnodearr.push(arr[i][0]);
													};			
											  };
											  return startnodearr;
										};
										
											//《3》，结束节点的判断方法
										function endnode (arr) {
						var endnodearr=[];
						var temarr=[];
						var times1=0;
						var times2=0;
					  	for (var i=0; i < arr.length; i++) {
								for (var j=0; j < arr[i].length; j++) {
								  	temarr.push(arr[i][j]);
								};
						  };
						 // console.log(temarr);
						  //console.log(arr);
						  for (var i=0; i < arr.length; i++) {	 
								times1=0;
								times2=0;
								for (var m=0; m < arr.length; m++) {
										
									  	if (arr[i][1].myname==arr[m][0].myname) {
												times1=times1+1;
										};	
								};
								for (var j=0; j < temarr.length; j++) {
										
									  	if (arr[i][1].myname==temarr[j].myname) {
												times2=times2+1;
										};	
								};
								if(times1=0&&times2==1){
									endnodearr.push(arr[i][1]);
								};			
						  };
						  return endnodearr;
					};
					
		
										//《4》.包含的方法a是否包含b
										function  containfuc(arr,b){
											var iscont=false;
											for (var i=0; i < arr.length; i++) {		
													if (arr[i].myname==b[0].myname) {
											  			iscont=true;
											  		} ;
											};
											return iscont;
										};
										//《5》根据开始获取下一节点
										function getnextnode(a,arr){
											var temparr=[];
											for (var j=0; j< arr.length; j++) {		  					
												if (a[0].myname==arr[j][0].myname) {	
													temparr.push(arr[j][1]);
												} ;
											};
											return temparr;							  				
									};
				
										//《6》两个jeson数组名字相同
										function issamename(a,b){	
													if (a[0].myname==b[0].myname) {	
														return true;
													}else{
														return false;
													} ;						  				
										};
					
										//《7》一个数组一个数的jeson名字相同
										function issamenames(a,brr){
												var istrue=false;
													for (var i=0; i < brr.length; i++) {					  					
															if (a[0].myname==brr[i].myname) {	
																istrue= true;
															} ;					
													};
												return istrue;			  				
										};
										
								
										var mtime=0;
										var beginnode=startnode(neworder);											//a,b,parameter,timetransarr,arr
										var stopnode=endnode(neworder);
										var timetransarr=backtimetransarr;
										console.log(timetransarr);
										console.log(neworder);
										do{
													//判断开始节点是否为时间库所
													if (containfuc(timetransarr,beginnode)) {
																for (var i=0; i < timetransarr.length; i++) {
																		  	if (timetransarr[i].myname==beginnode.myname) {
																		  			while(Binomialfunc(parameter)){
																		  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																		  			};
																		  	};
																};
													} ;
													
													//得到下一个开始节点
													beginnode=getnextnode(beginnode,neworder);
													console.log(beginnode);
													//开始节点之中只要出现结束节点即可跳出循环
													for (var i=0; i < beginnode.length; i++) {
															  	if((beginnode[i].myname==stopnode.myname)){
															  		return  mtime;
															  		break;
															  	}
													};
													
													//判断开始节点的个数
													if(beginnode.length>1){
																var temptime=0;
																var tempcode=[];
																if (containfuc(timetransarr,beginnode[0])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[0].myname) {
																									  			while(Binomialfunc(parameter)){
																									  					temptime=temptime+parseFloat(timetransarr[j].transtime);
																									  					tempcode=beginnode[0];
																									  			};
																									  	};
																								};
																						} ;	
																for (var i=1; i < beginnode.length; i++) {
																		 				var temptime1=0;
																						var tempcode1=[];
																					//	var temptime2=0;
																					//	var tempcode2=[];
																		 				if (containfuc(timetransarr,beginnode[i])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i].myname) {
																									  			while(Binomialfunc(parameter)){
																									  					temptime1=temptime1+parseFloat(timetransarr[j].transtime);
																									  					tempcode1=beginnode[i];
																									  			};
																									  	};
																								};
																						} ;	 
																						
																			if(temptime1<temptime){
																					temptime=temptime1;
																					tempcode=tempcode1;
																			}else{
																					temptime=temptime;
																					tempcode=tempcode;
																			}; 		
																};
																
																beginnode=tempcode;
																mtime=mtime+temptime;
												}else{
																//判断开始节点是否为时间库所
																if (containfuc(timetransarr,beginnode)) {
																			for (var i=0; i < timetransarr.length; i++) {
																					  	if (timetransarr[i].myname==beginnode[0].myname) {
																					  			while(Binomialfunc(parameter)){
																					  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																					  			};
																					  	};
																			};
																} ;											
												};		
										}while(beginnode.myname!==stopnode.myname);
									
								return	mtime;
						};
					
						//	(2).泊松分布poissonfunc(a) 
						function  poissontime(parameter){
						
						//《1》.将orderarr数组进行数据添加
										   var allarr=[];
										   allarr=backnormalarr.concat(backsourcearr);
										   allarr=allarr.concat(backtimetransarr);
											neworder=[];
											neworderarr=[];
											for (var i=0; i < orderarr.length; i++) {
													var	arr=[];
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][0].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][1].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   neworder.push(arr);
											};
											
											for (var i=0; i < neworder.length; i++) {
											  	for (var j=0; j < neworder[i].length; j++) {
														neworderarr.push(neworder[i][j]);
												  };
											};
											
											for (var i=0; i < neworderarr.length-1; i++) {
											  	if (neworderarr[i].myname==neworderarr[i+1].myname) {
											  		neworderarr.splice(i+1,1);
											  	};
											};
																	/*节点的方法*/
											//《2》，开始节点的判断方法
										function startnode(arr) {
											var startnodearr=[];
											var temarr=[];
											var times1=0;
										  	for (var i=0; i < arr.length; i++) {
													for (var j=0; j < arr[i].length; j++) {
													  	temarr.push(arr[i][j]);
													};
											  };
											// console.log(temarr);
											// console.log(arr);
											  for (var i=0; i < arr.length; i++) {	 
													times1=0;
													for (var j=0; j < temarr.length; j++) {
														
														  	if (arr[i][0].myname==temarr[j].myname) {
																	times1=times1+1;
															};	
													};
													//console.log(times1);
													if(times1==1){
														startnodearr.push(arr[i][0]);
													};			
											  };
											  return startnodearr;
										};
										
											//《3》，结束节点的判断方法
										function endnode (arr) {
						var endnodearr=[];
						var temarr=[];
						var times2=0;
					  	for (var i=0; i < arr.length; i++) {
								for (var j=0; j < arr[i].length; j++) {
								  	temarr.push(arr[i][j]);
								};
						  };
						 // console.log(temarr);
						  //console.log(arr);
						  for (var i=0; i < arr.length; i++) {	 
								times2=0;
								for (var j=0; j < temarr.length; j++) {
										
									  	if (arr[i][1].myname==temarr[j].myname) {
												times2=times2+1;
										};	
								};
								if(times2==1){
									endnodearr.push(arr[i][1]);
								};			
						  };
						  return endnodearr;
					};
					
		
										//《4》.包含的方法a是否包含b
										function  containfuc(arr,b){
											var iscont=false;
											for (var i=0; i < arr.length; i++) {		
													if (arr[i].myname==b[0].myname) {
											  			iscont=true;
											  		} ;
											};
											return iscont;
										};
										//《5》根据开始获取下一节点
										function getnextnode(a,arr){
											var temparr=[];
											for (var j=0; j< arr.length; j++) {		  					
												if (a[0].myname==arr[j][0].myname) {	
													temparr.push(arr[j][1]);
												} ;
											};
											return temparr;							  				
									};
				
										//《6》两个jeson数组名字相同
										function issamename(a,b){	
													if (a[0].myname==b[0].myname) {	
														return true;
													}else{
														return false;
													} ;						  				
										};
					
										//《7》一个数组一个数的jeson名字相同
										function issamenames(a,brr){
												var istrue=false;
													for (var i=0; i < brr.length; i++) {					  					
															if (a[0].myname==brr[i].myname) {	
																istrue= true;
															} ;					
													};
												return istrue;			  				
										};
										
								
										var mtime=0;
										var beginnode=startnode(neworder);											//a,b,parameter,timetransarr,arr
										var stopnode=endnode(neworder);
										var timetransarr=backtimetransarr;
										
										do{
													//判断开始节点是否为时间库所
													if (containfuc(timetransarr,beginnode)) {
																for (var i=0; i < timetransarr.length; i++) {
																		  	if (timetransarr[i].myname==beginnode[0].myname) {
																		  			while(poissonfunc(parameter)){
																		  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																		  			};
																		  	};
																};
													} ;
													
													//得到下一个开始节点
													beginnode=getnextnode(beginnode,neworder);
													console.log(beginnode);
													//开始节点之中只要出现结束节点即可跳出循环
													for (var i=0; i < beginnode.length; i++) {
															  	if((beginnode[i].myname==stopnode[0].myname)){
															  		return  mtime;
															  		break;
															  	}
													};
													
													//判断开始节点的个数
													if(beginnode.length>1){
																var temptime=0;
																var tempcode=[];
																for (var i=0; i < beginnode.length-1; i++) {
																		 				var temptime1=0;
																						var tempcode1=[];
																						var temptime2=0;
																						var tempcode2=[];
																		 				if (containfuc(timetransarr,beginnode[i])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i].myname) {
																									  			while(poissonfunc(parameter)){
																									  					temptime1=temptime1+parseFloat(timetransarr[j].transtime);
																									  					tempcode1=beginnode[i];
																									  			};
																									  	};
																								};
																						} ;	 
																						if (containfuc(timetransarr,beginnode[i+1])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i+1].myname) {
																									  			while(poissonfunc(parameter)){
																									  					temptime2=temptime2+parseFloat(timetransarr[j].transtime);
																									  					tempcode2=beginnode[i+1];
																									  			};
																									  	};
																								};
																						} ;	
																			if(temptime1<temptime2){
																					temptime=temptime1;
																					tempcode=tempcode1;
																			}else{
																					temptime=temptime2;
																					tempcode=tempcode2;
																			}; 		
																};
																
																beginnode=tempcode;
																mtime=mtime+temptime;
												}else{
																//判断开始节点是否为时间库所
																if (containfuc(timetransarr,beginnode)) {
																			for (var i=0; i < timetransarr.length; i++) {
																					  	if (timetransarr[i].myname==beginnode[0].myname) {
																					  			while(poissonfunc(parameter)){
																					  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																					  			};
																					  	};
																			};
																} ;											
												};		
										}while(beginnode[0].myname!==stopnode[0].myname);
									
								return	mtime;
						
						
					};
						
						//(3)均与分布evenlyfunc(a,b) 
						function evenlytime(parameter1,parameter2){
							
							//《1》.将orderarr数组进行数据添加
										   var allarr=[];
										   allarr=backnormalarr.concat(backsourcearr);
										   allarr=allarr.concat(backtimetransarr);
											neworder=[];
											neworderarr=[];
											for (var i=0; i < orderarr.length; i++) {
													var	arr=[];
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][0].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][1].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   neworder.push(arr);
											};
											
											for (var i=0; i < neworder.length; i++) {
											  	for (var j=0; j < neworder[i].length; j++) {
														neworderarr.push(neworder[i][j]);
												  };
											};
											
											for (var i=0; i < neworderarr.length-1; i++) {
											  	if (neworderarr[i].myname==neworderarr[i+1].myname) {
											  		neworderarr.splice(i+1,1);
											  	};
											};
																	/*节点的方法*/
											//《2》，开始节点的判断方法
										function startnode(arr) {
											var startnodearr=[];
											var temarr=[];
											var times1=0;
										  	for (var i=0; i < arr.length; i++) {
													for (var j=0; j < arr[i].length; j++) {
													  	temarr.push(arr[i][j]);
													};
											  };
											// console.log(temarr);
											// console.log(arr);
											  for (var i=0; i < arr.length; i++) {	 
													times1=0;
													for (var j=0; j < temarr.length; j++) {
														
														  	if (arr[i][0].myname==temarr[j].myname) {
																	times1=times1+1;
															};	
													};
													//console.log(times1);
													if(times1==1){
														startnodearr.push(arr[i][0]);
													};			
											  };
											  return startnodearr;
										};
										
											//《3》，结束节点的判断方法
										function endnode (arr) {
						var endnodearr=[];
						var temarr=[];
						var times2=0;
					  	for (var i=0; i < arr.length; i++) {
								for (var j=0; j < arr[i].length; j++) {
								  	temarr.push(arr[i][j]);
								};
						  };
						 // console.log(temarr);
						  //console.log(arr);
						  for (var i=0; i < arr.length; i++) {	 
								times2=0;
								for (var j=0; j < temarr.length; j++) {
										
									  	if (arr[i][1].myname==temarr[j].myname) {
												times2=times2+1;
										};	
								};
								if(times2==1){
									endnodearr.push(arr[i][1]);
								};			
						  };
						  return endnodearr;
					};
					
		
										//《4》.包含的方法a是否包含b
										function  containfuc(arr,b){
											var iscont=false;
											for (var i=0; i < arr.length; i++) {		
													if (arr[i].myname==b[0].myname) {
											  			iscont=true;
											  		} ;
											};
											return iscont;
										};
										//《5》根据开始获取下一节点
										function getnextnode(a,arr){
											var temparr=[];
											for (var j=0; j< arr.length; j++) {		  					
												if (a[0].myname==arr[j][0].myname) {	
													temparr.push(arr[j][1]);
												} ;
											};
											return temparr;							  				
									};
				
										//《6》两个jeson数组名字相同
										function issamename(a,b){	
													if (a[0].myname==b[0].myname) {	
														return true;
													}else{
														return false;
													} ;						  				
										};
					
										//《7》一个数组一个数的jeson名字相同
										function issamenames(a,brr){
												var istrue=false;
													for (var i=0; i < brr.length; i++) {					  					
															if (a[0].myname==brr[i].myname) {	
																istrue= true;
															} ;					
													};
												return istrue;			  				
										};
										
								
										var mtime=0;
										var beginnode=startnode(neworder);											//a,b,parameter,timetransarr,arr
										var stopnode=endnode(neworder);
										var timetransarr=backtimetransarr;
										
										do{
													//判断开始节点是否为时间库所
													if (containfuc(timetransarr,beginnode)) {
																for (var i=0; i < timetransarr.length; i++) {
																		  	if (timetransarr[i].myname==beginnode[0].myname) {
																		  			while(evenlyfunc(parameter1,parameter2)){
																		  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																		  			};
																		  	};
																};
													} ;
													
													//得到下一个开始节点
													beginnode=getnextnode(beginnode,neworder);
													console.log(beginnode);
													//开始节点之中只要出现结束节点即可跳出循环
													for (var i=0; i < beginnode.length; i++) {
															  	if((beginnode[i].myname==stopnode[0].myname)){
															  		return  mtime;
															  		break;
															  	}
													};
													
													//判断开始节点的个数
													if(beginnode.length>1){
																var temptime=0;
																var tempcode=[];
																for (var i=0; i < beginnode.length-1; i++) {
																		 				var temptime1=0;
																						var tempcode1=[];
																						var temptime2=0;
																						var tempcode2=[];
																		 				if (containfuc(timetransarr,beginnode[i])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i].myname) {
																									  			while(evenlyfunc(parameter1,parameter2)){
																									  					temptime1=temptime1+parseFloat(timetransarr[j].transtime);
																									  					tempcode1=beginnode[i];
																									  			};
																									  	};
																								};
																						} ;	 
																						if (containfuc(timetransarr,beginnode[i+1])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i+1].myname) {
																									  			while(evenlyfunc(parameter1,parameter2)){
																									  					temptime2=temptime2+parseFloat(timetransarr[j].transtime);
																									  					tempcode2=beginnode[i+1];
																									  			};
																									  	};
																								};
																						} ;	
																			if(temptime1<temptime2){
																					temptime=temptime1;
																					tempcode=tempcode1;
																			}else{
																					temptime=temptime2;
																					tempcode=tempcode2;
																			}; 		
																};
																
																beginnode=tempcode;
																mtime=mtime+temptime;
												}else{
																//判断开始节点是否为时间库所
																if (containfuc(timetransarr,beginnode)) {
																			for (var i=0; i < timetransarr.length; i++) {
																					  	if (timetransarr[i].myname==beginnode[0].myname) {
																					  			while(evenlyfunc(parameter1,parameter2)){
																					  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																					  			};
																					  	};
																			};
																} ;											
												};		
										}while(beginnode[0].myname!==stopnode[0].myname);
									
								return	mtime;
							
							
						};
						
						//(4).正态分布normalfunc(a) 
						function normaltime(parameter){
							
							//《1》.将orderarr数组进行数据添加
										   var allarr=[];
										   allarr=backnormalarr.concat(backsourcearr);
										   allarr=allarr.concat(backtimetransarr);
											neworder=[];
											neworderarr=[];
											for (var i=0; i < orderarr.length; i++) {
													var	arr=[];
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][0].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][1].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   neworder.push(arr);
											};
											
											for (var i=0; i < neworder.length; i++) {
											  	for (var j=0; j < neworder[i].length; j++) {
														neworderarr.push(neworder[i][j]);
												  };
											};
											
											for (var i=0; i < neworderarr.length-1; i++) {
											  	if (neworderarr[i].myname==neworderarr[i+1].myname) {
											  		neworderarr.splice(i+1,1);
											  	};
											};
																	/*节点的方法*/
											//《2》，开始节点的判断方法
										function startnode(arr) {
											var startnodearr=[];
											var temarr=[];
											var times1=0;
										  	for (var i=0; i < arr.length; i++) {
													for (var j=0; j < arr[i].length; j++) {
													  	temarr.push(arr[i][j]);
													};
											  };
											// console.log(temarr);
											// console.log(arr);
											  for (var i=0; i < arr.length; i++) {	 
													times1=0;
													for (var j=0; j < temarr.length; j++) {
														
														  	if (arr[i][0].myname==temarr[j].myname) {
																	times1=times1+1;
															};	
													};
													//console.log(times1);
													if(times1==1){
														startnodearr.push(arr[i][0]);
													};			
											  };
											  return startnodearr;
										};
										
											//《3》，结束节点的判断方法
										function endnode (arr) {
						var endnodearr=[];
						var temarr=[];
						var times2=0;
					  	for (var i=0; i < arr.length; i++) {
								for (var j=0; j < arr[i].length; j++) {
								  	temarr.push(arr[i][j]);
								};
						  };
						 // console.log(temarr);
						  //console.log(arr);
						  for (var i=0; i < arr.length; i++) {	 
								times2=0;
								for (var j=0; j < temarr.length; j++) {
										
									  	if (arr[i][1].myname==temarr[j].myname) {
												times2=times2+1;
										};	
								};
								if(times2==1){
									endnodearr.push(arr[i][1]);
								};			
						  };
						  return endnodearr;
					};
					
		
										//《4》.包含的方法a是否包含b
										function  containfuc(arr,b){
											var iscont=false;
											for (var i=0; i < arr.length; i++) {		
													if (arr[i].myname==b[0].myname) {
											  			iscont=true;
											  		} ;
											};
											return iscont;
										};
										//《5》根据开始获取下一节点
										function getnextnode(a,arr){
											var temparr=[];
											for (var j=0; j< arr.length; j++) {		  					
												if (a[0].myname==arr[j][0].myname) {	
													temparr.push(arr[j][1]);
												} ;
											};
											return temparr;							  				
									};
				
										//《6》两个jeson数组名字相同
										function issamename(a,b){	
													if (a[0].myname==b[0].myname) {	
														return true;
													}else{
														return false;
													} ;						  				
										};
					
										//《7》一个数组一个数的jeson名字相同
										function issamenames(a,brr){
												var istrue=false;
													for (var i=0; i < brr.length; i++) {					  					
															if (a[0].myname==brr[i].myname) {	
																istrue= true;
															} ;					
													};
												return istrue;			  				
										};
										
								
										var mtime=0;
										var beginnode=startnode(neworder);											//a,b,parameter,timetransarr,arr
										var stopnode=endnode(neworder);
										var timetransarr=backtimetransarr;
										
										do{
													//判断开始节点是否为时间库所
													if (containfuc(timetransarr,beginnode)) {
																for (var i=0; i < timetransarr.length; i++) {
																		  	if (timetransarr[i].myname==beginnode[0].myname) {
																		  			while(normalfunc(parameter)){
																		  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																		  			};
																		  	};
																};
													} ;
													
													//得到下一个开始节点
													beginnode=getnextnode(beginnode,neworder);
													console.log(beginnode);
													//开始节点之中只要出现结束节点即可跳出循环
													for (var i=0; i < beginnode.length; i++) {
															  	if((beginnode[i].myname==stopnode[0].myname)){
															  		return  mtime;
															  		break;
															  	}
													};
													
													//判断开始节点的个数
													if(beginnode.length>1){
																var temptime=0;
																var tempcode=[];
																for (var i=0; i < beginnode.length-1; i++) {
																		 				var temptime1=0;
																						var tempcode1=[];
																						var temptime2=0;
																						var tempcode2=[];
																		 				if (containfuc(timetransarr,beginnode[i])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i].myname) {
																									  			while(normalfunc(parameter)){
																									  					temptime1=temptime1+parseFloat(timetransarr[j].transtime);
																									  					tempcode1=beginnode[i];
																									  			};
																									  	};
																								};
																						} ;	 
																						if (containfuc(timetransarr,beginnode[i+1])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i+1].myname) {
																									  			while(normalfunc(parameter)){
																									  					temptime2=temptime2+parseFloat(timetransarr[j].transtime);
																									  					tempcode2=beginnode[i+1];
																									  			};
																									  	};
																								};
																						} ;	
																			if(temptime1<temptime2){
																					temptime=temptime1;
																					tempcode=tempcode1;
																			}else{
																					temptime=temptime2;
																					tempcode=tempcode2;
																			}; 		
																};
																
																beginnode=tempcode;
																mtime=mtime+temptime;
												}else{
																//判断开始节点是否为时间库所
																if (containfuc(timetransarr,beginnode)) {
																			for (var i=0; i < timetransarr.length; i++) {
																					  	if (timetransarr[i].myname==beginnode[0].myname) {
																					  			while(normalfunc(parameter)){
																					  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																					  			};
																					  	};
																			};
																} ;											
												};		
										}while(beginnode[0].myname!==stopnode[0].myname);
									
								return	mtime;
							
							
							
						};
						
						//(5).指数分布indexfunc(a,b) 
							function indextime(parameter1,parameter2){
								
								
								//《1》.将orderarr数组进行数据添加
										   var allarr=[];
										   allarr=backnormalarr.concat(backsourcearr);
										   allarr=allarr.concat(backtimetransarr);
											neworder=[];
											neworderarr=[];
											for (var i=0; i < orderarr.length; i++) {
													var	arr=[];
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][0].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   for (var j=0; j < allarr.length; j++) {
													 	if(allarr[j].myname===orderarr[i][1].myname){
													 		arr.push(allarr[j]);
													 	};	
												   }; 
												   neworder.push(arr);
											};
											
											for (var i=0; i < neworder.length; i++) {
											  	for (var j=0; j < neworder[i].length; j++) {
														neworderarr.push(neworder[i][j]);
												  };
											};
											
											for (var i=0; i < neworderarr.length-1; i++) {
											  	if (neworderarr[i].myname==neworderarr[i+1].myname) {
											  		neworderarr.splice(i+1,1);
											  	};
											};
																	/*节点的方法*/
											//《2》，开始节点的判断方法
										function startnode(arr) {
											var startnodearr=[];
											var temarr=[];
											var times1=0;
										  	for (var i=0; i < arr.length; i++) {
													for (var j=0; j < arr[i].length; j++) {
													  	temarr.push(arr[i][j]);
													};
											  };
											// console.log(temarr);
											// console.log(arr);
											  for (var i=0; i < arr.length; i++) {	 
													times1=0;
													for (var j=0; j < temarr.length; j++) {
														
														  	if (arr[i][0].myname==temarr[j].myname) {
																	times1=times1+1;
															};	
													};
													//console.log(times1);
													if(times1==1){
														startnodearr.push(arr[i][0]);
													};			
											  };
											  return startnodearr;
										};
										
											//《3》，结束节点的判断方法
										function endnode (arr) {
						var endnodearr=[];
						var temarr=[];
						var times2=0;
					  	for (var i=0; i < arr.length; i++) {
								for (var j=0; j < arr[i].length; j++) {
								  	temarr.push(arr[i][j]);
								};
						  };
						 // console.log(temarr);
						  //console.log(arr);
						  for (var i=0; i < arr.length; i++) {	 
								times2=0;
								for (var j=0; j < temarr.length; j++) {
										
									  	if (arr[i][1].myname==temarr[j].myname) {
												times2=times2+1;
										};	
								};
								if(times2==1){
									endnodearr.push(arr[i][1]);
								};			
						  };
						  return endnodearr;
					};
					
		
										//《4》.包含的方法a是否包含b
										function  containfuc(arr,b){
											var iscont=false;
											for (var i=0; i < arr.length; i++) {		
													if (arr[i].myname==b[0].myname) {
											  			iscont=true;
											  		} ;
											};
											return iscont;
										};
										//《5》根据开始获取下一节点
										function getnextnode(a,arr){
											var temparr=[];
											for (var j=0; j< arr.length; j++) {		  					
												if (a[0].myname==arr[j][0].myname) {	
													temparr.push(arr[j][1]);
												} ;
											};
											return temparr;							  				
									};
				
										//《6》两个jeson数组名字相同
										function issamename(a,b){	
													if (a[0].myname==b[0].myname) {	
														return true;
													}else{
														return false;
													} ;						  				
										};
					
										//《7》一个数组一个数的jeson名字相同
										function issamenames(a,brr){
												var istrue=false;
													for (var i=0; i < brr.length; i++) {					  					
															if (a[0].myname==brr[i].myname) {	
																istrue= true;
															} ;					
													};
												return istrue;			  				
										};
										
								
										var mtime=0;
										var beginnode=startnode(neworder);											//a,b,parameter,timetransarr,arr
										var stopnode=endnode(neworder);
										var timetransarr=backtimetransarr;
										
										do{
													//判断开始节点是否为时间库所
													if (containfuc(timetransarr,beginnode)) {
																for (var i=0; i < timetransarr.length; i++) {
																		  	if (timetransarr[i].myname==beginnode[0].myname) {
																		  			while(indexfunc(parameter1,parameter2)){
																		  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																		  			};
																		  	};
																};
													} ;
													
													//得到下一个开始节点
													beginnode=getnextnode(beginnode,neworder);
													console.log(beginnode);
													//开始节点之中只要出现结束节点即可跳出循环
													for (var i=0; i < beginnode.length; i++) {
															  	if((beginnode[i].myname==stopnode[0].myname)){
															  		return  mtime;
															  		break;
															  	}
													};
													
													//判断开始节点的个数
													if(beginnode.length>1){
																var temptime=0;
																var tempcode=[];
																for (var i=0; i < beginnode.length-1; i++) {
																		 				var temptime1=0;
																						var tempcode1=[];
																						var temptime2=0;
																						var tempcode2=[];
																		 				if (containfuc(timetransarr,beginnode[i])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i].myname) {
																									  			while(indexfunc(parameter1,parameter2)){
																									  					temptime1=temptime1+parseFloat(timetransarr[j].transtime);
																									  					tempcode1=beginnode[i];
																									  			};
																									  	};
																								};
																						} ;	 
																						if (containfuc(timetransarr,beginnode[i+1])) {
																								for (var j=0; j< timetransarr.length; j++) {
																									  	if (timetransarr[j].myname==beginnode[i+1].myname) {
																									  			while(indexfunc(parameter1,parameter2)){
																									  					temptime2=temptime2+parseFloat(timetransarr[j].transtime);
																									  					tempcode2=beginnode[i+1];
																									  			};
																									  	};
																								};
																						} ;	
																			if(temptime1<temptime2){
																					temptime=temptime1;
																					tempcode=tempcode1;
																			}else{
																					temptime=temptime2;
																					tempcode=tempcode2;
																			}; 		
																};
																
																beginnode=tempcode;
																mtime=mtime+temptime;
												}else{
																//判断开始节点是否为时间库所
																if (containfuc(timetransarr,beginnode)) {
																			for (var i=0; i < timetransarr.length; i++) {
																					  	if (timetransarr[i].myname==beginnode[0].myname) {
																					  			while(indexfunc(parameter1,parameter2)){
																					  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																					  			};
																					  	};
																			};
																} ;											
												};		
										}while(beginnode[0].myname!==stopnode[0].myname);
									
								return	mtime;
								
								
								
							};
						
						//(6).瑞利分布rayleighfunc(a,b) 
						  function rayleightime(parameter1,parameter2){
					  	
					  	//《1》.将orderarr数组进行数据添加
									   var allarr=[];
									   allarr=backnormalarr.concat(backsourcearr);
									   allarr=allarr.concat(backtimetransarr);
										neworder=[];
										neworderarr=[];
										for (var i=0; i < orderarr.length; i++) {
												var	arr=[];
											   for (var j=0; j < allarr.length; j++) {
												 	if(allarr[j].myname===orderarr[i][0].myname){
												 		arr.push(allarr[j]);
												 	};	
											   }; 
											   for (var j=0; j < allarr.length; j++) {
												 	if(allarr[j].myname===orderarr[i][1].myname){
												 		arr.push(allarr[j]);
												 	};	
											   }; 
											   neworder.push(arr);
										};
										
										for (var i=0; i < neworder.length; i++) {
											  	for (var j=0; j < neworder[i].length; j++) {
														neworderarr.push(neworder[i][j]);
												  };
											};
											
											for (var i=0; i < neworderarr.length-1; i++) {
											  	if (neworderarr[i].myname==neworderarr[i+1].myname) {
											  		neworderarr.splice(i+1,1);
											  	};
											};
																/*节点的方法*/
										//《2》，开始节点的判断方法
									function startnode(arr) {
										var startnodearr=[];
										var temarr=[];
										var times1=0;
									  	for (var i=0; i < arr.length; i++) {
												for (var j=0; j < arr[i].length; j++) {
												  	temarr.push(arr[i][j]);
												};
										  };
										// console.log(temarr);
										// console.log(arr);
										  for (var i=0; i < arr.length; i++) {	 
												times1=0;
												for (var j=0; j < temarr.length; j++) {
													
													  	if (arr[i][0].myname==temarr[j].myname) {
																times1=times1+1;
														};	
												};
												//console.log(times1);
												if(times1==1){
													startnodearr.push(arr[i][0]);
												};			
										  };
										  return startnodearr;
									};
									
										//《3》，结束节点的判断方法
									function endnode (arr) {
					var endnodearr=[];
					var temarr=[];
					var times2=0;
				  	for (var i=0; i < arr.length; i++) {
							for (var j=0; j < arr[i].length; j++) {
							  	temarr.push(arr[i][j]);
							};
					  };
					 // console.log(temarr);
					  //console.log(arr);
					  for (var i=0; i < arr.length; i++) {	 
							times2=0;
							for (var j=0; j < temarr.length; j++) {
									
								  	if (arr[i][1].myname==temarr[j].myname) {
											times2=times2+1;
									};	
							};
							if(times2==1){
								endnodearr.push(arr[i][1]);
							};			
					  };
					  return endnodearr;
				};
				
	
									//《4》.包含的方法a是否包含b
									function  containfuc(arr,b){
										var iscont=false;
										for (var i=0; i < arr.length; i++) {		
												if (arr[i].myname==b[0].myname) {
										  			iscont=true;
										  		} ;
										};
										return iscont;
									};
									//《5》根据开始获取下一节点
									function getnextnode(a,arr){
										var temparr=[];
										for (var j=0; j< arr.length; j++) {		  					
											if (a[0].myname==arr[j][0].myname) {	
												temparr.push(arr[j][1]);
											} ;
										};
										return temparr;							  				
								};
			
									//《6》两个jeson数组名字相同
									function issamename(a,b){	
												if (a[0].myname==b[0].myname) {	
													return true;
												}else{
													return false;
												} ;						  				
									};
				
									//《7》一个数组一个数的jeson名字相同
									function issamenames(a,brr){
											var istrue=false;
												for (var i=0; i < brr.length; i++) {					  					
														if (a[0].myname==brr[i].myname) {	
															istrue= true;
														} ;					
												};
											return istrue;			  				
									};
									
							
									var mtime=0;
									var beginnode=startnode(neworder);											//a,b,parameter,timetransarr,arr
									var stopnode=endnode(neworder);
									var timetransarr=backtimetransarr;
									
									do{
												//判断开始节点是否为时间库所
												if (containfuc(timetransarr,beginnode)) {
															for (var i=0; i < timetransarr.length; i++) {
																	  	if (timetransarr[i].myname==beginnode[0].myname) {
																	  			while(rayleighfunc(parameter1,parameter2)){
																	  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																	  			};
																	  	};
															};
												} ;
												
												//得到下一个开始节点
												beginnode=getnextnode(beginnode,neworder);
												console.log(beginnode);
												//开始节点之中只要出现结束节点即可跳出循环
												for (var i=0; i < beginnode.length; i++) {
														  	if((beginnode[i].myname==stopnode[0].myname)){
														  		return  mtime;
														  		break;
														  	}
												};
												
												//判断开始节点的个数
												if(beginnode.length>1){
															var temptime=0;
															var tempcode=[];
															for (var i=0; i < beginnode.length-1; i++) {
																	 				var temptime1=0;
																					var tempcode1=[];
																					var temptime2=0;
																					var tempcode2=[];
																	 				if (containfuc(timetransarr,beginnode[i])) {
																							for (var j=0; j< timetransarr.length; j++) {
																								  	if (timetransarr[j].myname==beginnode[i].myname) {
																								  			while(rayleighfunc(parameter1,parameter2)){
																								  					temptime1=temptime1+parseFloat(timetransarr[j].transtime);
																								  					tempcode1=beginnode[i];
																								  			};
																								  	};
																							};
																					} ;	 
																					if (containfuc(timetransarr,beginnode[i+1])) {
																							for (var j=0; j< timetransarr.length; j++) {
																								  	if (timetransarr[j].myname==beginnode[i+1].myname) {
																								  			while(rayleighfunc(parameter1,parameter2)){
																								  					temptime2=temptime2+parseFloat(timetransarr[j].transtime);
																								  					tempcode2=beginnode[i+1];
																								  			};
																								  	};
																							};
																					} ;	
																		if(temptime1<temptime2){
																				temptime=temptime1;
																				tempcode=tempcode1;
																		}else{
																				temptime=temptime2;
																				tempcode=tempcode2;
																		}; 		
															};
															
															beginnode=tempcode;
															mtime=mtime+temptime;
											}else{
															//判断开始节点是否为时间库所
															if (containfuc(timetransarr,beginnode)) {
																		for (var i=0; i < timetransarr.length; i++) {
																				  	if (timetransarr[i].myname==beginnode[0].myname) {
																				  			while(rayleighfunc(parameter1,parameter2)){
																				  					mtime=mtime+parseFloat(timetransarr[i].transtime);
																				  			};
																				  	};
																		};
															} ;											
											};		
									}while(beginnode[0].myname!==stopnode[0].myname);
								
							return	mtime;
					  	
					  	
					  	
					  };
				
				
				//20.开始仿真按钮的作用
					
					$('#startsimulation').bind('click', function(){
								//console.log(typeof(backfunctionarr[0].parameter1));
								//console.log(backfunctionarr[0].parameter2);
								var parameter1=parseFloat(backfunctionarr[0].parameter1);
								var parameter2=parseFloat(backfunctionarr[0].parameter2);
								var mtime=0;
								//backfunctionarr
								if(backfunctionarr[0].distributefunction=="binomialDistribution"){
									mtime=Binomialtime(parameter1);
								}else if(backfunctionarr[0].distributefunction=="normalDistribution"){
									 mtime=normaltime(parameter1);
								}else if(backfunctionarr[0].distributefunction=="poissonDistribution"){
									mtime=poissontime(parameter1);
								}else if(backfunctionarr[0].distributefunction=="evenlyDistribution"){
									mtime=evenlytime(parameter1,parameter2);
								}else if(backfunctionarr[0].distributefunction=="indexDistribution"){
									mtime=indextime(parameter1,parameter2);
								}else if(backfunctionarr[0].distributefunction=="rayleighDistribution"){
									mtime=rayleightime(parameter1,parameter2);
								};
									console.log(mtime);
										simtime=mtime;	
										
											var ttt=0;
											for (var i=0; i < neworderarr.length; i++) {
											  	setTimeout( function simtimebary(){
														//console.log("快来呀");
														var status=0;   
														function showyuan(){  
															  var c=document.getElementById("mycanvas");  
															  var cxt=c.getContext("2d");
															  var x=0;
															  var y=0; 
															  console.log(jesonarray);
															  console.log(neworderarr);
															 for (var j=0; j < jesonarray.length; j++) {
																   if (jesonarray[j].myname==neworderarr[ttt].myname) {
																   	  	x=jesonarray[j].myleft;  
															 			y=jesonarray[j].mytop;  
																   };
															 };
															ttt=ttt+1;
														       show(cxt,x,y); 
														} ;
														function show(cxt,x,y){  
															 cxt.fillStyle="#FF0000";  
															 cxt.beginPath();  
															 cxt.arc(x,y,5,0,Math.PI*2,true);  
															 cxt.closePath();  
															 cxt.fill();  
														 }  ;		
														showyuan();
													}, 1000*(i+1));
											};		
											
										
												
										setTimeout( function simtimebar1(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:5%").html("5%");
										}, 1000);
										setTimeout( function simtimebar2(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:10%").html("10%");
										}, 2000);
										setTimeout( function simtimebar3(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:20%").html("20%");
										}, 3000);
										setTimeout( function simtimebar4(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:30%").html("30%");
										}, 4000);
										setTimeout( function simtimebar5(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:40%").html("40%");
										}, 5000);
										setTimeout( function simtimebar6(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:50%").html("50%");
										}, 6000);
										setTimeout( function simtimebar7(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:60%").html("60%");
										}, 7000);
										setTimeout( function simtimebar8(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:70%").html("70%");
										}, 8000);
										setTimeout( function simtimebar9(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:80%").html("80%");
										}, 9000);
										setTimeout( function simtimebar10(){
												$("#executetext").html("仿真中");
												$("#executetwig").attr("style","width:90%").html("90%");
										}, 10000);
 										setTimeout( function simtimewrite(){
												$("#executetext").html("仿真结束");
												$("#executetwig").attr("style","width:100%").html("100%");
												$("#timeshow").val(simtime);
										}, 11000);
										var timearr={
												"distributefunction":backfunctionarr[0].distributefunction,
												"simtime":simtime,
												"placenum":backnormalarr.length+backsourcearr.length,
												"timetrans":backtimetransarr.length
											};
											console.log(timearr);
											//把需要的信息导入数据库
											setTimeout( function savesimtime(){
													$.ajax({
															url: "displayphp/savesimtime.php",
															type: "post",
															dataType: "JSON",
															async: false,
															data:{timearr:timearr},
															success:function(data){
																alert("保存成功");
															},
															error:function(msg){
																alert("保存失败");
																//console.log(msg);
															}
													});					
											}, 12000);
													
					});
				
				//21.1 仿真时间按钮的作用
				
					$('#simulationtime').bind('click',function(){
							console.log("zhangtengteng");
							window.open('timestatisticspage.php');	
					});
					
	
				//菜单栏按钮的事件
				
				//21.文件栏
						//(1).新建
								$("#cnewfile").bind('click',function(){
										newfilefuc();
										$.ajax({
											url: "displayphp/mynewfile.php",
											type: "post",
											async: false,
											success:function(data){
												alert("新建成功");
											},
											error:function(msg){
												alert("新建失败");
												//console.log(msg);
											}
									});									
								
							});
						//(2).打开				
								$("#copenfile").	bind('click',function(){
												window.open('mydate.php');	
								});
						//(3).保存
								$("#csavefile").	bind('click',function(){
									$.ajax({
										url: "server.php",
										type: "post",
										dataType: "JSON",
										async: false,
										data:{jesonarray:jesonarray},
										success:function(data){
											alert("保存成功");
											console.log(jesonarray);
										},
										error:function(msg){
											alert("保存失败");
											//console.log(msg);
										}
									});
					});
						//(4).关闭
								$("#cclosefile").	bind('click',function(){
												window.close();	
								});
								
				//22.编辑栏
						//(1).撤销
						
						//(2).清除
						
				//23.视图栏
						//(1).工具条
							$('#ctoolbar').bind('click', function(){
									var $toolBar=$("#toolBar"); //jQuery对象 
									var toolBar=$toolBar.get(0); //DOM对象 
									if (toolBar.style.visibility=="hidden") {
										toolBar.style.visibility ="visible";  
									}else{
										toolBar.style.visibility ="hidden";
									};	
							});
						//(2).状态条
							$('#cstatusbar').bind('click', function(){
									var $description=$("#description"); //jQuery对象 
									var description=$description.get(0); //DOM对象 
									if (description.style.visibility=="hidden") {
										description.style.visibility ="visible";  
									}else{
										description.style.visibility ="hidden";
									};	
							});
						//(3).工具栏
							$('#ctoolcolumn').bind('click', function(){
									var $displayBar=$("#displayBar"); //jQuery对象 
									var displayBar=$displayBar.get(0); //DOM对象 
									if (displayBar.style.visibility=="hidden") {
										displayBar.style.visibility ="visible";  
									}else{
										displayBar.style.visibility ="hidden";
									};	
							});
						//(4).树视图
							$('#ctreeview').bind('click', function(){
									var $process=$("#process"); //jQuery对象 
									var process=$process.get(0); //DOM对象 
									if (process.style.visibility=="hidden") {
										process.style.visibility ="visible";  
									}else{
										process.style.visibility ="hidden";
									};	
							});
								
				//24.仿真
						//(1).仿真初始化
								$('#cpresim').bind('click', function(){
									$.ajax({
									url: "displayphp/initsimulation.php",
									type: "post",
									dataType: "JSON",
									async: false,
									success:function(responseText,responseStatus){
													//(0).删除状态栏以前添加的内容
														$('#cmdescribox ul').remove();
														$('#oddescribox1 ul').remove();
														$('#oddescribox2 ul').remove();
														$('#msdescribox1 ul').remove();
														$('#msdescribox2 ul').remove();
													
													//（1.）接收数据库返回的数据
													//console.log(orderarr);
													receivedjson = JSON.parse(responseText);//接收数据库返回数据
													//receivedjson前五个数分别为五个表中元素的个数如果需要可以在这里取值
													backnormalarr=[];				//用于接收数据库返回的数据
													backfunctionarr=[];
													backlocationarr=[];
						 							backsourcearr=[];
													backtimetransarr=[];
											//（2.）对返回的数据进行分组
													for (var i=0; i < receivedjson.length; i++) {
															 if (receivedjson[i].hasOwnProperty("distributefunction")) {
																	backfunctionarr.push(receivedjson[i]);
																};
																 if (receivedjson[i].hasOwnProperty("mytop")) {
																  	backlocationarr.push(receivedjson[i]);
																};
																 if (receivedjson[i].hasOwnProperty("capacity")) {
																	backnormalarr.push(receivedjson[i]);
																};
																 if (receivedjson[i].hasOwnProperty("sourcedescription")) {
																  	backsourcearr.push(receivedjson[i]);
																};
																 if (receivedjson[i].hasOwnProperty("timetransdescription")) {
																 	backtimetransarr.push(receivedjson[i]);
																};
													};
												
													//（3.）用于筛选orderarr中重复的对象
														var paxuarr=[];			
														for (var i=0; i < orderarr.length; i++){
															for (var j=0; j < orderarr[i].length; j++) {
																	paxuarr.push(orderarr[i][j]);
															};
																			// paxuarr.push(orderarr[i][0]);
																			// paxuarr.push(orderarr[i][1]);
														};
													
														//删除隔壁相同的数组
														for (var i=0; i < paxuarr.length-1; i++) {
																if (paxuarr[i].myname==paxuarr[i+1].myname) {
																		 paxuarr.splice(i+1,1);
																};
														};
									
													//（4.）内部方法增加增加部件
													function addcmdescribox(a){
																if(a==0){
																		var isinnormalplace=false;
																		var isinsourceplace=false;
																		for (var j=0; j< backnormalarr.length; j++) {
																			if (paxuarr[a].myname==backnormalarr[j].myname) {
																				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].description+"</div></ul>"); 
																				$('#cmdescribox').append(divobj);
																				isinnormalplace=true;
																				} 
																		 };
																		for (var j=0; j < backsourcearr.length;j++) {
																			if (paxuarr[a].myname==backsourcearr[j].myname) {
																				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].sourcedescription+"</div></ul>"); 
																				$('#cmdescribox').append(divobj);
																				isinsourceplace=true;
																				} 
																			}; 
																			if(isinnormalplace==false&&isinsourceplace==false){
																				alert("开始节点必须为库所");
																			};
																	}else if(a<paxuarr.length-1){
																		for (var j=0; j < backnormalarr.length; j++) {
																			if (paxuarr[a].myname==backnormalarr[j].myname) {
																				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].description+"</div></ul>"); 
																				$('#cmdescribox').append(divobj);
																			} 
																		 };
																		for (var j=0; j< backsourcearr.length;j++) {
																			if (paxuarr[a].myname==backsourcearr[j].myname) {
																				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].sourcedescription+"</div></ul>"); 
																				$('#cmdescribox').append(divobj);
																			} 
																		}; 
																		for (var j=0; j< backtimetransarr.length;j++) {
																		if (paxuarr[a].myname==backtimetransarr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backtimetransarr[j].myname+"</div><div  class='col-md-5'>"+backtimetransarr[j].transtype+"</div><div  class='col-md-4'> "+backtimetransarr[j].timetransdescription+"</div></ul>"); 
																			$('#cmdescribox').append(divobj);
																			} 
																		}; 
																	}else{
																		var isinnormalplace=false;
																		var isinsourceplace=false;
																		for (var j=0; j < backnormalarr.length; j++) {
																			if (paxuarr[a].myname==backnormalarr[j].myname) {
																				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].description+"</div></ul>"); 
																				$('#cmdescribox').append(divobj);
																				isinnormalplace=true;
																			} 
																		};
																		for (var j=0; j< backsourcearr.length; j++) {
																			if (paxuarr[a].myname==backsourcearr[j].myname) {
																			var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].sourcedescription+"</div></ul>"); 
																			$('#cmdescribox').append(divobj);
																			isinsourceplace=true;
																			} 
																		}; 
																		if(isinnormalplace==false&&isinsourceplace==false){
																			alert("结束节点必须为库所");
																			};
																		};
													};
														
														//调用增加方法
														for (var i=0; i < paxuarr.length; i++) {
															  	addcmdescribox(i);
															};
												
												
												//（5.）内部方法增加增加部件
													function addoddescribox(a){
																		for (var j=0; j< backnormalarr.length; j++) {
																			if (paxuarr[a].myname==backnormalarr[j].myname) {
																				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backnormalarr[j].myname+"</div><div  class='col-md-5'>"+backnormalarr[j].type+"</div><div  class='col-md-4'> "+backnormalarr[j].capacity+"</div></ul>"); 
																				$('#oddescribox1').append(divobj);
																				//console.log("宝贝");
																				} 							
																		 };
																		for (var j=0; j < backsourcearr.length;j++) {
																			if (paxuarr[a].myname==backsourcearr[j].myname) {
																				var divobj=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-3'>"+backsourcearr[j].myname+"</div><div  class='col-md-5'>"+backsourcearr[j].resourcestype+"</div><div  class='col-md-4'> "+backsourcearr[j].resourcesnums+"</div></ul>"); 
																				$('#oddescribox2').append(divobj);
																				} 
																			}; 
																			//console.log(a);
																			//console.log(paxuarr);
																			//console.log(backsourcearr);
																			//console.log(backnormalarr);
																			//console.log(paxuarr[a].myname);
																			//console.log(a);
														};
														
														//调用增加方法
														for (var i=0; i < paxuarr.length; i++) {
															  	addoddescribox(i);
															};
															
													//(6.)模型方程的添加
													function addmsdescribox(){
																var msdescriboxobj1=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  class=' col-md-4'>"+backfunctionarr[0].distributefunction+"</div><div  class='col-md-4'>"
																+backfunctionarr[0].parameter1+"</div><div  class='col-md-4'> "+backfunctionarr[0].parameter2+"</div></ul>"); 
																$('#msdescribox1').append(msdescriboxobj1);
																var msdescriboxobj2=$("<ul class='nav nav-tabs nettreeadd' role='tablist'> <div  >"+backfunctionarr[0].distributionfunctiondescription+"</div></ul>"); 
																$('#msdescribox2').append(msdescriboxobj2);
																
													};
														//console.log(backfunctionarr);
													addmsdescribox();
														
													alert("初始化成功");
													
										},
										error:function(msg){
											alert("初始化失败");
										}
									});
								});
						//(2).开始仿真
								$('#cstartsim').bind('click', function(){
											//console.log(typeof(backfunctionarr[0].parameter1));
											//console.log(backfunctionarr[0].parameter2);
											var parameter1=parseFloat(backfunctionarr[0].parameter1);
											var parameter2=parseFloat(backfunctionarr[0].parameter2);
											var mtime=0;
											//backfunctionarr
											if(backfunctionarr[0].distributefunction=="binomialDistribution"){
												mtime=Binomialtime(parameter1);
											}else if(backfunctionarr[0].distributefunction=="normalDistribution"){
												 mtime=normaltime(parameter1);
											}else if(backfunctionarr[0].distributefunction=="poissonDistribution"){
												mtime=poissontime(parameter1);
											}else if(backfunctionarr[0].distributefunction=="evenlyDistribution"){
												mtime=evenlytime(parameter1,parameter2);
											}else if(backfunctionarr[0].distributefunction=="indexDistribution"){
												mtime=indextime(parameter1,parameter2);
											}else if(backfunctionarr[0].distributefunction=="rayleighDistribution"){
												mtime=rayleightime(parameter1,parameter2);
											};
											console.log(mtime);
											simtime=mtime;	
											
											var ttt=0;
											for (var i=0; i < neworderarr.length; i++) {
											  	setTimeout( function simtimebary(){
														//console.log("快来呀");
														var status=0;   
														function showyuan(){  
															  var c=document.getElementById("mycanvas");  
															  var cxt=c.getContext("2d");
															  var x=0;
															  var y=0; 
															  console.log(jesonarray);
															  console.log(neworderarr);
															 for (var j=0; j < jesonarray.length; j++) {
																   if (jesonarray[j].myname==neworderarr[ttt].myname) {
																   	  	x=jesonarray[j].myleft;  
															 			y=jesonarray[j].mytop;  
																   };
															 };
															ttt=ttt+1;
														       show(cxt,x,y); 
														} ;
														function show(cxt,x,y){  
															 cxt.fillStyle="#FF0000";  
															 cxt.beginPath();  
															 cxt.arc(x,y,5,0,Math.PI*2,true);  
															 cxt.closePath();  
															 cxt.fill();  
														 }  ;		
														showyuan();
													}, 1000*(i+1));
											};		
											
											setTimeout( function simtimebar1(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:5%").html("5%");
											}, 1000);
											setTimeout( function simtimebar2(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:10%").html("10%");
											}, 2000);
											setTimeout( function simtimebar3(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:20%").html("20%");
											}, 3000);
											setTimeout( function simtimebar4(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:30%").html("30%");
											}, 4000);
											setTimeout( function simtimebar5(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:40%").html("40%");
											}, 5000);
											setTimeout( function simtimebar6(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:50%").html("50%");
											}, 6000);
											setTimeout( function simtimebar7(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:60%").html("60%");
											}, 7000);
											setTimeout( function simtimebar8(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:70%").html("70%");
											}, 8000);
											setTimeout( function simtimebar9(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:80%").html("80%");
											}, 9000);
											setTimeout( function simtimebar10(){
													$("#executetext").html("仿真中");
													$("#executetwig").attr("style","width:90%").html("90%");
											}, 10000);
	 										setTimeout( function simtimewrite(){
													$("#executetext").html("仿真结束");
													$("#executetwig").attr("style","width:100%").html("100%");
													$("#timeshow").val(simtime);
											}, 11000);
											var timearr={
												"distributefunction":backfunctionarr[0].distributefunction,
												"simtime":simtime,
												"placenum":backnormalarr.length+backsourcearr.length,
												"timetrans":backtimetransarr.length
											};
											console.log(timearr);
											//把需要的信息导入数据库
											setTimeout( function savesimtime(){
													$.ajax({
															url: "displayphp/savesimtime.php",
															type: "post",
															dataType: "JSON",
															async: false,
															data:{timearr:timearr},
															success:function(data){
																alert("保存成功");
															},
															error:function(msg){
																alert("保存失败");
																//console.log(msg);
															}
													});					
											}, 12000);
											
								});
				//25.系统评价				
						//(1).时间统计timestatistics
							$("#timestatistics").	bind('click',function(){
								window.open('timestatisticspage.php');	
							});
							
						//(2).成本统计coststatistics
							$("#coststatistics").	bind('click',function(){
										
										console.log(neworderarr);
									$.ajax({
											url: "coststatisticspage.php",
											type: "post",
											dataType: "JSON",
											async: false,
											data:{neworderarr:neworderarr},
											success:function(data){
												var simtime=$('#timeshow').val();
												var urlname="coststatisticspageshow.html?"+"simtime="+simtime;
			  									//window.open(urlname,"_blank","width=200,height=200");
												window.open(urlname);
											},
											error:function(msg){
												alert("打开失败");
											}
									});				
							});
						//(3).资源统计resourcesstatistics
							
							$('#resourcesstatistics').bind('click', function(){
									$.ajax({
											url: "coststatisticspage.php",
											type: "post",
											dataType: "JSON",
											async: false,
											data:{neworderarr:neworderarr},
											success:function(data){
												window.open('resourcesstatistics.html');
											},
											error:function(msg){
												alert("打开失败");
											}
									});				
							});
							
						//(4).队列统计queuestatistics
						//(5).可达数统计reachabletreestatistics
						//(6).综合分析comprehensiveanalysis
						
				//26.帮助按钮
					$('#myhelp').bind('click', function(){
							window.open('helptext/myhelp.html');	
					});
					$('#help').bind('click', function(){
							window.open('helptext/myhelp.html');
					});
								
				//测试按钮
				$('#ceshi').bind('click', function(){
					
					});
							
/*clickmyplace和clicktimetransition页面方法与事件*/
		/*方法*/	
			
			/* 1关闭界面方法*/
			var closemypage =function(){
						window.close();			 
				};
				
			//获取radio选中的值的方法
		/*		function check_radio(){ 
							var chkObjs = document.getElementsByName("radio"); 
							for(var i=0;i<chkObjs.length;i++){ 
							if(chkObjs[i].checked){ 
								return $('#'+chkObjs[i]).id;
								//alert($('#'+chkObjs[i]).id);
								break; 
							} 
				}};
				*/
		  /*事件*/
			/*1.关闭clickmyplace与clickmytimetransition和setmyfunction和clicknormalplace页面*/
			$('#closeplacepage').bind('click', function(){
				closemypage();
				});
			$('#closesetfunctionpage').bind('click', function(){
				closemypage();
				});
			$('#closettpage').bind('click', function(){
				closemypage();
				});
			$('#closenormalplacepage').bind('click', function(){
				closemypage();
				});
			
			
			/* 2.clickmyplace页面点击确定添加数据到数据库*/
			var arr=[];
			$('#myplaceiformationconfirm').bind('click',function(){					
				$.ajax({
								url: "clickplace.php",
								type: "post",
								dataType: "JSON",
								async: false,
								data:{arr:arr},
								success:function(data){
									alert("保存成功");
								},
								error:function(msg){
									alert("保存失败");
									//console.log(msg);
								}
						});													
			});
			
			/*3.myplace页面保存数组*/
			$('#savedate').bind('click',function(){
								var nameid=window.location.search;
								nameid=nameid.substring(6);
								alert("您要修改的控件名称为："+nameid);
								var name=nameid;
								var resourcesnums=$('#resourcesnums').val();
								var Resourcestype=$('#Resourcestype').val();
								var Resourcescost=$('#Resourcescost').val();
								var timeoutcost=$('#timeoutcost').val();
								var fixedcost=$('#fixedcost').val();
								var Maximumtimeout=$('#Maximumtimeout').val();
								var timesetting=$('#timesetting').val();
								var sourcedescription=$('#sourcedescription').val();
								arr={
								"myname":name,
								"resourcesnums":resourcesnums,
								"Resourcestype":Resourcestype,
								"Resourcescost":Resourcescost,
								"timeoutcost":timeoutcost,
								"fixedcost":fixedcost,
								"Maximumtimeout":Maximumtimeout,
								"timesetting": timesetting,
								"sourcedescription": sourcedescription,
								};
								console.log(arr);	
			});
			
			//4.保存数据clicksetfunction页面
			var timetraarr=[];
			$('#savefunctiondate').bind('click',function(){
				//var nameid=window.location.search;
				//nameid=nameid.substring(6);
				//alert("您要修改的控件名称为："+nameid);
				//var myname=nameid;
				var myname="only";
				var distributefunction=$('input:radio:checked').attr('id');
				var parameter1=$('#parameter1').val();
				var parameter2=$('#parameter2').val();
				var distributionFunctionDescription=$('#distributionFunctionDescription').val();
				timetraarr={
					'myname':myname,
					'distributefunction':distributefunction,
					'parameter1':parameter1,
					'parameter2':parameter2,
					'distributionFunctionDescription':distributionFunctionDescription
				};
				alert("保存成功");
				//console.log(timetraarr);	
			});
			
			/* 5.clicksetfunction页面点击将数据添加数据到数据库*/
			$('#setfunctioniformationconfirm').bind('click',function(){
	
				$.ajax({
								url: "setfunction.php",
								type: "post",
								dataType: "JSON",
								async: false,
								data:{timetraarr:timetraarr},
								success:function(data){
									alert("保存成功");
									console.log(timetraarr);
								},
								error:function(msg){
									alert("保存失败");
									//console.log(msg);
								}
							});
			
			});		
			
			//6.点击保存clicktimetrans页面数据
			var clicktimetransarr=[];
			$('#savettdate').bind('click',function(){
				var nameid=window.location.search;
				nameid=nameid.substring(6);
				alert("您要修改的控件名称为："+nameid);
				var myname=nameid;
				var transtype=$('input:radio:checked').attr('id');
				var changetime=$('#changetime').val();
				var timedescription=$('#timedescription').val();
				clicktimetransarr={
					'myname':myname,
					'transtype':transtype,
					'changetime':changetime,
					'timedescription':timedescription,
				};
				console.log(clicktimetransarr);	
			});
			
			/* 7.clicksettimetrans页面点击将数据添加数据到数据库*/
			$('#ttconfirm').bind('click',function(){
	
				$.ajax({
								url: "clicktimetrans.php",
								type: "post",
								dataType: "JSON",
								async: false,
								data:{clicktimetransarr:clicktimetransarr},
								success:function(data){
									alert("保存成功");
								},
								error:function(msg){
									alert("保存失败");
									//console.log(msg);
								}
							});
			
			});		
			
			//8.保存clicknormalplace页面上的信息
			var clicknormalplacearr=[];
			$('#savenormalplace').bind('click',function(){
				var nameid=window.location.search;
				nameid=nameid.substring(6);
				alert("您要修改的控件名称为："+nameid);
				var myname=nameid;
				var capacity=$('#capacity').val();
				var nodedescription=$('#nodedescription').val();
				clicknormalplacearr={
					'myname':myname,
					'capacity':capacity,
					'nodedescription':nodedescription,
				};
				console.log(clicknormalplacearr);	
			});
			
			//9.将clicknormalplace页面上的数据保存到数据库
				$('#normalplaceconfirm').bind('click',function(){
	
				$.ajax({
								url: "clicknormalplace.php",
								type: "post",
								dataType: "JSON",
								async: false,
								data:{clicknormalplacearr:clicknormalplacearr},
								success:function(data){
									alert("保存成功");
									console.log(clicknormalplacearr);
								},
								error:function(msg){
									alert("保存失败");
									//console.log(msg);
								}
							});
			
			});		
			
			
			//ready结尾
});

	
	
	/*其他事件及其方法*/
			/*添加底部的时间方法*/
			
				function getCurDate(){
					var d = new Date();
					var week;
					switch (d.getDay()){
						case 1: week="Monday"; break;
						case 2: week="Tuesday"; break;
						case 3: week="Wednesday"; break;
						case 4: week="Thursday"; break;
						case 5: week="Friday"; break;
						case 6: week="Saturday"; break;
						default: week="Sunday";
					}
					var years = d.getFullYear();
					var month = add_zero(d.getMonth()+1);
					var days = add_zero(d.getDate());
					var hours = add_zero(d.getHours());
					var minutes = add_zero(d.getMinutes());
					var seconds=add_zero(d.getSeconds());
					var ndate = years+" / "+month+" / "+days+"      "+hours+":"+minutes+":"+seconds+" "+week;
					$('#mytime').html(ndate);
				}	
				function add_zero(temp){
					if(temp<10) return "0"+temp;
					else return temp;
				}
				setInterval("getCurDate()",100);
	


