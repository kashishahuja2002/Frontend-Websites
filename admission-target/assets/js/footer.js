$(document).ready(function(){
    $('#register_form').validate({
    rules: {
    full_name: {
    required: true,
    lettersonly: true
    },
    email: {
    required: true,
    email: true,
    remote:
    {
    url: 'http://admissiontarget.com/home/register_email_exists',
    type: "post",
    dataType: "json",
    data:
    {
    email: function(){ return $("#user_email").val(); }
    
    }
    }
    },
    password: {
    required: true,
    pwcheck: true,
    minlength: 8
    },
    confirm_password:{
    required : true,
    equalTo: "#password"
    }
    },
    messages: {
    email:
    {
    remote: 'Email Id already in use.'
    },
    confirm_password:{
    equalTo:" Enter Confirm Password Same as Password"
    }
    }
    });
    jQuery.validator.addMethod("pwcheck",
    function(value, element, param) {
    if (this.optional(element)) {
    return true;
    } else if (!/[A-Z]/.test(value)) {
    return false;
    } else if (!/[a-z]/.test(value)) {
    return false;
    } else if (!/[0-9]/.test(value)) {
    return false;
    }
    return true;
    },
    "Password Must Contain Atleast One Number and One Uppercase Letter");
    jQuery.validator.addMethod("lettersonly", function(value, element)
    {
    return this.optional(element) || /^[a-z ]+$/i.test(value);
    }, "Letters and spaces only please");
    
    });






    $('#applyNowForm').validate({
        rules: {
        apply_full_name: {
        required: true,
        },
        apply_course: {
        required: true,
        },
        apply_state: {
        required: true,
        },
        apply_phone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10
        },
        }
        })
        function checkImage(e, t, a) {
        var i = new Image();
        (i.onload = t), (i.onerror = a), (i.src = e);
        }
        (function (e) {
        e.fn.ud_modal = function (t) {
        var a = this,
        i = !0;
        a.on("shown.bs.modal", function (e) {
        i = !1;
        }),
        a.on("hidden.bs.modal", function (t) {
        "first" == e.cookie("modal_show")
        ? e.cookie("modal_show", "second", { path: "/", expires: 1 })
        : "second" == e.cookie("modal_show")
        ? e.cookie("modal_show", "third", { path: "/", expires: 1 })
        : "third" == e.cookie("modal_show") && e.cookie("modal_show", "no", { path: "/", expires: 1 }),
        (i = !0);
        }),
        null == e.cookie("modal_show") && e.cookie("modal_show", "first", { path: "/", expires: 1 }),
        "no" != e.cookie("modal_show") &&
        i &&
        setTimeout(function () {
        a.modal("show");
        }, t[e.cookie("modal_show") + "_time"]);
        };
        })(jQuery)
        $(document).ready(function () {
        
        $("#applynowModal").on("hidden.bs.modal", function () {
        var e = "http://103.47.54.105/uploads/popup_image/image.jpg";
        checkImage(
        e,
        function () {
        $("#imagePopup").find("img").attr("src", e),
        setTimeout(function () {
        $("#imagePopup").modal("show");
        }, 5e3);
        },
        function () {
        console.log("bad");
        }
        );
        });
        $("#applynowModal").ud_modal({ first_time: 4e3, second_time: 1e4, third_time: 2e4 }),
        $(window).scroll(function () {
        $(this).scrollTop() > 500 ? $(".scroll-top").removeClass("off").addClass("on") : $(".scroll-top").removeClass("on").addClass("off");
        }),
        $(".scroll-top").click(function (e) {
        return e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
        });
        })

        




        // Mobile Navigation
if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
    id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
    'class': '',
    'id': ''
    });
    $('body').append($mobile_nav);
    $('#menu_container').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
    $(document).on('click', '.menu-has-children i', function(e) {
    $(this).next().toggleClass('menu-item-active');
    $(this).nextAll('ul').eq(0).slideToggle();
    $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });
    $(document).on('click', '#mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
    $('#mobile-body-overly').toggle();
    });
    $(document).click(function(e) {
    var container = $("#mobile-nav, #mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
    if ($('body').hasClass('mobile-nav-active')) {
    $('body').removeClass('mobile-nav-active');
    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
    $('#mobile-body-overly').fadeOut();
    }
    }
    });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
    }
    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    if (target.length) {
    var top_space = 0;
    if ($('#header').length) {
    top_space = $('#header').outerHeight();
    if( ! $('#header').hasClass('header-fixed') ) {
    top_space = top_space - 20;
    }
    }
    $('html, body').animate({
    scrollTop: target.offset().top - top_space
    }, 1500, 'easeInOutExpo');
    if ($(this).parents('.nav-menu').length) {
    $('.nav-menu .menu-active').removeClass('menu-active');
    $(this).closest('li').addClass('menu-active');
    }
    if ($('body').hasClass('mobile-nav-active')) {
    $('body').removeClass('mobile-nav-active');
    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
    $('#mobile-body-overly').fadeOut();
    }
    return false;
    }
    }
    });





    