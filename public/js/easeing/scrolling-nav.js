//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        // get target div to scroll to
var target = $($anchor.attr('href'));
// if target is valid, scroll to
if(target && target.offset()){
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 850,'easeInOutExpo');
}
        event.preventDefault();
    });
});
