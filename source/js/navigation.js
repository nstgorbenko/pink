var mainNav = document.querySelector(".main-navigation");
var mainNavButton = document.querySelector(".main-navigation__button");

mainNav.classList.remove("main-navigation--nojs");

mainNavButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (mainNav.classList.contains("main-navigation--closed")) {
    mainNav.classList.remove("main-navigation--closed");
    mainNav.classList.add("main-navigation--opened");
  } else {
    mainNav.classList.remove("main-navigation--opened")
    mainNav.classList.add("main-navigation--closed");
  }
});
