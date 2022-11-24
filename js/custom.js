function desplegar() {
  let nav = document.getElementById("open");
  if (nav.classList.contains("h-100")) {
    nav.classList.remove("h-100");
  } else {
    nav.classList.add("h-100");
  }
}
