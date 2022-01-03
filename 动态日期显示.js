<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<span id="time"></span>
		<script>
			var show= function(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				month= month<10?"0"+month:month;
				var day = date.getDate();//获取日期
				day= day<10?"0"+day:day;
				var hour = date.getHours();
				hour= hour<10?"0"+hour:hour;
				var minute = date.getMinutes();
				minute= minute<10?"0"+minute:minute;
				var week = date.getDay();//获取星期
				var second=date.getSeconds();
				second= second<10?"0"+second:second;
				week = "日一二三四五六".charAt(week);
				week="星期"+week;
				result="<center>"+year+"-"+month+"-"+day+" "+week+" "+hour+":"+minute+":"+second+"</center>";
				document.getElementById("time").innerHTML=result;
				document.getElementById("time").style.fontSize="80px";
		 }
			show();
			setInterval("show()",1000);
		</script>
