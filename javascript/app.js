const locationmove = document.querySelector(".location");
const searchmove = document.querySelector(".search");

locationmove.addEventListener("mouseenter", (e) => {
    locationmove.style.transform = "translateY(5px)";
});

locationmove.addEventListener("mouseleave", (e) => {
    locationmove.style.transform = "translateY(0px)";
});

searchmove.addEventListener("mouseenter", (e) => {
    searchmove.style.transform = "translateY(5px)";
});

searchmove.addEventListener("mouseleave", (e) => {
    searchmove.style.transform = "translateY(0px)";
});

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
