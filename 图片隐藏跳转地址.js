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
