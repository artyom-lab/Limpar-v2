$(function() {

  var input = document.querySelector("#phone");
  var iti = window.intlTelInput(input, {
    // separateDialCode:true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
  });
  // store the instance variable so we can access it in the console e.g. window.iti.getNumber()
  window.iti = iti;

});

