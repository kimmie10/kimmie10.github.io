/*window.onscroll = function(){myFunction()};

let nav = $("nav")
let sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
}*/

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});