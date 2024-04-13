
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
});

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
                    $('.action_button top-bar-right-button').addClass('top-bar-right-button-dark');

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

/*=========START LOG IN SCRIPT==========*/

$('.sweet_confirm_modal').click(function () {
    let route = $(this).data('route');
    let title = $(this).data('title');

    Swal.fire({
        title: `<span style='font-family:"poppins",sans-serif;font-size: 1.7rem;'>Continue with ${title}?</span>`,
        html: `<span style="font-size: 14px;line-height: 21px;font-weight: 600;">Yes, I certify that I have read and accept the<br> <a class="info" style="cursor: pointer; color:#0774f8;" onclick = "openPopUp('Privacy-Policy-Sign')" >Privacy-Policy</a>, <a class="info" style="cursor: pointer; color:#0774f8;" onclick = "openPopUp('Professional-Services-Agreement')">Professional Services Agreement</a> & <a class="info" style="cursor: pointer; color:#0774f8;" onclick = "openPopUp('User-Agreement-Sign')">User Agreement.</a></span>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        customClass: {
            confirmButton: 'bg-sky hover-animation',
        }
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = route;
        }
    })
})

// input text validation
document.querySelectorAll('input[type="text"]').forEach(item => {
    item.addEventListener('input', function () {
        let inputText = item.value
        if (inputText.length > 2) {
            item.nextElementSibling.classList.add('active')
        } else {
            item.nextElementSibling.classList.remove('active')
        }
    })
})

// password eye show hide
$('.pass-eye').click(function () {
    $('.pass-eye').addClass('active')
    $(this).removeClass('active')
    if ($('.eye-on').hasClass('active')) {
        $(this).siblings('input').attr('type', 'text');
    } else {
        $(this).siblings('input').attr('type', 'password')
    }
})
$('.pass-eye-2').click(function () {
    $('.pass-eye-2').addClass('active')
    $(this).removeClass('active')
    if ($('.eye-on').hasClass('active')) {
        $(this).siblings('input').attr('type', 'text');
    } else {
        $(this).siblings('input').attr('type', 'password')
    }
})

// email validation
let emailInput = document.querySelector('input[type="email"]');
emailInput.addEventListener('input', function () {
    let email = emailInput.value;
    if (isEmailValid(email)) {
        emailInput.nextElementSibling.classList.add('active')
    } else {
        emailInput.nextElementSibling.classList.remove('active')
    }
})

function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.querySelectorAll('.control-form').forEach(item => {
    item.addEventListener('focus', function () {
        item.parentNode.classList.add('active-gradient')
    })
    item.addEventListener('blur', function () {
        item.parentNode.classList.remove('active-gradient')
    })
})

/*=========END LOG IN SCRIPT=========*/

function openPopUp(name) {
    let url = `${APP_URL}/${name}`;//"{{route('Privacy-Policy-Sign')}}";
    let height = 600;
    let width = 900;
    var left = ( screen.width - width ) / 2;
    var top = ( screen.height - height ) / 2;
    var newWindow = window.open( url, "center window", 'resizable = yes, width=' + width + ', height=' + height + ', top='+ top + ', left=' + left);
 }
