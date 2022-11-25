let nav = document.getElementById("open");
/*NAV*/
function desplegar() {
  if (nav.classList.contains("h-100")) {
    nav.classList.remove("h-100");
  } else {
    nav.classList.add("h-100");
  }
}


/*ANIMATION SCROLL DOWN*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 95;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();
