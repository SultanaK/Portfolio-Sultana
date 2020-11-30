'use strict';

function init() {
    animatedAnchorScroll();
}
 

function animatedAnchorScroll() {

    $('a.js-scroll-link').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);

    });
}

$(init());