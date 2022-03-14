// Hide navbar on scroll 
(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site-header');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

})();


// Search box appear on click 
document.querySelector('#nav_search').addEventListener('click',function(){
    document.querySelector('.search-box').style.display='block';    
});


// Hide element on outside click 
$(document).mouseup(function(e){
  var container = $("#search_box");

  // If the target of the click isn't the container
  if(!container.is(e.target) && container.has(e.target).length === 0){
      container.hide();
  }
});


// sliding navbar left

/* Set the width of the side navigation to 250px */
function leftOpenNav() {
    document.getElementById("mySidenav-left").style.width = "306px";
  };
  
  /* Set the width of the side navigation to 0 */
  function leftCloseNav() {
    document.getElementById("mySidenav-left").style.width = "0";  
};


  // sliding navbar right

/* Set the width of the side navigation to 250px */
function rightOpenNav() {
    document.getElementById("mySidenav-right").style.width = "225px";
  };
  
  /* Set the width of the side navigation to 0 */
  function rightCloseNav() {
    document.getElementById("mySidenav-right").style.width = "0";
  };


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


// Categories link down (mobile screen)
document.querySelector('#cat').addEventListener('click',function(){
    document.querySelector('.dis').classList.toggle('no-dis');    
});


// Owl carousel 
$('.owl-carousel').owlCarousel({
  margin: 10,
  nav: true,
  responsiveClass:true,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
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

// Select 2
$(document).ready(function() {
  $('.select2').select2();
});

            // Validation
                $('#registration').validate({
                    rules:{
                        name:{
                            required:true
                        },
                        pass:{
                            required:true
                        },
                        conpass:{
                            required:true,
                            equalTo:'#pass'
                        },
                        num:{
                            required:true,
                            number: true,
		                        minlength: 10,
		                        maxlength: 10
                        },
                        state:{
                            required:true
                        },
                        city:{
                            required:true
                        },
                        add:{
                            required:true
                        },
                        myType:{
                            required:true
                        },
                        qnty:{
                          required:true
                        },
                        msg:{
                          required:true
                        },
                        store:{
                          required:true
                        },
                        date:{
                          required:true
                        },
                        time:{
                          required:true
                        }
                    }
                })

// Validation
$('#regis').validate({
  rules:{
      name:{
          required:true
      },
      pass:{
          required:true
      },
      conpass:{
          required:true,
          equalTo:'#pass'
      },
      num:{
        required:true,
        number: true,
        minlength: 10,
        maxlength: 10
      },
      state:{
          required:true
      },
      city:{
          required:true
      },
      add:{
          required:true
      },
      myType:{
          required:true
      },
      qnty:{
        required:true
      },
      msg:{
        required:true
      }
  }
})

$('#login-form').validate({
  rules:{
      email:{
          required:true
      },
      pass:{
          required:true
      }
  }
})