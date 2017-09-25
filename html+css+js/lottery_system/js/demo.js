//什么元素 触发 什么事件 实现  什么效果
//生成一个随机数Math.random()生成一个0-1之间的随机小数
//Math.floor()向下取整
var $this;
$(".rotateArrow").click(function() {
    $this = $(this);
    var n = Math.floor(Math.random() * 8);
    switch (n) {
        case 0:
            rotateFun(0, "很遗憾，你没有中奖！");
            break;
        case 1:
            rotateFun(45, "恭喜你，获得五元代金券！");
            break;
        case 2:
            rotateFun(90, "恭喜你，获得一元代金券！");
            break;
        case 3:
            rotateFun(135, "恭喜你，获得十元代金券！");
            break;
        case 4:
            rotateFun(180, "谢谢参与！");
            break;
        case 5:
            rotateFun(225, "恭喜你，获得二十元代金券！");
            break;
        case 6:
            rotateFun(270, "恭喜你，获得五十元代金券！");
            break;
        case 7:
            rotateFun(315, "恭喜你，获得三十元代金券！");
            break;
    }
});
$(".result a").click(function() {
    $(".result").hide();
});

function rotateFun(angle, text) {
    $this.rotate({
        angle: 0, //初始位置
        duration: 5000, //动画执行的时间 5000ms
        animateTo: 360 * 4 + angle, //旋转多少度
        callback: function() {
            $(".result").show();
            $(".result p").html(text);
        }
    });
}
setInterval(function() {
    $(".user ul").animate({ top: '-37px' }, 500, function() {
        $(this).append($(".user ul li:first"));
        $(this).css("top", 0);
    });
}, 1000);