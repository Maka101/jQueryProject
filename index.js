$("h1").addClass("big-title margin-50");

$("button").html("<em> Don't Click On </em>")

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "green");
});

$(document).keypress(function(event) {
    $("h1") .text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "Black");
});

$("button").on("click", function() {
    $("h1").slideToggle();
});