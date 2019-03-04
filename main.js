$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // Headroom makes navbar animation
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

    let title = "I'm a full stack developer passionate about working with companies that make a difference in the world. I can find simple and effective solutions for your project.";


     let spans = '<span>' + title.split('').join('</span><span>') + '</span>';
    $(spans).hide().appendTo('h2.title').each(function (i) {
        $(this).delay(30 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });

    // $("#arrow").click(function() {
    //     $("#contact").animate({width: "toggle"},"slow");
    //     $(this).hide();
    // });

    // let arrow = $("#arrow").clone(true);
    // $("#arrow").click(function() {
    //     arrow.prependTo(".hidden");
    //     arrow.css({"float": "left", "margin-top": "100px"})
    // })

    // $("#arrow").click(function toggleArrow() {
    //     let hideShow = $("#arrow");
    //     if (hideShow.style.display === "none") {
    //         hideShow.style.display = "block";
    //     } else {
    //         hideShow.style.display = "none";
    //     }
    // });
 });

 