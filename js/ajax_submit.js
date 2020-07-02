function createXhr(){
	//判断浏览器
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else{
		return new ActiveXObject("Microsoft.XMLHttp");
	}
}

$(document).ready(function(){
	$("#imgthree").click(function(){
		//1
		var xhr = createXhr();
		//2
		xhr.open("post","server.php",true);
		//3
		xhr.onreadystatechange = function(){
			if(xhr.readyState ==4 && xhr.status == 200){
				//$("#txtLoginNameTip").html(xhr.responseText);
				console.log("123");
			}
		};
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//4
		xhr.send();
	});
});