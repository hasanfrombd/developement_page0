
document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
        e.target.children[0].classList.toggle('active');
    }
})



$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        window.setTimeout(function(){
            if($(this).scrollTop() > 120 ) {
                $('.navbar').addClass('slideOut');

                window.setTimeout(function(){
                    $('#navbar-brand-img').attr('src','https://codibu.com/images/new-logo-white.svg');
                    $('.navbar').addClass('navbar-dark bg-dark slideIn');
                    $('.top-bar-right-button').addClass('top-bar-right-button-dark');
                }, 500);

            }
            else {
                $('.navbar').removeClass('slideOut navbar-dark bg-dark slideIn');
                $('.top-bar-right-button').removeClass('top-bar-right-button-dark');
                $('#navbar-brand-img').attr('src','https://codibu.com/images/new-logo.svg');
            }
        }, 500);
    });

    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});


$(".login_dropdown ").on('click',function (e){

    var $target = $(e.target);
    if(!$target.hasClass('btn-close') && $target.parents('.btn-close').length == 0){
        e.stopPropagation();
    }
});
