var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var btnrvsp = document.getElementsByClassName("btnrvsp");

for (var i = 0; i < btnrvsp.length; i++) {
  btnrvsp[i].addEventListener("click", animateButton, false);
}
