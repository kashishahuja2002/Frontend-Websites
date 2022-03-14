// Modal pop-up
// When page loads 
$(document).ready(function(){
  $("#myModal").modal('show');
});



// *****Header*****
// Mobile navbar 
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

// Categories Dropdown (on hover)
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//Menu link down (mobile screen)
document.querySelector('#menu-drop').addEventListener('click',function(){
  document.querySelector('.dis').classList.toggle('no-dis');    
});

// Hi-name link down (mobile screen)
document.querySelector('#hi-name-sm').addEventListener('click',function(){
  document.querySelector('.see').classList.toggle('no-see');    
});

// *****Body******
// Owl carousel (Media)
$('#media').owlCarousel({
  margin: 10,
  nav: true,
  responsiveClass:true,
  navText:["<div class='nav-btn prev-slide mt-5'></div>","<div class='nav-btn next-slide mt-5'></div>"],
  responsive: {
      0: {
          nav: false,
          items: 1
      },
      600: {
          nav: false,
          items: 2
      },
      1000: {
          nav: true,
          items: 2
      }
  }
});

// Owl carousel (What's on menu)
$('#wom').owlCarousel({
  margin: 10,
  nav: true,
  responsiveClass:true,
  navText:["<div class='nav-btn prev-slide mt-5'> <i class='fa fa-chevron-left'></i> </div>","<div class='nav-btn next-slide mt-5'> <i class='fa fa-chevron-right'></i> </div>"],
  responsive: {
      0: {
          nav: false,
          items: 1
      },
      600: {
          nav: false,
          items: 2
      },
      1000: {
          nav: true,
          items: 3
      }
  }
});

// Owl carousel 
$('.owl-carousel').owlCarousel({
  margin: 10,
  nav: true,
  responsiveClass:true,
  navText:["<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>"],
  responsive: {
      0: {
          nav: false,
          items: 1
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

// Change active tab on link 
$(function(){
  var hash = window.location.hash;
  hash && $('#tabs a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});

// Dishes 
// Change quantity
function minus(id){
  input = document.querySelector('.'+id).innerHTML;
  document.querySelector('.'+id).innerHTML=parseFloat(input)-1;
  if((input-1)==0){
    document.querySelector('.'+id).closest('.bdr-btm').style.display='none';
  }
  
  money = $('.rt-'+id).attr('class').split(' ')[1];
  money2 = document.querySelector('.rt-'+id).innerHTML;
  document.querySelector('.rt-'+id).innerHTML=parseFloat(money2)-parseFloat(money);
}

function plus(id){
  input = document.querySelector('.'+id).innerHTML;
  document.querySelector('.'+id).innerHTML=parseFloat(input)+1;
  
  money = $('.rt-'+id).attr('class').split(' ')[1];
  money2 = document.querySelector('.rt-'+id).innerHTML;
  document.querySelector('.rt-'+id).innerHTML=parseFloat(money)+parseFloat(money2);
}


// // Prevent modal form from submit and open next modal
$('form').on("submit",function(e){
  e.preventDefault();
});







// Bottom-navbar 
// Categories 
document.querySelector('.botnav-cat h6').addEventListener('click',function(){
  document.querySelector('.botnav-cat').classList.toggle('active');
  document.querySelector('.botnav-cart').classList.remove('active');
});

document.querySelector('.botnav-cat .close').addEventListener('click',function(){
  document.querySelector('.botnav-cat').classList.remove('active');
});

// Cart 
document.querySelector('.botnav-cart h6').addEventListener('click',function(){
  document.querySelector('.botnav-cart').classList.toggle('active');
  document.querySelector('.botnav-cat').classList.remove('active');
});

document.querySelector('.botnav-cart .close').addEventListener('click',function(){
  document.querySelector('.botnav-cart').classList.remove('active');
});


