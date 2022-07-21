let sliderTag = $(".slider1");
let sliderItems = sliderTag.find(".item");
let numItems = sliderItems.length;
let slideNum = 1;
let timeOut = 5000;
let sliderNavigators = sliderTag.find(".navigator ul li");

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
    slideNum++;
}

slider();

let sliderInterval = setInterval(slider, timeOut);

sliderTag.mouseleave(function () {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(slider, timeOut);
});

function nextSlide() {
    clearInterval(sliderInterval);
    slider();
}

function prevSlide() {
    clearInterval(sliderInterval);
    slideNum = slideNum - 2;
    slider();
}

function goToSlide(index) {
    clearInterval(sliderInterval);
    slideNum = index + 1;
    slider();
}

$(".slider1 .next").click(function () {
    nextSlide();
});

$(".slider1 .prev").click(function () {
    prevSlide();
});

sliderNavigators.click(function () {
    let index = $(this).index();
    goToSlide(index);
});