
// hide the header on scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.querySelector(".header-menu.position-fixed");

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-130px";
  }

  prevScrollpos = currentScrollPos;
}
