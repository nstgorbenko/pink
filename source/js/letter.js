var form = document.querySelector(".letter");
var requiredList = document.querySelectorAll(".letter__item-field[required]");

var name = document.querySelector("[name=name]");
var surname = document.querySelector("[name=surname]");
var email = document.querySelector("[name=email]");

var popupError = document.querySelector(".letter__popup--error");
var closePopupError = document.querySelector(".letter__popup-button--error");

var popupSent = document.querySelector(".letter__popup--sent");
var closePopupSent = document.querySelector(".letter__popup-button--sent");

form.addEventListener("submit", function(evt){
  if (name.value !== "" && surname.value !== "" && email.value !== "") {
    popupSent.classList.add("letter__popup--show");
    } else {
      evt.preventDefault();
      popupError.classList.add("letter__popup--show");

      for (var i = 0; i < requiredList.length; i++) {
        var requiredInput = requiredList[i];
        requiredInput.classList.add("letter__item-field--required");
      }
    }
});

closePopupError.addEventListener("click", function(evt){
  evt.preventDefault();
  popupError.classList.remove("letter__popup--show");
});

closePopupSent.addEventListener("click", function(evt){
  evt.preventDefault();
  popupSent.classList.remove("letter__popup--show");
});
