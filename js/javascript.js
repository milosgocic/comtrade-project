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

$(".js--wp1").waypoint(function(direction) {
    $(".js--wp1").addClass("animated pulse");
}, {
 offset: "60%;"
});
$(".js--wp2").waypoint(function(direction) {
    $(".js--wp2").addClass("animated fadeInLeft");
}, {
 offset: "70%;"
});
$(".js--wp3").waypoint(function(direction) {
    $(".js--wp3").addClass("animated fadeInUp");
}, {
 offset: "65%;"
});
$(".js--wp4").waypoint(function(direction) {
    $(".js--wp4").addClass("animated fadeInRight");
}, {
 offset: "60%;"
});
$(".js--wp5").waypoint(function(direction) {
    $(".js--wp5").addClass("animated pulse");
}, {
 offset: "60%;"
});
$(".js--wp6").waypoint(function(direction) {
    $(".js--wp6").addClass("animated fadeInRight");
}, {
 offset: "70%;"
});
$(".js--wp7").waypoint(function(direction) {
    $(".js--wp7").addClass("animated pulse");
}, {
 offset: "60%;"
});
$(".js--wp8").waypoint(function(direction) {
    $(".js--wp8").addClass("animated pulse");
}, {
 offset: "60%;"
});
$(".js--wp9").waypoint(function(direction) {
    $(".js--wp9").addClass("animated shake");
}, {
 offset: "80%;"
});
$(".js--wp10").waypoint(function(direction) {
    $(".js--wp10").addClass("animated shake");
}, {
 offset: "80%;"
});
$(".js--wp11").waypoint(function(direction) {
    $(".js--wp11").addClass("animated fadeInUp");
}, {
 offset: "80%;"
});
$(".js--wp12").waypoint(function(direction) {
    $(".js--wp12").addClass("animated fadeInDown");
}, {
 offset: "75%;"
});
$(".js--wp13").waypoint(function(direction) {
    $(".js--wp13").addClass("animated fadeInUp");
}, {
 offset: "70%;"
});
$(".js--wp14").waypoint(function(direction) {
    $(".js--wp14").addClass("animated fadeInDown");
}, {
 offset: "65%;"
});
$(".js--wp15").waypoint(function(direction) {
    $(".js--wp15").addClass("animated bounceInLeft");
}, {
 offset: "80%;"
});
$(".js--wp16").waypoint(function(direction) {
    $(".js--wp16").addClass("animated fadeInLeft");
}, {
 offset: "75%;"
});
$(".js--wp17").waypoint(function(direction) {
    $(".js--wp17").addClass("animated zoomInLeft");
}, {
 offset: "70%;"
});
$(".js--wp18").waypoint(function(direction) {
    $(".js--wp18").addClass("animated rollIn");
}, {
 offset: "65%;"
});