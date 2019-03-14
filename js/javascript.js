$("#btn1").click(function() {
    $('html,body').animate({
        scrollTop: $("#theater").offset().top},
        'slow');
});
$("#btn2").click(function() {
    $('html,body').animate({
        scrollTop: $("#museum").offset().top},
        'slow');
});
$("#btn3").click(function() {
    $('html,body').animate({
        scrollTop: $("#movie").offset().top},
        'slow', 'swing');
});
