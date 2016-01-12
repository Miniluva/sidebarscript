var main = function() {
 $('#sidetoggle').click(function() {
   $('#sidebar').animate({
     marginLeft: "0px"
   }, 200);
   $('#sidetoggle').animate({
     marginLeft: "285px"
   }, 200);
 });


 $('#sidetoggle').click(function() {
   $('#sidebar').animate({
     marginLeft: "-285px"
   }, 200);
   $('#sidetoggle').animate({
     marginLeft: "0px"
   }, 200);
 });
};

$(document).ready(main);