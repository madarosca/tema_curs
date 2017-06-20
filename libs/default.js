//save input values and show them in alert
function showValues() {
  var datepicker_in = $("#datepicker_in").val();
  var datepicker_out = $("#datepicker_out").val();
  var adults = $("#adults").val();
  var kids = $("#kids").val();
  return alert('Check in: ' + datepicker_in + ', ' + 'Check out: ' + datepicker_out + ', ' + 'For ' + adults + ' adults' + ' and ' + kids + ' kids');
}

//date-picker
var dateToday = new Date();
$(function() {
    $( "#datepicker_in" ).datepicker({
        minDate: dateToday
    }).datepicker("setDate", dateToday);
    $( "#datepicker_out" ).datepicker({
        minDate: dateToday
    }).datepicker("setDate", dateToday);
});

//google map
function myMap() {
  var mapProp = {
      center: new google.maps.LatLng(45.6646573, 25.6074455),
      zoom:12
  };
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(45.6646573, 25.6074455),
      icon: "assets/house.png",
      animation:google.maps.Animation.BOUNCE
  });
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  marker.setMap(map);
}
//end google map

$(document).ready(function() {
  //show-hide map
  $('#toggle_map').click(function() {
    if ($('#googleMap').is(':hidden')){
      $('#googleMap').css('visibility','visible');
      $('#googleMap').css('position','relative');
      $('#googleMap').slideDown('slow'); 
    } else{
      $('#googleMap').slideUp('slow');
    }
  });
  //show/hide scroll to top button
  $("#scroll_to_top").hide(); // hide on page load
  $(window).bind('scroll', function(){
      if($(this).scrollTop() > 800) { // show after 800 px of user scrolling
        $("#scroll_to_top").slideDown("slow");
      } else {
        $("#scroll_to_top").slideUp("slow");
      }
  });

  //scroll to top effect
  $("a[href='#header']").click(function(evt) {
    evt.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //tooltip
  $('#scroll_to_top').tooltip({animation: true}); 

  //animate header text
  $('.headline h1').animate({"margin-left": '0'}, 3000);
  $('.headline h3').animate({"margin-top": '0'}, 3000);
});
  

