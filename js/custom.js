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
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 95;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();

let info = document.getElementsByClassName("info");

for (let i = 0; i < info.length; i++) {
  info[i].addEventListener("click", function () {
    //Si la pantalla es pequeña, al clicar en la información se esconde para ver el vídeo
    if (screen.width < 960) {
      info[i].classList.add("d-none");
    }
  });
}

function restaurar() {
  for (let i = 0; i < info.length; i++) {
    info[i].classList.remove("d-none");
  }
}

/*SKILLS*/

/* FOOTER */

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
