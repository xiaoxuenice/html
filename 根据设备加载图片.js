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
        
        
<script>
        var webArr = ['https://taobao.com']
        function RandomNum(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.floor(Rand * Range);
            return num;
        }

        var webLength = webArr.length;
        var mathNum = RandomNum(0, webLength);
        $('#goBtn').click(function () {
            window.location.href = webArr[mathNum];
        })
</script>


------------------------------------------------------------------------------------------------------------------




if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
     console.log('此为移动端打开')
 }else{
     document.write('<script type="text/javascript" src="js/wow.min.js"><\/script>');
 }
