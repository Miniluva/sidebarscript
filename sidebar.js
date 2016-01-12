var main = function() {
 var toggle = false;
 if (!toggle) {
  toggle = true;
  $('#sidetoggle').click(function() {
   $('#sidebar').animate({
     marginLeft: "0px"
   }, 200);
   $('#sidetoggle').animate({
     marginLeft: "285px"
   }, 200);
  });
 } else {
  toggle = false;
  $('#sidetoggle').click(function() {
   $('#sidebar').animate({
     marginLeft: "-285px"
   }, 200);
   $('#sidetoggle').animate({
     marginLeft: "0px"
   }, 200);
 });
 }
 };

$(document).ready(main);