// *****Header*****
// Mobile navbar 
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}
  
/* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// *****Body***** 
// Image carousel 
$(function(){
  $('.carousel').carousel({
      interval:3000,
      pause:false,
      wrap:true
  });
});

// Validation
$('#signup-form').validate({
  rules:{
      name:{
          required:true
      },
      email:{
          required:true
      },
      pass:{
          required:true
      },
      conpass:{
        required:true,
        equalTo:'#pass'
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
