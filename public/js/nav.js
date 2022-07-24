$(document).ready(function () {
    let timer = {};
    let navItem = $(".nav ul li");
    navItem.hover(function () {
        let tag = $(this);
        let timerAttr = tag.attr("data-timer");
        clearTimeout(timer[timerAttr]);
        timer[timerAttr] = setTimeout(function () {
            tag.addClass("active");
            $(">.nav2", tag).fadeIn(200);
            $(">.nav3", tag).fadeIn(200);
        }, 500);
    }, function () {
        let tag = $(this);
        let timerAttr = tag.attr("data-timer");
        clearTimeout(timer[timerAttr]);
        timer[timerAttr] = setTimeout(function () {
            tag.removeClass("active");
            $(">.nav2", tag).fadeOut(200);
            $(">.nav3", tag).fadeOut(200);
        }, 600);
    });

    let indexes={"33":1,"44":2};
    console.log(indexes["33"]);
    indexes["55"]=55;
    console.log(indexes["55"])
})