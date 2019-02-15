$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
 $(".navbar-burger").headroom();
 $(".navbar").headroom();

    $(".navbar, .navbar-burger").headroom({
        "offset": 150,
        "tolerance": 3,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });

    // to destroy
    //  $("#header").headroom("destroy");
 });