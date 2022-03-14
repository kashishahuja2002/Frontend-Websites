
// Modal pop-up
// When page loads 
// $(document).ready(function(){
//     $("#applynowModal").modal('show');
//   });



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
});
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        //this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        // if (dropdownContent.style.display === "block") {
        // dropdownContent.style.display = "none"; 
        // } else {
        // dropdownContent.style.display = "block";
        // }
    });
}
function openNav() { 
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
} 



function closeModal() {
modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("applynowModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");
for (let closeBtn of spans) {
closeBtn.onclick = closeModal;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}   

function popup1(){
modal = $(this).parent().closest('.modal')
modal.style.display = "none"; 
}

//  Full page open and close
function openfp(id){
    document.querySelector('#'+id).classList.add('full-page-open');
    document.querySelector('body').style.overflow='hidden';
}

function closefp(id){
    document.querySelector('#'+id).classList.remove('full-page-open');
    document.querySelector('body').style.overflow='auto';
}

// Filters open and close (large screens)
function filter(id){
    document.querySelector('.'+id).classList.toggle('no-dis');
    $("."+id+"-down").toggle();
    $("."+id+"-up").toggle();
}


$(document).ready(function() {

    // Equal height columns 

    // Select and loop the container element of the elements you want to equalise
  
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.level_card .col-md-4 .card', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.level_card .col-md-4 .card',this).height(highestBox);



      // Equal height columns 
    
    // Select and loop the container element of the elements you want to equalise
  
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.interest_card .col-md-4 .card', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.interest_card .col-md-4 .card',this).height(highestBox);



      // Equal height columns 
    
    // Select and loop the container element of the elements you want to equalise
  
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.top_exams .jee_mains', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.top_exams .jee_mains',this).height(highestBox);




      // Filter hide on reaching footer (mobile screens)
    var $window = $(window);
    var div2 = $('#mob-fil');
    var div1 = $('#main');
    var div1_top = div1.offset().top;
    var div1_height = div1.height();
    // var div1_bottom = div1_top + div1_height;
    var div1_bottom = 3800;
    console.log(div1_bottom);
    $window.on('scroll', function() {
      var scrollTop = document.documentElement.scrollTop;
      var viewport_height = $window.height();
      var scrollTop_bottom = scrollTop + viewport_height;
      div2.toggleClass('show', scrollTop > div1_top && (scrollTop + window.innerHeight) < div1_bottom);
    });
    
  });



    




