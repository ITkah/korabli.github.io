$("nav li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<p class="arrow_mob"></p>')
    }
});

var btn = $('.top');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

$(".arrow_mob").on("click", function(e) {
    $(this).siblings(".sub-menu").slideToggle(300);
});

$(".active_menu").on("click", function(e) {
    $("nav").toggleClass("nav_active");
});

$('.single').owlCarousel({
    loop: true,
    margin: 5,
    speed: 600,
    nav: true,
    dots: false,
    items: 1,
    autoplay: false,
    autoplayTimeout: 6500,
    autoplayHoverPause: false,
    responsive: {
        0: {
            nav: false,
            dots: true,
        },
        768: {
            nav: false,
            dots: true,
        },
        990: {
            nav: true,
            dots: false,
        }
    }
})