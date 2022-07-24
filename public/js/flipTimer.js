$(".flipTimer").flipTimer({
    direction: 'down',
    date: 'July 24,2022 17:25:40',
    callback: function () {
        $(".slider2 .content").css("opacity", .5);
        $(".remaining_time span").text("فرصت شما تمام شد:").css("color", "#ef394e").css("textShadow", "0 1px 10px #ef394e");
        $(".finished").fadeIn(300);
    }
});