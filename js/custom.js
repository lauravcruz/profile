/*NAV*/
let nav = document.getElementById("open");
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
    //Con getBoundingClientRect recogemos el tamaño del elemento y su posición relativa respecto a la ventana
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

/*EXPERIENCIA*/
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

/* FOOTER */

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

let icons = document.getElementsByClassName("externalPage");

for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener(
    "click",
    //Cuando pulse el href, saldrá directamente. Con event.preventDefault podemos cancelarlo y lanzarle un aviso
    function (event) {
      event.preventDefault();
      if (confirm("Está a punto de acceder a una página externa")) {
        window.location = this.href;
      }
    },
    false
  );
}

/* FORMULARIO */
let input = document.querySelectorAll("input");
let email = document.querySelector("input[type = email]");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", function () {
    input[i].classList.add("focus");
  });
  input[i].addEventListener("blur", () => input[i].classList.remove("focus"));
}

email.addEventListener("change", function () {
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }
});