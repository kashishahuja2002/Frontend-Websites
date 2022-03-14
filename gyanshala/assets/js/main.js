$(document).ready(function () {

    //************* Index Page ************* 

    // Header 
    // Laptop 
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(500);
            $(this).find('.fa').toggleClass("fa-angle-down");
            $(this).find('.fa').toggleClass("fa-angle-up");
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(500)
            $(this).find('.fa').toggleClass("fa-angle-down");
            $(this).find('.fa').toggleClass("fa-angle-up");
    });

    // Mobile 
    document.querySelector('.m-open-icon').addEventListener('click',function(){
        $('.m-sidebar').addClass('m-opened-sidebar');
    });

    document.querySelector('.m-sidebar-toggle-button').addEventListener('click',function(){
        $('.m-sidebar').removeClass('m-opened-sidebar');
    });

    // ul drop-down 
    $(".drop-a-ul").click(function(){
        $(this).find('.fa').toggleClass("fa-angle-down");
        $(this).find('.fa').toggleClass("fa-angle-up");
        $(this).next('ul.children').slideToggle(350);
    });
    

    // Section (.owl-slider)
    // Owl carousel 
    $('.owl-carousel').owlCarousel({
        margin: 40,
        nav: true,
        responsiveClass:true,
        navText:["<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>"],
        responsive: {
            0: {
                nav: false,
                items: 1,
                margin: 10,
            },
            600: {
                nav: false,
                items: 3
            },
            1000: {
                nav: true,
                items: 4
            }
        }
    });



    // *************  Login Page  ************* 
    document.querySelector('.reset-password').addEventListener('click',function(){
        swal("Check your email", "We have sent you an email with your username and a link to reset your password.");
    }); 
    
});
