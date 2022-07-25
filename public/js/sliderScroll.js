function sliderScroll(direction, tag) {
    let iTag = $(tag);
    let sliderScroll = iTag.parents(".slider_scroll");
    let sliderScrollUl = sliderScroll.find("ul");
    let sliderScrollItems = sliderScrollUl.find("li");
    let sliderScrollItemsNumber = sliderScrollItems.length;
    let sliderNumbers = Math.ceil(sliderScrollItemsNumber / 4);
    let maxNegativeMargin = -(sliderNumbers - 1) * 780;
    let marginRightOld = parseFloat(sliderScrollUl.css("margin-right"));
    let marginRightNew;
    if (direction === 'next') {
        marginRightNew = marginRightOld - 780;
    }
    if (direction === 'prev') {
        marginRightNew = marginRightOld + 780;
    }
    if (marginRightNew > 0) {
        marginRightNew = maxNegativeMargin;
    }
    if (marginRightNew < maxNegativeMargin) {
        marginRightNew = 0;
    }
    sliderScrollUl.animate({"marginRight": marginRightNew}, 800);
}

$(".next").click(function () {
    sliderScroll('next', this);
});

$(".prev").click(function () {
    sliderScroll('prev', this);
});