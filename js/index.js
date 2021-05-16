$(document).ready(function() {
  
  // get current URL path and assign 'active' class
  var pathname = window.location.pathname;
  $('.classynav > ul > li > a[href="'+pathname+'"]').addClass('active');
});