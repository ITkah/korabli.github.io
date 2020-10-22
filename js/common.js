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