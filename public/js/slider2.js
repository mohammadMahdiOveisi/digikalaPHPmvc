$(document).ready(function () {
    let sliderTag = $(".slider2");
    let sliderItems = sliderTag.find(".item");
    let numItems = sliderItems.length;
    let slideNum = 1;
    let sliderNavigators = sliderTag.find(".navigator ul li");
    let timeOut = 5000;
    let name;

    function slider() {
        if (slideNum > numItems) {
            slideNum = 1;
        } else if (slideNum < 1) {
            slideNum = numItems;
        }
        sliderItems.fadeOut(0);
        sliderItems.eq(slideNum - 1).fadeIn(0);
        sliderNavigators.removeClass("active");
        sliderNavigators.eq(slideNum - 1).addClass("active");
        name = sliderNavigators.eq(slideNum - 1).text();
        sliderTag.find(".image .title span").eq(slideNum-1).text(name);
        slideNum++;
    }

    slider();
    let sliderInterval = setInterval(slider, timeOut);

    function goToSlide(index) {
        clearInterval(sliderInterval);
        slideNum = index + 1;
        slider();
    }

    sliderNavigators.click(function () {
        let index = $(this).index();
        goToSlide(index);
    });

    sliderTag.mouseleave(function () {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(slider, timeOut);
    });
});