$(document).ready(function() {
    $("#menu_toggle").click(function() {
        $(".nav-links").show();
    });

    $("#menu_close").click(function() {
        $("nav").hide();
        $(".overlay").show();
    });
});