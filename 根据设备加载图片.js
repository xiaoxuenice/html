<script type="text/javascript">
$(function(){
        //根据不同浏览设备，加载不同图片
        pic_html();
        function pic_html(){
                if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
                        $(".pic-html").attr("src","images/big.png");
                }else{
                        $(".pic-html").attr("src","images/6.png");
                }
        }
        //当调整浏览器窗口的大小时，发生 resize 事件
        $(window).resize(function(){
                pic_html();
        })
})
</script>

<img  id="goBtn"  class="pic-html" />


------------------------------------------------------------------------------------------------------------------




if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
     console.log('此为移动端打开')
 }else{
     document.write('<script type="text/javascript" src="js/wow.min.js"><\/script>');
 }




<script type="text/javascript">
		function myfun(){
 try{
	                     if (/webOS|iPhone|iPod/i.test(navigator.userAgent)) {
				                       window.location.href="/ios/";
				                                  }
	                     else
		                                    { window.location.href="/andr/";
							                                                         }
	         }catch(e){}

}
if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
     setTimeout("myfun()",1000);}</script>
